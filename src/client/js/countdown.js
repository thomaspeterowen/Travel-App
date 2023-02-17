function countdown() {
  // function to validate date and calculate/display countdown days until trip.
  // input = none
  // output = true(valid)/false(not valid)
  const date = document.getElementById("date").value;
  const enddate = document.getElementById("enddate").value;

  if (date && enddate) {
    const todayDate = new Date().toISOString().slice(0, 10);
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

    const durationSeconds = Date.parse(enddate) - Date.parse(date);
    const duration = Math.floor(durationSeconds / (1000 * 60 * 60 * 24));
    document.getElementById("duration").innerHTML = "Trip duration: " + duration + " days.";

    return true;
  } else {
    return false;
  }
}

export { countdown };
