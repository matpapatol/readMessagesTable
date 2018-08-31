"use strict";

const AWS = require('aws-sdk');
const request = require('request-promise');
const promise = require('bluebird');

const concurrency = 0;


exports.handler = (event, context, callback) => { 
    Promise.try(()=>{

    })
    .then(()=>{
        callback(null,  {
            success: false
        });
    })
    .catch();

    const minimata = [];

    console.log(JSON.stringify(event, null, 2));

    for (let i = 0; i < event.Records.length; i++) {

        const myMessage_body = event.Records[i].dynamodb.NewImage.Message_body;
        console.log(myMessage_body);
        const myMessage_id = event.Records[i].dynamodb.NewImage.Message_id;
        console.log(myMessage_id);
        console.log(event.Records[i].eventName);
        minimata[i] = [myMessage_body, myMessage_id];
        console.log('DynamoDB Record: %j', event.Records[i].dynamodb);
    }

    console.log("ta minimata einai: " + JSON.stringify(minimata, null, 2));

    const dedomena = event.Records;
    console.log("ayta einai ta dedomena ");

    const megethos = dedomena.length;
    console.log("to megethos tou records einai : " + megethos);

    /*    
       return Promise.map(dedomena, function()
    
    

    //)
    */
};