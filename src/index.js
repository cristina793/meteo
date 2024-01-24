
function refreshWeather (response)
{
    let temperatureElememt =document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement=document.querySelector("#city"); 
    let descriptionElement=document.querySelector("#description"); 
    let humidityElement=document.querySelector("#humidity"); 
    let speedElement=document.querySelector("#wind-speed");
    let timeElement= document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
let iconElement= document.querySelector("#icon");



iconElement.innerHTML=`<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;


console.log(response.data);

cityElement.innerHTML=response.data.city;
timeElement.innerHTML =formatDate(date); 
    descriptionElement.innerHTML=response.data.condition.description; 
    humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
    speedElement.innerHTML=`${response.data.wind.speed}km/h`;
    temperatureElememt.innerHTML=Math.round(temperature);

}
function formatDate(date){
   
    let minutes=date.getMinutes();
    let hours=date.getHours();
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let day= days[date.getDay()];

    if (minutes < 10){
        minutes=`0${minutes}`};

    return`${day} ${hours}:${minutes}`}

function searchCity (city)
{  
    let apiKey="081f8a4700411o4a8f603dtcb57dabaf";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}



function handleSearchSubmit (event)
{event.preventDefault();
let searchInput=document.querySelector("#search-form-input");
searchCity(searchInput.value);
}
let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Strasbourg");