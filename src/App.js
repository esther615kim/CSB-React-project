import React, { useState } from "react";
import "./styles.css";
import {
  makeStyles, //스타일링용
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

//스타일링
const useStyles = makeStyles({
  btn: {
    // background: "linear-gradient(45deg, #333,#999)",
    background: "linear-gradient(45deg, #FE6B8b,#ff8353)",
    border: 0,
    borderRadius: 5,
    color: "white",
    margin: 5,
    padding: "10px 30px"
  },
  btnSmall: {
    background: "linear-gradient(45deg, #333,#999)",
    border: 0,
    borderRadius: 5,
    color: "white",
    margin: 5,
    padding: "10px 15px"
  }
});

function StyledButton() {
  const classes = useStyles();
  return <Button className={classes.btn}>Styled Button</Button>;
}
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
      {/* 날짜입력 type="date" 시간입력 type="time"*/}
      <TextField type="date" mt={3} variant="outlined" />
      {/* 이메일 type="email"
      <TextField
        label="your email"
        type="email"
        placeholder="test@test.com"
        mt={3}
      /> */}
      {/* <TextField type="time" mt={3} variant="outlined" /> */}
      {/* 함수를 컴포넌트로 입력할 수 있음!! */}
      <ClickCheckbox />
      <ButtonGroup size="large" variant="contained">
        <Button>save</Button>
        <Button>delete</Button>
        <Button>like</Button>
      </ButtonGroup>
      <StyledButton />
    </div>
  );
}
