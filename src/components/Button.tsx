import MuiButton from "@mui/material/Button";

function Button({
  text,
  onButtonClick,
}: {
  text: string;
  onButtonClick?: () => void;
}) {
  return (
    <MuiButton variant="contained" color="primary" onClick={onButtonClick}>
      {text}
    </MuiButton>
  );
}

export default Button;
