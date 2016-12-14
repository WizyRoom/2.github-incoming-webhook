'use strict';

var request = require('request');

module.exports = {
	botMessage: function(message){

		var postData = {
		    'domain_id' : "<your teamdomain id>", // required
		    'membership_id' : "<set if you want to post in behalf of your account users/chatbot >", // optional if you want to post with wizybot
		    'workroom_id' : "<room id to post>", // required
		    'token' : "<domain or chatbot token>", // required
		    'body' : message // required
	    }

		request.post(
	    'https://public-dot-wizy-workroom.appspot.com/api/v1/messages',
	    { 
	    	json: postData,
	    	headers: {
		  		'Accept': 'application/json',
		      	'Content-Type': 'application/json'
		  	}
	    },function (error, response, body) {
	    	console.log(response.statusCode)
	    	console.log(error)
	        if (!error && response.statusCode == 200) {
	            console.log(body)
	        }
	    }
		);
	}
}