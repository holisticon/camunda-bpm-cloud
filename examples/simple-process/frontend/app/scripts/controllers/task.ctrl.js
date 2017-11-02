'use strict';
module.exports = function ($scope, $stateParams, TaskService) {


  var task = {};

  $scope.complete = complete;
  $scope.payload = {};
  $scope.task = task;


  if ($stateParams.formKey) {
    task.formKey = $stateParams.formKey;
  }

  if ($stateParams.taskId) {
    task.taskId = $stateParams.taskId;
  }


  if (task.formKey && task.taskId) {
    /*
    TaskService.load(task.formKey, task.taskId).then(function success(response) {
      console.log(response);
      $scope.contextData = response.data;
    }, function error(response) {
      console.error("Error during context data retrieval", response.status, response.statusText);
      $scope.error = "Error during context data retrieval. The server responded with status " + response.status + "and the message " + response.statusText;
    });
    */
    $scope.taskpayload = {
      name: "SimpleTask",
      value: "Hello World!"
    };
  } else {
    console.log("Wrong params", $stateParams);
  }

  function complete() {
    TaskService.complete(task.formKey, task.taskId, $scope.payload);
  }

};
