import React from "react";
import { CustomGrid, CustomStack, CustomTypography } from "../../styles";

const SectionEight = () => {
  return (
    <CustomGrid
      container
      columns={{ xs: 1, md: 2, lg: 4 }}
      className="container"
    >
      {/* item  */}
      <CustomGrid item xs={1} className="item">
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
      <CustomGrid item xs={1} className="item">
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
      <CustomGrid item xs={1} className="item">
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
      <CustomGrid item xs={1} className="item">
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
  );
};

export default SectionEight;
