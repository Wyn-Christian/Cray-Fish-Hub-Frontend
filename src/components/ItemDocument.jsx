import Image from "next/image";
import prettyBytes from "pretty-bytes";

import { Box, IconButton, ListItemText, Stack } from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import getFileIcon from "@/utils/getFileIcon";

const ItemDocument = ({ removeFile, downloadFile, file }) => {
  const fileSize =
    typeof file.size === "number" ? prettyBytes(file.size) : "Unknown size";
  return (
    <Stack
      key={file.path}
      sx={{
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        my: 1,
        p: "8px 12px",
        borderRadius: 1,
        border: "1px solid #919eab29",
      }}
    >
      <Box sx={{ minWidth: "30px" }}>
        <Image
          src={getFileIcon(file.path)}
          alt="File Icon"
          width={30}
          height={30}
        />
      </Box>
      <ListItemText
        sx={{ flex: "1 1 auto" }}
        primary={file.name}
        primaryTypographyProps={{
          fontWeight: 600,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        secondary={fileSize}
        secondaryTypographyProps={{ color: "#919eab" }}
      />
      {removeFile ? (
        <IconButton size="small" onClick={() => removeFile(file.path)}>
          <ClearIcon />
        </IconButton>
      ) : (
        <IconButton
          size="small"
          onClick={() => {
            window.open(file.path, "_blank", "noopener,noreferrer");
          }}
        >
          <FileDownloadIcon />
        </IconButton>
      )}
    </Stack>
  );
};

export default ItemDocument;
