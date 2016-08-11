import angular from 'angular';

import { tasksMain } from './components/tasksMain';
import { tasksNew } from './components/tasksNew';
import { tasksWeather } from './components/tasksWeather';

import { tasksList } from './directives/tasksList';

import { Weather } from './services/Weather';

angular.module('tasks-angular', [])

    .factory("Weather", Weather)

    .component("tasksMain", tasksMain)
    .component("tasksNew", tasksNew)
    .component("tasksWeather", tasksWeather)

    .directive("tasksList", tasksList)
