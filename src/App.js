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
import { onClear, onDone, onSign } from "./SigWebTablet";

/* sdk
   https://www.topazsystems.com/web.html
   Dev Guide
   https://www.topazsystems.com/Software/download/sigweb.pdf
   installer
   https://www.topazsystems.com/software/sigweb.exe
*/

function App() {
  const [sigCaptured, setSigCaptured] = useState(null);

  const handleSigCapture = (sig) => {
    console.log('===> Signature image: ', sig);
    let image = new Image();
    image.src = "data:image/png;base64," + sig;
    setSigCaptured({ image, sig });
  };
  const handleSign = ()=>{
    onSign() 
  }
  const handleDone = ()=>{
    onDone(handleSigCapture)    
  }
  const handleClear = ()=>{
    onClear()
  }
  return (
    <div className="App">
      <br /><br />
      <canvas id="cnv" name="cnv" width="500" height="100"></canvas>
      <br />
      <form action="#" name='FORM1'>
        <p>
          <input id="SignBtn" name="SignBtn" type="button" defaultValue="Sign"  onClick={handleSign} />&nbsp;&nbsp;&nbsp;&nbsp;
          <input id="button1" name="ClearBtn" type="button" defaultValue="Clear" onClick={handleClear} />&nbsp;&nbsp;&nbsp;&nbsp;

          <input id="button2" name="DoneBtn" type="button" defaultValue="Done" onClick={handleDone}/>&nbsp;&nbsp;&nbsp;&nbsp;

          {/* <input type='hidden' name="bioSigData" />
          <input type='hidden' name="sigImgData" />
          <br /><br />
          <textarea name="sigStringData" rows="20" cols="50">SigString: </textarea>
          <textarea name="sigImageData" rows="20" cols="50">Base64 String: </textarea> */}
        </p>
      </form>
      {sigCaptured&&<div>
        <span>Image:</span>
        <img src={sigCaptured?.image.src} />        
      </div>}
    </div>
  );
}

export default App;
