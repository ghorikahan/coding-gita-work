import React, { useCallback } from "react";
import {
  Container,
  Typography,
  Divider,
  Box,
  List,
  ListItem,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import logo from "../assests/logo.svg";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    h4: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "bold",
    },
    h6: {
      color: "black",
    },

    h5: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "bold",
      color: "#7360DF", // Using one of the primary colors for section titles
    },
    body1: {
      fontFamily: "Inter, sans-serif",
    },
  },
  palette: {
    primary: {
      main: "#7360DF",
      contrastText: "#ffffff",
    },
  },
});

const listStyle = {
  border: "1px solid black",
  borderRadius: "4px",
  margin: "22vh 0", // Add margin top and bottom
  padding: "20px",
  overflowY: "hidden", // Prevents scrolling on the Y axis
};

const logoStyle = {
  width: "70%", // Reduces the size of the logo
  margin: "0 auto", // Centers the logo
  display: "block", // Ensures the logo is a block element to accept margin values
  marginBottom: "2rem", // Adds space between the logo and the list items below
};

const PrivacyPolicy = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const scrollToSection = useCallback((sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ my: 4, display: "flex" }}>
        {!isMobile && (
          <Box
            sx={{
              width: "40%",
              position: "sticky",
              top: 0,
              height: "100vh",
              overflow: "hidden",
            }}
          >
            <List component="nav" sx={listStyle}>
              {" "}
              {/* Apply list style */}
              <img src={logo} alt="Logo" style={logoStyle} />
              <ListItem
                button
                onClick={() => scrollToSection("introduction-section")}
              >
                {/* <ListItemText secondary="1. Introduction" sx={{...listItemStyle, fontWeight: "bold"}} /> */}
                <Typography variant="h6">1. Introduction</Typography>
              </ListItem>
              <ListItem
                button
                onClick={() => scrollToSection("data-collection-section")}
              >
                <Typography variant="h6">2. Data Collection</Typography>
              </ListItem>
              <ListItem
                button
                onClick={() => scrollToSection("data-usage-section")}
              >
                <Typography variant="h6">3. Data Usage</Typography>
              </ListItem>
              <ListItem
                button
                onClick={() => scrollToSection("data-sharing-section")}
              >
                <Typography variant="h6">4. Data Sharing</Typography>
              </ListItem>
              <ListItem
                button
                onClick={() => scrollToSection("security-section")}
              >
                <Typography variant="h6">5. Security</Typography>
              </ListItem>
              <ListItem
                button
                onClick={() => scrollToSection("your-rights-section")}
              >
                <Typography variant="h6">6. Your Rights</Typography>
              </ListItem>
              <ListItem
                button
                onClick={() => scrollToSection("updates-policy-section")}
              >
                <Typography variant="h6">7. Updates to Policy</Typography>
              </ListItem>
              <ListItem
                button
                onClick={() => scrollToSection("contact-us-section")}
              >
                <Typography variant="h6">8. Contact Us</Typography>
              </ListItem>
              {/* Repeat for each additional section */}
            </List>
          </Box>
        )}
        <Box
          sx={{
            width: isMobile ? "100%" : "80%",
            textAlign: "left",
            pl: isMobile ? 0 : 10,
          }}
        >
          {/* Header Section */}
          <Box id="header-section" sx={{ width: "100%", textAlign: "center" }}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ textAlign: "center", color: "primary.main", py: 3 }}
            >
              CodingGita Privacy Policy
            </Typography>
            <Typography variant="body2" sx={{my: 3 }}>
              {" "}
              The information provided here is for students and users of Coding Gita who
              have questions about our terms, policies, intellectual property,
              and compliance.{" "}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "center", color: "text.secondary" }}
            >
              Effective Date: January 19, 2024
            </Typography>
            <Divider sx={{ my: 4, borderColor: "primary.dark" }} />
          </Box>

          {/* Section 1: Introduction */}
          <Box
            id="introduction-section"
            sx={{ width: "100%", textAlign: "left" }}
          >
            <Typography variant="h5" component="h2" sx={{ mt: 4 }}>
              1. Introduction
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Welcome to Codinggita. We are committed to protecting your
              personal information and your right to privacy. This Privacy
              Policy outlines how we collect, use, share, and safeguard your
              personal data when you visit our website and use our educational
              services, in accordance with applicable data protection laws.
            </Typography>
            <Divider sx={{ my: 4, borderColor: "primary.dark" }} />
          </Box>

          {/* Section 2: Data Collection */}
          <Box
            id="data-collection-section"
            sx={{ width: "100%", textAlign: "left" }}
          >
            <Typography variant="h5" component="h2" sx={{ mt: 4 }}>
              2. Data Collection
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              We collect information that you provide directly to us when you
              register for our services, participate in our educational
              programs, or communicate with us. This may include personal
              details such as your name, email address, contact information,
              educational background, and payment information. Additionally, we
              automatically collect certain technical information when you visit
              our website, such as IP address, browser type, and usage
              statistics.
            </Typography>
            <Divider sx={{ my: 4, borderColor: "primary.dark" }} />
          </Box>
          <Box
            id="data-usage-section"
            sx={{ width: "100%", textAlign: "left" }}
          >
            <Typography variant="h5" component="h2" sx={{ mt: 4 }}>
              3. Data Usage
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Your data is used to provide and improve our services, process
              payments, communicate with you, and customize your learning
              experience. We also use your information for marketing purposes,
              with your consent where required. We may use aggregated data for
              research and analysis to improve our educational offerings.
            </Typography>
            <Divider sx={{ my: 4, borderColor: "primary.dark" }} />
          </Box>
          <Box
            id="data-sharing-section"
            sx={{ width: "100%", textAlign: "left" }}
          >
            <Typography variant="h5" component="h2" sx={{ mt: 4 }}>
              4. Data Sharing
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              We may share your information with third-party service providers
              who perform services on our behalf, such as payment processing and
              website hosting. We require these third parties to protect your
              data and use it only in accordance with our instructions. We may
              also share information in response to legal requests or to protect
              our rights and safety.
            </Typography>
            <Divider sx={{ my: 4, borderColor: "primary.dark" }} />
          </Box>
          <Box id="security-section" sx={{ width: "100%", textAlign: "left" }}>
            <Typography variant="h5" component="h2" sx={{ mt: 4 }}>
              5. Security
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              We take the security of your data seriously and have implemented
              appropriate technical and organizational measures to protect it
              from unauthorized access, alteration, and loss. However, no
              electronic transmission or storage system is entirely secure, and
              we cannot guarantee absolute security.
            </Typography>
            <Divider sx={{ my: 4, borderColor: "primary.dark" }} />
          </Box>
          <Box
            id="your-rights-section"
            sx={{ width: "100%", textAlign: "left" }}
          >
            <Typography variant="h5" component="h2" sx={{ mt: 4 }}>
              6. Your Rights
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              You have the right to access, correct, or delete your personal
              information. You can also object to processing, request data
              portability, and withdraw consent at any time. To exercise these
              rights, please contact us. We will respond to your request in
              accordance with applicable law.
            </Typography>
            <Divider sx={{ my: 4, borderColor: "primary.dark" }} />
          </Box>
          <Box
            id="updates-policy-section"
            sx={{ width: "100%", textAlign: "left" }}
          >
            <Typography variant="h5" component="h2" sx={{ mt: 4 }}>
              7. Updates to this Policy
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              We may update this Privacy Policy periodically to reflect changes
              in our practices or legal requirements. The revised policy will be
              posted on our website with an updated revision date. We encourage
              you to review this policy regularly to stay informed about how we
              are protecting your information.
            </Typography>
            <Divider sx={{ my: 4, borderColor: "primary.dark" }} />
          </Box>
          <Box
            id="contact-us-section"
            sx={{ width: "100%", textAlign: "left" }}
          >
            <Typography variant="h5" component="h2" sx={{ mt: 4 }}>
              8. Contact Us
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              If you have any questions, comments, or concerns about our privacy
              practices, please contact us at the platforms provided by us. We
              are committed to resolving any concerns regarding your privacy.
            </Typography>
            <Divider sx={{ my: 4, borderColor: "primary.dark" }} />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default PrivacyPolicy;
