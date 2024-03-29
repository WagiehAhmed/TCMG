import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import {
  CustomBox,
  CustomTypography,
  IconContainer,
  SlideItem,
} from "../../styles";
import { Box } from "@mui/material";
import SliderSlide from "./SliderSlide";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useTranslation } from "react-i18next";

import EastIcon from '@mui/icons-material/East';

const SecondSection = ({ sizes }) => {
  const { t, i18n } = useTranslation();
  var dir;

  useEffect(() => {
    dir = i18n.dir(i18n.language);
  }, [i18n, i18n.language]);

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    rtl: false,
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
      className="second-section"
      sizes={sizes}
      sx={{ minHeight: { xs: "60dvh", md: "70dvh", lg: "90dvh" } }}
    >
      <Slider
        {...settings}
        ref={(slider) => {
          sliderRef = slider;
        }}
      >
        <Box>
          <SlideItem sx={{ direction: i18n.dir(i18n.language) }}>
            <CustomTypography
              className="ss-primary"
              variant={sizes.sm ? "h3" : "h1"}
              align={i18n.dir(i18n.language) == "rtl" ? "right" : "left"}
            >
              {t("sectionTwoS1T")}
            </CustomTypography>
            <CustomTypography
              className="ss-secondary"
              variant={sizes.sm ? "h6" : "h5"}
            >
              {t("sectionTwoS1B")}
            </CustomTypography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CustomTypography>{t("ask")}</CustomTypography>
              <IconContainer>
                {i18n.dir(i18n.language) == "ltr" ? (
                  <EastIcon />
                ) : (
                  <KeyboardBackspaceIcon />
                )}
              </IconContainer>
            </Box>
          </SlideItem>
        </Box>
        <Box>
          <SlideItem sx={{ direction: i18n.dir(i18n.language) }}>
            <CustomTypography
              className="ss-primary"
              variant={sizes.sm ? "h3" : "h1"}
            >
              {t("sectionTwoS2T")}
            </CustomTypography>
            <CustomTypography
              className="ss-secondary"
              variant={sizes.sm ? "h6" : "h5"}
              align={i18n.dir(i18n.language) == "rtl" ? "right" : "left"}
            >
              {t("sectionTwoS2B")}
            </CustomTypography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CustomTypography>{t("ask")}</CustomTypography>
              <IconContainer>
              {i18n.dir(i18n.language)=="ltr"?<EastIcon/>:<KeyboardBackspaceIcon />}
              </IconContainer>
            </Box>
          </SlideItem>
        </Box>
      </Slider>
      <Box
        sx={{
          width: "fit-content",
          position: "absolute",
          bottom: "0px",
          left: "50%",
          transform: "translate(-50%,0px)",
        }}
        dir="ltr"
      >
        <IconContainer onClick={next} className="arrow-icon">
          <KeyboardArrowLeftIcon />
        </IconContainer>
        <IconContainer onClick={previous} className="arrow-icon">
          <KeyboardArrowRightIcon />
        </IconContainer>
      </Box>
    </CustomBox>
  );
};

export default SecondSection;
