const {
  Paper,
  Box,
  Stack,
  Avatar,
  ListItemText,
  Tabs,
  Tab,
} = require("@mui/material");

const ProfileHeader = ({ currentTab, handleChangeTab, tabs, user }) => {
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
          background: `linear-gradient(#693f0acc, #0a5169cc) center center/cover no-repeat,url(/assets/profile/cover-2.jpg)`,
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
            alt={user.name}
            src={user.name}
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
            primary={user.name}
            primaryTypographyProps={{
              variant: "h5",
              fontWeight: 700,
            }}
            secondary={`@${user.username}`}
            secondaryTypographyProps={{
              color: "inherit",
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
            justifyContent: { xs: "center", md: "flex-end" },
            pr: { md: 3 },
          },
          "& .MuiTab-root": {
            minHeight: 48,
            minWidth: 48,
            fontWeight: 600,
          },
        }}
      >
        {tabs.map((tab, i) => (
          <Tab
            key={i}
            label={tab.title}
            value={i + 1}
            icon={tab.icon}
            iconPosition="start"
          />
        ))}
      </Tabs>
    </Paper>
  );
};

export default ProfileHeader;
