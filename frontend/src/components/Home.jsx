import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  AppBar,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useStyles from "./HomeStyles";

export default function Home() {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Home
          </Typography>
          <Typography color="primary">prim</Typography>
          <Typography
            onClick={() => {
              navigate("/search");
            }}
            // className={classes.appBarrLink}
            variant="h6"
            color="inherit"
          >
            Country Page
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h3" align="center" gutterBottom>
            Welcome to Search Country App
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            This app fetches data from  <a href="https://restcountries.com/#rest-countries">REST Countries API</a> using NodeJS fetch API
            and Express in the backend, and for frontend to get input from the
            user and display response, app is built with ReactJS framework,
            Material UI library for styling and Axios library to perform CRUD
            operations between frontend and backend.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justifyContent="center">
              <Button
                onClick={() => {
                  navigate("/search");
                }}
                variant="contained"
                color="primary"
              >
                Search Country Page
              </Button>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
}
