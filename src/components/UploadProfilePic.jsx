"use client";

import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import { Box, Stack, Typography } from "@mui/material";

import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Image from "next/image";

const UploadProfilePic = ({ photo, setPhoto, defaultPhoto }) => {
  // const onDrop = useCallback((uploaded_photo) => {
  //   setPhoto(uploaded_photo[0]);
  //   console.log(photo.path);
  // }, []);

  const onDrop = useCallback((uploaded_photo) => {
    let new_photo = Object.assign(uploaded_photo[0], {
      preview: URL.createObjectURL(uploaded_photo[0]),
    });

    setPhoto(new_photo);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    maxFiles: 1,
    accept: {
      "image/*": [],
    },
    maxSize: 3000000,
  });

  useEffect(() => {
    return () => URL.revokeObjectURL(photo?.preview);
  }, [photo]);

  return (
    <Box>
      <Box
        {...getRootProps()}
        sx={{
          p: 1,
          m: "auto",
          width: 144,
          height: 144,
          cursor: "pointer",
          overflow: "hidden",
          borderRadius: "50%",
          border: "1px dashed #919eab33",
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        <input name="profile" {...getInputProps()} />
        <Box
          width="100%"
          height="100%"
          overflow="hidden"
          borderRadius="50%"
          position="relative"
        >
          {defaultPhoto && !photo && (
            <Box
              sx={{
                overflow: "hidden",
                position: "relative",
                verticalAlign: "bottom",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
            >
              <Image src={defaultPhoto} alt="User Profile pic" fill />
            </Box>
          )}

          {photo && (
            <Box
              sx={{
                overflow: "hidden",
                position: "relative",
                verticalAlign: "bottom",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
            >
              <Image src={photo.preview} alt="User Profile pic" fill />
            </Box>
          )}

          <Stack
            sx={{
              gap: 1,
              alignItems: "center",
              justifyContent: "center",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 9,
              borderRadius: "50%",
              position: "absolute",
              color: photo ? "#fff" : "#919eab",
              backgroundColor:
                defaultPhoto || photo ? "#241e16a3" : "#919eab14",
              transition: "opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              opacity: defaultPhoto || photo ? 0 : 1,
              "&:hover": {
                opacity: 0.72,
              },
            }}
          >
            <CameraAltIcon fontSize="large" />
            <Typography variant="caption">Upload photo</Typography>
          </Stack>
        </Box>
      </Box>
      <Typography
        variant="caption"
        sx={{
          m: "24px auto 0px",
          color: "#919eab",
          display: "block",
          textAlign: "center",
        }}
      >
        Allowed *.jpeg, *.jpg, *.png, *.gif
        <br />
        max size of 3Mb
      </Typography>
    </Box>
  );
};

export default UploadProfilePic;
