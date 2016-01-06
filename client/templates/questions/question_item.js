Template.questionItem.events({
  'click .next': function(e) {
    e.preventDefault();
    Meteor.call('nextQuestion');
  }
});