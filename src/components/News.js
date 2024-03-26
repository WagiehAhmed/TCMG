import { Button, Container, Box, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { useBlogs } from "../hooks/useBlogs";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import {
  CustomBox,
  CustomGrid,
  CustomImage,
  CustomImageContainer,
  CustomStack,
  CustomTypography,
  IconContainer,
} from "../styles";
import { theme } from "../styles/theme";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { formatDistanceToNow } from "date-fns";
import { useStore } from "../hooks/useStore";
import { Link, useNavigate } from "react-router-dom";
import { serverUrl } from "../util/serverURL";

const News = () => {
  const { blogs } = useStore();
  const { loading, error, getBlogs } = useBlogs();
  useEffect(() => {
    getBlogs();
  }, []);

  const sizes = {
    xs: useMediaQuery(theme.breakpoints.down("sm")),
    sm: useMediaQuery(theme.breakpoints.down("md")),
    md: useMediaQuery(theme.breakpoints.down("lg")),
    lg: useMediaQuery(theme.breakpoints.down("xl")),
    xl: useMediaQuery(theme.breakpoints.only("xl")),
  };

  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight:"73.3dvh",
        backgroundColor: "rgba(100,100,200,0.25)",
        padding: sizes.sm ? "10px" : "50px 25px",
      }}
    >
      <CustomGrid
        container
        className="container"
        columns={{ xs: 1, sm: 2, lg: 4 }}
      >
        {blogs &&
          blogs.map((blog) => (
              <CustomGrid item xs={1} className="item" onClick={()=>navigate(`/news/${blog.id}`)}>
                <Card sx={{ maxWidth: 345 ,margin:"0px auto"}}>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={`${serverUrl}/blogs/${blog.image}`}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {blog.description}
                    </Typography>
                  </CardContent>
                </Card>
              </CustomGrid>
          ))}
      </CustomGrid>
      {/* 
      {blogs &&
        blogs.map((blog) => (
          <Link to={`/news/${blog.id}`} style={{ textDecoration: "none" }}>
            <CustomBox
              className="blog"
              key={blog.id}
              sx={{ marginBottom: "10px" }}
            >
              <CustomStack
                className="Blog-container"
                sx={{ flexDirection: sizes.md ? "column-reverse" : "row" }}
              >
                <CustomBox
                  className="section-four-p1"
                  sx={{ width: sizes.md ? "100%" : "55%", overflowY: "scroll" }}
                >
                  <CustomTypography
                    gutterBottom
                    className="fs-primary"
                    variant={sizes.sm ? "h3" : sizes.lg ? "h3" : "h2"}
                  >
                    {blog.title}
                  </CustomTypography>
                  <CustomTypography
                    gutterBottom
                    variant="body2"
                    sx={{ fontWeight: "bold" }}
                  >
                    {formatDistanceToNow(new Date(blog.date), {
                      addSuffix: true,
                    })}
                  </CustomTypography>
                  <CustomTypography
                    gutterBottom
                    className="fs-secondary"
                    variant={sizes.sm ? "body" : "h6"}
                  >
                    {blog.content}
                  </CustomTypography>
                </CustomBox>
                <CustomBox
                  className="section-four-p2"
                  sx={{
                    width: sizes.md ? "100%" : "45%",
                    maxHeight: sizes.md ? "100%" : "680px",
                  }}
                >
                  <CustomImageContainer
                    className="blog-image"
                    sx={{ overflow: "hidden" }}
                  >
                    <CustomImage
                      src={`http://localhost:2000/blogs/${blog.image}`}
                    />
                  </CustomImageContainer>
                </CustomBox>
              </CustomStack>
            </CustomBox>
          </Link>
        ))} */}
    </Box>
  );
};

export default News;
