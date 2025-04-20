const apikey = "59b8c0526ad18dddcf0e788d750462db";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
const form = document.querySelector("form");
//const temp = document.getElementById("temp")

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
    } else {
        var data = await response.json();

        console.log(data)
        //temp.textContent = data.main.temp
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"
        }

        document.querySelector(".error").style.display = "none";
    }
}

// searchBtn.addEventListener("click", ()=>{
//     checkweather(searchBox.value );
// })
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    checkweather(searchBox.value); // Call your API function
});

checkweather()