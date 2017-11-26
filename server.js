const request = require('request');
const bodyParser = require('body-parser');
const express = require('express')
const app = express()


const apiKey = '*';


//allow css rendering
app.use(express.static('public'));

//bodyparser middleware to get access city name from req key value paris
app.use(bodyParser.urlencoded({extended: true}));

//use ejs to render html view instead of text
app.set('view engine','ejs')


app.get('/',function (req, res) {

	res.render('index', {weather: null, error: null});

})



app.post('/', function (req, res) {
	
	let city = req.body.city;
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
	
	request(url, function (err, response, body) {
		
		if(err) {
		
			res.render('index',{weather: null, error: 'Please Try Again Later'});
		
		} else { 
		
			let weather = JSON.parse(body)

		
		if(weather.main == undefined) {
		
			res.render('index',{weather: null, error: 'Please Try Again Later'});
		
		} else {
		
			let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
			res.render('index',{weather: weatherText, error: null});
			}
		}
			
	});

})



app.listen(3000, function() {

	console.log('Example app listening on port 3000')
})


