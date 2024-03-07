"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { Box, Stack, Typography } from "@mui/material";

import ItemDocument from "./ItemDocument";

const UploadDocument = ({
  allFiles = [],
  setAllFiles,
  defaultFiles = [],
  setDefaultFiles,
}) => {
  const onDrop = useCallback((acceptedFiles) => {
    setAllFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const removeFile = (index) => {
    setAllFiles((prevFiles) =>
      prevFiles.filter((file, i) => `${file.path}-${i}` !== index)
    );
  };

  const removeDefaultFile = (index) => {
    setDefaultFiles((prevFiles) =>
      prevFiles.filter((file, i) => `${file.path}-${i}` !== index)
    );
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 10,
    accept: {
      // "application/msword": [],
      // "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      //   [],
      "application/pdf": [],
      "image/jpeg": [],
      "image/png": [],
      "image/gif": [],
    },
  });

  const defaultfiles = defaultFiles.map((file, i) => (
    <ItemDocument
      key={i}
      index={i}
      removeFile={removeDefaultFile}
      file={file}
    />
  ));
  const files = allFiles?.map((file, i) => (
    <ItemDocument key={i} index={i} removeFile={removeFile} file={file} />
  ));

  return (
    <Box>
      <input name="file" {...getInputProps()} />

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
          <Typography variant="h6">Drop or Select files</Typography>
          <Typography variant="body2">
            Drop files here or click
            <Box
              component="span"
              mx={0.5}
              sx={{ color: "#7635dc", textDecoration: "underline" }}
            >
              browse
            </Box>
            thorough your machine
          </Typography>
        </Stack>
      </Box>

      <Stack mt={1} gap={1}>
        {defaultfiles}
        {files}
      </Stack>
    </Box>
  );
};

export default UploadDocument;
