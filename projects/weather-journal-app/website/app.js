/* Global Variables */
// url for api https://openweathermap.org/api
// "Built-in API request by ZIP code"
let baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
// key generated for user thomaspeterowen@gmail.com
// TODO save key in a server side script instead of here?
// units = metric (defined at end of string)
let apiKey = "&appid=38621e60d3342339ccfb250e31b427a9&units=metric";

//click event on 'Generate' button in UI
document.getElementById("generate").addEventListener("click", performAction);

// function to call chained steps, call API and process data, post data to server script and update UI
function performAction(e) {
  const zip = document.getElementById("zip").value + ",de";
  getWeatherData(baseURL, zip, apiKey)
    .then(function (data) {
      postData("/addEntry", {
        temp: data.main.temp,
        date: newDate,
        userResponse: document.getElementById("feelings").value,
      });
    })
    .then(function () {
      updateUI();
    });
}

// function to update UI with data from user and API call
const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    // only process if data is available
    if (allData.length > 0) {
      // use latest added data
      let lastElement = allData[allData.length - 1];
      document.getElementById("date").innerHTML = lastElement.date;
      document.getElementById("temp").innerHTML = lastElement.temp;
      document.getElementById("content").innerHTML = lastElement.userResponse;
    }
  } catch (error) {
    console.log("error", error);
  }
};

const getWeatherData = async (baseURL, zip, key) => {
  const res = await fetch(baseURL + zip + key);
  try {
    // convert data to json format as required
    const data = await res.json();
    if (data.cod == 404) {
      // advise user if postal code is not valid
      window.alert("Please enter a valid postal code in Germany!");
    } else {
      return data;
    }
  } catch (error) {
    console.log("error", error);
  }
};

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

// to post data to server
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    //convert response to json and return from function
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

// call to updateUI on page load, as there may already be data to display
updateUI();
