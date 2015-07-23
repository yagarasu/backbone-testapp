define([
	'backbone'
], function(Backbone) {
   
	var Workspace = Backbone.Router.extend({
		routes: {
			'help': 'help'
		},

		help: function() {
			//route...
			console.log('help');
		}
	});
   
	return Workspace; 
});