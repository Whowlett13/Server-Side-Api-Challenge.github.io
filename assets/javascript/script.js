function initPage() {

    var latLonApi = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';
    var weatherURL = 'https://openweathermap.org/forecast5';
    var apiKey = '7290a13eddbe27c62e515aa42c9528c6';
    var cityEl = document.getElementById("enterCity");
    var searchEl = document.getElementById("#searchButton");
    var clearEl = document.getElementById("#clearHistory");
    var nameEl = document.getElementById("#cityName");
    var currentTempEl = document.getElementById("#temperature");
    var currentHumidityEl = document.getElementById("#humidity");
    var currentWindEl = document.getElementById("#windSpeed");
    var currentUVEl = document.getElementById("#UV-index");
    var fivedayEl = document.getElementById("#fivedayHeader");
    var todayweatherEl = document.getElementById("#todayWeather");
    let searchHistory = JSON.parse(localStorage.getItem("#search")) || [];






}


initPage();