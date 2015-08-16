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
      $scope.show_questions = function() {
        for (var a = 0, al = $scope.chunk_array.length; a < al; a++) {
          $scope.current_chunk = $scope.chunk_array[a]
          console.log($scope.current_chunk)
          for (var  b = 0, bl = $scope.current_chunk.length; b < bl; b++) {
  
              if ($scope.current_chunk[b].answer == null) {

                console.log($scope.current_chunk[b])

            }
          }

        } 
      }


      $scope.count_items = function (arr) {
        if (arr.length == $scope.number)
          return true
        else 
          return $scope.display_chunk;
      }

      $scope.show_questions()

      $scope.answers = {};

      $scope.update = function(questions) {
        $scope.answers = $scope.questions;
        $scope.show_questions();
        $scope.count_items($scope.match_array);
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
