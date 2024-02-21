import Image from "next/image";
import prettyBytes from "pretty-bytes";

import { Box, IconButton, ListItemText, Stack } from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import getFileIcon from "@/utils/getFileIcon";

const ItemDocument = ({ removeFile, file }) => {
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
        primary={file.path}
        primaryTypographyProps={{
          fontWeight: 600,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        secondary={fileSize}
        secondaryTypographyProps={{ color: "#919eab" }}
      />
      <IconButton size="small" onClick={() => removeFile(file.path)}>
        <DeleteForeverIcon />
      </IconButton>
    </Stack>
  );
};

export default ItemDocument;
