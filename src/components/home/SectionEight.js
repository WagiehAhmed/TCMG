import React from "react";
import { CustomBox, CustomGrid, CustomStack, CustomTypography } from "../../styles";
import { Divider } from "@mui/material";

const SectionEight = ({sizes}) => {
  return (
    <CustomBox className="section-eight" sizes={sizes}>
      <CustomGrid
        container
        columns={{ xs: 1, md: 2, lg: 4 }}
        className="container"
      >
        {/* item  */}
        <CustomGrid item xs={1} sm={2} md={1} className="item">
          <CustomStack className="details">
            <CustomTypography
              variant="h2"
              sx={{
                textAlign: "center",
                color: "black",
                fontWeight: "bold",
              }}
            >
              6
            </CustomTypography>
            <CustomTypography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "black",
              }}
            >
              مكاتب محاماة أقليمية
            </CustomTypography>
          </CustomStack>
        </CustomGrid>
        {/* item  */}
        <CustomGrid item xs={1} sm={2} md={1} className="item">
          <CustomStack className="details">
            <CustomTypography
              variant="h2"
              sx={{
                textAlign: "center",
                color: "black",
                fontWeight: "bold",
              }}
            >
              20
            </CustomTypography>
            <CustomTypography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "black",
              }}
            >
              سنين الخبرة
            </CustomTypography>
          </CustomStack>
        </CustomGrid>
        {/* item  */}
        <CustomGrid item xs={1} sm={2} md={1} className="item">
          <CustomStack className="details">
            <CustomTypography
              variant="h2"
              sx={{
                textAlign: "center",
                color: "black",
                fontWeight: "bold",
              }}
            >
              50
            </CustomTypography>
            <CustomTypography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "black",
              }}
            >
              عدد الخبراء
            </CustomTypography>
          </CustomStack>
        </CustomGrid>
        {/* item  */}
        <CustomGrid item xs={1} sm={2} md={1} className="item">
          <CustomStack className="details">
            <CustomTypography
              variant="h2"
              sx={{
                textAlign: "center",
                color: "black",
                fontWeight: "bold",
              }}
            >
              400+
            </CustomTypography>
            <CustomTypography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "black",
              }}
            >
              العلاء
            </CustomTypography>
          </CustomStack>
        </CustomGrid>
      </CustomGrid>
    </CustomBox>
  );
};

export default SectionEight;
