const api = {
    key: "2fa73590fd8b5a4c6e68098ad5625395",
    base: "https://api.openweathermap.org/data/2.5/weather",
};

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

function setQuery(evt) {
    if (evt.keyCode === 13) {
        getResults(searchbox.value);
    }
}

function getResults(query) {
    fetch(`${api.base}?q=${query}&units=metric&APPID=${api.key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(weather => {
            displayResults(weather);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayResults(weather) {
    console.log(weather);

    let city = document.querySelector(".city");
    if (city) {
        city.innerText = `${weather.name}, ${weather.sys.country}`;
    } else {
        console.error("City element not found");
    }

    let now = new Date();
    let date = document.querySelector(".date");
    if (date) {
        date.innerText = dateBuilder(now);
    } else {
        console.error("Date element not found");
    }

    let temp = document.querySelector(".temp");
    if (temp) {
        temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
    } else {
        console.error("Temperature element not found");
    }

    let weather_el = document.querySelector(".weather");
    if (weather_el) {
        weather_el.innerText = weather.weather[0].main;
    } else {
        console.error("Weather element not found");
    }

    let hilow = document.querySelector(".hi-low");
    if (hilow) {
        hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
    } else {
        console.error("Hi-low element not found");
    }
}


function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}
