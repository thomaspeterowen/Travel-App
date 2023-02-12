function countdown() {
  // function to validate date and calculate countdown till trip.
  // input = none
  // output = none
  const date = document.getElementById("date").value;
  //console.log("::: User date :::" + date);

  if (date) {
    const todayDate = new Date().toISOString().slice(0, 10);
    //console.log("::: Today date :::" + todayDate);
    const diffMilSec = Date.parse(date) - Date.parse(todayDate);
    const diffDays = Math.floor(diffMilSec / (1000 * 60 * 60 * 24));
    let updateText;

    if (diffDays < 0) {
      updateText = "It looks like your trip was in the past!";
    } else if (diffDays < 1) {
      updateText = "Your trip is less than a day away!";
    } else if (diffDays == 1) {
      updateText = "Your trip is only a day away!";
    } else {
      updateText = diffDays + " days till your trip begins!";
    }
    document.getElementById("countdown").innerHTML = updateText;
  } else {
    window.alert("Please enter a valid date!");
  }
}

export { countdown };
