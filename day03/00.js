var express = require("express");
var fetch = require('node-fetch');
var app = express();
function* () {
	var url = 'https://api.github.com/users/github';
	var result = yield fetch(url);
	console.log(result.bio)
}

var g = gen();
var result = g.next()
result.value.then(function(data) {
	return data.json()
}).then(function(data){
	g.next(data)
})


app.listen(3000);