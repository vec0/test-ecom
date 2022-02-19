const ErrorHandler = {
	throw: function (message) {
		alert(message);
		throw Error(message);
	},
};

export default ErrorHandler;
