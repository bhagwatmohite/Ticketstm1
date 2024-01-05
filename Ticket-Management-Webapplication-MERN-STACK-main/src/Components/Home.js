import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import FeatureCard from "./FeatureCard";
import TestimonialCard from "./TestimonialCard";
import { featureData } from "../data";
import { Testimonials } from "../data";
import { Link } from "react-router-dom";
import { useActiveLink } from "./ActiveLinkContext";
import person from "../assets/person.webp";

const Home = () => {
  const { setActiveLink } = useActiveLink();

  return (
    <Container>
      <Grid container>
        {/* FIRST-SLOGAN & ACTION BUTTON */}
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: { xs: "3.5rem", md: "8rem" },
            position: "relative",
            paddingBottom: "10rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
              fontSize: { xs: "3.5rem", md: "4.5rem" },
            }}
          >
            One Step Solution For
          </Typography>
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
              fontSize: { xs: "3.5rem", md: "4.5rem" },
            }}
          >
            Your Queries.
          </Typography>
          <Typography
            sx={{
              margin: "10px",
              fontSize: "1.5rem",
              color: "gray",
            }}
          >
            We are here to help you with your queries.
          </Typography>
          <Link
            to="/create-new-ticket"
            onClick={() => setActiveLink("/create-new-ticket")}
          >
            <Button
              variant="contained"
              sx={{
                margin: "40px",
                paddingX: "30px",
                paddingY: "10px",
              }}
            >
              Get Started
            </Button>
          </Link>

          <Box
            sx={{
              position: "absolute",
              bottom: "0",
              left: "0",
              visibility: { xs: "hidden", md: "visible" },
            }}
          >
            <img src={person} alt="person" />
          </Box>
        </Grid>

        {/* SECOND - FEATURE COMPONENT (LOGO , TITLE , DESCRIPTION) */}
        <Grid
          container
          sx={{
            marginY: "4rem",
            paddingY: "1.2rem",
            paddingX: "0.3rem",
            background: "linear-gradient(to bottom, #f0f2f5, #d9e2ec)", 
            borderRadius: "0.5rem",
          }}
        >
          <Grid
            item
            sx={{
              display: "block",
            }}
          >
            <Typography
              color="primary"
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "0.9rem",
              }}
            >
              Features of our Website..
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              A delightful Experience
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                marginBottom: "2rem",
                fontSize: "2.5rem",
                marginTop: "-1rem",
              }}
            >
              For you and Your Users.
            </Typography>
          </Grid>

          {/* FEATURES - COMPONENT */}
          <Grid container>
            {featureData.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <FeatureCard
                  logo={feature.logo}
                  title={feature.title}
                  description={feature.description}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <div
          style={{
            width: "100%",
            height: "1px",
            background: "gray",
            margin: "1rem 0",
          }}
        />

        <Grid container>
          <Grid item>
            <Typography
              color="primary"
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "0.9rem",
              }}
            >
              Testimonials..
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              Testimonials
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                marginBottom: "2rem",
                fontSize: "2.5rem",
                marginTop: "-1rem",
              }}
            >
              Your Happy Customers.
            </Typography>
          </Grid>

          <Grid container>
            {Testimonials.map((Testimonial, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <TestimonialCard
                  title={Testimonial.title}
                  description={Testimonial.description}
                  image={Testimonial.UserProfile}
                  name={Testimonial.UserName}
                  position={Testimonial.UserPosition}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
