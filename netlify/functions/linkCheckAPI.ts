import { extractLinkData, isFakeLink } from "../../linkCheck";
import { Handler } from "@netlify/functions";

const handler: Handler = async (event, context) => {
  const aTagFromRequest = JSON.parse(event.body).aTag;
  // console.log({ aTagFromRequest });
  const linkDataOfTag = extractLinkData(aTagFromRequest);
  // console.log({ linkDataOfTag });

  try {
    const linkIsFake = isFakeLink(linkDataOfTag);
    console.log({ linkIsFake });

    return {
      statusCode: 200,
      body: JSON.stringify({ linkIsFake: linkIsFake }),
    };
  } catch (error) {
    console.log("error", error);
    return {
      statusCode: 200,
      body: JSON.stringify({ error: "formatingError" }),
    };
  }
};

export { handler };
