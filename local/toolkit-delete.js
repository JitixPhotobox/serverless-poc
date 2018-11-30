/* eslint-disable max-len */
const ppd = require('../lib/toolkit');

const event = {
  "pathParameters": {
    "id": "jean-claude",
  },
  "httpMethod": "DELETE",
  "headers": {
    "Accept": "application/vnd.photobox.ppd.v1+json"
  },
  "body": JSON.stringify(
    {
      "firstName": Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }
  )
};

const context = {};

ppd.handler(event, context, (err,data) => {
  console.log(data.body);
  console.log(data);
});
