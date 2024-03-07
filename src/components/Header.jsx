import { Box, Container, Typography } from "@mui/material";

const Header = ({ title, children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: "linear-gradient(7deg, #ffffff 20%, #fd874c 100%);",
        pt: 14,
        mt: -14,
        width: "100%",
      }}
    >
      <Container
        sx={{
          width: "100%",
          m: "0 auto",
          px: 2,
          py: {
            xs: 4,
            sm: 6,
            md: 8,
          },
          maxWidth: {
            sm: 720,
            md: 1236,
          },
        }}
      >
        {title ? (
          <Typography variant="h1" mb={2} fontWeight={700}>
            {title}
          </Typography>
        ) : (
          children
        )}
      </Container>
    </Box>
  );
};

export default Header;
