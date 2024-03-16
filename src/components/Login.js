import { Box, useMediaQuery } from "@mui/material";
import React from "react";
// import { CustomButton, CustomForm, CustomFormControl, CustomTextFeild } from "../../Styles";
// import { theme } from "../../Styles/themes";
import { useNavigate } from "react-router-dom";
import { theme } from "../styles/theme";
import {
  CustomButton,
  CustomForm,
  CustomFormControl,
  CustomTextFeild,
} from "../styles";

const Login = () => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        // border: "2px solid red",
        boxSizing: "border-box",
        height: "100dvh",
        background: "url(../images/backgroundAdmin.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <CustomForm className="center-form" sizes={matches}>
        <CustomFormControl sizes={matches}>
          <CustomTextFeild className="login-form" placeholder="Email" />
          <CustomTextFeild className="login-form" placeholder="password" />

          <CustomButton
            onClick={() => navigate("/dashboard", { replace: true })}
          >
            login
          </CustomButton>
        </CustomFormControl>
      </CustomForm>
    </Box>
  );
};

export default Login;
