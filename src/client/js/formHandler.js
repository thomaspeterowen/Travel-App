function handleSubmit(event) {
  // preventDefault required
  event.preventDefault();

  // check what text was put into the form field
  let dest = document.getElementById("dest").value;
  console.log(dest);
  // check validity of url
  //let validity = Client.checkURL(url);
  let validity = true;

  if (validity) {
    Client.getCityData(dest).then(function (data) {
      console.log(data);
      const lati = data.geonames[0].lat;
      const lngi = data.geonames[0].lng;
      document.getElementById("lat").innerHTML = lati;
      document.getElementById("lng").innerHTML = lngi;
      document.getElementById("countryName").innerHTML = data.geonames[0].countryName;
      
      Client.getWeatherData(lati, lngi).then(function (data) {
      console.log(data);
      document.getElementById("temp").innerHTML = data.data[0].app_temp;
      //document.getElementById("lng").innerHTML = data.geonames[0].lng;
      //document.getElementById("countryName").innerHTML = data.geonames[0].countryName;
      });
    })
      
    

    Client.getImages(Client.spaceRemover(dest)).then(function (data) {
      console.log(data);
      document.getElementById("pic").src = data.hits[0].previewURL;
    });    
  } else {
    window.alert("Please enter a valid url!");
  }

  

  console.log("::: Form Submitted :::");
}

export { handleSubmit };
