"use client";

import { useState } from "react";

import { Box, IconButton, ImageListItem, Modal } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const PreviewImage = ({ src, alt, removeImage }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ImageListItem>
        <img src={src} alt={alt} loading="lazy" onClick={() => setOpen(true)} />
        {removeImage && (
          <IconButton
            onClick={removeImage}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              color: "rgba(255, 255, 255, 0.54)",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.9)",
              },
            }}
          >
            <CancelIcon />
          </IconButton>
        )}
      </ImageListItem>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Box
            component="img"
            src={src}
            alt={alt}
            sx={{ m: "auto", maxWidth: ["90vw", "50vw"] }}
            loading="lazy"
          />
        </Box>
      </Modal>
    </>
  );
};

export default PreviewImage;
