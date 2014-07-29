/*global Backbone */
 var app = app || {};

 (function () {
   'use strict';
   var YearbookRouter = Backbone.Router.extend({
     routes: {
               //'*filter'   : 'setFilter'
               'home'      : '',
               'users' : 'listUsers',
               'user' : 'listUser'

             },

      //  setFilter: function (param) {
      //               app.YearbookFilter = param || '';
      //               app.UsersView.trigger('filter');
      //             }
   });

   app.YearbookRouter = new YearbookRouter();
   Backbone.history.start();
})();
