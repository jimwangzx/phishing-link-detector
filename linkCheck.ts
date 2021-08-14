import { DOMParser, parseHTML } from "linkedom";
// mozilla domain parsing library
import * as psl from "psl";

interface linkData {
  displayText: string;
  url: string;
}

function parseLinkTag(atag: string): HTMLElement {
  // const htmlDocument: HTMLDocument = new DOMParser().parseFromString(
  //   atag,
  //   "text/html"
  // );
  const { document } = parseHTML(atag);
  // console.log({ document });

  const htmlDocument: HTMLDocument = document;

  // get the actual element
  const htmlEl: HTMLElement = htmlDocument.getElementsByTagName("a")[0];
  // console.log({ htmlEl });
  return htmlEl;
}

/*
Extracts displayed text and actual url
*/
export function extractLinkData(atag: string): linkData {
  const htmlEl = parseLinkTag(atag.trim());
  // get inner content (display text)
  const displayText = htmlEl.textContent.trim().replace(/ /g, "");
  // console.log({ displayText });

  let href = "";

  // get href (url)
  try {
    href = htmlEl.getAttribute("href");
  } catch {
    if (!href) {
      console.error("a tag has no href attribute");
      href = null;
      throw new Error("formatError");
    }
  }
  // console.log({ href });

  return { displayText: displayText, url: href };
}

// extract hostname without protocol (http: ...) or path
// maybe regex could do this faster
function extractDomainName(url: string): string {
  let urlParsed: URL;
  try {
    urlParsed = new URL(url);
  } catch (err) {
    console.info("string can't be parsed to url", err);
    throw new Error("string can't be parsed to url: " + err);
  }

  const hostname = urlParsed.hostname;
  // console.log({ hostname })

  const parsedUrl = psl.parse(hostname);
  const domain = parsedUrl.domain;
  // console.log({ domain })

  if (!domain) {
    console.error("domain can't be parsed");
    throw new Error("domain can't be parsed");
  }
  // console.log({ domain });
  return domain;
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

  let state = false;
  // regex from https://regexr.com/2rj36
  // eslint-disable-next-line
  const looseURLCheck =
    /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  const looseURLRegex = new RegExp(looseURLCheck);

  // cleanup
  string = string.trim().replace(" ", "");

  if (string.match(looseURLRegex)) {
    // console.log(string + " looks like a Link");
    state = true;
  } else {
    // console.log(string + " doesn't look like a Link");
    state = false;
  }

  return state;
}

function normalizeDisplayTextURL(displayTextURL: string): string {
  // NOTE: in order to be parsed by new URL(), url needs a protocol (http://)
  // However some displayText links might not have one. Therefore we add it.

  // contains a url network protocol ?
  const regexUrlProtocol = /^(?<proto>\w+):/g;
  const found = displayTextURL.match(regexUrlProtocol);
  // console.log(found);
  if (!found) {
    // no protocol found, for example www.google.com or google.com
    // add generic http:// protocol for that new URL() can parse it
    displayTextURL = "http://" + displayTextURL;
  }

  return displayTextURL;
}

function getDomainNamefromDisplayedLink(displayText: string): string | null {
  if (isURLlike(displayText) === false) {
    // if the displayText doesn't look like a link
    return null;
  }

  try {
    // problem is if displayText has no http in front ... add it automatically? What if only text?
    // if looks like link, add http, otherwise ignore/return null.

    // add protocol.
    const normalizedDisplayTextURL = normalizeDisplayTextURL(displayText);

    // we try ro parse it into a url
    let displayTextURL = extractDomainName(normalizedDisplayTextURL);
    // console.log({ displayTextURL })
    return displayTextURL;
  } catch (err) {
    // if it doesn't work, we don't have to worry since it's not a valid url
    console.info("couldn't parse displayText into valid url", err);
    return null;
  }
}

// check whether link is missleading
export function isFakeLink(linkData: linkData): boolean {
  if (!linkData.url) {
    console.error("no url present to check");
    throw new Error("no url provided");
  }

  const urlExtracted = linkData.url;
  const linkURLdomainName = extractDomainName(urlExtracted);

  const displayText = linkData.displayText;
  // console.log("extract", displayText);

  const displayTextURL = getDomainNamefromDisplayedLink(displayText);
  if (!displayTextURL) {
    // console.log({displayTextURL});
    console.info("displayTextURL doesn't contain a link");
    return false;
  }
  console.log({ linkURLdomainName });
  console.log({ displayTextURL });

  if (displayTextURL == linkURLdomainName) {
    // console.log("good");
    return false;
  }
  if (displayTextURL != linkURLdomainName) {
    // console.log("bad");
    return true;
  }

  // compare displayed with actual link

  // let regex = "^(((?!-))(xn--|_{1,1})?[a-z0-9-]{0,61}[a-z0-9]{1,1}\.)*(xn--)?([a-z0-9][a-z0-9\-]{0,60}|[a-z0-9-]{1,30}\.[a-z]{2,})$"
}
