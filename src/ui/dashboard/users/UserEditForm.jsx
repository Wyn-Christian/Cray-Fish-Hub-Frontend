"use client";
import { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardHeader,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import UploadProfilePic from "@/components/UploadProfilePic";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const UserEditForm = () => {
  const [profilePic, setProfilePic] = useState(null);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <form>
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
              <Grid xs={12} md={6}>
                <TextField label="First name" fullWidth value="Soo" />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField label="Last name" fullWidth value="Chaeyoung" />
              </Grid>
              <Grid xs={12} md={5}>
                <TextField
                  label="Username"
                  fullWidth
                  value="chaeyo.0"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">@</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={12} md={7}>
                <TextField
                  label="Email"
                  fullWidth
                  value="chaeyoung@gmail.com"
                />
              </Grid>

              <Grid xs={12} md={5}>
                <FormControl fullWidth disabled>
                  <InputLabel>Role</InputLabel>
                  <Select value={"admin"} label="Role" onChange={handleChange}>
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="registered">Registered User</MenuItem>
                    <MenuItem value="unregistered">Unregistered User</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Stack alignItems="flex-end" mt={3}>
              <Button variant="contained">Save Changes</Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserEditForm;
