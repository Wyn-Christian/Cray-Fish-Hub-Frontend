import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import ContactsIcon from "@mui/icons-material/Contacts";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ForumIcon from "@mui/icons-material/Forum";

export default [
  {
    title: "Overview",
    items: [
      {
        title: "overview",
        icon: <DashboardIcon />,
        route: "/admin",
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Users",
        icon: <ContactsIcon />,
        items: [
          {
            title: "list",
            route: "/admin/users/list",
          },
          // {
          //   title: "profile",
          //   route: "/admin/users/profile/123",
          // },
          {
            title: "create",
            route: "/admin/users/create",
          },
          // {
          //   title: "edit",
          //   route: "/admin/users/edit/123",
          // },
        ],
      },
      {
        title: "Articles",
        icon: <ArticleIcon />,
        items: [
          {
            title: "list",
            route: "/admin/articles/list",
          },
          // {
          //   title: "details",
          //   route: "/admin/articles/details/123",
          // },
          {
            title: "create",
            route: "/admin/articles/create",
          },
          // {
          //   title: "edit",
          //   route: "/admin/articles/edit/123",
          // },
        ],
      },
      {
        title: "Resources",
        icon: <FileCopyIcon />,
        items: [
          {
            title: "list",
            route: "/admin/resources/list",
          },
          {
            title: "details",
            route: "/admin/resources/details/123",
          },
          {
            title: "create",
            route: "/admin/resources/create",
          },
        ],
      },
      {
        title: "Thread Forums",
        icon: <ForumIcon />,
        items: [
          {
            title: "list",
            route: "/admin/forums/list",
          },
          // {
          //   title: "details",
          //   route: "/admin/forums/details/123",
          // },
          {
            title: "create",
            route: "/admin/forums/create",
          },
          // {
          //   title: "edit",
          //   route: "/admin/forums/edit/123",
          // },
        ],
      },
    ],
  },
];
