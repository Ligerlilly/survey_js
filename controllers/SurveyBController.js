surveyJS.controller('SurveyBCtrl', function SurveyBCtrl($scope, SurveyFactory) {
  $sope.answers = SurveyFactory.answers;
  $scope.SurveyFactory = SurveyFactory;
  $scope.questionB = "What's your favorite animal?";
});
