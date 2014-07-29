// var app = app || {};

app.UserView = Backbone.View.extend({
  events:{
    'click':'showUser'
  },
  showUser:function(){
    debugger;
  },

  tagName: 'div',
  className: 'userContainer',
  template: $('#userTemplate').html(),
  render: function() {
    var tmpl = _.template(this.template);
    this.$el.html(tmpl(this.model.toJSON()));
    return this;
  }
});
