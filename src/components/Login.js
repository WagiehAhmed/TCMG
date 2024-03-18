import { Box, useMediaQuery } from "@mui/material";
import React, { useRef, useState } from "react";
// import { CustomButton, CustomForm, CustomFormControl, CustomTextFeild } from "../../Styles";
// import { theme } from "../../Styles/themes";
import { useNavigate } from "react-router-dom";
import { theme } from "../styles/theme";
import {
  CustomButton,
  CustomCircularProgress,
  CustomForm,
  CustomFormControl,
  CustomTextFeild,
} from "../styles";
import { adminSchema } from "../util/validation";
import FormHelperText from "@mui/material/FormHelperText";
import { useLogin } from "../hooks/useLogin";



import LockIcon from "@mui/icons-material/Lock";
import MailIcon from "@mui/icons-material/Mail";
import LoginIcon from "@mui/icons-material/Login";;

const Login = () => {
  const mail = useRef();
  const pass = useRef();
  const [err, setErr] = useState({});
  //sizes
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const { login, loading, error } = useLogin();

  //login handler
  const loginHandler = (e) => {
    e.preventDefault();
    const email = mail.current.value;
    const password = pass.current.value;
    login({email,password});
    
  };

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
          <CustomTextFeild
            type="email"
            key="email"
            required
            className="login-form"
            placeholder="Email"
            inputRef={mail}
            error={error === "email"}
          />
          <CustomTextFeild
            type="password"
            key="password"
            required
            className="login-form"
            placeholder="Password"
            inputRef={pass}
            error={error === "password"}
          />

          {/* <FormHelperText>{err.message}</FormHelperText> */}
          {loading && !error? (
            <CustomCircularProgress />
        ) : (
          <CustomButton
            type="submit"
            onClick={loginHandler}
            startIcon={<LoginIcon sx={{marginInline:"5px"}}/>}
          >
            login
          </CustomButton>
       )} 

          {error && <div>{error}</div>}
          {/* {loading && "LOADING........"} */}
        </CustomFormControl>
      </CustomForm>
    </Box>
  );
};

export default Login;
