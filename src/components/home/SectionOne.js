import React from "react";
import { CustomBox, CustomTypography } from "../../styles";

const FirstSection = ({sizes}) => {
  return (
    <CustomBox className="section-one" sizes={sizes}>
      <CustomTypography gutterBottom className="fs-primary" variant={sizes.sm?"h3":"h1"}>مستوي جديد من الحلول القانوية</CustomTypography>
      <CustomTypography gutterBottom className="fs-secondary" variant=
      {sizes.sm?"h6":"h5"}>
        باستخددام نهج مبتكر,يقدم المكتب حلأ قانونيا يلقي الضزء علي افاق جديدة
        لتحديات الشركات القانونية,مما يسهم في تحقيق حلول فعالة و مستخدمة.
      </CustomTypography>
    </CustomBox>
  );
};

export default FirstSection;
