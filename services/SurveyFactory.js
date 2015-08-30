surveyJS.factory('SurveyFactory', function SurveyFactory(){
  var factory = {};
  factory.answers = [];
  factory.addAnswer = function() {
    var response = { answer: factory.answerText };
    factory.answers.push(response);
    factory.answerText = null;
  };
});
