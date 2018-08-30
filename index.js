"use strict";
 
const AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {

    const minimata=[];
    
    console.log(JSON.stringify(event, null, 2));
    event.Records.forEach((record) => {
        console.log(record.eventID);
        console.log(record.eventName);
        console.log(record.dynamodb.NewImage.Message_body);
        console.log('DynamoDB Record: %j', record.dynamodb);
    });

    const dedomena = event.Records;
    console.log("ayta einai ta dedomena " + JSON.stringify(dedomena,null,2));


    const megethos = dedomena.length;
    console.log("to megethos tou records einai : "+megethos);

    // for(let i =0; i< dedomena.length; i++ ){
    //     minimata[i] =[event.Records[i].dynamodb.NewImage[0],event.Records[i].dynamodb.NewImage[1]];
    // }
    //console.log("Ta minimata einai :"+JSON.stringify(minimata,null,2));



//    Promise.map(dedomena, function()
//)

};