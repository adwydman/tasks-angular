class TasksMainCtrl {
    constructor($scope, Weather) {
        Weather.getWeather("Poznan")
            .then( response => {
                $scope.weather = {
                    city: response.name,
                    temperature: Math.round(response.main.temp - 272.15)
                };
            });
        $scope.tasks = [
            { id: 1, task: "Test", done: false },
            { id: 2, task: "Test2", done: false },
            { id: 3, task: "Test3", done: true}
        ];
        $scope.$on('newTask', function(event, newTask) {
            $scope.tasks.push({ task: newTask, done: false});
        });
        $scope.$watch('tasks', function(event, tasks) {}, true)
    }
}

TasksMainCtrl.$inject = ["$scope", "Weather"];

export const tasksMain = {
    templateUrl: '../dist/views/tasksMain.html',
    controller: TasksMainCtrl
};
