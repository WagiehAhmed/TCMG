import React, { useEffect } from "react";
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
import { useBlogs } from "../../hooks/useBlogs";
import { useStore } from "../../hooks/useStore";
import { serverUrl } from './../../util/serverURL';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SectionEleven = ({ sizes }) => {

  const {t} = useTranslation();
  const navigate = useNavigate();
  const { blogs } = useStore();
  const { loading, error, getBlogs } = useBlogs();
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <CustomBox className="section-eleven"
    sx={{ minHeight: { xs: "60dvh", md: "70dvh", lg: "80dvh" } }}>
      <CustomStack
        className="section-eleven-container"
        sx={{ flexDirection: sizes.md ? "column" : "row" }}
      >
        <CustomBox
          className="section-eleven-p1"
          sx={{ width: sizes.md ? "100%" : "55%" }}
        >
          <CustomTypography
            gutterBottom
            className="fs-primary"
            variant={sizes.sm ? "h3" : sizes.lg ? "h2" : "h1"}
          >
            {t("sectionElevenS1")}
          </CustomTypography>
          <CustomTypography
            gutterBottom
            className="fs-secondary"
            variant={sizes.sm ? "h6" : "h5"}
            >
            {t("sectionElevenS2")}
          </CustomTypography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            >
            <CustomTypography> 
            {t("more")}
              </CustomTypography>
            <IconContainer>
              <KeyboardBackspaceIcon />
            </IconContainer>
          </Box>
        </CustomBox>
        <CustomBox
          className="section-eleven-p2"
          sx={{
            width: sizes.md ? "100%" : "45%",
            maxHeight: sizes.md ? "100%" : "600px",
          }}
        >
          <CustomStack className="section-eleven-subContainer">
           {/* {blogs !== undefined && blogs.map((blog)=>(
             <Box
             sx={{
               display: "flex",
               flexDirection: "column",
               alignItems: "flex-start",
               height: "fit-content",
               margin: sizes.md ? "15px 0px" : "30px 0px",
               width: sizes.md ? "100%" : "80%",
               "scroll-snap-align": "center",
             }}
             onClick={()=>navigate(`/news/${blog.id}`)}
           >
             <CustomImageContainer
               className="section-eleven-image-container"
               sizes={sizes}
             >
               <CustomImage src={`${serverUrl}/blogs/${blog.image}`}/>

             </CustomImageContainer>

             <CustomTypography
               gutterBottom
               className="section-eleven-primary"
               variant={sizes.sm ? "h5" : "h6"}
             >
               {blog.title}
             </CustomTypography>
             <CustomTypography
               gutterBottom
               className="section-eleven-secondary"
               variant={sizes.sm ? "h6" : "p"}
             >
              
               {blog.content}
             </CustomTypography>
             <CustomTypography
               gutterBottom
               className="section-eleven-primary"
               variant={sizes.sm ? "h5" : "h6"}
               >
               {blog.date}
             </CustomTypography>
           </Box>
           ))} */}
           
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
                className="section-eleven-image-container"
                sizes={sizes}
              >
                <CustomImage src="../images/TCMG social media posts batch 2-07.jpg" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-eleven-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                {t("sectionTenS1t")}
              </CustomTypography>
              {/* <CustomTypography
                gutterBottom
                className="section-eleven-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                28يناير, 9دقايق
              </CustomTypography> */}
              <CustomTypography
                gutterBottom
                className="section-eleven-secondary"
                variant={sizes.sm ? "h6" : "p"}
              >  
                {t("sectionTenS1b")}
              
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
                className="section-eleven-image-container"
                sizes={sizes}
              >
                <CustomImage src="../images/TCMG social media posts batch 2-12 (1).jpg" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-eleven-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                {t("sectionTenS2t")}
              </CustomTypography>
              {/* <CustomTypography
                gutterBottom
                className="section-eleven-primary"
                variant={sizes.sm ? "h5" : "h6"}
                >
                28يناير, 9دقايق
              </CustomTypography> */}
              <CustomTypography
                gutterBottom
                className="section-eleven-secondary"
                variant={sizes.sm ? "h6" : "p"}
                >
                {t("sectionTenS2b")}
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
                className="section-eleven-image-container"
                sizes={sizes}
                >
                <CustomImage src="../images/TCMG social media posts batch 2-11.jpg" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-eleven-primary"
                variant={sizes.sm ? "h5" : "h6"}
                >
                {t("sectionTenS3t")}
              </CustomTypography>
              {/* <CustomTypography
                gutterBottom
                className="section-eleven-primary"
                variant={sizes.sm ? "h5" : "h6"}
                >
                28يناير, 9دقايق
              </CustomTypography> */}
              <CustomTypography
                gutterBottom
                className="section-eleven-secondary"
                variant={sizes.sm ? "h6" : "p"}
                >
                {t("sectionTenS3b")}
              </CustomTypography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                //  border: "2px solid yellow",
                height: "fit-content",
                margin: sizes.md ? "15px 0px" : "30px 0px",
                width: sizes.md ? "100%" : "80%",
                "scroll-snap-align": "center",
              }}
              >
              <CustomImageContainer
                className="section-eleven-image-container"
                sizes={sizes}
                >
                <CustomImage src="../images/TCMG sm posts batch 2-09 (1).jpg" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-eleven-primary"
                variant={sizes.sm ? "h5" : "h6"}
                >
                {t("sectionTenS4t")}
              </CustomTypography>
              {/* <CustomTypography
                gutterBottom
                className="section-eleven-primary"
                variant={sizes.sm ? "h5" : "h6"}
                >
                28يناير, 9دقايق
              </CustomTypography> */}
              <CustomTypography
                gutterBottom
                className="section-eleven-secondary"
                variant={sizes.sm ? "h6" : "p"}
                >
                  {t("sectionTenS4b")}
              </CustomTypography>
            </Box> 
          </CustomStack>
        </CustomBox>
      </CustomStack>
    </CustomBox>
  );
};

export default SectionEleven;
