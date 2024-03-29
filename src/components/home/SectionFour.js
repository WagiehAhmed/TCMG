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

import EastIcon from "@mui/icons-material/East";

const SectionFour = ({ sizes }) => {
  const { t, i18n } = useTranslation();
  return (
    <CustomBox
      className="section-four"
      sx={{ minHeight: { xs: "60dvh", md: "70dvh", lg: "90dvh" } }}
    >
      <CustomStack
        className="section-four-container"
        sx={{ flexDirection: sizes.md ? "column" : "row" }}
      >
        <CustomBox
          className="section-four-p1"
          sx={{ width: sizes.md ? "100%" : "55%" }}
        >
          <CustomTypography
            gutterBottom
            className="fs-primary"
            variant={sizes.sm ? "h3" : sizes.lg ? "h2" : "h1"}
          >
            {t("sectionFourS1")}
          </CustomTypography>
          <CustomTypography
            gutterBottom
            className="fs-secondary"
            variant={sizes.sm ? "h6" : "h5"}
          >
            {t("sectionFourS2")}
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
              {" "}
              {i18n.dir(i18n.language) == "ltr" ? (
                <EastIcon />
              ) : (
                <KeyboardBackspaceIcon />
              )}
            </IconContainer>
          </Box>
        </CustomBox>
        <CustomBox
          className="section-four-p2"
          sx={{
            width: sizes.md ? "100%" : "45%",
            maxHeight: sizes.md ? "100%" : "680px",
          }}
        >
          <CustomStack className="section-four-subContainer">
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
                className="section-four-image"
                sizes={sizes}
              >
                <CustomImage src="../images/تأسيس شركات.png" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-four-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                {t("sectionFourSlide1T")}
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-four-secondary"
                variant={sizes.sm ? "h6" : "p"}
              >
                {t("sectionFourSlide1b")}
              </CustomTypography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: sizes.md ? "15px 5px" : "30px 10px",
                }}
              >
                <CustomTypography>{t("goToHomePage")}</CustomTypography>
                <IconContainer>
                {i18n.dir(i18n.language) == "ltr" ? (
                <EastIcon />
              ) : (
                <KeyboardBackspaceIcon />
              )}
                </IconContainer>
              </Box>
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
                className="section-four-image"
                sizes={sizes}
              >
                <CustomImage src="../images/الاستشارا القانونية.png" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-four-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                {t("sectionFourSlide2T")}
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-four-secondary"
                variant={sizes.sm ? "h6" : "p"}
              >
                {t("sectionFourSlide2b")}
              </CustomTypography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: sizes.md ? "15px 5px" : "30px 10px",
                }}
              >
                <CustomTypography> {t("goToHomePage")}</CustomTypography>
                <IconContainer>
                {i18n.dir(i18n.language) == "ltr" ? (
                <EastIcon />
              ) : (
                <KeyboardBackspaceIcon />
              )}
                </IconContainer>
              </Box>
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
                className="section-four-image"
                sizes={sizes}
              >
                <CustomImage src="../images/استثمر في مصر.png" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-four-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                {t("sectionFourSlide3T")}
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-four-secondary"
                variant={sizes.sm ? "h6" : "p"}
              >
                {t("sectionFourSlide3b")}
              </CustomTypography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: sizes.md ? "15px 5px" : "30px 10px",
                }}
              >
                <CustomTypography> {t("goToHomePage")} </CustomTypography>
                <IconContainer>
                {i18n.dir(i18n.language) == "ltr" ? (
                <EastIcon />
              ) : (
                <KeyboardBackspaceIcon />
              )}
                </IconContainer>
              </Box>
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
                className="section-four-image"
                sizes={sizes}
              >
                <CustomImage src="../images/توكيل محامي .png" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-four-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                {t("sectionFourSlide4T")}
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-four-secondary"
                variant={sizes.sm ? "h6" : "p"}
              >
                {t("sectionFourSlide4b")}
              </CustomTypography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: sizes.md ? "15px 5px" : "30px 10px",
                }}
              >
                <CustomTypography> {t("goToHomePage")}</CustomTypography>
                <IconContainer>
                {i18n.dir(i18n.language) == "ltr" ? (
                <EastIcon />
              ) : (
                <KeyboardBackspaceIcon />
              )}  
                </IconContainer>
              </Box>
            </Box>
          </CustomStack>
        </CustomBox>
      </CustomStack>
    </CustomBox>
  );
};

export default SectionFour;
