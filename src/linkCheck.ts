import "./styles.css"

import * as psl from "psl"

interface linkData {
  displayText: string
  url: string
}

function parseLinkTag(atag: string): HTMLElement {
  // const htmlString = "<a href='#'>Link</a>";
  const htmlDocument: HTMLDocument = new DOMParser().parseFromString(
    atag,
    "text/html"
  )

  // get the actual element
  const htmlEl: HTMLElement = htmlDocument.body.firstChild
  // console.log({ htmlEl });
  return htmlEl
}

/*
Extracts displayed text and actual url
*/
function extractLinkData(atag: string): linkData {
  const htmlEl = parseLinkTag(atag)
  // get inner content (display text)
  const displayText = htmlEl.innerHTML
  // console.log({ displayText });

  // get href (url)
  let href = htmlEl.getAttribute("href")
  if (!href) {
    console.error("a tag has no href attribute")
    href = null
  }
  // console.log({ href });

  return { displayText: displayText, url: href }
}

// extract hostname without protocol (http: ...) or path
// maybe regex could do this faster
function extractDomainName(url: string): string {
  let urlParsed: URL
  try {
    urlParsed = new URL(url)
  } catch (err) {
    console.info("string can't be parsed to url", err)
    throw new Error("string can't be parsed to url: " + err)
  }

  const hostname = urlParsed.hostname
  // console.log({ hostname })

  const parsedUrl = psl.parse(hostname)
  const domain = parsedUrl.domain
  // console.log({ domain })

  if (!domain) {
    console.error("domain can't be parsed")
    throw new Error("domain can't be parsed")
  }
  // console.log({ domain });
  return domain
}

/*
Checks whether input losely appears to look like a link
Used to check whether the <a> displayed text </a> is similar to a link

Why Loose check?
Because phishers could add small errors the user doesn't notice
but which might fool the system
*/
function isURLlike(string: string): boolean {
  // this needs to check also text that only appears like a link, like first transform escaped characrters, trim the input and delete whitespaces

  let state = false
  // regex from https://regexr.com/2rj36
  // eslint-disable-next-line
  const looseURLCheck = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
  const looseURLRegex = new RegExp(looseURLCheck)

  // cleanup
  string = string.trim().replace(" ", "")

  if (string.match(looseURLRegex)) {
    console.log(string + " looks like a Link")
    state = true
  } else {
    console.log(string + " doesn't look like a Link")
    state = false
  }

  return state
}

function getDomainNamefromDisplayedLink(displayText: string): string {
  if (isURLlike(displayText)) {
    let displayTextURL = ""

    try {
      // we try ro parse it into a url
      displayTextURL = extractDomainName(displayText)
      // console.log({ displayTextURL })
      return displayTextURL
    } catch (err) {
      // if it doesn't work, we don't have to worry since it's not a valid url
      console.info("couldn't parse displayText into valid url", err)
      return null
    }
  }
}

// check whether link is missleading
function isFakeLink(linkData: linkData): boolean {
  if (!linkData.url) {
    console.error("no url present to check")
    return false
  }

  const urlExtracted = linkData.url
  const linkURLdomainName = extractDomainName(urlExtracted)

  const displayText = linkData.displayText

  const displayTextURL = getDomainNamefromDisplayedLink(displayText)
  if (!displayTextURL) {
    return false
  }
  console.log({ displayTextURL })

  if (displayTextURL === linkURLdomainName) {
    console.log("good")
    return false
  } else {
    console.log("bad")
    return true
  }
  // compare displayed with actual link

  // let regex = "^(((?!-))(xn--|_{1,1})?[a-z0-9-]{0,61}[a-z0-9]{1,1}\.)*(xn--)?([a-z0-9][a-z0-9\-]{0,60}|[a-z0-9-]{1,30}\.[a-z]{2,})$"
}

// MAIN TESTING
const displayTextTest = "https://www.subomain.luxtrust.lu/somePath."
const urlTest = "https://www.subomain.luxtrust.co.uk/watch?v=ClkQA2Lb_iE"

const linkDataOfTag = extractLinkData(
  '<a href="' + urlTest + '">' + displayTextTest + "</a>"
)
// console.log({ linkData });

// isURLlike("http://www.goog l-e.co.uk/?fiwefjoi")
console.log("Link is pretentious? ", isFakeLink(linkDataOfTag))
