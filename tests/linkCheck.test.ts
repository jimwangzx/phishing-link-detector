// import ".netlify/functions-serve/linkCheck/linkCheck.js";
import { extractLinkData, isFakeLink } from "../linkCheck";

// BUG: Doesnt work with .ts file
describe("Test if linkCheck works correctly", () => {
  test("If fake url return false", () => {
    const displayTextTest = "https://www.subomain.luxtrust.lu/somePath.";
    const urlTest = "https://www.subomain.luxtrust.com.fr/watch?v=ClkQA2Lb_iE";

    const linkDataOfTagExample = extractLinkData(
      '<a href="' + urlTest + '">' + displayTextTest + "</a>"
    );

    const linkIsFake = isFakeLink(linkDataOfTagExample);

    expect(linkIsFake).toBe(true);
  });

  test("If real url return true", () => {
    // MAIN TESTING
    const displayTextTest = "https://www.subomain.luxtrust.lu/somePath.";
    const urlTest = "https://www.subomain.luxtrust.lu/watch?v=ClkQA2Lb_iE";

    const linkDataOfTagExample = extractLinkData(
      '<a href="' + urlTest + '">' + displayTextTest + "</a>"
    );

    const linkIsFake = isFakeLink(linkDataOfTagExample);

    expect(linkIsFake).toBe(false);
  });

  test("should throw", () => {
    const displayTextTest = "http://www.goog l-e.co.uk/?fiwefjoi";
    const urlTest = "http://www.googl- e.co.uk/?fiwefjoi";

    const linkDataOfTagExample = extractLinkData(
      '<a href="' + urlTest + '">' + displayTextTest + "</a>"
    );

    // const linkIsFake = isFakeLink(linkDataOfTagExample);

    expect(function () {
      // Code block that should throw error must be wrapped in anonymous function
      isFakeLink(linkDataOfTagExample);
    }).toThrow(Error);
  });

  test("should remove whitespace from displayed text and pass", () => {
    const displayTextTest = "http://www.goog l-e.co.uk/?fiwefjoi";
    const urlTest = "http://www.googl-e.co.uk/?fiwefjoi";

    const linkDataOfTagExample = extractLinkData(
      '<a href="' + urlTest + '">' + displayTextTest + "</a>"
    );

    const linkIsFake = isFakeLink(linkDataOfTagExample);

    expect(linkIsFake).toBe(false);
  });

  test("should remove whitespace from displayed text and fail", () => {
    const displayTextTest = "http://www.goog l-e.com/?fiwefjoi";
    const urlTest = "http://www.googl-e.co.uk/?fiwefjoi";

    const linkDataOfTagExample = extractLinkData(
      '<a href="' + urlTest + '">' + displayTextTest + "</a>"
    );

    const linkIsFake = isFakeLink(linkDataOfTagExample);

    expect(linkIsFake).toBe(true);
  });

  test.skip("should correctly parse display text and return true", () => {
    // TODO:
    const displayTextTest =
      "www://rekey.luxtοken.lu/en/../management/reactivation";
    const urlTest = "http://www.fake-link.com.fr/?fiwefjoi";

    const linkDataOfTagExample = extractLinkData(
      '<a href="' + urlTest + '">' + displayTextTest + "</a>"
    );

    const linkIsFake = isFakeLink(linkDataOfTagExample);

    expect(linkIsFake).toBe(true);
  });
});
