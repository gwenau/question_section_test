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

      $scope.chunk_array = _.chunk($scope.questions, 2)
      $scope.number = $scope.chunk_array.length
      console.log($scope.chunk_array, $scope.number)
      $scope.match_array = []
      $scope.current_chunk = []
      $scope.c = 0

      $scope.show_questions = function() {
        for (var a = $scope.c, al = $scope.chunk_array.length; a < al; a++) {
          $scope.current_chunk = $scope.chunk_array[a]  
          for (var  b = 0, bl = $scope.current_chunk.length; b < bl; b++) {
            if ($scope.current_chunk[b].answer == null) {
              $scope.current_chunk = $scope.chunk_array[a]
              return $scope.current_chunk
            } else {
              $scope.c = a + 1
              $scope.current_chunk = $scope.chunk_array[$scope.c];
              return $scope.current_chunk
            }
          }
        } 
        console.log($scope.current_chunk)
        return $scope.current_chunk
      }

      $scope.show_questions();

      $scope.answers = {};

      $scope.update = function(questions) {
        $scope.answers = $scope.questions;
        $scope.show_questions();
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
