import React, { useRef } from "react";
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

const SecondSection = ({sizes}) => {
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
    <CustomBox className="second-section" sizes={sizes}>
      <Slider
        {...settings}
        ref={(slider) => {
          sliderRef = slider;
        }}
      >
        <Box>
          <SlideItem>
            <CustomTypography className="ss-primary" variant={sizes.sm?"h3":"h1"}>
              استشارات قانونية بمعايير عالمية
            </CustomTypography>
            <CustomTypography className="ss-secondary" variant={sizes.sm?"h6":"h5"}>
              بخبرة قانونية واسعة,نقدماستشارات قانونية لجميع العملاءمن ايدي نخبة
              من اكفا المحامين المتمرسين و افضل الشركاءبمستوي جديدي من الحلول
              القانونية المتكاملةز اطلب الان استشارة قانونية فورية وتواصل مع
              افضل مستشار قانوني واحصل علي الدعم القانوني لحل قضاياك و تحقيق
              اهدافك.
            </CustomTypography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CustomTypography>اطلب الان استشارة فورية</CustomTypography>
              <IconContainer>
                <KeyboardBackspaceIcon />
              </IconContainer>
            </Box>
          </SlideItem>
        </Box>
        <Box>
          <SlideItem>
            <CustomTypography className="ss-primary" variant={sizes.sm?"h3":"h1"}>
              مكتب محاماة دولي بمعايير أداء عالمية
            </CustomTypography>
            <CustomTypography className="ss-secondary" variant={sizes.sm?"h6":"h5"}>
              تعد المجموعة التجارية و البحرية أكبر مكتب محاماة دولي في مصر, وهذا
              يرجع لحجم القضايا الكبيري التي تسلمها المكتب,و العملاءالدوليين
              والمحليين الذين تعاملوا معنا, باللأضافة الي حجم و قوةالعلاقات
              العامة بروتوكلات التعاون المرتبطة بالمكتب . و قد اتخذ المكتب مقرة
              الرئيسي في قلب مدينة القاهرة ليكون منارة لتحقيق الاهداف القانونية
              اكافة عملائناالكرامزتواصل الان مع أفضل شركة محاماة رائدة في مصر.
            </CustomTypography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CustomTypography>اطلب الان استشارة فورية</CustomTypography>
              <IconContainer>
                <KeyboardBackspaceIcon />
              </IconContainer>
            </Box>
          </SlideItem>
        </Box>
      </Slider>
      <Box sx={{ width: "fit-content", margin: "0px auto" }}>
        <IconContainer onClick={previous} className="arrow-icon">
          <KeyboardArrowRightIcon />
        </IconContainer>
        <IconContainer onClick={next} className="arrow-icon">
          <KeyboardArrowLeftIcon />
        </IconContainer>
      </Box>
    </CustomBox>
  );
};

export default SecondSection;
