import { logout } from "@/actions/auth";
import { MenuItem } from "@mui/material";
import Link from "next/link";

const LogoutBtn = () => {
  return (
    <Link
      href="/"
      style={{ textDecoration: "none", color: "inherit" }}
      onClick={() => logout()}
    >
      <MenuItem
        sx={{
          lineHeight: 1.577,
          fontSize: "0.875rem",
          p: "6px 8px",
          m: 1,
          fontWeight: 700,
          color: "#ff5630",
        }}
      >
        Logout
      </MenuItem>
    </Link>
  );
};

export default LogoutBtn;
