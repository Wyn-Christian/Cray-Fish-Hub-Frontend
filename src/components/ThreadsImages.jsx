import { Box, ImageList } from "@mui/material";
import React from "react";
import PreviewImage from "./PreviewImage";

const ThreadsImages = ({ images }) => (
  <Box
    sx={{
      m: "auto",
      width: "100%",
      maxWidth: 650,
      maxHeight: 450,
      overflowY: "auto",
      mt: 2,
    }}
  >
    <ImageList variant="masonry" cols={2} gap={8}>
      {images.map((image, i) => (
        <PreviewImage key={i} src={image.path} alt={`Preview ${i}`} />
      ))}
    </ImageList>
  </Box>
);

export default ThreadsImages;
