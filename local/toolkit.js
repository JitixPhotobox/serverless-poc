/* eslint-disable max-len */
const ppd = require('../lib/toolkit');

const event = {
  "pathParameters": {
    "id": "jean-claude",
  },
  "httpMethod": "POST",
  "headers": {
    "Accept": "application/vnd.photobox.ppd.v1+json"
  },
};

const context = {};

ppd.handler(event, context, (err, data) => {
  console.log(data.body);
  console.log(data);
});
