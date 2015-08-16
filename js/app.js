(function() {

  var app = angular.module('questionApp', []);

  app.controller('QuestionController' , ["$scope", function($scope) {

      $scope.questions = [
        {name: "Group 1: Name", answer: null, required: true},
        {name: "Group 1: Number", answer: null, required: false},
        {name: "Group 2: Appointment name", answer: null, required: true},
        {name: "Group 2: Appointment date", answer: null, required: true},
        {name: "Group 3: Attendant preference one", answer: null, required: false}
      ];

      $scope.answers = {};

      $scope.update = function(questions) {
        $scope.answers = $scope.questions;
      };

      $scope.reset = function(arr){
      if (arr){
          for (var i = 0, l = arr.length; i < l; i++ ) {
            arr[i].answer = null
          }
        }
      else
        return
      };

    }

  ])

})();
