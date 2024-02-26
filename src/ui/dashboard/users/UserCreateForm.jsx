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

const UserCreateForm = () => {
  const [role, setRole] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const [viewPassword, setViewPassword] = useState(false);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleClickViewPassword = () => setViewPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
              <UploadProfilePic photo={profilePic} setPhoto={setProfilePic} />
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
                <TextField label="First name" fullWidth />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField label="Last name" fullWidth />
              </Grid>
              <Grid xs={12} md={5}>
                <TextField
                  label="Username"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">@</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={12} md={7}>
                <TextField label="Email" fullWidth />
              </Grid>
              <Grid xs={12} md={6}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    label="Password"
                    type={viewPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickViewPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {viewPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Role</InputLabel>
                  <Select value={role} label="Role" onChange={handleChange}>
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="registered">Registered User</MenuItem>
                    <MenuItem value="unregistered">Unregistered User</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Stack alignItems="flex-end" mt={3}>
              <Button variant="contained">Create User</Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserCreateForm;
