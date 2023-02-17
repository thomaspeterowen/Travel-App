const getWeatherData = async (lati, lngi) => {
    // preparation to call weatherbit API
    const res = await fetch("/weatherbit", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"lat": lati, "lng": lngi})
    });
    try {
      // convert data to json format as required
      const data = await res.json();
      return data;

      /*if (data.status.code == 0) {
        // continue
        return data;
      } else {
        // advise user of API error
        window.alert("API call returned an error, please check input!");
      }*/
    } catch (error) {
      console.log("error", error);
    }
  };

  export { getWeatherData };
