import { spaceRemover } from "./js/spaceRemover";
import { handleSubmit } from "./js/formHandler";
import { getWeatherData } from "./js/getWeatherData";
import { getCityData } from "./js/getCityData";
import { countdown } from "./js/countdown";
import { getImages } from "./js/getImages";

import "./styles/style.scss";

//add event listeners here
const submitButton = document.getElementById("generate");
submitButton.addEventListener("click", performAction);

function performAction(e) {
  console.log("BUTTON CLICKED !!");
  // Countdown (date) -> date-today() live countdown
  countdown();
  handleSubmit(e);
}

// Geonames API (city) -> lat, long, country
// http://api.geonames.org/postalCodeSearch?postalcode=9011&maxRows=10&username=thomaspeterowen
// http://api.geonames.org/searchJSON?style=full&maxRows=12&name_startsWith=london&username=thomaspeterowen

// Weatherbit API () -> forecast if within one week(?)

// Pixabay API () -> photo returned (?)

export { spaceRemover, handleSubmit, getWeatherData, getCityData, countdown, getImages };
