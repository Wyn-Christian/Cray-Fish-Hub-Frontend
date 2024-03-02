import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import ProfileLink from "./ProfileLink";
import Link from "next/link";
import moment from "moment";

const ArticlePaper = ({ _id, title, content, status, author, createdAt }) => {
  return (
    <Grid xs={12} md={6} lg={4}>
      <Stack
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
          height: "100%",
          "&:hover": {
            boxShadow:
              "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
          },
        }}
      >
        <Stack
          gap={1}
          p={3}
          bgcolor="#fee9d1"
          height="100%"
          justifyContent="space-between"
        >
          <Stack gap={0.5}>
            <Box
              component={Link}
              href={`/articles/${_id}`}
              sx={{
                textDecoration: "none",
                color: "inherit",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              <Typography variant="h5">{title}</Typography>
            </Box>
          </Stack>

          <ProfileLink
            href={`/profile/${author?._id}`}
            src={author?.name}
            name={author?.name}
            date={moment(createdAt).format("MMM DD, YYYY")}
          />
        </Stack>
      </Stack>
    </Grid>
  );
};

export default ArticlePaper;
