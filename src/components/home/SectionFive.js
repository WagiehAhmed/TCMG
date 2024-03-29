import React from "react";
import {
  CustomBox,
  CustomImage,
  CustomImageContainer,
  CustomStack,
  CustomTypography,
  IconContainer,
} from "../../styles";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import EastIcon from '@mui/icons-material/East';

const SectionFive = ({ sizes }) => {
  const {t,i18n} = useTranslation();
  return (
    <CustomBox
      className="section-five"
      sx={{ minHeight: { xs: "60dvh", md: "70dvh", lg: "90dvh" } }}
    >
      <CustomStack
        className="section-five-container"
        sx={{ flexDirection: sizes.md ? "column" : "row" }}
      >
        <CustomBox
          className="section-five-p1"
          sx={{ width: sizes.md ? "100%" : "55%" }}
        >
          <CustomTypography
            gutterBottom
            className="fs-primary"
            variant={sizes.sm ? "h3" : sizes.lg ? "h2" : "h1"}
          >
            {t("sectionFiveS1")}
          </CustomTypography>
          <CustomTypography
            gutterBottom
            className="fs-secondary"
            variant={sizes.sm ? "h6" : "h5"}
            >
            {t("sectionFiveS2")}
          </CustomTypography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CustomTypography
            >{t("ask")}

            </CustomTypography>
            <IconContainer>
            {i18n.dir(i18n.language)=="ltr"?<EastIcon/>:<KeyboardBackspaceIcon />}

            </IconContainer>
          </Box>
        </CustomBox>
        <CustomBox
          className="section-five-p2"
          sx={{
            width: sizes.md ? "100%" : "45%",
            maxHeight: sizes.md ? "100%" : "600px",
          }}
        >
          <CustomStack className="section-five-subContainer">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                //border: "2px solid yellow",
                height: "fit-content",
                margin: sizes.md ? "15px 0px" : "30px 0px",
                width: sizes.md ? "100%" : "80%",
                "scroll-snap-align": "center",
              }}
            >
              <CustomImageContainer
                className="section-five-image"
                sizes={sizes}
              >
                <CustomImage src="../images/القضايا التجارية.png" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-five-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >{t("sectionFiveSlide1T")}
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-five-secondary"
                variant={sizes.sm ? "h6" : "p"}
                >
                {t("sectionFiveSlide1b")}
              </CustomTypography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                //border: "2px solid yellow",
                height: "fit-content",
                margin: sizes.md ? "15px 0px" : "30px 0px",
                width: sizes.md ? "100%" : "80%",
                "scroll-snap-align": "center",
              }}
            >
              <CustomImageContainer
                className="section-five-image"
                sizes={sizes}
              >
                <CustomImage src="../images/القضايا التجارية.png" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-five-primary"
                variant={sizes.sm ? "h5" : "h6"}
                >
                {t("sectionFiveSlide2T")}
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-five-secondary"
                variant={sizes.sm ? "h6" : "p"}
                >
                {t("sectionFiveSlide2b")}
              </CustomTypography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                //border: "2px solid yellow",
                height: "fit-content",
                margin: sizes.md ? "15px 0px" : "30px 0px",
                "scroll-snap-align": "center",
                width: sizes.md ? "100%" : "80%",
              }}
              >
              <CustomImageContainer
                className="section-five-image"
                sizes={sizes}
                >
                <CustomImage src="../images/القضايا الدولية.png" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-five-primary"
                variant={sizes.sm ? "h5" : "h6"}
                >
                {t("sectionFiveSlide3T")}
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-five-secondary"
                variant={sizes.sm ? "h6" : "p"}
                >
                {t("sectionFiveSlide3b")}
              </CustomTypography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                //border: "2px solid yellow",
                height: "fit-content",
                margin: sizes.md ? "15px 0px" : "30px 0px",
                "scroll-snap-align": "center",
                width: sizes.md ? "100%" : "80%",
              }}
              >
              <CustomImageContainer
                className="section-five-image"
                sizes={sizes}
                >
                <CustomImage src="../images/القضايا المدنية.png" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-five-primary"
                variant={sizes.sm ? "h5" : "h6"}
                >
                {t("sectionFiveSlide4T")}
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-five-secondary"
                variant={sizes.sm ? "h6" : "p"}
                >
                {t("sectionFiveSlide4b")}
              </CustomTypography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                //border: "2px solid yellow",
                height: "fit-content",
                margin: sizes.md ? "15px 0px" : "30px 0px",
                "scroll-snap-align": "center",
                width: sizes.md ? "100%" : "80%",
              }}
              >
              <CustomImageContainer
                className="section-five-image"
                sizes={sizes}
                >
                <CustomImage src="../images/القضايا العقارية.png" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-five-primary"
                variant={sizes.sm ? "h5" : "h6"}
                >
                {t("sectionFiveSlide5T")}
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-five-secondary"
                variant={sizes.sm ? "h6" : "p"}
                >
                {t("sectionFiveSlide5b")}
              </CustomTypography>
            </Box>
          </CustomStack>
        </CustomBox>
      </CustomStack>
    </CustomBox>
  );
};

export default SectionFive;
