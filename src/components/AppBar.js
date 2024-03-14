import React from "react";
import {
  CustomAppBar,
  CustomForm,
  CustomImage,
  CustomImageContainer,
  CustomStack,
  CustomTextFeild,
  CustomToolBar,
  CustomTypography,
  IconContainer,
} from "../styles";

//icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import { Divider, InputAdornment } from "@mui/material";

const AppBar = ({ openSideDrawer ,sizes}) => {
  return (
    <CustomAppBar>
      <CustomToolBar>
        {/* menu icon */}
        <IconContainer onClick={openSideDrawer}>
          <MenuIcon />
        </IconContainer>

        {/* search */}
        <CustomForm sx={{display: sizes.md ? "none" : "inline-flex",}}>
          <CustomTextFeild
            variant="outlined"
            className="search"
            placeholder="كيف يمكنني مساعدتك؟"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconContainer className="search-icon"
                  // aria-label="toggle password visibility"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  // edge="end"
                  >
                    <SearchIcon />
                  </IconContainer>
                </InputAdornment>
              ),
            }}
          />
        </CustomForm>

        {/* modile logo */}
        <CustomImageContainer sx={{display:sizes.md?'inl;ine-flex':'none'}} >
          <CustomImage src="../images/logo.png" alt="logo" />
        </CustomImageContainer>

        {/* languages */}
        <CustomStack className="horizontal" sizes={sizes}>
          <CustomTypography>فروعنا</CustomTypography>
          <Divider orientation="vertical" flexItem color="white" />
          <CustomTypography>EN</CustomTypography>
        </CustomStack>

        {/* disktop logo */}
        <CustomImageContainer sx={{display:sizes.md?'none':'inline-flex'}} sizes={sizes}>
          <CustomImage src="../images/logo.png" alt="logo" />
        </CustomImageContainer>
      </CustomToolBar>
    </CustomAppBar>
  );
};

export default AppBar;
