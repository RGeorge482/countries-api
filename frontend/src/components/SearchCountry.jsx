import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useStyles from "./SearchCountryStyles";
import {
  Typography,
  AppBar,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  CardContent,
  CardMedia,
} from "@material-ui/core";

export default function SearchCountry() {
  const [country, setCountry] = useState("");
  const [countryInfo, setCountryInfo] = useState(null);
  const navigate = useNavigate();
  const classes = useStyles();

  // takes user input and sends it to the backend using Axios library
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/country", { name: country })
      .then((response) => {
        setCountryInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* button navigation to Home page */}
          <Typography
            onClick={() => {
              navigate("/");
            }}
            variant="h6"
            color="inherit"
          >
            Home
          </Typography>
          <Typography color="primary">prim</Typography>
          <Typography variant="h6" color="inherit">
            Country Page
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Search Country
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Using this app you can get information about each country's capital,
            region, sub-region, population count, languages, currencies,
            currency symbol and country flag
          </Typography>

          <Container maxWidth="md">
            <form onSubmit={handleSubmit}>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    {/* input field that take the input from the user */}
                    <TextField
                      value={country}
                      onChange={(event) => setCountry(event.target.value)}
                      id="outlined-basic"
                      label="Enter Country"
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item>
                    {/* button to send the request */}
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="medium"
                    >
                      Display Country
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </form>

            {countryInfo && (
              <div>
                {/* container to display the country information */}
                <Grid container className={classes.infoContainer}>
                  <Grid>
                    {/* container used to display the flag */}
                    <CardMedia
                      component="img"
                      image={countryInfo.flag}
                      style={{ height: "100%" }}
                      alt="no picture"
                    />
                  </Grid>

                  <Grid>
                    {/* container used to display data information about each country  */}
                    <CardContent sx={{ flex: 1 }}>
                      <Typography component="div" variant="h4">
                        {countryInfo.name}
                      </Typography>
                      <Typography variant="body1" color="inherit">
                        Capital: {countryInfo.capital}
                      </Typography>
                      <Typography variant="body1" color="inherit">
                        Region: {countryInfo.region}
                      </Typography>
                      <Typography variant="body1" color="inherit">
                        Subregion: {countryInfo.subregion}
                      </Typography>
                      <Typography variant="body1" color="inherit">
                        Population: {countryInfo.population}
                      </Typography>
                      <Typography variant="body1" color="inherit">
                        Currencies Name:{" "}
                        {Object.values(countryInfo.currencies)[0].name}
                      </Typography>
                      <Typography variant="body1" color="inherit">
                        Currencies Symbol:{" "}
                        {Object.values(countryInfo.currenciesSymbol)[0].symbol}
                      </Typography>
                      <Typography variant="body1" color="inherit">
                        Language: {Object.values(countryInfo.languages)[0]}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </div>
            )}
          </Container>
        </Container>
      </div>
    </div>
  );
}
