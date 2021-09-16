let api_key = '4ba0d7eb9cf6e4d9ffdd61dfab171992';
let searchInput = document.querySelector('#searchInput');
let searchBtn = document.querySelector('#searchBtn');
let celsius = document.querySelector('#celsius');
let farenheit = document.querySelector('#farenheit');

searchBtn.addEventListener('click', getData);
searchBtn.addEventListener('click', () => {
    searchInput.value = ``;
    celsius.classList.remove('chosen');
    farenheit.classList.remove('chosen');
});

async function getData() {
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${api_key}`;
        const response = await fetch(url);
        const weatherData = await response.json();
        showData(weatherData);
    }
    catch {
        console.log("Enter something")
        alert("Type something that would make sense or check for spell errors!")
    }
}

function showData(obj) {
    let description = obj.weather[0].main;
    let locat = obj.name;
    let country = obj.sys.country;

    let lon = obj.coord.lon;
    let lat = obj.coord.lat;

    let tempF = obj.main.temp;
    let feels_likeF = obj.main['feels_like'];
    let min_tempF = obj.main['temp_min'];
    let max_tempF = obj.main['temp_max'];
    let api_pressure = obj.main['pressure'];
    let api_humidity = obj.main['humidity'];

    let windSpeedApi = obj.wind.speed;  
    let windDegApi = obj.wind.deg;

    let date = new Date();

    document.getElementById('time').textContent = date;
    document.getElementById('h2').textContent = description; 
    document.getElementById('place').textContent = `${locat}, ${country}`;
    document.getElementById('coordinates').textContent = `${lat}°, ${lon}°`;

    document.getElementById('temperature').innerHTML = `Temperature <br> ${tempF} K`; 
    document.getElementById('feelsLike').innerHTML = `Feels Like <br> ${feels_likeF} K`;
    document.getElementById('lowestTemp').innerHTML = `Lowest temp <br> ${min_tempF} K`;
    document.getElementById('highestTemp').innerHTML = `Highest temp <br> ${max_tempF} K`;
    
    document.getElementById('pascal').innerHTML = `Pressure <br> ${api_pressure} Pa `;
    document.getElementById('humidity').innerHTML = `Humidity <br> ${api_humidity}% `;
    
    
    document.getElementById('speedAir').innerHTML = `Wind Speed <br> ${windSpeedApi} m/s`;
    document.getElementById('degAir').innerHTML = `Wind Angle <br> ${windDegApi}°`;


    celsius.addEventListener('click', () => {
        celsius.classList.add('chosen');
        farenheit.classList.remove('chosen');
        
        document.getElementById('temperature').innerHTML = `Temperature <br> ${(tempF - 273.15).toFixed(2)} °C`; 
        document.getElementById('feelsLike').innerHTML = `Feels Like <br> ${(feels_likeF - 273.15).toFixed(2)} °C`;
        document.getElementById('lowestTemp').innerHTML = `Lowest temp <br> ${(min_tempF - 273.15).toFixed(2)} °C`;
        document.getElementById('highestTemp').innerHTML = `Highest temp <br> ${(max_tempF - 273.15).toFixed(2)} °C`;
    });
    farenheit.addEventListener('click', () => {
        celsius.classList.remove('chosen');
        farenheit.classList.add('chosen');    
        
        document.getElementById('temperature').innerHTML = `Temperature <br> ${((tempF - 273.15)*(9/5)+32).toFixed(2)} F`; 
        document.getElementById('feelsLike').innerHTML = `Feels Like <br> ${((feels_likeF - 273.15)*(9/5)+32).toFixed(2)} F`;
        document.getElementById('lowestTemp').innerHTML = `Lowest temp <br> ${((min_tempF - 273.15)*(9/5)+32).toFixed(2)} F`;
        document.getElementById('highestTemp').innerHTML = `Highest temp <br> ${((max_tempF - 273.15)*(9/5)+32).toFixed(2)} F`;
    });
}

