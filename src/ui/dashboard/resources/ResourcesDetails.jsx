"use client";

import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import Section from "@/components/Section";
import Detail from "@/components/Detail";
import ItemDocument from "@/components/ItemDocument";

const ResourcesDetails = () => {
  const [status, setStatus] = useState("pending");
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <Box>
      <Grid container>
        <Section
          title="Details"
          subtitle="Here are the details of the resource"
        >
          <Stack gap={1}>
            <Detail title="Title" value="Resource Sample Title" />
            <Detail title="Description">
              <Typography variant="body1" fontWeight={500}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                nemo soluta laborum cum quam quod quo sit accusamus aliquid sed.
              </Typography>
            </Detail>
            <Detail title="File">
              <ItemDocument
                file={{
                  path: "sampleforms.pdf",
                  name: "sampleforms.pdf",
                  size: 123412,
                }}
              />
            </Detail>
          </Stack>
        </Section>

        <Grid md={4} />

        <Grid xs={12} md={8}>
          <Stack
            mt={2}
            direction="row"
            justifyContent="flex-end"
            gap={2}
            alignItems="center"
          >
            <FormControl>
              <InputLabel>Status</InputLabel>
              <Select value={status} label="Status" onChange={handleChange}>
                <MenuItem value={"pending"}>Pending</MenuItem>
                <MenuItem value={"approved"}>Approved</MenuItem>
                <MenuItem value={"rejected"}>Rejected</MenuItem>
              </Select>
            </FormControl>

            <Box>
              <Button variant="contained">Save Status</Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResourcesDetails;
