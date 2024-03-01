"use client";
import moment from "moment";

import { Avatar, Chip, ListItemText, Stack, Typography } from "@mui/material";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

import DataGridList from "@/components/admin/DataGridList";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";

const UserList = ({ data }) => {
  const router = useRouter();

  const columns = [
    {
      field: "user",
      headerName: "User",
      width: 300,
      // valueGetter: ({ row }) => {
      //   return `${row.first_name} ${row.last_name}`;
      // },
      renderCell: ({ row, value }) => {
        return (
          <Stack direction="row" alignItems="center" gap={1}>
            <Avatar alt={row.name} src={row.name} />
            <ListItemText primary={row.name} secondary={`@${row.username}`} />
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
          <Typography variant="body1">
            {moment(new Date()).fromNow()}
          </Typography>
        );
      },
    },
    {
      field: "lastLogin",
      headerName: "Last Login",
      width: 200,
      renderCell: (params) => {
        return (
          <Typography variant="body1">
            {moment(new Date()).fromNow()}
          </Typography>
        );
      },
    },

    {
      field: "userType",
      headerName: "Role",
      type: "singleSelect",
      valueOptions: ["Admin", "Registered", "Unregistered"],
      width: 160,
      renderCell: (params) => {
        let icon, color;
        switch (params.value) {
          case "Admin":
            icon = <CheckCircleOutlineIcon />;
            color = "success";
            break;
          case "Registered":
            icon = <CheckCircleOutlineIcon />;
            color = "primary";
            break;
          case "Unregistered":
            icon = <CancelOutlinedIcon />;
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
              router.push(`/admin/users/edit/${id}`);
            }}
            color="#817463"
          />,
          <GridActionsCellItem
            icon={<VisibilityIcon />}
            label="View"
            onClick={() => {
              router.push(`/admin/users/profile/${id}`);
            }}
            color="#817463"
          />,
        ];
      },
    },
  ];
  return <DataGridList rows={data} columns={columns} />;
};

export default UserList;
