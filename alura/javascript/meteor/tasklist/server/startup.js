Meteor.startup(function() {

  Meteor.publish('tarefas', function() {
    return Tarefas.find({});
  });

});
