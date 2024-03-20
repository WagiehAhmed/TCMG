import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Fade, Grow, MenuItem, Slide, Stack, useMediaQuery } from "@mui/material";
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
import { theme } from "../styles/theme";
import AddIcon from "@mui/icons-material/Add";
import { useAdmins } from "./../hooks/useAdmins";
import { Editor } from "@tinymce/tinymce-react";
import { useBlogs } from "./../hooks/useBlogs";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStore } from "../hooks/useStore";

const Transition = forwardRef(function Transition(props, ref) {
  return <Grow direction="down" ref={ref} {...props} />;
});

const Admins = () => {
  const { admins } = useStore();
  console.log("Admins Rerender");
  console.log("admins : ", admins);

  const [idForUpdate, setIdForUpdate] = useState();
  const [permission, setPermission] = useState("Full Permission");
  const [permission2, setPermission2] = useState("Full Permission");
  //needed refs
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const phone = useRef();
  // const permission = useRef();
  const name2 = useRef();
  const email2 = useRef();
  const password2 = useRef();
  const phone2 = useRef();
  // const permission2 = useRef();

  //sizes
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const { loading, error, getAdmins, addAdmin, deleteAdmin, updateAdmin } =
    useAdmins();

  useEffect(() => {
    getAdmins();
  }, []);

  // dialog trigger
  const [openDialog, setOpenDialog] = useState(false);
  const dialogTriggerhandler = () => {
    setOpenDialog(!openDialog);
    name.current.value = "";
    email.current.value = "";
    password.current.value = "";
    phone.current.value = "";
    setPermission("Half Permission");
  };

  // dialog trigger
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const updateDialogTriggerhandler = (row) => {
    setOpenUpdateDialog(!openUpdateDialog);
    setIdForUpdate(row.id);
    name2.current.value = row.name;
    email2.current.value = row.email;
    password2.current.value = row.password;
    phone2.current.value = row.phone;
    setPermission2(row.permission);
  };

  //addBlogHandler
  const addAdminHandler = (e) => {
    e.preventDefault();
    // const fd = new FormData();
    // fd.append("name", name.current.value);
    // fd.append("email", email.current.value);
    // fd.append("password", password.current.value);
    // fd.append("phone", phone.current.value);
    // fd.append("permission", permission.current.files[0]);
    // addAdmin(fd);
    addAdmin({
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      phone: phone.current.value,
      permission: permission,
    });
    dialogTriggerhandler();
  };

  //updateadminHandler
  const updateAdminHandler = (e) => {
    e.preventDefault();
    // const fd = new FormData();
    // fd.append("name", name2.current.value);
    // fd.append("email", email2.current.value);
    // fd.append("password", password2.current.value);
    // fd.append("phone", phone2.current.value);
    // fd.append("image", image2.current.files[0]);
    updateAdmin(idForUpdate, {
      name: name2.current.value,
      email: email2.current.value,
      password: password2.current.value,
      phone: phone2.current.value,
      permission: permission2,
    });
    // updateAdmin(idForUpdate, fd);
    setOpenUpdateDialog(false);
  };

  //deleteAdminHandler
  const deleteAdminHandler = (id) => {
    deleteAdmin(id);
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
        new admin
      </CustomButton>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          {/* <caption>A basic table example with a caption</caption> */}
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Permission</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admins &&
              admins.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="right" component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.password}</TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                  <TableCell align="right">{row.permission}</TableCell>
                  <TableCell align="right">
                    <IconContainer
                      onClick={() => {
                        updateDialogTriggerhandler(row);
                      }}
                    >
                      <EditIcon color="primary" />
                    </IconContainer>
                  </TableCell>
                  <TableCell align="right">
                    <IconContainer
                      onClick={() => {
                        deleteAdminHandler(row.id);
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
                    inputRef={email}
                    type="email"
                    label="Email"
                    key="email"
                    name="email"
                    required
                  />
                </CustomGrid>
                <CustomGrid item xs={1} className="form-item">
                  <CustomTextFeild
                    inputRef={password}
                    type="password"
                    label="Password"
                    key="password"
                    name="password"
                    required
                  />
                </CustomGrid>
                <CustomGrid item xs={1} md={1} className="form-item">
                  <CustomTextFeild
                    inputRef={phone}
                    type="text"
                    label="Phone"
                    key="phone"
                    name="phone"
                    required
                    multiline
                  />
                </CustomGrid>
                <CustomGrid item xs={1} className="form-item">
                  <CustomTextFeild
                    inputRef={name}
                    type="text"
                    label="Name"
                    key="name"
                    name="name"
                    required
                  />
                </CustomGrid>
                <CustomGrid item xs={1} className="form-item">
                  <CustomTextFeild
                    // inputRef={permission}
                    type="text"
                    label="Permission"
                    key="permission"
                    name="permission"
                    required
                    select
                    defaultValue="Full Permission"
                    helperText="Please select your currency"
                  >
                    {
                      ["Full Permission", "Half Permission"].map((option)=>(
                        <MenuItem key={option} value={option} onClick={()=>{setPermission(option)}}>
                        {option}
                       </MenuItem>
                      ))
                    }
                   
                  </CustomTextFeild>
                </CustomGrid>
                <CustomGrid item xs={1} md={2} className="form-item">
                  <CustomButton type="submit" onClick={addAdminHandler}>
                    add admin
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
                    inputRef={email2}
                    type="email"
                    placeholder="Email"
                    key="email"
                    name="email"
                    required
                  />
                </CustomGrid>
                <CustomGrid item xs={1} className="form-item">
                  <CustomTextFeild
                    inputRef={password2}
                    type="password"
                    placeholder="Password"
                    key="password"
                    name="password"
                    required
                  />
                </CustomGrid>
                <CustomGrid item xs={1} md={1} className="form-item">
                  <CustomTextFeild
                    inputRef={phone2}
                    type="text"
                    placeholder="Phone"
                    key="phone"
                    name="phone"
                    required
                    multiline
                  />
                </CustomGrid>
                <CustomGrid item xs={1} className="form-item">
                  <CustomTextFeild
                    inputRef={name2}
                    type="text"
                    placeholder="Name"
                    key="name"
                    name="name"
                    required
                  />
                </CustomGrid>
                <CustomGrid item xs={1} className="form-item">
                <CustomTextFeild
                    // inputRef={permission2}
                    type="text"
                    label="Permission"
                    key="permission"
                    name="permission"
                    required
                    select
                    defaultValue="Full Permission"
                    helperText="Please select your currency"
                  >
                    {
                      ["Full Permission", "Half Permission"].map((option)=>(
                        <MenuItem key={option} value={option} onClick={()=>{setPermission2(option)}}>
                        {option}
                       </MenuItem>
                      ))
                    }
                   
                  </CustomTextFeild>

                </CustomGrid>
                <CustomGrid item xs={1} md={2} className="form-item">
                  <CustomButton type="submit" onClick={updateAdminHandler}>
                    update admin
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

export default Admins;
