// Add fixture data from json file

if (Questions.find().count() === 0) {
  var starterQuestions = JSON.parse(Assets.getText('questions.json'));
  _.each(starterQuestions, function(starterQuestion) {
    Questions.insert(starterQuestion);
  });
}