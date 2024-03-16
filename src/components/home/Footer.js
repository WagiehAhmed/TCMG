import React from "react";
import {
  CustomBox,
  CustomStack,
  CustomTypography,
  IconContainer,
} from "../../styles";
import { Box, Divider } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import  KeyboardBackspaceIcon  from '@mui/icons-material/KeyboardBackspace';

const Footer = ({ sizes }) => {
  return (
    <CustomBox className="footer">
      <CustomStack className="footer">
        {/* 1 */}
        <CustomStack className="horizontal footer-horizontal1"  sx={{ padding: sizes.md ? "20px 0px" : "50px 0px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            //   margin: sizes.md ? "15px 10px" : "30px 20px",
            borderBottom:"2px solid white",
            padding:"10px 0px",
            }}
          >
            <CustomTypography variant={sizes.sm?"h5":"h3"}>أسال محامي</CustomTypography>
            <IconContainer>
              <KeyboardBackspaceIcon />
            </IconContainer>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            //   margin: sizes.md ? "15px 5px" : "30px 10px",
            borderBottom:"2px solid white",
            padding:"10px 0px",
            }}
          >
            <CustomTypography variant={sizes.sm?"h5":"h3"}>أنضم ألينا</CustomTypography>
            <IconContainer>
              <KeyboardBackspaceIcon />
            </IconContainer>
          </Box>
        </CustomStack>
        {/* 2 */}
        <CustomStack
          sx={{ flexDirection: sizes.xs ? "column" : "row" ,width: sizes.md ? "100%" : "70%"}}
          className="footer-horizontal2"
        >
          <Box>
            <CustomTypography sx={{ textAlign: sizes.md ? "center" : "start"}}>أخبار ورؤي</CustomTypography>
            <CustomTypography sx={{ textAlign: sizes.md ? "center" : "start"}}>تواصلوا معنا</CustomTypography>
            <CustomTypography sx={{ textAlign: sizes.md ? "center" : "start"}}>الخدمات القانونية</CustomTypography>
            <CustomTypography sx={{ textAlign: sizes.md ? "center" : "start"}}>الاستشارات القانونية</CustomTypography>
          </Box>
          <Divider
            flexItem
            orientation="vertical"
            sx={{ border: "1px solid white" }}
          />
          <CustomStack className="horizontal footer-horizontal22">
            <IconContainer className="footer-icon">
              <LinkedInIcon />
            </IconContainer>
            <IconContainer className="footer-icon">
              <TwitterIcon />
            </IconContainer>
            <IconContainer className="footer-icon">
              <FacebookIcon />
            </IconContainer>
          </CustomStack>
          <Divider
            flexItem
            orientation="vertical"
            sx={{ border: "1px solid white" }}
          />
          <Box>
            <CustomTypography sx={{ textAlign: sizes.md ? "center" : "start"}}>فريق العمل</CustomTypography>
            <CustomTypography sx={{ textAlign: sizes.md ? "center" : "start"}}>لماذا أخترتنا</CustomTypography>
            <CustomTypography sx={{ textAlign: sizes.md ? "center" : "start"}}>أراءالعملاء</CustomTypography>
          </Box>
        </CustomStack>

        {/* 3 */}
        <CustomStack
          className="horizontal footer-horizontal3"
          sx={{ width: sizes.md ? "100%" : "60%" }}
        >
          <CustomTypography>الاشعارات القانونية</CustomTypography>
          <CustomTypography>سياسة الخصوصية</CustomTypography>
          <CustomTypography>خريطة الموقع</CustomTypography>
        </CustomStack>

        <CustomTypography className="footer-last">
          TCMG هو أكبر مكتب محاماة في الشرق الاوسط يعمل من خلال كيابات قانونية
          منفصلة و متميزة و مختلفة, جميع حقوق النسخ و النشر محفوظة 2024المجموعة
          التجارية و البحرية للمحاماة.
        </CustomTypography>
      </CustomStack>
    </CustomBox>
  );
};

export default Footer;
