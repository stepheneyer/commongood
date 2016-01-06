Questions = new Mongo.Collection('questions');

Meteor.methods({
  nextQuestion: function(qid) {
    Questions.findOne({'qid': qid++});
  }
});