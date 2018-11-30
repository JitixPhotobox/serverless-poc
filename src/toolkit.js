const AWS = require('aws-sdk');
AWS.config.update({region: 'eu-west-1'});

const dynamodb = new AWS.DynamoDB();
const client = new AWS.DynamoDB.DocumentClient({ service: dynamodb });

export const buildAPIResponse = (statusCode, additionalHeaders, rawBody, version ) => {
  if (!version || version.length < 4) throw new Error('Must provide API version');

  const contentType = statusCode >= 400 ? 'application/problem+json' : `application/vnd.photobox.${version}+json`;
  return {
    statusCode,
    headers: {
      'content-type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': false,
      ...additionalHeaders
    },
    ... (rawBody && { body: JSON.stringify(rawBody) })
  };
};

const done = (err, res, callback) => {
  const result = {
    statusCode: err ? '400' : '200',
    body: err ? err.message : JSON.stringify(res),
    headers: {
        'Content-Type': 'application/json',
    }
  };
  callback(null, result);
};

export const getItemHandler = async (event, context, callback) => {
  let response = {}, result = {};
  result = await client.scan({ "TableName": 'toolkitt' }).promise();

  return done(null, result.Items, callback);
}

export const putItemHandler = async (event, context, callback) => {
  if (event.path.id) {
    event.body.uuid = event.path.id;
  }

  await client.put({"TableName": 'toolkitt', Item: event.body}).promise();

  return done(null, event.body, callback);
}

export const deleteHandler = async (event, context, callback) => {
  result = await client.delete({"TableName": 'toolkitt', Key: {"firstName": event.pathParameters.id}}).promise();
  return done(null, null, callback);
}