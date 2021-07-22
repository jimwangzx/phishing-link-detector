// test yourself
import axios from "axios"

const input = document.getElementsByTagName("input")[0]

input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault()
    // Trigger the button element with a click
    alert()
  }
})

//
let tableRows = document.getElementsByClassName("tableData")[0]
console.log(tableRows)

const tableData = [
  {
    displayLink: "www.luxtrust.lu",
    linkData: `<!--  &lt; for > to display html code (instead of rendering it by browser) -->
    &lt;a href="http://luxtrust.lu/register"> http://luxtrust.lu/ &lt;/a>`,
    actualLink: "http://proxy.luxtrust.lu/register",
    assessment: true
  },
  {
    displayLink: "http://rekey.luxtοken.lu/en/../management/reactivation",
    linkData: `<!--  &lt; for > to display html code (instead of rendering it by browser) -->
    &lt;a href="https://makaria.de/weps"> http://rekey.luxtοken.lu/en/../management/reactivation. &lt;/a>`,
    actualLink: "https://makaria.de/weps",
    assessment: false
  },
  {
    displayLink: "http://luxtrust.lu/en/account",
    linkData: `<!--  &lt; for > to display html code (instead of rendering it by browser) -->
    &lt;a href="https://phishingsite.com.fr/"> http://rekey.luxtοken.lu/en/../management/reactivation. &lt;/a>`,
    actualLink: "https://phishingsite.com.fr/",
    assessment: false
  },
  {
    displayLink: "http://rekey.luxtοken.lu/en/../management/reactivation.",
    linkData: `<!--  &lt; for > to display html code (instead of rendering it by browser) -->
    &lt;a href="https://makaria.de/weps"> http://rekey.luxtοken.lu/en/../management/reactivation. &lt;/a>`,
    actualLink: "https://makaria.de/weps",
    assessment: false
  }
]

let tableRowsGenerated = ""
// populate table
let animationDelay = 1000

tableData.forEach(function (element) {
  let tds = ""

  for (const data in element) {
    let tdData = element[data]
    if (data === "linkData") {
      tdData = `<!--  &lt; for > to display html code (instead of rendering it by browser) -->
      &lt;a href="${element.actualLink}"> ${element.displayLink} &lt;/a>`
    }
    tds += `<td class='${data}'>${tdData}</td>`
  }

  let classAdded = ""
  if (element["assessment"] === false) {
    classAdded = "red"
  } else if (element["assessment"] === true) {
    classAdded = "green"
  }
  tableRowsGenerated += `<tr style='animation-delay:${animationDelay}ms' class=${classAdded}>${tds}</tr>`
  animationDelay += 250
})

tableRows.outerHTML = tableRowsGenerated

// tableRows.outerHTML = `<tr>
// <td>
//   <!--  &lt; for > to display html code (instead of rendering it by browser) -->
//   &lt;a href="actualLink"> displayTextTest displayTextTest
//   displayTextTest displayTextTest displayTextTest &lt;/a>
// </td>
// <td>test.com</td>
// <td>www.test.com</td>
// <td>Yes</td>
// </tr>`
