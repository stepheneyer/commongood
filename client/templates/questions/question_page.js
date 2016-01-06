Template.questionPage.helpers({
  questions: function() {
    return Questions.find({questionId: this._id});
  }
});