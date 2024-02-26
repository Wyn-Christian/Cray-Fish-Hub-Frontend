"use client";
import moment from "moment";

import { Avatar, Chip, ListItemText, Stack, Typography } from "@mui/material";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

import DataGridList from "@/components/admin/DataGridList";
import { GridActionsCellItem } from "@mui/x-data-grid";

const sample_rows = [
  {
    id: "12",
    first_name: "Soo",
    last_name: "Chaeyoung",
    username: "chaeyo.0",
    profilepath: "assets/profile/pic-7.jpg",
    email: "sample@gmail.com",
    user_type: "admin",
  },
  {
    id: "2",
    first_name: "Kim",
    last_name: "Dahyun",
    profilepath: "assets/profile/pic-6.jpg",
    username: "dahhyyuunnee",
    email: "sample@gmail.com",
    user_type: "registered",
  },
];

const columns = [
  {
    field: "user",
    headerName: "User",
    width: 300,
    valueGetter: ({ row }) => {
      return `${row.first_name} ${row.last_name}`;
    },
    renderCell: ({ row, value }) => {
      return (
        <Stack direction="row" alignItems="center" gap={1}>
          <Avatar src="/assets/profile/pic-3.jpg" />
          <ListItemText primary={value} secondary={row.username} />
        </Stack>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
    renderCell: (params) => {
      return (
        <Typography variant="body1" fontWeight={600}>
          {params.value}
        </Typography>
      );
    },
  },
  {
    field: "registration",
    headerName: "Registration",
    width: 200,
    renderCell: (params) => {
      return (
        <Typography variant="body1">{moment(new Date()).fromNow()}</Typography>
      );
    },
  },
  {
    field: "last_login",
    headerName: "Last Login",
    width: 200,
    renderCell: (params) => {
      return (
        <Typography variant="body1">{moment(new Date()).fromNow()}</Typography>
      );
    },
  },

  {
    field: "user_type",
    headerName: "Role",
    type: "singleSelect",
    valueOptions: ["admin", "registered", "unregistered"],
    width: 140,
    renderCell: (params) => {
      let icon, color;
      switch (params.value) {
        case "admin":
          icon = <CheckCircleOutlineIcon />;
          color = "success";
          break;
        case "registered":
          icon = <CheckCircleOutlineIcon />;
          color = "primary";
          break;
        case "unregistered":
          icon = <CheckCircleOutlineIcon />;
          color = "secondary";
          break;
      }
      return (
        <Chip
          icon={icon}
          color={color}
          label={params.value}
          variant="outlined"
        />
      );
    },
  },
  {
    field: "actions",
    type: "actions",
    headerName: "",
    width: 100,

    getActions: ({ id }) => {
      return [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => {
            redirect;
          }}
          color="#817463"
        />,
        <GridActionsCellItem
          icon={<VisibilityIcon />}
          label="Edit"
          onClick={() => {}}
          color="#817463"
        />,
      ];
    },
  },
];

const UserList = () => {
  return <DataGridList rows={sample_rows} columns={columns} />;
};

export default UserList;
