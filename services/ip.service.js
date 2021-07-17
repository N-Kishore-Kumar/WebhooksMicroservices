"use strict";
const express = require('express');
const request = require('request');
const axios = require('axios');
const async = require('async');
const mongoose = require('mongoose');
const Url = require('../models/targetURL');
mongoose.set('useFindAndModify', false);

const url = 'mongodb://localhost:27017/webhooksMicroservice';
const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Database Connected");
});

module.exports = {
    name: "ip",

    actions: {
        /**
		 *
		 * @param {String} ipAddress
		 */
		 trigger: {
			rest: "/trigger",
			params: {
				ipAddress: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				try{
					let url;
                    let lookupList = [];
					let ret = await Url.find({}, {targetUrl:1, _id:0})
					for(var o in ret) {
						url = ret[o].targetUrl
                        lookupList.push(url);
					}
					async.map(lookupList, (url,callback) => {
						axios.post(url, {
                            ipAddress: ctx.params.ipAddress,
							timestamp: Math.floor(+new Date() / 1000)
                        })
                        .then(res => {
                            console.log('POST Request sent to ' + url);
                        })
                        .catch(error => {
                            console.error('Error in sending POST request to ' + url);
                        })
					}, (err, res) => {
						if(err) {
							console.log(err);
						}
					})
				}
				catch(err){
					console.log(err);
				}
			}
		}

    }

}