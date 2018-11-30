/* eslint-disable max-len */
const ppd = require('../lib/toolkit');

const event = {
  "httpMethod": "POST",
  "headers": {
    "Accept": "application/vnd.photobox.ppd.v1+json"
  },
  "body": {
      "firstName": Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      "uuid": "fsdfsd"
  },
  "path": {
    "id": "fsdfsd"
  }
};

const context = {};

ppd.putItemHandler(event, context, (err,data) => {
  console.log(data.body);
  console.log(data);
});
