'use strict';

define(['backbone'], function(backbone) {
	var Collection = {
		backend: 'projects'
	};

	return backbone.Collection.extend(Collection);
});
