const apiKey = 'cc948d103b47b2fab187d7b17ce9164a';
const apiUrl =
    'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('#searchBox');
const searchBtn = document.querySelector('#searchBtn');
const weatherIcon = document.querySelector('#weather-icon');
const card = document.querySelector('#card');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector('#error').style.display = 'block';
        document.querySelector('#weather').style.display = 'none';
    } else {
        var data = await response.json();
        console.log(data.weather);

        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML =
            Math.round(data.main.temp) + '°C';
        document.querySelector('#humidity').innerHTML =
            data.main.humidity + ' %';
        document.querySelector('#wind').innerHTML = data.wind.speed + ' km/hr';
        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = './clouds.png';
            card.style.backgroundImage = `url('/cloud.gif')`;
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = './clear.png';
            card.style.backgroundImage = `url('./clear.gif')`;
        } else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = './rain.png';
            card.style.backgroundImage = `url(./rain.gif')`;
        } else if (data.weather[0].main == 'Haze') {
            weatherIcon.src = './mist.png';
            card.style.backgroundImage = `url('./mist.gif')`;
        } else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = './mist.png';
            card.style.backgroundImage = `url('./mist.gif')`;
        } else if (data.weather[0].main == 'Smoke') {
            weatherIcon.src = '/mist.png';
            card.style.backgroundImage = `url('./mist.gif')`;
        }
        document.querySelector('#weather').style.display = 'block';
        document.querySelector('#error').style.display = 'none';
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
checkWeather(searchBox.value);
