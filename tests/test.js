var assert = require('assert');

test("Logger can count a value", function(done) {

	var l = new require("../index.js")(fakeConsoleLog);

	l.count("cats", 2);

	assert.equal(loggedString, "count#cats=2");
	done();

});
test("Logger counts 1 by default", function(done) {

	var l = new require("../index.js")(fakeConsoleLog);

	l.count("sheep");

	assert.equal(loggedString, "count#sheep=1");
	done();

});

test("Logger can measure a value", function(done) {

	var l = new require("../index.js")(fakeConsoleLog);

	l.measure("dogs.speed", 0.66);

	assert.equal(loggedString, "measure#dogs.speed=0.66");
	done();

});

test("Logger can time a value and save it in as a ms measure", function(done) {

	var l = new require("../index.js")(fakeConsoleLog);

	l.time("cows", 128);

	assert.equal(loggedString, "measure#cows=128ms");
	done();

});

var loggedString = "", 
	fakeConsoleLog = function(stringToLog){
	loggedString = stringToLog;
}