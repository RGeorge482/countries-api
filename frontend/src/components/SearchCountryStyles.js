import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  infoContainer: {
    border: "2px solid black",
    backgroundColor: "#e0e0e0",
    borderRadius: "5px",
    marginTop: "20px",
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(3),
  },
  button: {
    marginRight: "150px",
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export default useStyles;
