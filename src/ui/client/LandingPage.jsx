import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";

import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ForumIcon from "@mui/icons-material/Forum";
import HandshakeIcon from "@mui/icons-material/Handshake";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        my: 0,
        mx: "auto",
        px: 2,
        py: [4, 6, 8],
        maxWidth: { sm: 720, md: 1236 },
      }}
    >
      <Grid container spacing={4}>
        <Grid xs={12} md={6}>
          <Stack gap={2}>
            <Typography variant="h2">Welcome to CrayFishHub!</Typography>
            <Typography variant="inherit">
              At CrayFishHub, we dive deep into the world of crayfish and
              celebrate their unique place in both our ecosystems and our
              hearts. Join a community where hobbyists, experts, and newcomers
              alike come together to share their passion for these fascinating
              creatures.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              gap={2}
              justifyContent={{ xs: "center", md: "flex-end" }}
            >
              <Button
                disableRipple
                sx={{ color: "#000", borderColor: "#000" }}
                variant="outlined"
              >
                View Articles
              </Button>
              <Button disableRipple variant="contained">
                Join Us
              </Button>
            </Stack>
          </Stack>
        </Grid>

        <Grid xs={12} md={6}>
          <Box height={400} width="100%" position="relative">
            <Image src="/assets/cray-fish-home.svg" alt="Cray Fish Home" fill />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const MissionVisionSection = () => {
  return (
    <Container sx={{ overflow: "hidden", py: { md: 10 } }}>
      <Grid container spacing={{ xs: 8, md: 1 }} justifyContent="space-between">
        <Grid xs={12} md={3}>
          <Typography variant="h3" pt={{ md: 5 }}>
            Mission
          </Typography>
          <Typography variant="body1" mt={3} color="#636381">
            To create the most engaging and informative hub for crayfish
            enthusiasts around the globe. CrayFishHub is dedicated to providing
            a vibrant platform for sharing knowledge, experiences, and
            resources. Whether you're here to learn about crayfish care, explore
            recipes, or connect with like-minded individuals, we're committed to
            fostering a supportive and dynamic community.
          </Typography>
        </Grid>

        <Grid md={4} sx={{ display: { xs: "none", md: "inline-block" } }}>
          <Box
            sx={{
              overflow: "hidden",
              position: "relative",
              verticalAlign: "bottom",
              width: "100%",
              height: "100%",
              borderRadius: 4,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                verticalAlign: "bottom",
                backgroundSize: "cover !important",
              }}
            >
              test
              <Box
                component={Image}
                sx={{
                  top: 0,
                  left: 0,
                  objectFit: "cover",
                  verticalAlign: "bottom",
                }}
                src="/assets/cray-fish-mission-vision.svg"
                alt="Cray Fish Home"
                fill
              />
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={3}>
          <Typography variant="h3" pt={{ md: 5 }}>
            Vision
          </Typography>
          <Typography variant="body1" mt={3} color="#636381">
            Imagine a place where every question you have about crayfish can be
            answered by a fellow enthusiast, where every article inspires you,
            and every discussion leads to new insights. That's the world we're
            building at CrayFishHub. Our vision is to be the premier online
            destination for everything crayfish, from sustainable care practices
            to culinary explorations, ensuring that our shared passion
            contributes to both personal enjoyment and the well-being of
            crayfish populations worldwide.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

const GetInvolvedSection = () => {
  const Info = ({ Icon, title, body }) => (
    <Grid xs={12} md={4}>
      <Card
        elevation={0}
        sx={{ alignItems: "center", flexDirection: "column" }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icon fontSize="large" sx={{ mb: 1, color: "#f4b253" }} />
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>

          <Typography variant="body1" textAlign="center" color="#888267">
            {body}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
  return (
    <Box
      sx={{
        width: "100%",
        my: 0,
        mx: "auto",
        px: 2,
        py: [4, 6, 8],
        maxWidth: { sm: 600, md: 1236 },
      }}
    >
      <Card
        sx={{
          borderRadius: 2,
          width: "100%",
          height: "100%",
        }}
      >
        <CardContent>
          <Box>
            <Box mb={4}>
              <Typography
                variant="h4"
                textTransform="uppercase"
                textAlign="center"
              >
                Get Involved
              </Typography>
            </Box>

            <Grid container spacing={2}>
              <Info
                Icon={LightbulbIcon}
                title="Learn"
                body="Browse our extensive collection of articles and care
                      guides."
              />
              <Info
                Icon={ForumIcon}
                title="Discuss"
                body="Share your experiences and gain insights in our active forums."
              />
              <Info
                Icon={HandshakeIcon}
                title="Contribute"
                body="Upload your resources and articles to help the community grow."
              />
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

const LandingPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(9deg, #ffffff 20%, #fd874c 100%);",
        pt: 14,
        mt: -14,
        position: "relative",
      }}
    >
      <HeroSection />
      <MissionVisionSection />
      <GetInvolvedSection />
    </Box>
  );
};

export default LandingPage;
