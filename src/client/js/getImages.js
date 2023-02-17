const getImages = async (dest) => {     
    // preparation to call pixabay API
    const res = await fetch("/pixabay", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"dest": dest})
    });
    try {
      // convert data to json format as required
      const data = await res.json();
      return data;
      //console.log(data);
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

  export { getImages };
