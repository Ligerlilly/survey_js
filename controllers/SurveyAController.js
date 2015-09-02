surveyJS.controller('SurveyACtrl', ['$scope', 'SurveyFactory', function SurveyACtrl($scope, SurveyFactory) {
  $scope.questionA = "Whats your favorite color?";
  $scope.answers = SurveyFactory.answers;
  $scope.SurveyFactory = SurveyFactory;
}]);
