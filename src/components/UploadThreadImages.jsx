"use client";

import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import { Box, ImageList, Stack, Typography } from "@mui/material";

import PreviewImage from "./PreviewImage"; // Assuming this is the component for previewing images
import { enqueueSnackbar } from "notistack";

const UploadThreadImages = ({
  allImages = [],
  setAllImages,
  uploadedImages = [],
  setUploadedImages,
}) => {
  const [previewPhotos, setPreviewPhotos] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      let totalImages = previewPhotos.length + uploadedImages.length;

      if (totalImages + acceptedFiles.length >= 10) {
        enqueueSnackbar("Image upload exceeded (Max of 10)", {
          variant: "warning",
        });
      }

      setAllImages((prevFiles) => [...prevFiles, ...acceptedFiles]);

      const newPreviewPhotos = acceptedFiles
        .slice(0, 10 - totalImages)
        .map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );

      setPreviewPhotos((prevPhotos) => [...prevPhotos, ...newPreviewPhotos]);
    },
    [previewPhotos]
  );

  const removeImage = (index) => {
    setAllImages((prevFiles) =>
      prevFiles.filter((file, i) => `${file.path}-${i}` !== index)
    );
    setPreviewPhotos((prevPhotos) =>
      prevPhotos.filter((_, i) => `${_.path}-${i}` !== index)
    );
  };

  const removeUploadedImage = (index) => {
    setUploadedImages((prevFiles) =>
      prevFiles.filter((file, i) => `${file.path}-${i}` !== index)
    );
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 10,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/gif": [],
    },
  });

  const uploaded_images = uploadedImages.map((image, i) => (
    <PreviewImage
      key={i}
      src={image.path}
      alt={`Preview ${i}`}
      removeImage={() => removeUploadedImage(`${image.path}-${i}`)}
    />
  ));

  const images = previewPhotos.map((image, i) => (
    <PreviewImage
      key={i}
      src={image.preview}
      alt={`Preview ${i}`}
      removeImage={() => removeImage(`${image.path}-${i}`)}
    />
  ));

  return (
    <Box>
      <input name="images" {...getInputProps()} />

      <Box
        {...getRootProps()}
        sx={{
          p: 2,
          outline: "none",
          borderRadius: 1,
          cursor: "pointer",
          overflow: "hidden",
          position: "relative",
          backgroundColor: "#919eab14",
          border: "1px dashed rgba(145, 158, 171, 0.2)",
          transition:
            "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, padding 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          "&:hover": {
            opacity: 0.72,
          },
        }}
      >
        <Stack
          gap={1}
          sx={{
            flexFlow: "column wrap",
            alignItems: "center",
            justifyContent: "center",
            opacity: 1,
            transform: "none",
            textAlign: "center",
          }}
        >
          <Typography variant="h6">
            Drop or Select images (Max 10 photos)
          </Typography>
          <Typography variant="body2">
            Drop files here or click
            <Box
              component="span"
              mx={0.5}
              sx={{ color: "#7635dc", textDecoration: "underline" }}
            >
              browse
            </Box>
            through your machine
          </Typography>
        </Stack>
      </Box>

      {/* <Stack direction="row" flexWrap="wrap" mt={1} gap={1}> */}
      <Box sx={{ width: "100%", maxHeight: 450, overflowY: "auto", mt: 2 }}>
        <ImageList variant="masonry" cols={2} gap={8}>
          {uploaded_images}
          {images}
        </ImageList>
      </Box>
      {/* </Stack> */}
    </Box>
  );
};

export default UploadThreadImages;
