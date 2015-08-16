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
      
      $scope.chunk_show = function (chunk_array) {
        var current_chunk = []
        $scope.current_chunk = current_chunk
        $scope.display_chunk = []
        if (chunk_array) {
          for (var i = 0, l = chunk_array.length; i < l; i++) {
            $scope.current_chunk = chunk_array[i]
            if ($scope.current_chunk) {
              for (var i = 0, l = $scope.current_chunk.length; i < l; i++) {
                $scope.display_chunk = $scope.current_chunk[i] 
                for (var i = 0, l = $scope.display_chunk.length; i < l; i++) {
                  if ($scope.display_chunk[i].answer == null)
                    return false
                  else
                    return true
                }
              } 
            }   
          }
        }
      };

      $scope.chunk_show($scope.chunk_array)

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
