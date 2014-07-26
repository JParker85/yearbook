var app = app || {};

app.HomeView = Backbone.View.extend({
<<<<<<< HEAD
  el: $('#start'),
  events: {
    'click': 'listStudents'
  },
  listStudents: function() {
    this.$el.hide();
    var cohortView = new app.CohortView();
=======
  el: $('#list'),
  events: {
    'click': 'listUsers'
  },
  listUsers: function() {
    this.$el.hide();
    var usersView = new app.UsersView();
>>>>>>> upstream/master
  }
});
