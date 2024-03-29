import React from "react";
import { CustomBox, CustomGrid, CustomImage, CustomImageContainer, CustomStack, CustomTypography } from "../../styles";
import { Box, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

const SectionTen = ({sizes}) => {
  const {t} = useTranslation();
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
    <CustomBox className="section-eight" sizes={sizes}>
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
              </Box>
            </Box>
          </Slider>
        </Box>
    </CustomBox>
  );
};

export default SectionTen;
