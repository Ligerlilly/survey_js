surveyJS.factory('SurveyFactory', function SurveyFactory(){
  var factory = {};
  factory.answersColor = [];
  factory.answersAnimal = [];
  factory.answersColorCount = 0;
  factory.answersAnimalCount = 0;
  factory.addAnswer = function() {
    if (factory.answerColor){
      var response = { answer : factory.answerColor };
      factory.answersColor.push(response);
      factory.answersColorCount++;

    }

    if (factory.answerAnimal){
      var response = { answer : factory.answerAnimal };
      factory.answersAnimal.push(response);
      factory.answersAnimalCount++;
    }

    factory.answerColor = null;
    factory.answerAnimal = null;
  };

  factory.show = function() {
    var boolean = false;
    console.log(factory.answersColorCount);
    console.log(factory.answersAnimalCount);
    if ( factory.answersColorCount > 1  ) {
      boolean = true;
    }
    console.log(boolean);
    return boolean;
  };
  return factory;
});
