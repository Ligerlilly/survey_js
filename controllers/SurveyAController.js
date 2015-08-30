surveyJS.controller('SurveyACtrl', function SurveyACtrl($sope, SurveyFactory) {
  $scope.questionA = "Whats your favorite color?";
  console.log($scope.questionA);
  $scope.answers = SurveyFactory.answers;
  $scope.SurveyFactory = SurveyFactory;
});
