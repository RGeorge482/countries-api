// import npm packages
const express = require("express");
const path = require('path')
const app = express();
const fetch = require("node-fetch");

// use in the app express json, data parsing
app.use(express.json());


// using fetch API, send request to Countries API
app.post("/api/country", async (req, res) => {
  try {
    const countryName = req.body.name;
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );
    const countryData = await response.json();
    //in contryInfo object we save data in json format for each information data that we send to frontend
    const countryInfo = {
      name: countryData[0].name.common,
      capital: countryData[0].capital?.[0],
      population: countryData[0].population,
      region: countryData[0].region,
      subregion: countryData[0].subregion,
      languages: countryData[0].languages,
      currencies: countryData[0].currencies,
      currenciesSymbol: countryData[0].currencies,
      flag: countryData[0].flags.png,
    };

    res.json(countryInfo);
  } catch (error) {
    console.log(error);
  }
});

app.use(express.static(path.join(__dirname + "/public")))

// the app it will run on port 5000
app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});
