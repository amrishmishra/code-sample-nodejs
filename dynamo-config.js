const AWS = require('aws-sdk');
const APP_CONST = require('./constants');


const dynamodb = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10',
    endpoint: new AWS.Endpoint('http://localhost:8000'),
    region: 'us-west-2',
    maxRetries: 3,
    // what could you do to improve performance?
});
const populateQueryParam = function (eventObj) {
    let params = {
        TableName: APP_CONST.TABLE_SCHOOL_STUDENT,
        Item: {
            'schoolId' : eventObj.schoolId,
            'schoolName' : eventObj.schoolName,
            'studentId' : eventObj.studentId,
            'studentFirstName' : eventObj.studentFirstName,
            'studentLastName' : eventObj.studentLastName,
            'studentGrade' : eventObj.studentGrade
        }
    };
    return params;
};
module.exports ={
    dynamodb,
    populateQueryParam
};