module.exports = function(injectedConsoleLog) {

	var consoleLog = injectedConsoleLog || console.log;

	function count(property, value) {
		if (!value) value = 1;
		consoleLog("count#" + property + "=" + value);
	}

	function measure(property, value) {
		consoleLog("measure#" + property + "=" + value);
	}

	function time(property, value) {
		consoleLog("measure#" + property + "=" + value + "ms");
	}

	return {
		count: count,
		measure: measure,
		time: time
	};

};