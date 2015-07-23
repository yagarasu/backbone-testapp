define([
	'backbone',
	'app/models/MenuItemModel'
], function(Backbone, MenuItemModel) {

	var MenuItemsCollection = Backbone.Collection.extend({
		model: MenuItemModel
	});

	return MenuItemsCollection;

});