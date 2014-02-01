'use strict';

define(['socketio'], function(socketio) {

	function Service(params) {
		params = params || {};
		this.socket = params.socket || io.connect();
	}

	Service.prototype.login = function(login, password, callback) {
		var self = this;
		this.socket.emit('login', login, password, callback);
	};

	return Service;
});
