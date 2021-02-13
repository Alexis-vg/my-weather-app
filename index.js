const selector = document.querySelector("input");
const button = document.querySelector(".submit");

const API_KEY = "1f467e12267b914a37ea9565a2328c09";

const createTempNode = () => {
  const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${selector.value}&appid=${API_KEY}&units=metric&lang=es`;
  window
    .fetch(API_URL)
    .then((respuesta) => respuesta.json())
    .then((responseJson) => {
      const nameLog = document.createElement("div");
      nameLog.className = "temperatureContainer";
      nameLog.innerHTML = `${responseJson.name}`;

      const tempLog = document.createElement("div");
      tempLog.innerHTML = `${responseJson.main.temp}°C`;

      const weatherLog = document.createElement("div");
      weatherLog.className = "weatherContainer";

      const infoWeather = document.createElement("p");
      infoWeather.style.margin = "0px";

      infoWeather.innerHTML = `${responseJson.weather[0].main}`;

      const image = document.createElement("img");
      image.className = "weatherLogo";
      image.width = "100";
      image.margin = "0 auto";

      if (infoWeather.innerHTML == "Snow") {
        image.src = "./assets/weather-snow.png";
      } else if (infoWeather.innerHTML == "Rain") {
        image.src = "./assets/rainy.png";
      } else if (infoWeather.innerHTML == "Clouds") {
        image.src = "./assets/scattered-clouds.png";
      }

      weatherLog.append(infoWeather, image);

      mountNode.append(nameLog, tempLog, weatherLog);
      return mountNode;
    });
};
button.addEventListener("click", createTempNode);

// Limpiar
const clean = document.querySelector(".submit");
clean.addEventListener("click", () => {
  mountNode.innerHTML = "";
});
