"use client";

import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import Section from "@/components/Section";
import Detail from "@/components/Detail";
import ItemDocument from "@/components/ItemDocument";
import ResourceStatusForm from "@/components/admin/ResourceStatusForm";

const ResourcesDetails = ({
  _id,
  title,
  description,
  category,
  status,
  files,
  uploader,
}) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Section
          title="Details"
          subtitle="Here are the details of the resource"
        >
          <Stack gap={2}>
            <Detail title="Title" value={title} />
            <Detail title="Category" value={category} />
            <Detail title="Description">
              <Typography variant="body1" fontWeight={500}>
                {description}
              </Typography>
            </Detail>
            <Detail title="Files">
              <Stack gap={1}>
                {files?.map((file, i) => (
                  <ItemDocument key={i} file={file} />
                ))}
              </Stack>
            </Detail>
          </Stack>
        </Section>

        <Section title="Uploader" subtitle="Uploader's details">
          <Stack gap={1}>
            <Detail title="Name" value={uploader?.name} />
            <Detail title="Username" value={`@ ${uploader?.username}`} />
            <Detail title="Email" value={uploader?.email} />
          </Stack>
        </Section>

        <Grid md={4} />

        <ResourceStatusForm resourceId={_id} status={status} />
      </Grid>
    </Box>
  );
};

export default ResourcesDetails;
