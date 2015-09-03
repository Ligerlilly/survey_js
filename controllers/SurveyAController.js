surveyJS.controller('SurveyACtrl', ['$scope', 'SurveyFactory', function SurveyACtrl($scope, SurveyFactory) {
  $scope.questionA = "Whats your favorite color?";
  $scope.answersColor = SurveyFactory.answersColor;
  $scope.boolean = SurveyFactory.show();
  $scope.SurveyFactory = SurveyFactory;
}]);
