define([
	'backbone',
	'mustache',
	'text!app/templates/mainmenu.html'
], function(Backbone, Mustache, template) {

	var MainMenuView = Backbone.View.extend({
		
		el: '#menu',
		template: template,

		initialize: function() {
			this.model.each(function(model, idx) {
				this.$el.append(Mustache.to_html(this.template, model.toJSON()));
			}.bind(this));
			this.listenTo(this.model, 'add', this.renderOne);
			this.listenTo(this.model, 'reset', this.renderAll);
		},

		renderOne: function(added) {
			$(Mustache.to_html(this.template, added.toJSON())).appendTo(this.$el).hide().fadeIn('fast');
		},

		renderAll: function() {
			this.$el.find('li').fadeOut('fast', function() {
				this.$el.html('');
				this.model.each(function(model, idx) {
					$(Mustache.to_html(this.template, model.toJSON())).appendTo(this.$el).hide().fadeIn('fast');
				}.bind(this));
			}.bind(this));
		}

	});

	return MainMenuView;

});