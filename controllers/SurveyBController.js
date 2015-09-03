surveyJS.controller('SurveyBCtrl', ['$scope', 'SurveyFactory', function SurveyBCtrl($scope, SurveyFactory) {
  $scope.answersAnimal = SurveyFactory.answersAnimal;
  $scope.SurveyFactory = SurveyFactory;
  $scope.questionB = "What's your favorite animal?";
}]);
