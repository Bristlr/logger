module.exports = function(injectedConsoleLog) {

	const consoleLog = injectedConsoleLog || console.log;

	function count(property, value) {
		if (!value) value = 1;
		consoleLog("count#" + property + "=" + value);
		cloudWatchLog("count", property, value);
	}

	function measure(property, value) {
		consoleLog("measure#" + property + "=" + value);
		cloudWatchLog("measure", property, value);
	}

	function time(property, value) {
		consoleLog("measure#" + property + "=" + value + "ms");
		cloudWatchLog("measure", property, value + "ms");
	}

	function cloudWatchLog(type, property, value) {
		const timestamp = new Date().getTime();
		console.log(`MONITORING|${timestamp}|${value}|${type}|${property}|#tag1:lambda`);
	}

	return {
		count: count,
		measure: measure,
		time: time
	};

};