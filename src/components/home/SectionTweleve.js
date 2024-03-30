import React, { useRef } from "react";
import {
  CustomBox,
  CustomImage,
  CustomImageContainer,
  CustomStack,
  CustomTypography,
  IconContainer,
} from "../../styles";
import Slider from "react-slick";
import { Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useTranslation } from "react-i18next";

const SectionTweleve = ({ sizes }) => {
  const { t } = useTranslation();
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    rtl: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <CustomBox
      className="section-tweleve"
      sizes={sizes}
      sx={{
        position: "relative",
        minHeight: { xs: "50dvh", md: "60dvh", lg: "80dvh" },
      }}
    >
      <CustomStack className="horizontal slider-details" dir="rtl">
        <IconContainer onClick={previous} className="arrow-icon">
          <KeyboardArrowRightIcon
            sx={{ fontSize: sizes.md ? "25px" : "70px" }}
          />
        </IconContainer>

        <IconContainer onClick={next} className="arrow-icon">
          <KeyboardArrowLeftIcon
            sx={{ fontSize: sizes.md ? "25px" : "70px" }}
          />
        </IconContainer>
      </CustomStack>
      <Slider
        {...settings}
        ref={(slider) => {
          sliderRef = slider;
        }}
      >
        {/* slide */}
        <Box>
          <CustomImageContainer
            className="section-tweleve-image-container"
            sx={{ position: "relative" }}
          >
            <CustomImage
              src="../images/logo.png"
              className="section-tweleve-image"
            />
            <CustomTypography
              align="center"
              variant={sizes.md ? "h3" : "h1"}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              {t("cairo")}
            </CustomTypography>
          </CustomImageContainer>
        </Box>
        {/* slide */}
        <Box>
          <CustomImageContainer
            className="section-tweleve-image-container"
            sx={{ position: "relative" }}
          >
            <CustomImage
              src="../images/logo.png"
              className="section-tweleve-image"
            />
            <CustomTypography
              align="center"
              variant={sizes.md ? "h3" : "h1"}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              {t("giza")}
            </CustomTypography>
          </CustomImageContainer>
        </Box>
      </Slider>
    </CustomBox>
  );
};

export default SectionTweleve;
