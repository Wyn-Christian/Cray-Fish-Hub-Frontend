"use client";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";
import { enqueueSnackbar } from "notistack";

import { Box, Card, CardHeader, Stack, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import Section from "../Section";
import SubmitBtn from "../SubmitBtn";

import { updateUser } from "@/actions/users/account";
import { isEqual } from "@/utils/tool";
import UploadProfilePic from "../UploadProfilePic";
import { uploadImage } from "@/utils/upload";

const PersonalDetailsForm = ({ user }) => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(user);
  const [profilePic, setProfilePic] = useState(null);

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(isEqual(formData, user) && profilePic === null);
  }, [formData, profilePic]);

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

    let result = await updateUser(updated_user);

    if (result?.status === "fail") {
      enqueueSnackbar(result?.message, { variant: "error" });
      setError(result?.message);
      return;
    }
    if (result.status === "success") {
      enqueueSnackbar("User update successfully!", { variant: "success" });
    }
  }

  return (
    <>
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
          <Stack gap={2} component="form" action={formAction}>
            <input hidden name="id" defaultValue={user._id} />
            <TextField
              name="name"
              label="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
            />

            <TextField
              name="username"
              label="Username"
              value={formData.username}
              onChange={handleInputChange}
              fullWidth
              error={error?.includes("Username")}
              helperText={
                error?.includes("Username") ? error : "Enter your username"
              }
            />

            <TextField
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              error={error?.includes("Email")}
              helperText={error?.includes("Email") ? error : "Enter your email"}
            />

            <Box alignSelf="flex-end" width={{ xs: "100%", sm: "auto" }}>
              <SubmitBtn title="Save Changes" disabled={disabled} />
            </Box>
          </Stack>
          {/* </Section> */}
        </Card>
      </Grid>
    </>
  );
};

export default PersonalDetailsForm;
