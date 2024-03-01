"use client";
import { useMemo, useState } from "react";
import dynamic from "next/dynamic";

import { Box } from "@mui/material";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, false] }],
      ["bold", "italic", "underline"],
      [
        { list: "ordered" },
        { list: "bullet" },
        // { indent: "-1" },
        // { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  },
};

const CustomQuill = ({ content, setContent }) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const [value, setValue] = useState(content);

  const handleChange = (new_content) => {
    setContent(new_content);
    setValue(new_content);
  };

  return (
    <Box
      component={ReactQuill}
      sx={{
        overflow: "hidden",
        position: "relative",
        borderRadius: 2,
        border: "1px solid #919eab33",
        "& .ql-toolbar": {
          border: "none",
          borderBottom: "1px solid #919eab33",
        },
        "& .ql-container": {
          border: "none",
          lineHeight: 1.57143,
          fontSize: "0.875rem",
          fontWeight: 400,
        },
        "& .ql-editor": {
          minHeight: 160,
          maxHeight: 640,
          bgcolor: "#919eab14",
        },
      }}
      theme="snow"
      value={value}
      onChange={handleChange}
      modules={modules}
    />
  );
};

export default CustomQuill;
