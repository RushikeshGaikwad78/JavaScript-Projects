const apikey = "fa81bcf01c71593308049ebdf35d500c";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(
    apiurl + city + `&appid=${apikey}` + "&units=metric"
  );
  var data = await response.json();
  console.log(data);

  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "% ";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h ";
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
}

searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});
