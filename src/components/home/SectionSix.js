import React from "react";
import {
  CustomBox,
  CustomImage,
  CustomImageContainer,
  CustomStack,
  CustomTypography,
  IconContainer,
} from "../../styles";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Slider from "react-slick";
import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const SectionSix = ({ sizes }) => {
  const { t } = useTranslation();
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <CustomBox
      className="section-six"
      sx={{ minHeight: { xs: "60dvh", md: "70dvh", lg: "80dvh" } }}
    >
      <CustomStack className="section-six-container">
        <Stack
          sx={{
            alignItems: "center",
            marginBottom: sizes.md ? "10px" : "30px",
          }}
        >
          <CustomTypography
            gutterBottom
            variant={sizes.sm ? "h5" : sizes.lg ? "h3" : "h2"}
          >
            {t("sectionSixS1")}
          </CustomTypography>
          <IconContainer>
            <KeyboardBackspaceIcon />
          </IconContainer>
          <CustomTypography
            gutterBottom
            variant={sizes.sm ? "h6" : "h5"}
            sx={{ width: sizes.md ? "90%" : "70%" }}
            align="center"
          >
            {t("sectionSixS2")}
          </CustomTypography>
        </Stack>

        <Box
          sx={{
            width: "100%",
            padding: "10px",
            margin: "10px 0px",
            boxSizing: "border-box",
            // border: "2px solid green",
          }}
        >
          <Slider {...settings}>
            <Box>
              {/* <Box sx={{ border: "2px solid green" }}> */}
              <Box
                sx={{
                  height: "330px",
                  padding: "15px",
                  maxWidth: "250px",
                  margin: "0px auto",
                  // border: "2px solid yellow",
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              >
                <CustomImageContainer className="section-six-image">
                  <CustomImage src="../images/logo.png" />
                </CustomImageContainer>

                <Typography
                  variant="h5"
                  sx={{
                    textAlign: "center",
                    padding: "3px",
                  }}
                >
                  {t("sectionSixSlideName")}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    padding: "5px",
                    color: "#845F38",
                  }}
                >
                  {t("sectionSixSlideTitle")}
                </Typography>
              </Box>
            </Box>

            <Box>
              {/* <Box sx={{ border: "2px solid green" }}> */}
              <Box
                sx={{
                  height: "330px",
                  padding: "15px",
                  maxWidth: "250px",
                  margin: "0px auto",
                  // border: "2px solid yellow",
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              >
                <CustomImageContainer className="section-six-image">
                  <CustomImage src="../images/logo.png" />
                </CustomImageContainer>

                <Typography
                  variant="h5"
                  sx={{
                    textAlign: "center",
                    padding: "3px",
                  }}
                >
                  {t("sectionSixSlideName")}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    padding: "5px",
                    color: "#845F38",
                  }}
                >
                  {t("sectionSixSlideTitle")}
                </Typography>
              </Box>
            </Box>
          </Slider>
        </Box>
      </CustomStack>
    </CustomBox>
  );
};

export default SectionSix;
