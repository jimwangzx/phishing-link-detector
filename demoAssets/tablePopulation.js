import "./styles.css";

// test yourself
import axios from "axios";

const input = document.getElementsByTagName("input")[0];

function wrongInputMessage() {
  alert(
    `\nYou need to provide a proper "a tag" in HTML code as an input. \n\n   Example Input:\n   <a href="http://proxy.luxtrust.lu/register"> www.luxtrust.lu </a>`
  );
}

input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();

    const inputValue = input.value;

    // validation: check if proper a tag is present in input
    const inputAsHTMLel = new DOMParser().parseFromString(
      inputValue,
      "text/xml"
    );
    if (!inputAsHTMLel) {
      wrongInputMessage();
      return;
    }

    const getALink = inputAsHTMLel.getElementsByTagName("a")[0];
    if (!getALink) {
      wrongInputMessage();
      return;
    }

    axios({
      method: "post",
      url: ".netlify/functions/linkCheckAPI",
      data: JSON.stringify({ aTag: inputValue }),
    })
      .then(function (res) {
        console.log("data", res.data);
        if (res.data.error === "formatingError") {
          alert(
            "\n Seems like your input a tag is wrongly formated. \n\n Did you provide a protocol within the href attribute (http://...) ?"
          );
          return;
        }

        const linkIsFake = res.data.linkIsFake;
        console.log("linkIsFake", linkIsFake);

        if (linkIsFake == true) {
          alert("\bNOT\b Authentic");
        } else if (linkIsFake == false) {
          alert("Authentic");
        } else {
          alert("undefined error");
        }
      })
      .catch(function (error) {
        if (error.response) {
          console.log("error data", error.response.data);
          console.log("error status", error.response.status);
        }
        return;
      });
  }
});

//
let tableRows = document.getElementsByClassName("tableData")[0];
console.log(tableRows);

const tableData = [
  {
    displayLink: "www.luxtrust.lu",
    actualLink: "http://proxy.luxtrust.lu/register",
    assessment: true,
  },
  {
    displayLink: "https://luxtrust.lu/en/account",
    actualLink: "https://luxtrust.lu.es/account",
    assessment: false,
  },
  {
    displayLink: "https://login.snet.lu/en/management/reactivateAccount",
    actualLink: "https://login.snet.lu.pw/en/management/reactivateAccount",
    assessment: false,
  },
  {
    displayLink: "http:// luxtrust.lu/en/ account",
    actualLink: "http://phishingsite.com.fr/",
    assessment: false,
  },
  {
    displayLink: "http://rekey.luxtοken.lu/en/../management/reactivation.",
    actualLink: "https://makaria.de/weps",
    assessment: false,
  },
  // spam emails use frequently Quoted-Printable to hide their content
  // however it is on the above spam filtering system to decode this
  // for example with https://mothereff.in/quoted-printable
  // not the individual function to handle this, therefore commenteted this
  // {
  //   displayLink:
  //     "original un-decoded from email message source http://rekey.luxt=CE=BFken.lu=/en/../management/reactivation.",
  //   actualLink: "https://makaria.de/weps",
  //   assessment: false,
  // },
];

let tableRowsGenerated = "";
// populate table
let animationDelay = 1000;

tableData.forEach(function (element) {
  let tds = "";

  // generate linkData
  element[
    "linkData"
  ] = `<!--  &lt; for > to display html code (instead of rendering it by browser) -->
      &lt;a href="${element.actualLink}"> ${element.displayLink} &lt;/a>`;

  for (const data in element) {
    let tdData = element[data];
    // if (data === "linkData") {
    //   tdData = `<!--  &lt; for > to display html code (instead of rendering it by browser) -->
    //   &lt;a href="${element.actualLink}"> ${element.displayLink} &lt;/a>`;
    // }
    tds += `<td class='${data}'>${tdData}</td>`;
  }

  let classAdded = "";
  if (element["assessment"] === false) {
    classAdded = "red";
  } else if (element["assessment"] === true) {
    classAdded = "green";
  }
  tableRowsGenerated += `<tr style='animation-delay:${animationDelay}ms' class=${classAdded}>${tds}</tr>`;
  animationDelay += 250;
});

tableRows.outerHTML = tableRowsGenerated;

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
