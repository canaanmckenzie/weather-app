//Canaan McKenzie 2017

const request = require('request');
const argv = require('yargs').argv;
let city = argv.c || 'Burlington';

let apiKey = '*';

let url  = re


request(url, function (err, response, body) {

  if(err){

    console.log('error:', error);
 
 } else {

	//console.log('body:', body);
        let weather = JSON.parse(body);
	let message = `Its ${weather.main.temp} degrees Fahrenheit in ${weather.name}!`;
	console.log(message);
  }
});

