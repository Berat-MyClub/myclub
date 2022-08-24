import styled from "styled-components";
import { TextField } from "@mui/material";

const Box = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

export default function InputField({ label, required, type, onChange }) {
  return (
    <Box>
      <TextField
        onChange={onChange}
        sx={{
          borderRadius: "7px",
          border: "none",
          backgroundColor: "#1b3031",
          '& .MuiInputBase-input': {
            color: '#fff'
          },
          "& .MuiFormLabel-root": {
            color: "#fff",
            fontFamily: "Poppins",
            fontSize: ".85rem",
            letterSpacing: ".5px",
          },
          "& .Mui-focused": { color: "#fff" },
          "& .Mui-focused > .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2d97ac",
          },
        }}
        fullWidth
        id="fullWidth"
        label={label}
        variant="outlined"
        required={required}
        type={type}
      />
    </Box>
  );
}
