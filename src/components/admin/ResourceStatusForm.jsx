"use client";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { updateResourceStatus } from "@/actions/admin/resources";
import SubmitBtn from "../SubmitBtn";
import { enqueueSnackbar } from "notistack";

const ResourceStatusForm = ({ resourceId, status }) => {
  const [state, formAction] = useFormState(updateResourceStatus, null);

  useEffect(() => {
    if (state?.status === "success") {
      enqueueSnackbar("Change Status Success!!", { variant: "success" });
    }
  }, [state]);

  const [resourceStatus, setResourceStatus] = useState(status);
  const handleChange = (event) => {
    setResourceStatus(event.target.value);
  };
  return (
    <Grid xs={12} md={8}>
      <Stack
        mt={2}
        direction="row"
        justifyContent="flex-end"
        gap={2}
        alignItems="center"
        component="form"
        action={formAction}
      >
        <input hidden name="id" defaultValue={resourceId} />
        <FormControl>
          <InputLabel>Status</InputLabel>
          <Select
            name="status"
            value={resourceStatus}
            label="Status"
            onChange={handleChange}
          >
            <MenuItem value={"Pending"}>Pending</MenuItem>
            <MenuItem value={"Approved"}>Approved</MenuItem>
            <MenuItem value={"Rejected"}>Rejected</MenuItem>
          </Select>
        </FormControl>

        <Box>
          <SubmitBtn title="Save Status" />
        </Box>
      </Stack>
    </Grid>
  );
};

export default ResourceStatusForm;
