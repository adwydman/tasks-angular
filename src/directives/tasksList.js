export const tasksList = function() {
    return {
        restrict: 'E',
        scope: {
            tasks: "="
        },
        templateUrl: '../dist/views/tasksList.html',
        link: function(scope, element, attrs) {
            scope.$watchCollection('tasks', function(tasks) {
                scope.updateTasks();
            });
        },
        controller: function($scope) {
            const self = this;
            $scope.updateTasks = function() {
                self.tasks = $scope.tasks;
            };
            $scope.taskDone = function(id, taskDone) {
                $scope.tasks[id-1].done = taskDone;
            }
        },
        controllerAs: "$ctrl"
    };
};
