"use client";

import { SnackbarProvider, useSnackbar } from "notistack";

const SnackbarProv = ({ children }) => {
  return <SnackbarProvider>{children}</SnackbarProvider>;
};

export default SnackbarProv;
