import ItemDocument from "@/components/ItemDocument";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";

const ResourcesDetails = ({ _id, title, description, author, files }) => {
  return (
    <Container maxWidth="sm" sx={{ mt: 2 }}>
      <Typography variant="h6">Description:</Typography>
      <Typography variant="body1">{description}</Typography>

      <Divider sx={{ my: 1.5 }} />
      <Typography variant="h6">Files:</Typography>

      <Stack gap={1} mt={2}>
        {files.map((file, i) => (
          <ItemDocument key={i} file={file} />
        ))}
      </Stack>
    </Container>
  );
};

export default ResourcesDetails;
