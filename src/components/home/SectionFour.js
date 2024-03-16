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

const SectionFour = ({ sizes }) => {
  return (
    <CustomBox className="section-four" >
      <CustomStack className="section-four-container"sx={{flexDirection: sizes.md ? "column" : "row",}}>
        <CustomBox className="section-four-p1" sx={{width: sizes.md ? "100%" : "55%"}}>
          <CustomTypography
            gutterBottom
            className="fs-primary"
            variant={sizes.sm ? "h3" : sizes.lg ? "h2" : "h1"}
          >
            خدمات قانونية عالمية المستوي منذ 1986
          </CustomTypography>
          <CustomTypography
            gutterBottom
            className="fs-secondary"
            variant={sizes.sm ? "h6" : "h5"}
          >
            ينفرد مكتب محامي مصر الأول بتقديم أكثر من 30 خدمة قانونية بخبرات
            عالمية و فهم واسع للبيئة القانونية. لتقديم أفضل مستوي من الحلول
            القانونية علي الصعيد المحلي و الدولي في مكتبنا بقلب مدينة القاهرة,
            فمن خلال دمج خبرات فريق العمل المكون من أكثر من 40 محامي متخصص في
            مجالات القانون المختلفة, تكمن قوتنا في تقديم خدمات قانونية بمعايير
            اداء عالميةو مستوي فاعلية ممتاز في الجودة و الوقت.
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
        <CustomBox className="section-four-p2" sx={{width: sizes.md ? "100%" : "45%",maxHeight:sizes.md ? "100%" : "680px"}}>
          <CustomStack className="section-four-subContainer">
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
              <CustomImageContainer className="section-four-image" sizes={sizes}>
                <CustomImage src="../images/تأسيس شركات.png" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-four-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                تأسيس شركات
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-four-secondary"
                variant={sizes.sm ? "h6" : "p"}
              >
                هل ترغب في تأسيس شركة في مصر؟نعمل علي تقديم الدعم لأعمال الشركات
                المختلفة بمستوي مميز من الاداء, حيث نقدم الدعم في تاسيس الشركات
                في مصر و السعودية و الأماراتبمختلف أنوعها, واعداد عقود التأسيس و
                اللوائح الداخلية ,بالاضافة الي مساعدة العملاء علي اختيار نوع
                الشركة. و توفير الدعم في كافو مراحل التأسيس ز الأعداد.
              </CustomTypography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",margin: sizes.md?"15px 5px":"30px 10px",
                }}
              >
                <CustomTypography> الذهاب الي الصفحة</CustomTypography>
                <IconContainer>
                  <KeyboardBackspaceIcon />
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
                margin: sizes.md?"15px 0px":"30px 0px",
                width: sizes.md?"100%":"80%",
                'scroll-snap-align':"center",
              }}
            >
              <CustomImageContainer className="section-four-image" sizes={sizes}>
                <CustomImage src="../images/الاستشارا القانونية.png" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-four-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                الاستشارات القانونية
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-four-secondary"
                variant={sizes.sm ? "h6" : "p"}
              >
                نفخر بتقديم الاستشارات القانونية من مستشار قانوني محنك مع الدعم
                من أكبر محاميين مصر متخصصين في جالات القانون المختلفة و
                المستعدين لتقديم المشورة و الراي القانونيحول القضايا المختلفة
                للأفراد و الشركات مع تقديم افضل الحلول الموثوقة لمشكلاتهم
                القانونية و هذة الخدمة لكل من يبحث عن رقم محامي للأستشارة.
              </CustomTypography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",margin: sizes.md?"15px 5px":"30px 10px",
                }}
              >
                <CustomTypography> الذهاب الي الصفحة</CustomTypography>
                <IconContainer>
                  <KeyboardBackspaceIcon />
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
                margin: sizes.md?"15px 0px":"30px 0px",
                width: sizes.md?"100%":"80%",
                'scroll-snap-align':"center",
              }}
            >
              <CustomImageContainer className="section-four-image" sizes={sizes}>
                <CustomImage src="../images/استثمر في مصر.png" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-four-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                استثمر في مصر
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-four-secondary"
                variant={sizes.sm ? "h6" : "p"}
              >
                الأستثمار في مصر يعد يعد فرصة مثيرة بفضل موقعها الاستراتيجي, و
                أقتصادها المتنامي وجهودها في تحسين بيئة الاستثمار, تقدم الحكومة
                دعما و تسهيلات للمستثمريين و السوق المصري يوفر فرص متنوعة وواسعة
                للعملاء المحتملين.
              </CustomTypography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",margin: sizes.md?"15px 5px":"30px 10px",
                }}
              >
                <CustomTypography> الذهاب الي الصفحة </CustomTypography>
                <IconContainer>
                  <KeyboardBackspaceIcon />
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
                margin: sizes.md?"15px 0px":"30px 0px",
                width: sizes.md?"100%":"80%",
                'scroll-snap-align':"center",
              }}
            >
              <CustomImageContainer className="section-four-image" sizes={sizes}>
                <CustomImage src="../images/توكيل محامي .png" />
              </CustomImageContainer>

              <CustomTypography
                gutterBottom
                className="section-four-primary"
                variant={sizes.sm ? "h5" : "h6"}
              >
                توكيل محامي
              </CustomTypography>
              <CustomTypography
                gutterBottom
                className="section-four-secondary"
                variant={sizes.sm ? "h6" : "p"}
              >توكيل محامي هو اتفاق قانوني يمنح شخص أخر صلاحية تمثيلك أو تنفيذ الاجراءات القانونية نيابة عنك يعتمد علي الثقة المتبادبة و يتضمن توسيق رسمي  اتحديد نطاق الصلاحيات الممنوحة.
              </CustomTypography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: sizes.md?"15px 5px":"30px 10px",
                }}
              >
                <CustomTypography> الذهاب الي الصفحة</CustomTypography>
                <IconContainer>
                  <KeyboardBackspaceIcon />
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
