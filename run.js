var cronJob = require('cron').cronJob;
var request = require('request');
var config = require('./config').config;


function getWeather(){
		var options = {
				uri : config.weatherUri,
				qs: {
						w: config.locationCode
				}
		};

		request(options, function(error, response, data){
				console.log("data is " + data);
		});		
}


function getNextTime(lowNumber, highNumber){
		highNumber += 1;
		return Math.floor(Math.random() * (highNumber - lowNumber) + lowNumber);
}
