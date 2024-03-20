import { Box, Stack, Toolbar, useMediaQuery } from "@mui/material";

import AppBar from "./components/AppBar";
import SideDrawer from "./components/SideDrawer";

import { useEffect, useState } from "react";
import FirstSection from "./components/home/SectionOne";
import { theme } from "./styles/theme";

import { useTranslation } from "react-i18next";

import { formatDistanceToNow } from "date-fns";
import { Outlet } from "react-router-dom";
function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const dir = i18n.dir(i18n.language)
    document.documentElement.dir = dir
  }, [i18n, i18n.language]);
  // use media hook to get access to different screens
  const matches = {
    xs: useMediaQuery(theme.breakpoints.down("sm")),
    sm: useMediaQuery(theme.breakpoints.down("md")),
    md: useMediaQuery(theme.breakpoints.down("lg")),
    lg: useMediaQuery(theme.breakpoints.down("xl")),
    xl: useMediaQuery(theme.breakpoints.only("xl")),
  };

  //drawer trigger
  const [openSideDrawer, setOpenSideDrawer] = useState(false);
  const sideDrawerTrigger = () => {
    setOpenSideDrawer(!openSideDrawer);
  };

  const result = formatDistanceToNow(new Date("Mon Mar 18 2024 13:5:08"), {
    addSuffix: true,
  });
  console.log(result);

  return (
    <Box
      sx={{
        zIndex: -1,
        // padding: "0px",
        // height: "100dvh",
        // border: "2px solid red",
      }}
    >
      <AppBar openSideDrawer={sideDrawerTrigger} sizes={matches} />
      <Toolbar />
      <SideDrawer
        open={openSideDrawer}
        onClose={sideDrawerTrigger}
        sizes={matches}
      />

      <Box
        sx={{
          zIndex: -1,
          // padding: "0px",
          // border: "2px solid green",

          // "&::-webkit-scrollbar": {
          //   width: "0px",
          // },
          // height: "80%",
          // overflow: "scroll",
          // "scroll-snap-type": "y mandatory",
        }}
      >
        <Outlet/>
       
      </Box>
    </Box>
  );
}

export default App;
