"use strict";
const express = require('express');
const mongoose = require('mongoose');
const Url = require('../models/targetURL');
mongoose.set('useFindAndModify', false);

const url = 'mongodb://localhost:27017/webhooksMicroservice';
const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Database Connected");
});

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "greeter",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 *
		 * @returns
		 */
		list: {
			rest: {
				method: "GET",
				path: "/list"
			},
			async handler() {
				try{
					let val = "";
					let ret = await Url.find({}, {targetUrl:1, _id:0})
					for(let key in ret){
						val = val + ret[key].targetUrl + ", ";
					}
					if(val == ""){
						return "No records exists";
					}
					else{
						return val;
					}
				}
				catch(err) {
					console.log(err);
				}
			}
		},

		/**
		 *
		 * @param {String} targetUrl
		 */
		register: {
			rest: "/register",
			params: {
				targetUrl: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				try{
					let targetUrl = ctx.params;
					console.log(targetUrl);
					const ret = await Url.create(targetUrl);
					console.log("URL Created");
					console.log(typeof(url._id));
					console.log(ret._id);
					return ret._id;	
				}
				catch(err){
					console.log(err);
				}
			}
		},

		/**
		 *
		 * @param {String} targetUrl - 
		 */
		 update: {
			rest: "/update",
			params: {
				id: "string",
				targetUrl: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				try{
					let targetUrl = ctx.params.targetUrl;
					let id = ctx.params.id;
					console.log(targetUrl + " " + id);
					let ret = await Url.findByIdAndUpdate(id, {
						$set: {targetUrl}
					}, { new: true });
					console.log("Updated");
					return "Successfully Updated";
				}
				catch(err) {
					console.log(err);
					return "ID Does not exists";
				}
			}
		},

		/**
		 *
		 * @param {String} id
		 */
		 delete: {
			rest: "/delete",
			params: {
				id: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				try{
					let id = ctx.params.id;
					const ret = await Url.findByIdAndRemove(id)
					console.log(ret._id);
					return ret._id;
				}
				catch(err){
					console.log(err);
					return "ID Does not exists";
				}
			}
		},


	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};

