import React, { useEffect, useState } from "react";
import {
  Typography,
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  Button,
  Box,
  Divider,
  TextField,
  Paper,
} from "@material-ui/core";
import "./App.css";
import { listener, startTablet } from "./SigWebTablet";

const useStyles = makeStyles((theme) => ({
  root: {},
  card: {
    boxShadow: theme.shadows[5],
    outline: "none",
  },
  textField: {
    border: 1,
    background: "grey",
    width: 500,
  },
}));

/* sdk
   https://www.topazsystems.com/web.html
   Dev Guide
   https://www.topazsystems.com/Software/download/sigweb.pdf
   installer
   https://www.topazsystems.com/software/sigweb.exe
*/

function App() {
  const classes = useStyles();
  const [sigCaptured, setSigCaptured] = useState(null);

  listener();

  const handleSig = () => {};

  const handleSigCapture = (sig) => {
    let image = new Image();
    image.src = "data:image/png;base64," + sig;
    setSigCaptured({ image, sig });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Paper
          style={{ width: "100%" }}
          className={classes.card}
          align="center"
        >
          <h2>Add Signature test</h2>
          <Divider />
          <Box p={5}>
            <canvas id="cnv" name="cnv" width="500" height="100" />
          </Box>
          <form action="#" name="FORM1">
            {!sigCaptured ? (
              <Button
                variant="contained"
                onClick={() => {
                  startTablet(handleSigCapture);
                }}
              >
                Sign
              </Button>
            ) : (
              <Button
                onClick={() => {
                  handleSig();
                }}
              >
                Done
              </Button>
            )}
            <Typography variant="body1" style={{margin: 16}}>
              Please have customer sign signature pad.
            </Typography>
            <Box p={2}>
              <Typography>Image:</Typography>
              <img src={sigCaptured?.image.src} />
            </Box>
            <div className="results">
              <Box p={2}>
                <Typography>ImgData:</Typography>
                <TextField
                  className={classes.textField}
                  name="imgData"
                  rows="20"
                  multiline
                  value={sigCaptured?.image.src}
                />
              </Box>
            </div>
          </form>
        </Paper>
      </header>
    </div>
  );
}

export default App;
