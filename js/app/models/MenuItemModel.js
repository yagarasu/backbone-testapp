define([
	'backbone'
], function(Backbone) {

	var MenuItemModel = Backbone.Model.extend({
		defaults: {
			'link': '#',
			'text': ''
		}
	});

	return MenuItemModel;

});