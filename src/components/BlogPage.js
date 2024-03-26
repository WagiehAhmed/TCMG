import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { CustomImage, CustomImageContainer } from "../styles";
import { useStore } from "../hooks/useStore";
import { useBlogs } from "../hooks/useBlogs";
import { serverUrl } from './../util/serverURL';

const BlogPage = () => {
  const { id } = useParams();
  const { getBlog, blog } = useBlogs();
 
  useEffect(() => {
    getBlog(id);
  }, []);
  //   const blog = blogs.filter((b) => b.id == id);
  //   console.log("blogs : ", blogs);
  //   console.log("blog : ", blog);
  return (
    <Container sx={{ marginTop: "10px" }}>
      {blog == undefined && <Box>Not Found</Box>}
      {blog !== undefined && (
        <Box>
          <CustomImageContainer className="blog-image">
            <CustomImage src={`${serverUrl}/blogs/${blog.image}`} />
          </CustomImageContainer>
          <Typography variant="h3">
            {blog.title}
            {/* {blog !== undefined && blog.title} */}
          </Typography>
          <Typography variant="h5">{blog.description}</Typography>
          <Typography variant="h4">{blog.content}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default BlogPage;
