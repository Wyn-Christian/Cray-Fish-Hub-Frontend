"use client";

import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import ForumIcon from "@mui/icons-material/Forum";
import FolderIcon from "@mui/icons-material/Folder";

import ProfileHeader from "@/components/ProfileHeader";
import ResourcesTab from "@/components/ProfileTabPanels/ResourcesTab";
import AboutProfile from "@/components/AboutProfile";
import ThreadsTab from "@/components/ProfileTabPanels/ThreadsTab";

const sample_user = {
  profilepath: "/assets/profile/pic-7.jpg",
  name: "Soo Chaeyoung",
  username: "@chaeyo.0",
  email: "chaeyoung@gmail.com",
};

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

const UserProfile = ({ user, threads, resources }) => {
  const [currentTab, setCurrentTab] = useState(1);
  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <ProfileHeader
        currentTab={currentTab}
        handleChangeTab={handleChangeTab}
        tabs={tabs}
        user={user}
      />

      <Grid container spacing={3}>
        <AboutProfile {...user} />

        <Grid xs={12} md={8}>
          <ResourcesTab
            value={currentTab}
            index={1}
            user={user}
            resources={resources}
            route="/admin/resources/details"
          />
          <ThreadsTab
            value={currentTab}
            index={2}
            user={user}
            threads={threads}
            route="/admin/forums/details"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default UserProfile;
