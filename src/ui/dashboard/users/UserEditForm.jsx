"use client";
import { useState } from "react";

import {
  Box,
  Card,
  CardHeader,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import UploadProfilePic from "@/components/UploadProfilePic";
import { editUser } from "@/actions/admin/users";
import SubmitBtn from "@/components/SubmitBtn";

import { uploadImage } from "@/utils/upload";

const UserEditForm = ({ user }) => {
  const [formData, setFormData] = useState(user);

  const [profilePic, setProfilePic] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function formAction() {
    const updated_user = {
      ...formData,
    };

    if (profilePic) {
      let profilePath = await uploadImage(profilePic);
      updated_user.profilePath = profilePath;
    }

    let result = await editUser(updated_user);

    if (result.status === "success") {
      enqueueSnackbar("User update successfully!", { variant: "success" });

      redirect(`/admin/users/profiles/${user._id}`);
    }
  }

  return (
    <form action={formAction}>
      <input hidden name="id" defaultValue={user._id} />
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
                defaultPhoto={user?.profilePath}
              />
            </Box>
          </Card>
        </Grid>

        {/* <Section title="User Details" subtitle="Edit user details here..."> */}

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
                  value={formData.name}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid xs={12} md={5}>
                <TextField
                  name="username"
                  label="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  fullWidth
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
                  value={formData.email}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>

              <Grid xs={12} md={5}>
                <FormControl fullWidth>
                  <InputLabel>Role</InputLabel>
                  <Select
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    label="Role"
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
            {/* </Section> */}
          </Card>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserEditForm;
