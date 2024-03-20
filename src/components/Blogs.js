import {
  Box,
  Button,
  Fade,
  Grow,
  Modal,
  Slide,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { Editor } from "@tinymce/tinymce-react";

import React, { forwardRef, useEffect, useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  CustomButton,
  CustomCircularProgress,
  CustomDialog,
  CustomDialogContent,
  CustomForm,
  CustomFormControl,
  CustomGrid,
  CustomTextFeild,
  IconContainer,
} from "../styles";
import FormData from "form-data";
import AddIcon from "@mui/icons-material/Add";
import { theme } from "../styles/theme";
import { useBlogs } from "./../hooks/useBlogs";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStore } from "../hooks/useStore";

const Transition = forwardRef(function Transition(props, ref) {
  return <Grow direction="down" ref={ref} {...props} />;
});

const Blogs = () => {
  //needed states
  console.log("blogs");
  const [idForUpdate, setIdForUpdate] = useState();
  //needed refs
  const title = useRef();
  const description = useRef();
  // const content = useRef();
  const image = useRef();
  const category = useRef();
  const metaKeys = useRef();
  const title2 = useRef();
  const description2 = useRef();
  const content2 = useRef();
  const image2 = useRef();
  const category2 = useRef();
  const metaKeys2 = useRef();

  //sizes
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const { loading, error, getBlogs, addBlog, deleteBlog, updateBlog } =
    useBlogs();

  const { blogs } = useStore();

  useEffect(() => {
    getBlogs();
  }, []);

  // dialog trigger
  const [openDialog, setOpenDialog] = useState(false);
  const dialogTriggerhandler = () => {
    setOpenDialog(!openDialog);
    title.current.value = "";
    description.current.value = "";
    // content.current.value = "";
    category.current.value = "";
    metaKeys.current.value = "";
  };

  // dialog trigger
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const updateDialogTriggerhandler = (row) => {
    setOpenUpdateDialog(!openUpdateDialog);
    setIdForUpdate(row.id);
    title2.current.value = row.title;
    description2.current.value = row.description;
    content2.current.value = row.content;
    category2.current.value = row.category;
    metaKeys2.current.value = row.metaKeys;
  };

  const editorRef = useRef(null);
  // console.log(editorRef.current.getContent())

  //addBlogHandler
  const addBlogHandler = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", title.current.value);
    fd.append("description", description.current.value);
    fd.append("content", editorRef.current.getContent({ format: "text" }));
    fd.append("category", category.current.value);
    fd.append("date", new Date().toISOString());
    fd.append("metaKeys", metaKeys.current.value);
    fd.append("image", image.current.files[0]);
    addBlog(fd);
    dialogTriggerhandler();
  };

  //updateBlogHandler
  const updateBlogHandler = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", title2.current.value);
    fd.append("description", description2.current.value);
    fd.append("content", content2.current.value);
    fd.append("image", image2.current.files[0]);
    fd.append("category", category2.current.value);
    fd.append("date", new Date().toISOString());
    fd.append("metaKeys", metaKeys2.current.value);
    updateBlog(idForUpdate, fd);
    setOpenUpdateDialog(false);
  };

  //delete blog by id
  const deleteBlogHandler = (id) => {
    const result = window.confirm("are you sure?");
    if (result) {
      deleteBlog(id);
    }
  };

  return (
    <Stack
      sx={{
        // border: "2px solid red",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {error && <div>{error}</div>}
      {loading && <div>{loading}</div>}
      <CustomButton
        onClick={dialogTriggerhandler}
        className="add"
        startIcon={<AddIcon sx={{ marginInline: "5px" }} />}
      >
        new blog
      </CustomButton>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          {/* <caption>A basic table example with a caption</caption> */}
          <TableHead>
            <TableRow>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Content</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Meta Keys</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs &&
              blogs.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="right" component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">{row.content}</TableCell>
                  <TableCell align="right">{row.category}</TableCell>
                  <TableCell align="right">{row.image}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.metaKeys}</TableCell>
                  <TableCell align="right">
                    {/* <IconContainer
                      onClick={() => {
                        updateDialogTriggerhandler(row);
                      }}
                    >
                      <EditIcon color="primary" />
                    </IconContainer> */}
                  </TableCell>
                  <TableCell align="right">
                    <IconContainer
                      onClick={() => {
                        deleteBlogHandler(row.id);
                      }}
                    >
                      <DeleteIcon color="error" />
                    </IconContainer>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CustomDialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialogTriggerhandler}
        aria-describedby="alert-dialog-slide-description"
      >
        <CustomDialogContent>
          <CustomForm
            className="add-blog-form"
            sizes={matches}
            encType="multipart/form-data"
          >
            <CustomFormControl sizes={matches}>
              <CustomGrid container columns={{ xs: 1, md: 2 }}>
                <CustomGrid item xs={1} className="form-item">
                  <CustomTextFeild
                    inputRef={title}
                    type="text"
                    label="Title"
                    key="Title"
                    name="title"
                    required
                  />
                </CustomGrid>
                <CustomGrid item xs={1} className="form-item">
                  <CustomTextFeild
                    inputRef={description}
                    type="text"
                    label="Description"
                    key="Description"
                    name="description"
                    required
                  />
                </CustomGrid>
                {/* <CustomGrid item xs={1} md={2} className="form-item">
                  <CustomTextFeild
                    inputRef={content}
                    type="text"
                    label="Content"
                    key="Content"
                    name="content"
                    required
                    multiline
                    rows={5}
                  />
                </CustomGrid> */}
                <CustomGrid item xs={2} className="form-item">
                  <CustomTextFeild
                    inputRef={category}
                    type="text"
                    label="Category"
                    key="Category"
                    name="category"
                    required
                  />
                </CustomGrid>
                <CustomGrid item xs={2} className="form-item">
                  <Editor
                    apiKey="9lp9eeqisok9205r9yxc5tbwc6h3fxm7h2qexagl3b2j5fe4"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    init={{
                      plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss",
                      toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                      tinycomments_mode: "embedded",
                      tinycomments_author: "Author name",
                      mergetags_list: [
                        { value: "First.Name", title: "First Name" },
                        { value: "Email", title: "Email" },
                      ],
                      ai_request: (request, respondWith) =>
                        respondWith.string(() =>
                          Promise.reject("See docs to implement AI Assistant")
                        ),
                    }}
                    initialValue=""
                  />
                </CustomGrid>
                <CustomGrid item xs={1} className="form-item">
                  <CustomTextFeild
                    inputRef={image}
                    type="file"
                    accept="image/*"
                    // label="Image"
                    key="Image"
                    name="image"
                    required
                  />
                </CustomGrid>
                <CustomGrid item xs={1} className="form-item">
                  <CustomTextFeild
                    inputRef={metaKeys}
                    type="text"
                    label="keys"
                    key="keys"
                    name="metaKeys"
                    required
                  />
                </CustomGrid>
                <CustomGrid item xs={1} md={2} className="form-item">
                  <CustomButton type="submit" onClick={addBlogHandler}>
                    add blog
                  </CustomButton>
                </CustomGrid>
              </CustomGrid>
            </CustomFormControl>
          </CustomForm>
        </CustomDialogContent>
      </CustomDialog>
      <CustomDialog
        open={openUpdateDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => {
          setOpenUpdateDialog(false);
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <CustomDialogContent>
          <CustomForm
            className="add-blog-form"
            sizes={matches}
            encType="multipart/form-data"
          >
            <CustomFormControl sizes={matches}>
              <CustomGrid container columns={{ xs: 1, md: 2 }}>
                <CustomGrid item xs={1} className="form-item">
                  <CustomTextFeild
                    inputRef={title2}
                    type="text"
                    placeholder="Title"
                    key="Title"
                    name="title"
                    required
                  />
                </CustomGrid>
                <CustomGrid item xs={1} className="form-item">
                  <CustomTextFeild
                    inputRef={description2}
                    type="text"
                    placeholder="Description"
                    key="Description"
                    name="description"
                    required
                  />
                </CustomGrid>
                <CustomGrid item xs={1} md={2} className="form-item">
                  <CustomTextFeild
                    inputRef={content2}
                    type="text"
                    placeholder="Content"
                    key="Content"
                    name="content"
                    required
                    multiline
                    rows={5}
                  />
                </CustomGrid>
                <CustomGrid item xs={2} className="form-item">
                  <CustomTextFeild
                    inputRef={category2}
                    type="text"
                    placeholder="Category"
                    key="Category"
                    name="category"
                    required
                  />
                </CustomGrid>
                <CustomGrid item xs={1} className="form-item">
                  <CustomTextFeild
                    inputRef={image2}
                    type="file"
                    accept="image/*"
                    // label="Image"
                    key="Image"
                    name="image"
                    required
                  />
                </CustomGrid>
                <CustomGrid item xs={1} className="form-item">
                  <CustomTextFeild
                    inputRef={metaKeys2}
                    type="text"
                    placeholder="keys"
                    key="keys"
                    name="metaKeys"
                    required
                  />
                </CustomGrid>
                <CustomGrid item xs={1} md={2} className="form-item">
                  <CustomButton type="submit" onClick={updateBlogHandler}>
                    update blog
                  </CustomButton>
                </CustomGrid>
              </CustomGrid>
            </CustomFormControl>
          </CustomForm>
        </CustomDialogContent>
      </CustomDialog>
    </Stack>
  );
};

export default Blogs;
