'use strict';

var App = App || {};

require.config({
	baseUrl: 'js',
	paths: {
		jquery: 'libs/jquery',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone',
		text: 'libs/text'
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
	'app/models/MenuItemsCollection',
	'app/views/MainMenuView',
], function(Backbone, Routes, MenuItemsCollection, MainMenuView) {
	
	App.routes = new Routes();
	
	Backbone.history.start();

	App.mainMenu = {};
	App.mainMenu.model = new MenuItemsCollection();
	App.mainMenu.view = new MainMenuView({ model: App.mainMenu.model });

	App.mainMenu.model.add({ text: 'Foo' });
	App.mainMenu.model.add({ text: 'Bar' });

});