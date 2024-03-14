import React from "react";
import { CustomBox, CustomTypography } from "../../styles";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Slider from "react-slick";

const ThirdSection = ({sizes}) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CustomBox className="third-section" sizes={sizes}>
      <Stack alignItems="center">
        <CustomTypography gutterBottom className="ts-primary"variant={sizes.sm?"h3":"h1"}>
          لماذا تخترنا و بكل ثقة؟
        </CustomTypography>
        <CustomTypography gutterBottom className="ts-secondary" variant={sizes.sm?"h6":"h5"}>
          يمتاز مكتبنا عن غيرة من مكاتب المحاماة المعتمدة الاخري في الاخلاقيات
          التي تسير آلية العمل داخل مكتبنا,بالاضافة الي مبادئ المحامين و الشركاء
          العاملين في المكتب و المؤمنين بأهمية تطوير الذات علي المستوي العملي و
          القانوني سعيا منهم لتحويل مكتبنالشركة محاماة دولية في مصر. فقد شهد
          عملاؤنا بقوة مكتبنا و ثقة التعامل معنا و المبادئ التالية ما ستجدها عند
          التعامل معنا:
        </CustomTypography>
      </Stack>

      <Slider {...settings}>
        <Box>
          <Card sx={{ maxWidth: "300px", height: "350px", margin: "0px auto" }}>
            <CardMedia
              sx={{ height: "300px" }}
              image="../images/logo.png"
              title="green iguana"
            />
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                padding: "7px",
              }}
            >
              الثقة شعارنا
            </Typography>
          </Card>
        </Box>
        <Box>
          <Card sx={{ maxWidth: "300px", height: "350px", margin: "0px auto" }}>
            <CardMedia
              sx={{ height: "300px" }}
              image="../images/logo.png"
              title="green iguana"
            />
              <Typography
                variant="h5"
                component="div"
                sx={{
                  textAlign: "center",
                  padding: "7px",
                }}
              >
                حلول قانونية سريعة
              </Typography>
          </Card>
        </Box>
        <Box>
          <Card sx={{ maxWidth: "300px", height: "350px", margin: "0px auto" }}>
            <CardMedia
              sx={{ height: "300px" }}
              image="../images/logo.png"
              title="green iguana"
            />
            <Typography
              variant="h5"
              component="div"
              sx={{
                textAlign: "center",
                padding: "7px",
              }}
            >
              رضا العميل أولويتنا
            </Typography>
          </Card>
        </Box>
      </Slider>
    </CustomBox>
  );
};

export default ThirdSection;
