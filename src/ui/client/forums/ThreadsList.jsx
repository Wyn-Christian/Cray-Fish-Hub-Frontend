import Link from "next/link";
import { Container, Stack, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

import ProfileLink from "@/components/ProfileLink";
import moment from "moment";
import SearchField from "@/components/admin/SearchField";

const ThreadPaper = ({ _id, author, title, category, createdAt }) => {
  return (
    <Stack
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        "&:hover": {
          boxShadow: "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
        },
      }}
    >
      <Stack gap={1} p={3} bgcolor="#fee9d1">
        <Stack
          component={Link}
          href={`/forums/thread/${_id}`}
          sx={{
            textDecoration: "none",
            color: "inherit",
            "&:hover": {
              "& .MuiTypography-h6": {
                textDecoration: "underline",
              },
            },
          }}
        >
          <Typography
            variant="h6"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            {title}
          </Typography>
          <Typography variant="subtitle2" fontWeight={600} color="#585858">
            {category}
          </Typography>
        </Stack>

        <ProfileLink
          href={`/profile/${author?._id}`}
          src={author?.profilePath}
          name={author?.name}
          date={moment(createdAt).format("MMM DD, YYYY")}
        />
      </Stack>
    </Stack>
  );
};

const ThreadsList = ({ threads }) => {
  return (
    <Container sx={{ mt: 3 }}>
      <Stack mb={3}>
        <SearchField />
      </Stack>

      <Masonry columns={{ xs: 1, sm: 2, md: 3 }}>
        {threads.map((thread) => (
          <ThreadPaper key={thread._id} {...thread} />
        ))}
      </Masonry>
    </Container>
  );
};

export default ThreadsList;
