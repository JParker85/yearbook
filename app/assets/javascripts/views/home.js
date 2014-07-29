var app = app || {};

app.HomeView = Backbone.View.extend({
  el: $('#list'),
  // events: {
  //   'click': 'listUsers'
  // },
  listUsers: function() {
    this.$el.hide();
    var usersView = new app.UsersView();
  }
});
