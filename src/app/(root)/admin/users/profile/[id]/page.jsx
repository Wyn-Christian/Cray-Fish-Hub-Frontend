import Link from "next/link";

import { Box, Button, Container, Stack } from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";

import DeleteBtn from "@/components/DeleteBtn";

import UserProfile from "@/ui/dashboard/users/UserProfile";

import { deleteUser, getUserDetail } from "@/actions/admin/users";
import { getAllThreadsByUser } from "@/actions/users/forums";
import { getAllResourcesByUser } from "@/actions/admin/resources";

const UserProfilePage = async ({ params }) => {
  let user = await getUserDetail(params.id);
  const threads = await getAllThreadsByUser(params.id);
  const resources = await getAllResourcesByUser(params.id);

  return (
    <Container>
      <Box mb={{ xs: 3, md: 5 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            disableRipple
            startIcon={<ArrowBackIosIcon />}
            size="large"
            LinkComponent={Link}
            href="/admin/users/list"
          >
            Back
          </Button>

          <Stack direction="row" gap={1}>
            <DeleteBtn
              id={params.id}
              href="/admin/users/list"
              action={deleteUser}
              title={`Delete ${user.name}?`}
            />

            <Button
              startIcon={<EditIcon />}
              size="small"
              variant="contained"
              LinkComponent={Link}
              href={`/admin/users/edit/${params.id}`}
            >
              Edit
            </Button>
          </Stack>
        </Stack>
      </Box>

      <UserProfile
        user={user}
        threads={threads.data}
        resources={resources.data}
      />
    </Container>
  );
};

export default UserProfilePage;
