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

const SectionEleven = ({ sizes }) => {

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
            أحدث المقالات
          </CustomTypography>
          <CustomTypography
            gutterBottom
            className="fs-secondary"
            variant={sizes.sm ? "h6" : "h5"}
          >
            تعلم أكثر من المكتبة القانونية المتكاملةو أمتلك معرفة أوسع وأعمق في
            البيئة القانونية من خلال أستكشاف أحدث التطورات و المستجدات , و أستفد
            من مجموعة متنوعة من المصادرالقانونية المتكاملة.
          </CustomTypography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CustomTypography> أقراء المزيد</CustomTypography>
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
           {blogs !== undefined && blogs.map((blog)=>(
             <Box
             sx={{
               display: "flex",
               flexDirection: "column",
               alignItems: "flex-start",
               // border: "2px solid yellow",
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
               {/* <CustomImage src={blog.image}/> */}

             </CustomImageContainer>

             <CustomTypography
               gutterBottom
               className="section-eleven-primary"
               variant={sizes.sm ? "h5" : "h6"}
             >
               {/* محامي في مصر */}
               {blog.title}
             </CustomTypography>
             <CustomTypography
               gutterBottom
               className="section-eleven-secondary"
               variant={sizes.sm ? "h6" : "p"}
             >
               {/* علي مر السنين و قد تم الاعتراف بامحامي المصري كونة أحد أجدر رجال
               القانونفي تولي المسائل القانونية, فقد عرف بعقليتة الاستراتيجة
               العالية و امتلاكة المقدرة الفائقة في أدارة الازمات و فض
               المنازعات المحلية و الدولية في كثير من بلاد الوطن العربي في شتي
               فوع القانون. */}
               {blog.content}
             </CustomTypography>
             <CustomTypography
               gutterBottom
               className="section-eleven-primary"
               variant={sizes.sm ? "h5" : "h6"}
               >
               {/* 28يناير, 9دقايق */}
               {blog.date}
             </CustomTypography>
           </Box>
           ))}
            {/* <Box
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
                تأسيس شركة في السعودية
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-eleven-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                28يناير, 9دقايق
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-eleven-secondary"
                variant={sizes.sm ? "h6" : "p"}
              >
                هي خطوة جوهرية للعديد من رواد الاعمال و المستثمرين الراغبين في
                استغلال الفرص الاقتصادية المتاحة في البلاد, حيث تعد المملكة
                العربية السعودية واحدة من أكبر الاقتصادات في الشرق الاوسط و
                تتمتع ببيئة استثمارية مشجعة و متطورة.
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
                تسجيل العلامة التجارية
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-eleven-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                28يناير, 9دقايق
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-eleven-secondary"
                variant={sizes.sm ? "h6" : "p"}
              >
                يمثل احد اهم الاجرائات القانونية المهمة لا فرد أو شركة ترغب في
                حكاية هويتهاالتجارية و حقوقها الفكرية, حيث يضمن القانون حقوق
                الملكية الفكرية للشركات و الافراد في استخدام اسماءتجارية, شعارات
                تجارية ,تصاميم المنتجات الخاصة بهم و ذلك من خلال الاستعانة
                بمحامي العلامات تجارية محترف.
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
                حماية الملكية الفكرية
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-eleven-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                28يناير, 9دقايق
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-eleven-secondary"
                variant={sizes.sm ? "h6" : "p"}
              >
                تعد أحد افرع الملكية حيث لا تقتصر علي كونها ملكية مادية فقط خاصة
                بالعقارات, و يندمج تحتها براءات الاختراع و حقوق النشر و العلامات
                التجارية, لذا و قت باتت الحاحة تتطلب توكيل المحامي المتخصص
                بحماية الملكية الفكرية.
              </CustomTypography>
            </Box> */}
          </CustomStack>
        </CustomBox>
      </CustomStack>
    </CustomBox>
  );
};

export default SectionEleven;
