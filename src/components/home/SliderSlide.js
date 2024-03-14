import { Box } from "@mui/material";
import React from "react";
import { CustomTypography, IconContainer } from "../../styles";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const SliderSlide = () => {
  return (
    <Box sx={{ border: "5px solid red", direction: "rtl", padding: "32px",margin:"0px auto" }}>
      <CustomTypography className="ss-primary" variant="h1">
        استشارات قانونية بمعايير عالمية
      </CustomTypography>
      <CustomTypography className="ss-secondary" variant="h5">
        بخبرة قانونية واسعة,نقدماستشارات قانونية لجميع العملاءمن ايدي نخبة من
        اكفا المحامين المتمرسين و افضل الشركاءبمستوي جديدي من الحلول القانونية
        المتكاملةز اطلب الان استشارة قانونية فورية وتواصل مع افضل مستشار قانوني
        واحصل علي الدعم القانوني لحل قضاياك و تحقيق اهدافك.
      </CustomTypography>
      <Box sx={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <CustomTypography>اطلب الان استشارة فورية</CustomTypography>
        <IconContainer>
          <KeyboardBackspaceIcon />
        </IconContainer>
      </Box>
    </Box>
  );
};

export default SliderSlide;
