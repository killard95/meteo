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
         createTitle(data.data[0].city_name)
         date();
         createIcon(data.data[0].weather.icon, data.data[0].weather.description);
         createTemperature(data.data[0].temp);
         console.log(data.data[0].ob_time);
 }

setInterval(
    async function getWeatherByCity() {
         const responseCity = await fetch("http://127.0.0.1:5500/conf.json");
         const city = await responseCity.json();
         console.log(city.city);
         const responseWeather = await fetch(`${API}?city=${city.city}&key=${APIKEY}&lang=fr`);
         const data = await responseWeather.json();
         console.log(data);
         createTitle(data.data[0].city_name)
         date();
         createIcon(data.data[0].weather.icon, data.data[0].weather.description);
         createTemperature(data.data[0].temp);
         console.log(data.data[0].ob_time);
        }, 1000 * 60 * 60); 
        //  };

     function createTitle(city) {
         let ville = document.createElement("h1");
         ville.textContent = `Météo de ${city}`;
         document.body.appendChild(ville);
        };
        
        function createIcon(icon, description) {
            let image = document.createElement("img");
            let temp = document.createElement("p");
            image.src = `icons/${icon}.png`;
            image.alt = description;
            temp.textContent = description;
            document.body.appendChild(image);
            document.body.appendChild(temp);
        }
        
        function createTemperature(dataTemperature) {
            let temperature = document.createElement("p");
    temperature.textContent = `Il fait actuellement ${dataTemperature}°C`;
    document.body.appendChild(temperature);
}

function date() {
    setInterval(() => {
        let date = new Date();
        day.textContent = `${date.toLocaleDateString()}.`
        hour.textContent = `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()} : 
        ${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()} : 
        ${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`;        
    }, 1000);
    let day = document.createElement("p");
    let hour = document.createElement("p");
    hour.setAttribute("id", "hour")
    document.body.appendChild(day);
    document.body.appendChild(hour);
}


getWeatherByCity();

