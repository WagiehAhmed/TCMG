import React from "react";
import { CustomBox, CustomImage, CustomImageContainer } from "../../styles";

const SectionTweleve = ({sizes}) => {
  return (
    <CustomBox className="section-tweleve" sizes={sizes}>
    
    <CustomImageContainer className="section-tweleve-image-container">
      <CustomImage src="../images/logo.png" className="section-tweleve-image"/>
    </CustomImageContainer>
    </CustomBox>
  );
};

export default SectionTweleve;
