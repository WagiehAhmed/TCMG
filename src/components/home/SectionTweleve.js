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

const SectionTweleve = ({ sizes }) => {
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
    <CustomBox className="section-tweleve" sizes={sizes}>
      <Slider
        {...settings}
        ref={(slider) => {
          sliderRef = slider;
        }}
      >

        {/* slide */}
        <Box sx={{position:"relative" }}>
          <CustomStack className="horizontal slider-details">
            <IconContainer onClick={next} className="arrow-icon" >
              <KeyboardArrowLeftIcon sx={{fontSize:sizes.md?"25px":"70px"}}/>
            </IconContainer>

            <CustomTypography variant={sizes.md?"h3":"h1"}>القاهرة</CustomTypography>
            <IconContainer onClick={previous} className="arrow-icon">
              <KeyboardArrowRightIcon sx={{fontSize:sizes.md?"25px":"70px"}}/>
            </IconContainer>
          </CustomStack>
          <CustomImageContainer className="section-tweleve-image-container">
            <CustomImage
              src="../images/logo.png"
              className="section-tweleve-image"
            />
          </CustomImageContainer>
        </Box>
        {/* slide */}
        <Box sx={{position:"relative" }}>
          <CustomStack className="horizontal slider-details">
            <IconContainer onClick={next} className="arrow-icon" >
              <KeyboardArrowLeftIcon sx={{fontSize:sizes.md?"25px":"70px"}}/>
            </IconContainer>

            <CustomTypography variant={sizes.md?"h3":"h1"}>القاهرة</CustomTypography>
            <IconContainer onClick={previous} className="arrow-icon">
              <KeyboardArrowRightIcon sx={{fontSize:sizes.md?"25px":"70px"}}/>
            </IconContainer>
          </CustomStack>
          <CustomImageContainer className="section-tweleve-image-container">
            <CustomImage
              src="../images/logo.png"
              className="section-tweleve-image"
            />
          </CustomImageContainer>
        </Box>
      </Slider>
    </CustomBox>
  );
};

export default SectionTweleve;
