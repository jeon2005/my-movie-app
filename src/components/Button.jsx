import MuiButton from "@mui/material/Button";

function Button({ text, onButtonClick, ariaLabel }) {
  return (
    <MuiButton
      variant="contained"
      color="white"
      onClick={onButtonClick}
      aria-label={ariaLabel}
    >
      {text}
    </MuiButton>
  );
}

export default Button;
