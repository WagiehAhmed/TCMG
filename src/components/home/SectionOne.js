import React from "react";
import { CustomBox, CustomTypography } from "../../styles";
import { useTranslation } from "react-i18next";

const FirstSection = ({sizes}) => {
  const { t, i18n } = useTranslation();
  return (
    <CustomBox className="section-one" sizes={sizes} 
    sx={{minHeight:{xs:"70dvh",lg:"90dvh"}}}>
      <CustomTypography gutterBottom className="fs-primary" variant={sizes.sm?"h3":"h1"}>{t("sectionOneP1")}</CustomTypography>
      <CustomTypography gutterBottom className="fs-secondary" variant=
      {sizes.sm?"h6":"h5"}>
        {t("sectionOneP2")}
      </CustomTypography>
    </CustomBox>
  );
};

export default FirstSection;
