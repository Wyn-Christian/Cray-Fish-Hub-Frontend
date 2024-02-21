"use client";
import { useState } from "react";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TabPanel from "./TabPanel";
import TabHeader from "./TabHeader";
import Link from "next/link";

const CreateThread = () => {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <Grid container spacing={3}>
      <Grid md={4} sx={{ display: { xs: "none", md: "block" } }}>
        <Typography variant="h6" mb={0.5}>
          Create Thread
        </Typography>
        <Typography variant="body2" color="#919eab">
          Upload your file here and wait for the approval...
        </Typography>
      </Grid>

      <Grid xs={12} md={8}>
        <Card
          elevation={0}
          sx={{
            overflow: "hidden",
            position: "relative",
            boxShadow:
              "#919eab33 0px 0px 2px 0px, #919eab1f 0px 12px 24px -4px",
            zIndex: 0,
            borderRadius: 4,
            p: 3,
          }}
        >
          <CardHeader
            title={<Typography variant="h6">Create New Thread</Typography>}
            sx={{ display: { xs: "flex", md: "none" }, pt: 0, pl: 0 }}
          />

          <Stack gap={2}>
            <TextField name="title" label="Title" fullWidth />

            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select value={category} label="Category" onChange={handleChange}>
                <MenuItem value={"general"}>General</MenuItem>
                <MenuItem value={"q&a"}>Q&A</MenuItem>
                <MenuItem value={"Case Study"}>Case Study</MenuItem>
              </Select>
            </FormControl>

            <Box alignSelf="flex-end" width={{ xs: "100%", sm: "auto" }}>
              <Button variant="contained" fullWidth>
                Create New Thread
              </Button>
            </Box>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
};

const ThreadPaper = ({ author, title, date_created }) => {
  return (
    <Grid xs={12} sm={6} md={4}>
      <Stack
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Stack gap={1} p={3} bgcolor="#fee9d1">
          <Box
            sx={{
              lineHeight: 1.5,
              fontWeight: 400,
              color: "#919eab",
              fontSize: "0.75rem",
            }}
          >
            18 Feb 2024
          </Box>

          <Stack
            component={Link}
            href="/forums/thread/123"
            sx={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Typography
              variant="h6"
              sx={{ "&:hover": { textDecoration: "underline" } }}
            >
              Thread Sample Title
            </Typography>
            <Typography variant="subtitle2" fontWeight={600} color="#585858">
              Category
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};

const ThreadsTab = ({ value, index }) => {
  const [categoryTab, setCategoryTab] = useState("all");
  const handleCategoryTabChange = (event, newValue) => {
    setCategoryTab(newValue);
  };

  return (
    <TabPanel value={value} index={index}>
      <CreateThread />

      <TabHeader title="My Threads" />

      <Tabs
        value={categoryTab}
        onChange={handleCategoryTabChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          mb: 3,
          "& .MuiTab-root": {
            minHeight: 48,
            minWidth: 48,
            fontWeight: 600,
          },
        }}
      >
        <Tab label="All" value="all" />
        <Tab label="General" value="general" />
        <Tab label="Q&A" value="q&a" />
        <Tab label="Case Study" value="case study" />
      </Tabs>

      <Grid container spacing={2}>
        <ThreadPaper />
        <ThreadPaper />
      </Grid>
    </TabPanel>
  );
};

export default ThreadsTab;
