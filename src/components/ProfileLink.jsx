import Link from "next/link";
import { Avatar, ListItemText, Stack } from "@mui/material";

const ProfileLink = ({ href, src, name = "Unknown", date }) => {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        pt: 1.5,
        color: "#212b36",
        textDecoration: "none",
        "&:hover": {
          "& .MuiListItemText-primary": { textDecoration: "underline" },
        },
      }}
      component={Link}
      href={href}
    >
      <Avatar
        src={src || "/assets/profile/img-1.png"}
        alt={name}
        sx={{ mr: 1 }}
      />
      <ListItemText
        primary={name}
        secondary={date}
        primaryTypographyProps={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
        secondaryTypographyProps={{
          sx: {
            lineHeight: 1.5,
            fontWeight: 400,
            color: "#919eab",
            fontSize: "0.75rem",
          },
        }}
      />
    </Stack>
  );
};

export default ProfileLink;
