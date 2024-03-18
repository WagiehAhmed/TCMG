import { Box, Button, Fade, Grow, Modal, Slide, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { forwardRef, useState } from "react";
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
  CustomTextFeild,
} from "../styles";

import AddIcon from "@mui/icons-material/Add";
import { theme } from "../styles/theme";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

const Transition = forwardRef(function Transition(props, ref) {
  return <Grow direction="down" ref={ref} {...props} />;
});

const Blogs = () => {
  //sizes
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const loading = true;
  const error = false;

  // new blog modal
  const [open, setOpen] = useState(false);
  const handelOpen = () => setOpen(open);
  const handelClose = () => setOpen(false);

  // dialog trigger
  const [openDialog, setOpenDialog] = useState(false);
  const dialogTriggerhandler = () => {
    setOpenDialog(!openDialog);
  };
  return (
    <Stack
      sx={{
        // border: "2px solid red",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
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
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="right" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
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
          <CustomForm className="add-blog-form" sizes={matches}>
            <CustomFormControl sizes={matches}>
              <CustomTextFeild
                type="email"
                key="email"
                required
                className="login-form"
                placeholder="Email"
                // inputRef={mail}
                error={error === "email"}
              />
              <CustomTextFeild
                type="password"
                key="password"
                required
                className="login-form"
                placeholder="Password"
                // inputRef={pass}
                error={error === "password"}
              />

              {/* <FormHelperText>{err.message}</FormHelperText> */}
              {loading && !error ? (
                <CustomCircularProgress />
              ) : (
                <CustomButton
                  type="submit"
                  // onClick={loginHandler}
                  // startIcon={<LoginIcon />}
                >
                  login
                </CustomButton>
              )}

              {/* {error && <div>{error}</div>} */}
              {/* {loading && "LOADING........"} */}
            </CustomFormControl>
          </CustomForm>
        </CustomDialogContent>
      </CustomDialog>
    </Stack>
  );
};

export default Blogs;
