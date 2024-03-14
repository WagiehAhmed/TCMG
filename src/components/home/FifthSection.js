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

const FifthSection = ({ sizes }) => {
  return (
    <CustomBox className="fifth-section">
      <CustomStack className="section-five-container" sx={{flexDirection: sizes.md ? "column" : "row",}}>
        <CustomBox className="section-five-p1" sx={{width: sizes.md ? "100%" : "55%"}}>
          <CustomTypography
            gutterBottom
            className="fs-primary"
            variant={sizes.sm ? "h3" : sizes.lg ? "h2" : "h1"}
          >
            محامين خبراء في مجالات القانون و الثضايا المختلفة
          </CustomTypography>
          <CustomTypography
            gutterBottom
            className="fs-secondary"
            variant={sizes.sm ? "h6" : "h5"}
          >
            ما يميز مكتبنا عن مكاتب المحاماة الاخري,هة انفرادنا بالتخصصات القانونيةالتي تطلب خبرة قانونيةو فكر استراتيجي من الجرجة الاولي.حيث نفخر بوجود شركائنا المتخصصين في محالات القانون المختلفة,والمستعدونلدعم عملائنا الكرام بكل السبل الممكنة لتحقيق اهدافهم بأسرع وقت و أعلي جودةممكنة, سعيا منا لنصبح أفصضل شركة محاماة في مصر في المستقبل القريب.
          </CustomTypography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CustomTypography>اطلب الان استشارة فورية</CustomTypography>
            <IconContainer>
              <KeyboardBackspaceIcon />
            </IconContainer>
          </Box>
        </CustomBox>
        <CustomBox className="section-five-p2" sx={{width: sizes.md ? "100%" : "45%",maxHeight:sizes.md ? "100%" : "600px"}}>
          <CustomStack className="section-five-subContainer">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
               //border: "2px solid yellow",
                height: "fit-content",
                margin: sizes.md?"15px 0px":"30px 0px",
                width: sizes.md?"100%":"80%",
                'scroll-snap-align':"center",
              }}
            >
              <CustomImageContainer className="section-five-image" sizes={sizes}>
                <CustomImage src="../images/القضايا التجارية.png" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-five-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                 القضايا التجارية
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-five-secondary"
                variant={sizes.sm ? "h6" : "p"}
              >
                تتطلب القضايا التجارية الي محامين اصحاب معارفو  خبرات طويلة.لذا يعد توكيل محامي تجاري من القرارات المهمة لضمان حقوق الموكل. و مع خبرة تفوق ال30 عاما في القضايا التجارية,نضمن لك النص في هذا النوع من القضاياو الذي يساعد علي تحقيق اهدافك التجارية.
              </CustomTypography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
               //border: "2px solid yellow",
                height: "fit-content",margin: sizes.md?"15px 0px":"30px 0px",
                width: sizes.md?"100%":"80%",                
                'scroll-snap-align':"center",

              }}
            >
              <CustomImageContainer className="section-five-image" sizes={sizes}>
                <CustomImage src="../images/القضايا التجارية.png" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-five-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                القضايا الجنائية
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-five-secondary"
                variant={sizes.sm ? "h6" : "p"}
              >
                هل تبحث عن محامي جنائي يقوم بالدفاع و المرافعةأمام المحاكم الجنائية متعهدا علي نصرك؟ مع المجموعة التجارية و البحرية سندعمك بأفضل محامي جنايات يتولي أمر القضايا الجنائية و يفوم بحضور التحقيقات أمام النيابة العامة و يركذ خهدة و خبرتة في تحقيق النصر في قضيتك.
              </CustomTypography>
             
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
               //border: "2px solid yellow",
                height: "fit-content",margin: sizes.md?"15px 0px":"30px 0px",
                'scroll-snap-align':"center",
                width: sizes.md?"100%":"80%",
              }}
            >
              <CustomImageContainer className="section-five-image" sizes={sizes}>
                <CustomImage src="../images/القضايا الدولية.png" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-five-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                القضايا الدولية
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-five-secondary"
                variant={sizes.sm ? "h6" : "p"}
              >
                نقدم الدعم الكافي من الدراسات و الاستشارات لجميع عملائنا الدوليين و المحليين في التقاضي عبر المحاكم الدولية. فمن خلال الخبرة في القانون الدولي,سندعمك بكحامي دولي متمرس مستعد لتولي قضاياك الدولية و العمل علي تحقيق غايتك في التحكيم التجاري الدولي.
              </CustomTypography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
               //border: "2px solid yellow",
                height: "fit-content",margin: sizes.md?"15px 0px":"30px 0px",
                'scroll-snap-align':"center",
                width: sizes.md?"100%":"80%",
              }}
            >
              <CustomImageContainer className="section-five-image" sizes={sizes}>
                <CustomImage src="../images/القضايا المدنية.png" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-five-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                القضايا المدنية 
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-five-secondary"
                variant={sizes.sm ? "h6" : "p"}
              >
              لدي مكتبنا محامون متخصصون في القضايا المدنية مستعدون لتولي كافة انواع القضاياالناشئة عن العقود و المعاملات المدنية مع تقديم الدعم الكافي من المرافعة و الدفاع أمام المحاكم لنصرة موكلينا. فمن خلال التعاقد معنا, سيتولي أشهر محامي مدني في مكتبنا قضيتك و يحقق لك النصر من خلال خبرتة ومعارفة.                
              </CustomTypography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
               //border: "2px solid yellow",
                height: "fit-content",margin: sizes.md?"15px 0px":"30px 0px",
                'scroll-snap-align':"center",
                width: sizes.md?"100%":"80%",
              }}
            >
              <CustomImageContainer className="section-five-image" sizes={sizes}>
                <CustomImage src="../images/القضايا العقارية.png" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-five-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                القضايا العقارية
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-five-secondary"
                variant={sizes.sm ? "h6" : "p"}
              >
                تقدم المجموعة التجارية و البحرية خدمات قانونية رائدة حول المشكلات القانونية المتعلقة بالعقارات مثل قضايا التعويضات و الحيازات العقارية و غيرها, سنقوم بدعمك بأفضل محامي عقارات بمكتبنا لتولي قضيتكو يحقق اهدافك القانونية في القضايا العقارية و في مجال التطوير العقاري داخل و خارج مصر.               
              </CustomTypography>
            </Box>
          </CustomStack>
        </CustomBox>
      </CustomStack>
    </CustomBox>
  );
};

export default FifthSection;
