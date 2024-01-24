
function refreshWeather (response)
{
    let temperatureElememt =document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    temperatureElememt.innerHTML=Math.round(temperature);
    let cityElement=document.querySelector("#city"); 
    cityElement.innerHTML=response.data.city;
}


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

searchCity("Berlin");