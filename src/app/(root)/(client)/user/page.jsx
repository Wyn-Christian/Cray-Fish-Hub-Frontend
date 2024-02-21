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

const UserHeader = ({ currentTab, handleChangeTab }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        overflow: "hidden",
        position: "relative",
        boxShadow: "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
        borderRadius: 4,
        zIndex: 0,
        mb: 3,
        height: 290,
      }}
    >
      <Box
        sx={{
          height: "100%",
          color: "#fff",
          background: `linear-gradient(#693f0acc, #0a5169cc) center center/cover no-repeat,url(/assets/profile/cover-1.jpg)`,
          backgroundPosition: "center center",
        }}
      >
        <Stack
          direction={{ md: "row" }}
          sx={{
            position: { md: "absolute" },
            left: { md: 24 },
            bottom: { md: 24 },
            zIndex: { md: 10 },
            pt: { xs: 6, md: 0 },
          }}
        >
          <Avatar
            alt="User Profile Picture"
            src="/assets/profile/pic-7.jpg"
            sx={{
              mx: "auto",
              border: "2px solid #fff",
              width: { xs: 64, md: 128 },
              height: { xs: 64, md: 128 },
            }}
          />
          <ListItemText
            sx={{
              mt: 3,
              ml: { md: 3 },
              textAlign: { xs: "center", md: "unset" },
            }}
            primary="Soo Chaeyoung"
            primaryTypographyProps={{
              variant: "h5",
              fontWeight: 700,
            }}
            secondary="@chaeyo.0"
            secondaryTypographyProps={{
              color: "inherit",
              mt: 0.5,
              sx: { opacity: 0.6 },
            }}
          />
        </Stack>
      </Box>

      <Tabs
        value={currentTab}
        onChange={handleChangeTab}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          width: "100%",
          bottom: 0,
          zIndex: 9,
          position: "absolute",
          bgcolor: "#fff",
          "& .MuiTabs-flexContainer": {
            justifyContent: { sm: "center", md: "flex-end" },
            pr: { md: 3 },
          },
          "& .MuiTab-root": {
            minHeight: 48,
            minWidth: 48,
            fontWeight: 600,
          },
        }}
      >
        <Tab
          label="Profile"
          value={1}
          icon={<Person2Icon />}
          iconPosition="start"
        />
        <Tab
          label="Resources"
          value={2}
          icon={<FolderIcon />}
          iconPosition="start"
        />
        <Tab
          label="Threads"
          value={3}
          icon={<ForumIcon />}
          iconPosition="start"
        />
      </Tabs>
    </Paper>
  );
};

const UserProfile = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Container>
      <UserHeader currentTab={currentTab} handleChangeTab={handleChangeTab} />

      <Box>
        <ProfileTab value={currentTab} index={1} />
        <ResourcesTab value={currentTab} index={2} />
        <ThreadsTab value={currentTab} index={3} />
      </Box>
    </Container>
  );
};

export default UserProfile;
