let API = "https://api.weatherbit.io/v2.0/current";
let APIKEY = "081f56a7eee24809be515fb676b04ab3";
let body = document.getElementById("body");
async function getWeatherByCity() {
    const responseCity = await fetch("http://127.0.0.1:5500/conf.json");
    const city = await responseCity.json();
    console.log(city.city);
    const responseWeather = await fetch(`${API}?city=${city.city}&key=${APIKEY}&lang=fr`);
    const data = await responseWeather.json();
    console.log(data);
    let ville = document.createElement("h1");
    ville.textContent = `Météo de ${data.data[0].city_name}`;
    document.body.appendChild(ville);
    let icon = document.createElement("img");
    icon.src = `icons/${data.data[0].weather.icon}.png`;
    icon.alt = data.data[0].weather.description;
    document.body.appendChild(icon);
    let temperature = document.createElement("p");
    temperature.textContent = `Il fait actuellement ${data.data[0].temp}°C`;
    document.body.appendChild(temperature);

    // weatherIcon.style.src = `icons/${data.data[0].weather["icon"]}.png`;
    return city, data;
}
getWeatherByCity();

