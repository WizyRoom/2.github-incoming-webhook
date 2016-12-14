// Copyright 2015-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';
var request = require('request');
var botApi = require('../botApi/bot.js');


function getGithubCommits(req, res){

	console.log(req.body)



	//INIT VAR
	var message =  req.body;

	var body = message.head_commit.message +" BY " + message.head_commit.author.name +" : " + message.head_commit.author.email ;

	botApi.botMessage(body);

	res.status(200).send("OK");

}


// [START exports]
module.exports = {
	getGithubCommits: getGithubCommits
};
// [END exports]