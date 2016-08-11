class TasksNewCtrl {
    constructor($scope) {
        this.scope = $scope;
        this.newTask = "";
    }
    addNewTask() {
        this.scope.$emit('newTask', this.newTask);
    }
}

TasksNewCtrl.$inject = ['$scope'];

export const tasksNew = {
    templateUrl: '../dist/views/tasksNew.html',
    controller: TasksNewCtrl
};
