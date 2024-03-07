import moment from "moment";

import { Avatar, Box, ListItemText, Stack, Typography } from "@mui/material";
import Header from "@/components/Header";
import ResourcesDetails from "@/ui/client/resources/ResourcesDetails";

import { getResourcesDetails } from "@/actions/admin/resources";

const ResourceHeader = ({ title, uploader, createdAt }) => (
  <Header>
    <Stack gap={3}>
      <Typography variant="h2">{title}</Typography>

      <Stack gap={2} direction="row" alignItems="center">
        <Avatar
          alt={uploader?.name}
          src={uploader?.profilePath || "/assets/profile/img-1.png"}
          sx={{ width: 50, height: 50 }}
        />
        <ListItemText
          primary={uploader?.name}
          primaryTypographyProps={{ variant: "h6" }}
          secondary={moment(createdAt).format("MMM DD, YYYY")}
        />
      </Stack>
    </Stack>
  </Header>
);

const ResourcesDetailsPage = async ({ params }) => {
  const resource = await getResourcesDetails(params.id);

  return (
    <Box mb={30}>
      <ResourceHeader {...resource} />

      <ResourcesDetails {...resource} />
    </Box>
  );
};

export default ResourcesDetailsPage;
