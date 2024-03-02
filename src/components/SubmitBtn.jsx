"use client";
import { Box, Button, CircularProgress } from "@mui/material";
import { useFormStatus } from "react-dom";

const SubmitBtn = ({ title, disabled = false }) => {
  const { pending } = useFormStatus();

  return (
    <Box sx={{ m: 0, position: "relative" }}>
      <Button variant="contained" type="submit" disabled={pending || disabled}>
        {title}
      </Button>
      {pending && (
        <CircularProgress
          size={30}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-15px",
            marginLeft: "-15px",
          }}
        />
      )}
    </Box>
  );
};

export default SubmitBtn;
