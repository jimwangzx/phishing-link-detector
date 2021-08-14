# Phishing Link Detector Proof-of-Concept

This is a quick proof-of-concept for demonstratation purposes.

## Problem Scope

There's a recent increase of higher quality phishing emails on the web. These new emails appear very similar to the service they try to impersonate and lead even fairly knowledgable users to engage with "fake links" that might endanger their login credentials.

**Fake Links** are pretending to point toward trusted sites (http://netflix.com/renew) however are actually leading to phishing websites (https://netflix.com.xs/reactivate). The attackers try to mask the true destination by setting the displayed text of the `<a>` tag to an authentic link, while the real link (`<a href=>`) points to a fake entity.
As these fake links are reasonably well masked, and attackers often choose href links very similiar to the impersonated url, even careful and informed users (for example: hover over links before opening them) might falll pry to them and have their login data stolen.

## Proposed Solution

The algorithm analyses a link's internal structure to assess whether the displayed link text is authenthic or not. By looping the function over the extracted links in an email, this method can be used to filter out the previously described "Fake Link" phishing technique.

Also the method doesn’t require any outside connectivity (which is great for scalability) and works across a wide spectrum of cases, including challenging multi-part tlds (com.fr, co.uk), varying subdomains as well as officially ICANN-approved tlds extensions.

## Demonstration

Find below a testing showcase. You can also test your own link data on it.

https://phishing-link-detector.netlify.app

## How to Build/Run

- netlify cli is required to run serverless backend functions

```bash
# install all deps
yarn
# add netlify-cli
yarn add netlify-cli
# test
yarn jest
# then run
netlify dev
# open on localhost:8888
```

## Note

initial version developed on codesandbox

https://codesandbox.io/s/phishing-link-detector-ug5bu
