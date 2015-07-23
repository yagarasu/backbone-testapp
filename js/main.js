'use strict';

require.config({
	baseUrl: 'js',
	paths: {
		jquery: 'libs/jquery',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone'
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		},
		'jquery': {
			exports: '$'
		}
	}
});

require([
	'backbone',
	'app/routes',
], function(Backbone, Workspace) {
	
	new Workspace();
	
	Backbone.history.start();

});