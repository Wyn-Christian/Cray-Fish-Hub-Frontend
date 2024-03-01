import Link from "next/link";

import { Box, Breadcrumbs, Button, Stack, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const DashboardBreadcrumbs = ({ title, links, btn, name }) => {
  return (
    <Box mb={{ xs: 3, md: 5 }}>
      <Stack
        direction={["column", "row"]}
        alignItems={["flex-start", "center"]}
        gap={2}
      >
        <Box flexGrow={1}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>

          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
            {links.map((link) =>
              link.route ? (
                <Typography
                  key={link.title}
                  component={Link}
                  href={link.route}
                  sx={{
                    textDecoration: "none",
                    color: "#444",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {link.title}
                </Typography>
              ) : (
                <Typography key={link.title} color="#ab9e91">
                  {link.title}
                </Typography>
              )
            )}
          </Breadcrumbs>
        </Box>

        {btn && (
          <Box flexShrink={0} alignSelf="flex-end">
            <Button
              disableElevation
              disableRipple
              LinkComponent={Link}
              href={btn.route}
              variant="contained"
              startIcon={btn.icon}
            >
              {btn.title}
            </Button>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default DashboardBreadcrumbs;
