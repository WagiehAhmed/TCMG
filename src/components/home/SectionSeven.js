import React from "react";
import {
  CustomAvatar,
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

const SectionSeven = ({ sizes }) => {
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
      className="section-seven"
      sx={{
        height: sizes.md ? "auto" : "auto",
        minHeight: { xs: "60dvh", md: "70dvh", lg: "80dvh" },
      }}
    >
      <CustomStack className="section-seven-container">
        <CustomTypography
          gutterBottom
          className="section-seven-primary"
          variant={sizes.sm ? "h5" : sizes.lg ? "h3" : "h2"}
        >
          {t("sectionSevenS1")}
        </CustomTypography>
        <IconContainer>
          <KeyboardBackspaceIcon />
        </IconContainer>

        <Box
          sx={{
            // border: "2px solid green",
            width: "100%",
            boxSizing: "border-box",
            padding: "10px",
            margin: "10px 0px",
          }}
        >
          <Slider {...settings}>
            {/* silde */}
            <Box>
              {/* <Box sx={{ border: "2px solid green" }}> */}
              <Box
                sx={{
                  maxHeight: "330px",
                  maxWidth: "250px",
                  margin: "0px auto",
                  // border: "2px solid yellow",
                  // backgroundColor: "rgba(255,255,255,0.1)",
                }}
              >
                <CustomStack
                  className="horizontal"
                  sx={{
                    padding: "0px 5px",
                  }}
                >
                  <CustomAvatar src="../images/استثمر في مصر.png" />
                  <Stack>
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
                      variant="body1"
                      sx={{
                        textAlign: "center",
                        padding: "5px",
                        color: "#845F38",
                      }}
                    >
                      {t("sectionSixSlideTitle")}
                    </Typography>
                  </Stack>
                </CustomStack>

                <Box
                  sx={{
                    backgroundColor: "white",
                    padding: "10px 5px",
                    marginTop: "10px",
                    borderRadius: "30px 0px 0px 0px",
                  }}
                >
                  <CustomTypography
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    {t("sectionSevenReview")}
                  </CustomTypography>
                </Box>
              </Box>
            </Box>

            {/* silde */}
            <Box>
              {/* <Box sx={{ border: "2px solid green" }}> */}
              <Box
                sx={{
                  maxHeight: "330px",
                  maxWidth: "250px",
                  margin: "0px auto",
                  // border: "2px solid yellow",
                  // backgroundColor: "rgba(255,255,255,0.1)",
                }}
              >
                <CustomStack
                  className="horizontal"
                  sx={{
                    padding: "0px 5px",
                  }}
                >
                  <CustomAvatar src="../images/استثمر في مصر.png" />
                  <Stack>
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
                      variant="body1"
                      sx={{
                        textAlign: "center",
                        padding: "5px",
                        color: "#845F38",
                      }}
                    >
                      {t("sectionSixSlideTitle")}
                    </Typography>
                  </Stack>
                </CustomStack>

                <Box
                  sx={{
                    backgroundColor: "white",
                    padding: "10px 5px",
                    marginTop: "10px",
                    borderRadius: "30px 0px 0px 0px",
                  }}
                >
                  <CustomTypography
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    {t("sectionSevenReview")}
                  </CustomTypography>
                </Box>
              </Box>
            </Box>
          </Slider>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <CustomTypography>{t("sectionSevenS2")}</CustomTypography>
          <IconContainer>
            <KeyboardBackspaceIcon />
          </IconContainer>
        </Box>
      </CustomStack>
    </CustomBox>
  );
};

export default SectionSeven;
