const getCityData = async (location) => {
    const res = await fetch("/geonames", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"location": location})
    });
    try {
      // convert data to json format as required
      const data = await res.json();
      //console.log(data);
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

  export { getCityData };
