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

      </header>
    </div>
  );
}

export default App;
