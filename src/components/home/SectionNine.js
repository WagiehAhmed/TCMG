import React from "react";
import {
  CustomBox,
  CustomForm,
  CustomFormControl,
  CustomGrid,
  CustomImage,
  CustomImageContainer,
  CustomStack,
  CustomTextFeild,
  CustomTypography,
  IconContainer,
} from "../../styles";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box, Button } from "@mui/material";

const SectionNine = ({ sizes }) => {
  return (
    <CustomBox className="section-nine">
      <CustomStack
        className="ffs-container"
        sx={{ flexDirection: sizes.md ? "column" : "row" }}
      >
        <CustomBox className="ffs-p1" sx={{ width: sizes.md ? "100%" : "55%" }}>
          <CustomForm>
            <CustomFormControl>


            <CustomGrid container columns={{ xs: 1, md: 2 }}>
            <CustomGrid item xs={1} className="form-item">
              <CustomTextFeild
              // label="الاسم"
              placeholder="الاسم*"
              required
              />
            </CustomGrid>
            <CustomGrid item xs={1} className="form-item">
              <CustomTextFeild
                // label="البريد الألكتروني"
                placeholder="البريد الألكتروني*"
                required/>
            </CustomGrid>
            <CustomGrid item xs={1} md={2} className="form-item">
              <CustomTextFeild
                // label="أكتب رسالتك هنا..."
                placeholder="أكتب رسالتك هنا..."
                required
                multiline
                rows={5}
                />
            </CustomGrid>
          </CustomGrid>


              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: sizes.md?"15px 10px":"30px 20px",
                }}
              >
                <CustomTypography>أرسال رسالة</CustomTypography>
                <IconContainer>
                  <KeyboardBackspaceIcon />
                </IconContainer>
              </Box>
            </CustomFormControl>
          </CustomForm>

         
        </CustomBox>
        <CustomBox
          className="ffs-p2"
          sx={{
            width: sizes.md ? "100%" : "45%",
            maxHeight: sizes.md ? "100%" : "550px",
          }}
        >
          <CustomImageContainer className="section-nine-image-container">
            <CustomImage src="../images/logo.png" />
          </CustomImageContainer>
        </CustomBox>
      </CustomStack>
    </CustomBox>
  );
};

export default SectionNine;
