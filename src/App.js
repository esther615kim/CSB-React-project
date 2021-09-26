import React, { useState } from "react";
import "./styles.css";
import {
  Checkbox,
  Button,
  Typography,
  TextField,
  AppBar,
  ButtonGroup,
  FormControlLabel
} from "@material-ui/core";
//import { CheckBox } from "@material-ui/icons";
//import { SaveIcon } from "@mui/icons-material";

function ClickCheckbox() {
  const [checked, setChecked] = useState(true); //기본설정:true;

  return (
    <>
      <FormControlLabel
        label="Testing checkbox"
        control={
          <Checkbox
            //disabled
            color="primary"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)} //check 바꿔주기
          />
        }
      />
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <TextField />
      {/* 함수로도 된다잉!! */}
      <ClickCheckbox />
      <ButtonGroup size="large" variant="contained">
        <Button>save</Button>
        <Button>delete</Button>
        <Button>like</Button>
      </ButtonGroup>
    </div>
  );
}
