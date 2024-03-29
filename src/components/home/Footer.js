import React from "react";
import {
  CustomBox,
  CustomStack,
  CustomTypography,
  IconContainer,
} from "../../styles";
import { Box, Divider } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import  KeyboardBackspaceIcon  from '@mui/icons-material/KeyboardBackspace';
import { useTranslation } from "react-i18next";

const Footer = ({ sizes }) => {
  const {t,i18n} = useTranslation();
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
            dir:i18n.dir(i18n.language)

            }}
          >
            <CustomTypography variant={sizes.sm?"h5":"h3"}> {t("footerR1P1")}</CustomTypography>
            <IconContainer>
            {i18n.dir(i18n.language)=="ltr"?<EastIcon/>:<KeyboardBackspaceIcon />}

            </IconContainer>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            //   margin: sizes.md ? "15px 5px" : "30px 10px",
            borderBottom:"2px solid white",
            padding:"10px 0px"
            }}
          >
            <CustomTypography variant={sizes.sm?"h5":"h3"}>{t("footerR1P2")}</CustomTypography>
            <IconContainer>
              {i18n.dir(i18n.language)=="ltr"?<EastIcon/>:<KeyboardBackspaceIcon />}
              
            </IconContainer>
          </Box>
        </CustomStack>
        {/* 2 */}
        <CustomStack
          sx={{ flexDirection: sizes.xs ? "column" : "row" ,width: sizes.md ? "100%" : "70%"}}
          className="footer-horizontal2"
        >
          <Box>
            <CustomTypography sx={{ textAlign: sizes.md ? "center" : "start"}}>{t("footerR2S4")}</CustomTypography>
            <CustomTypography sx={{ textAlign: sizes.md ? "center" : "start"}}>{t("footerR2S5")}</CustomTypography>
            <CustomTypography sx={{ textAlign: sizes.md ? "center" : "start"}}> {t("footerR2S6")}</CustomTypography>
            <CustomTypography sx={{ textAlign: sizes.md ? "center" : "start"}}>
            {t("footerR2S7")}</CustomTypography>
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
            <CustomTypography sx={{ textAlign: sizes.md ? "center" : "start"}}> {t("footerR2S1")}</CustomTypography>
            <CustomTypography sx={{ textAlign: sizes.md ? "center" : "start"}}>{t("footerR2S2")} </CustomTypography>
            <CustomTypography sx={{ textAlign: sizes.md ? "center" : "start"}}>{t("footerR2S3")}</CustomTypography>
          </Box>
        </CustomStack>

        {/* 3 */}
        <CustomStack
          className="footer-horizontal3"
          sx={{ width: sizes.md ? "100%" : "60%" ,flexDirection:sizes.xs?"column":"row"}}
        >
          <CustomTypography>{t("footerR2S8")}</CustomTypography>
          <CustomTypography> {t("footerR2S9")}</CustomTypography>
          <CustomTypography>{t("footerR2S10")}</CustomTypography>
        </CustomStack>

        <CustomTypography className="footer-last">
        {t("footerR2S11")}
        </CustomTypography>
      </CustomStack>
    </CustomBox>
  );
};

export default Footer;
