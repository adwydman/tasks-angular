export const Weather = function($http) {
    return {
        getWeather(city) {
            const link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=779f5f04d705a97b9774414a9516752c`;
            return $http.get(link).then( ({data}) => data);
        }
    };
};

Weather.$inject = ["$http"];
