

import MuiButton from "@mui/material/Button";

function Button({ text, onButtonClick }) {
  return (
    <MuiButton variant="contained" color="white" onClick={onButtonClick}>
      {text}
    </MuiButton>
  );
}

export default Button;
