function handleSubmit(event) {
  // preventDefault required
  event.preventDefault();

  // check what text was put into the form field
  let dest = document.getElementById("dest").value;
  // check validity of dest (not empty)
  let empty = Client.inputEmpty(dest);

  if (!empty) {
    Client.getCityData(dest).then(function (data) {
      console.log(data);
      const lati = data.geonames[0].lat;
      const lngi = data.geonames[0].lng;
      document.getElementById("countryName").innerHTML = dest + ", " + data.geonames[0].countryName;
      
      Client.getWeatherData(lati, lngi).then(function (data) {
      console.log(data);
      document.getElementById("temp").innerHTML = "Weather forecast: " + data.data[0].app_temp + " degrees.";
      document.getElementById("clouds").innerHTML = data.data[0].clouds + " % cloud cover.";
      document.getElementById("precip").innerHTML = data.data[0].precip + " % chance of rain.";
      });
    })
      
    Client.getImages(Client.spaceRemover(dest)).then(function (data) {
      console.log(data);
      document.getElementById("pic").src = data.hits[0].previewURL;
    });    
    return true;
  } else {
    return false;
  }
}

export { handleSubmit };
