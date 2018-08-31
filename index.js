"use strict";

//const AWS = require('aws-sdk');
const request = require('request-promise');
const Promise = require('bluebird');

const concurrency = 0;


exports.handler = async(event) => {

    // const minimata = [];

    // console.log(JSON.stringify(event, null, 2));

    // for (let i = 0; i < event.Records.length; i++) {

    //     const myMessage_body = event.Records[i].dynamodb.NewImage.Message_body;
    //     console.log(myMessage_body);
    //     const myMessage_id = event.Records[i].dynamodb.NewImage.Message_id;
    //     console.log(myMessage_id);
    //     console.log(event.Records[i].eventName);
    //     minimata[i] = [myMessage_body, myMessage_id];
    //     console.log('DynamoDB Record: %j', event.Records[i].dynamodb);
    // }

    //console.log("ta minimata einai: " + JSON.stringify(minimata, null, 2));

    const dedomena_Event = event.Records;
    console.log("ayta einai ta dedomena ");

    const megethos = dedomena_Event.length;
    console.log("to megethos tou records einai : " + megethos);


    return await Promise.map(dedomena_Event, dedomena => {
        console.log("ta dedomena einai auta " + JSON.stringify(dedomena, null, 2));
        // const sentData = dedomena;
        const line = [dedomena.dynamodb.NewImage.Message_body, dedomena.dynamodb.NewImage.Message_id];
        console.log("H grammh pou tha parei einai : " + JSON.stringify(line, null, 2));
        //options.body.push(line);
        const options = {
            method: 'POST',
            uri: "http://httpbin.org/post",
            body: {
                name: line
            },
            json: true
        };

        return request(options)
            .then(function (body) {
                console.log("We are succesfully sent the message" + JSON.stringify(body, null, 2));
            });

    }, { concurrency: concurrency}).then(()=>{
        return {success:true};
    }
    ).catch(function (err) {
            
            console.log("This is the error: " + err);
            return {success:false};
        });

};