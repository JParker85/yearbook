//var app = app || {};

app.UsersView = Backbone.View.extend({
  el: $('#Users'),
  initialize: function() {
    this.collection = new app.Users();
    this.collection.fetch();
    this.render();
    this.listenTo(this.collection, 'add', this.renderUser);
    this.listenTo(this.collection, 'reset', this.render);
  },
  render: function() {
    this.$el.append("<h1>Students List</h1>");
    this.collection.each(function(user) {

      this.renderUser(user);
    }, this);
  },
  renderUser: function(user) {
    var userView = new app.UserView({
      model: user
    });
    this.$el.append(userView.render().el);
  }
});
