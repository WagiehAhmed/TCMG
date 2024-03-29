import React from "react";
import { CustomBox, CustomTypography } from "../../styles";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const SectionThree = ({ sizes }) => {
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
      className="section-three"
      sizes={sizes}
      sx={{ minHeight: { xs: "60dvh", md: "70dvh", lg: "90dvh" } }}
    >
      <Stack
        alignItems="center"
        sx={{ marginBottom: sizes.md ? "10px" : "30px" }}
      >
        <CustomTypography
          gutterBottom
          className="ts-primary"
          variant={sizes.sm ? "h3" : "h1"}
          align="center"
        >
          {t("sectionThreeS1")}
        </CustomTypography>
        <CustomTypography
          gutterBottom
          className="ts-secondary"
          variant={sizes.sm ? "h6" : "h5"}
          align="center"
        >
          {t("sectionThreeS2")}
        </CustomTypography>
      </Stack>

      <Slider {...settings}>
        <Box>
          <Card sx={{ maxWidth: "300px", height: "350px", margin: "0px auto" }}>
            <CardMedia
              sx={{ height: "300px" }}
              image="../images/logo.png"
              title="green iguana"
            />
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                padding: "7px",
              }}
            >
              {t("sectionThreeSlide1")}
            </Typography>
          </Card>
        </Box>
        <Box>
          <Card sx={{ maxWidth: "300px", height: "350px", margin: "0px auto" }}>
            <CardMedia
              sx={{ height: "300px" }}
              image="../images/logo.png"
              title="green iguana"
              />
            <Typography
              variant="h5"
              component="div"
              sx={{
                textAlign: "center",
                padding: "7px",
              }}
              >
              {t("sectionThreeSlide2")}
            </Typography>
          </Card>
        </Box>
        <Box>
          <Card sx={{ maxWidth: "300px", height: "350px", margin: "0px auto" }}>
            <CardMedia
              sx={{ height: "300px" }}
              image="../images/logo.png"
              title="green iguana"
              />
            <Typography
              variant="h5"
              component="div"
              sx={{
                textAlign: "center",
                padding: "7px",
              }}
              >
              {t("sectionThreeSlide3")}
            </Typography>
          </Card>
        </Box>
      </Slider>
    </CustomBox>
  );
};

export default SectionThree;
