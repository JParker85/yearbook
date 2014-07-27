/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Yearbook Router
	// ----------
	var YearbookRouter = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},

		setFilter: function (param) {
			// Set the current filter to be used
			app.YearbookFilter = param || '';

			// Trigger a collection filter event, causing hiding/unhiding
			// of YEarbook view items
			app.CohortView.trigger('filter');
		}
	});

	app.YearbookRouter = new YearbookRouter();
	Backbone.history.start();
})();
