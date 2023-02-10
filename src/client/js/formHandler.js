function handleSubmit(event) {
  // preventDefault required
  event.preventDefault();

  // check what text was put into the form field
  let url = document.getElementById("name").value;
  console.log(url);
  // check validity of url
  let validity = Client.checkURL(url);

if(validity){
  Client.getWeatherData(url).then(function (data){
    console.log(data);
    // update ui elements using data from API response
    // document url
    document.getElementById("results_div").innerHTML = url;
    // update agreement
    document.getElementById("agreement_div").innerHTML = data.agreement;
    // update confidence
    document.getElementById("confidence_div").innerHTML = data.confidence;
    // update irony score
    document.getElementById("irony_div").innerHTML = data.irony;
    // update with sample sentence
    document.getElementById("sample_sentence_div").innerHTML = data.sentence_list[0].text;
  });
}else {
  window.alert("Please enter a valid url!");
}
console.log("::: Form Submitted :::");
}

export { handleSubmit };
