angular.module('simpleProcess').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/task.tpl.html',
    "<div class=\"col-md-8\"> <div class=\"panel panel-primary\"> <div class=\"panel-heading\">Task</div> <div class=\"panel-body\"> <h2>{{ payload.name }}</h2> <span>{{ payload.value }}</span> </div> </div> </div>"
  );

}]);