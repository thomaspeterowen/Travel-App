function handleSubmit(event) {
  // preventDefault required
  event.preventDefault();

  // check what text was put into the form field
  let url = document.getElementById("dest").value;
  console.log(url);
  // check validity of url
  let validity = Client.checkURL(url);

  if (validity) {
    Client.getWeatherData(url).then(function (data) {
      console.log(data);
      document.getElementById("content").innerHTML = data.confidence;
    });
  } else {
    window.alert("Please enter a valid url!");
  }
  console.log("::: Form Submitted :::");
}

export { handleSubmit };
