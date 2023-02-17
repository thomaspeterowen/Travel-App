import { spaceRemover } from "./js/spaceRemover";
import { inputEmpty } from "./js/inputEmpty";
import { handleSubmit } from "./js/formHandler";
import { getWeatherData } from "./js/getWeatherData";
import { getCityData } from "./js/getCityData";
import { countdown } from "./js/countdown";
import { getImages } from "./js/getImages";

import "./styles/style.scss";

//add event listeners here
const submitButton = document.getElementById("generate");
// event listener on click of button in UI to 'generate'
submitButton.addEventListener("click", performAction);

function performAction(e) {
  console.log("BUTTON CLICKED !!");
  const cont = countdown();
  const submit = handleSubmit(e);
  if (!cont || !submit){
    // validation of input data
    window.alert("Please enter a valid destination and dates!");
  }
}

export { spaceRemover, inputEmpty, handleSubmit, getWeatherData, getCityData, countdown, getImages };
