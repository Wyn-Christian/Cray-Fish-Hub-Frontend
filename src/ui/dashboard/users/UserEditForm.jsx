"use client";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import {
  Box,
  Button,
  Card,
  CardHeader,
  CircularProgress,
  FormControl,
  InputAdornment,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import UploadProfilePic from "@/components/UploadProfilePic";
import { editUser } from "@/actions/admin/users";
import SubmitBtn from "@/components/SubmitBtn";

const UserEditForm = ({ user }) => {
  const [role, setRole] = useState(user.userType);
  const [state, formAction] = useFormState(editUser, user);

  const [profilePic, setProfilePic] = useState(null);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <form action={formAction}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Card
            elevation={0}
            sx={{
              boxShadow:
                "#919eab33 0px 0px 2px 0px, #919eab33 0px 12px 24px -4px",
              borderRadius: 4,
              zIndex: 0,
              p: "10px 24px 40px",
            }}
          >
            <CardHeader title="Profile Pic" />

            <Box mb={5}>
              <UploadProfilePic
                photo={profilePic}
                setPhoto={setProfilePic}
                defaultPhoto={"/assets/profile/pic-6.jpg"}
              />
            </Box>
          </Card>
        </Grid>

        <Grid xs={12} md={8}>
          <Card
            elevation={0}
            sx={{
              boxShadow:
                "#919eab33 0px 0px 2px 0px, #919eab33 0px 12px 24px -4px",
              borderRadius: 4,
              zIndex: 0,
              px: 3,
              pb: 3,
            }}
          >
            <CardHeader title="User Details" />

            <Grid container spacing={2}>
              <Grid xs={12}>
                <TextField
                  name="name"
                  label="Full name"
                  fullWidth
                  defaultValue={user.name}
                />
              </Grid>
              <Grid xs={12} md={5}>
                <TextField
                  name="username"
                  label="Username"
                  fullWidth
                  // value="chaeyo.0"
                  defaultValue={user.username}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">@</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={12} md={7}>
                <TextField
                  name="email"
                  label="Email"
                  fullWidth
                  // value="chaeyoung@gmail.com"
                  defaultValue={user.email}
                />
              </Grid>

              <Grid xs={12} md={5}>
                <FormControl fullWidth>
                  <InputLabel>Role</InputLabel>
                  <Select
                    name="userType"
                    value={role}
                    label="Role"
                    onChange={handleChange}
                  >
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="Registered">Registered User</MenuItem>
                    <MenuItem value="Unregistered">Unregistered User</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Stack alignItems="flex-end" mt={3}>
              <SubmitBtn title="Save Changes" />
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserEditForm;
