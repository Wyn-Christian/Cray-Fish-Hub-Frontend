"use client";
import { useState } from "react";
import { useFormState } from "react-dom";

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

import { createUser } from "@/actions/admin/users";
import SubmitBtn from "@/components/SubmitBtn";
import Section from "@/components/Section";

const initialState = {
  name: "",
  email: "",
  username: "",
  password: "",
  userType: "",
};

const UserCreateForm = () => {
  const [state, formAction] = useFormState(createUser, initialState);

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
    <form action={formAction}>
      <Grid container spacing={3}>
        {/* <Grid xs={12} md={4}>
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
        </Grid> */}
        <Section title="User Details" subtitle="Name, Email, Username...">
          <Grid container spacing={2}>
            <Grid xs={12}>
              <TextField name="name" label="Full Name" fullWidth required />
            </Grid>
            <Grid xs={12} md={5}>
              <TextField
                name="username"
                label="Username"
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">@</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid xs={12} md={7}>
              <TextField name="email" label="Email" fullWidth required />
            </Grid>
            <Grid xs={12} md={6}>
              <FormControl variant="outlined" fullWidth required>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  name="password"
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
              <FormControl fullWidth required>
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
            <SubmitBtn title="Create User" />
          </Stack>
        </Section>
      </Grid>
    </form>
  );
};

export default UserCreateForm;
