/* eslint-disable max-len */
const toolkit = require('../lib/toolkit');

const event = {
  "httpMethod": "PUT",
  "headers": {
    "Accept": "application/vnd.photobox.ppd.v1+json"
  },
  "pathParameters": {
    "id": "jean-claude"
  },
  "path": {
    "id": "jean-claude",
    "uuid":"fsfds"
  },
  "body": {
    "dsffddf": Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    "uuid":"fsfds"
  }
};

const context = {};

toolkit.putItemHandler(event, context, (err,data) => {
  console.log(data.body);
  console.log(data);
});
