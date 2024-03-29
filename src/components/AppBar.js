import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
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

import { Button, Divider, InputAdornment } from "@mui/material";
import { CustomButton } from "./../styles/index";
import { useBlogs } from "./../hooks/useBlogs";
import { useNavigate } from "react-router-dom";

const AppBar = ({ openSideDrawer, sizes }) => {
  const { t, i18n } = useTranslation();
  const keyword = useRef();

  const navigate = useNavigate();
  // searchHandler
  const searchHandler = (e) => {
    e.preventDefault();
    navigate(`/search?keyword=${keyword.current.value}`,{replace:true})
  };

  return (
    <CustomAppBar>
      <CustomToolBar>
        {/* menu icon */}
        <IconContainer onClick={openSideDrawer}>
          <MenuIcon />
        </IconContainer>

        {/* search */}
        <CustomForm
          onSubmit={searchHandler}
          sx={{ display: sizes.sm ? "none" : "inline-flex" }}
        >
          <CustomTextFeild
          inputRef={keyword}
            variant="outlined"
            className="search"
            placeholder={t("SearchPlaceHolder")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconContainer type="submit"
                    className="search-icon"
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
        <CustomImageContainer
          sx={{ display: sizes.md ? "inline-flex" : "none" }}
        >
          <CustomImage
            src="../images/logo.png"
            alt="logo"
            className="logo-image"
          />
        </CustomImageContainer>

        {/* languages */}
        <CustomStack className="horizontal" sizes={sizes}>
          <Button>
            <CustomTypography sx={{textTransform:"capitalize"}}>{t("ourBranches")}</CustomTypography>
          </Button>

          <Divider orientation="vertical" flexItem color="white" />
          {i18n.language == "ar" ? (
            <Button
              onClick={() => {
                i18n.changeLanguage("ar");
              }}
            >
              <CustomTypography>AR</CustomTypography>
            </Button>
          ) : (
            <Button
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              <CustomTypography>EN</CustomTypography>
            </Button>
          )}
        </CustomStack>

        {/* disktop logo */}
        <CustomImageContainer
          sx={{ display: sizes.md ? "none" : "inline-flex" }}
          sizes={sizes}
        >
          <CustomImage
            src="../images/logo.png"
            alt="logo"
            className="logo-image"
          />
        </CustomImageContainer>
      </CustomToolBar>
    </CustomAppBar>
  );
};

export default AppBar;
