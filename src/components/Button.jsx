// export default function Button({ text, onButtonClick }) {
//   return (
//     <button
//       onClick={onButtonClick}
//       className="py-2 px-4  text-gray-800 rounded-md
// hover:shadow-lg hover:shadow-gray-400/50 transition"
//     >
//       {text}
//     </button>
//   );
// }

import MuiButton from "@mui/material/Button";

function Button({ text, onButtonClick }) {
  return (
    <MuiButton variant="contained" color="white" onClick={onButtonClick}>
      {text}
    </MuiButton>
  );
}

export default Button;
