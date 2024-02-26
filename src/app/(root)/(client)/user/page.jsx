"use client";
import { useState } from "react";

import {
  Avatar,
  Box,
  Container,
  ListItemText,
  Paper,
  Stack,
  Tab,
  Tabs,
} from "@mui/material";

import Person2Icon from "@mui/icons-material/Person2";
import FolderIcon from "@mui/icons-material/Folder";
import ForumIcon from "@mui/icons-material/Forum";
import ProfileTab from "@/components/UserTabPanels/ProfileTab";
import ResourcesTab from "@/components/UserTabPanels/ResourcesTab";
import ThreadsTab from "@/components/UserTabPanels/ThreadsTab";
import ProfileHeader from "@/components/ProfileHeader";

const tabs = [
  {
    title: "Profile",
    icon: <Person2Icon />,
  },
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

      <Box>
        <ProfileTab value={currentTab} index={1} />
        <ResourcesTab value={currentTab} index={2} />
        <ThreadsTab value={currentTab} index={3} />
      </Box>
    </Container>
  );
};

export default UserProfile;
