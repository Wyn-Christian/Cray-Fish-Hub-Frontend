"use client";
import { useState } from "react";

import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import FolderIcon from "@mui/icons-material/Folder";
import ForumIcon from "@mui/icons-material/Forum";

import ResourcesTab from "@/components/ProfileTabPanels/ResourcesTab";
import ThreadsTab from "@/components/ProfileTabPanels/ThreadsTab";
import ProfileHeader from "@/components/ProfileHeader";
import AboutProfile from "@/components/AboutProfile";

const tabs = [
  {
    title: "Resources",
    icon: <FolderIcon />,
  },
  {
    title: "Threads",
    icon: <ForumIcon />,
  },
];

const sample_user = {
  profilepath: "/assets/profile/pic-7.jpg",
  name: "Soo Chaeyoung",
  username: "@chaeyo.0",
  email: "chaeyoung@gmail.com",
};

const UserProfile = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Container>
      <ProfileHeader
        currentTab={currentTab}
        handleChangeTab={handleChangeTab}
        tabs={tabs}
        user={sample_user}
      />

      <Grid container spacing={3}>
        <AboutProfile {...sample_user} />

        <Grid xs={12} md={8}>
          <ResourcesTab value={currentTab} index={1} />
          <ThreadsTab value={currentTab} index={2} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserProfile;
