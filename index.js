module.exports = function(injectedConsoleLog, injectedTimestamp) {

	const consoleLog = injectedConsoleLog || console.log;

	function count(property, value, tags) {
		if (!value) {
			value = 1;
		}
		cloudWatchLog("count", property, value, tags);
	}

	function measure(property, value, tags) {
		cloudWatchLog("measure", property, value, tags);
	}

	function time(property, value, tags) {
		cloudWatchLog("measure", property, value + "ms", tags);
	}

	function cloudWatchLog(type, property, value, tags) {

		const timestamp = injectedTimestamp || Math.round(new Date().getTime() / 1000);
		const logTags = getLogTags(tags);

		consoleLog(`MONITORING|${timestamp}|${value}|${type}|${property}|${logTags}`);
	}

	function getLogTags(tags) {

		const logTags = [];

		if (tags) {
			if (typeof tags == "string") {
				logTags.push("tags:" + tags);
			}
			if (Array.isArray(tags)) {
				tags.forEach(function(tag) {
					logTags.push("tags:" + tag);
				});
			}
		}

		if (process.env.AWS_LAMBDA_FUNCTION_NAME) {
			logTags.push("tags:lambda");
			logTags.push("tags:lambdaFunction." + process.env.AWS_LAMBDA_FUNCTION_NAME);
		}

		if (logTags.length == 0) {
			return "";
		}

		return logTags.join(",");
	}

	return {
		count,
		measure,
		time
	};

};