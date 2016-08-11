class TasksWeatherCtrl {
    constructor() {
    }
}

export const tasksWeather = {
    templateUrl: '../dist/views/tasksWeather.html',
    controller: TasksWeatherCtrl,
    bindings: {
        weather: "<"
    }
}
