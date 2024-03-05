"use client";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  LinearProgress,
} from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { enqueueSnackbar } from "notistack";
import { redirect } from "next/navigation";

const DeleteBtn = ({ title, action, href, id }) => {
  const [state, formAction] = useFormState(action, null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (state?.status === "success") {
      enqueueSnackbar("Deletion Success!", { variant: "success" });
      redirect(href);
    }
    if (state?.status === "fail") {
      enqueueSnackbar("Deletion Failed!", { variant: "error" });
    }
  }, [state]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function Submit() {
    const status = useFormStatus();

    return (
      <Button autoFocus type="submit" disabled={status?.pending}>
        {status?.pending ? <CircularProgress size={30} /> : "Confirm"}
      </Button>
    );
  }

  return (
    <>
      <Button
        startIcon={<DeleteForeverIcon />}
        size="small"
        variant="outlined"
        // LinkComponent={Link}
        // href={`/admin/articles/edit/${id}`}
        onClick={handleClickOpen}
      >
        Delete
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          action: formAction,
        }}
      >
        <input hidden name="id" defaultValue={id} />

        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this? This action cannot be undone.
            If you're sure, click '<b>Confirm</b>' to delete, or '<b>Cancel</b>'
            to keep it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Submit />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteBtn;
