import { Box, Stack, Toolbar, useMediaQuery } from "@mui/material";

import AppBar from "./components/AppBar";
import SideDrawer from "./components/SideDrawer";

import { useState } from "react";
import FirstSection from "./components/home/SectionOne";
import { theme } from "./styles/theme";
import SecondSection from "./components/home/SecondSection";
import ThirdSection from "./components/home/SectionThree";
import ForthSection from "./components/home/SectionFour";
import FifthSection from "./components/home/SectionFive";
import SixthSection from "./components/home/SectionSix";
import SectionSeven from "./components/home/SectionSeven";
import SectionEight from "./components/home/SectionEight";
import SectionNine from "./components/home/SectionNine";
import SectionEleven from "./components/home/SectionEleven";
import Footer from "./components/home/Footer";
import SectionTweleve from "./components/home/SectionTweleve";

function App() {
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
        <FirstSection sizes={matches} />
        <SecondSection sizes={matches} />
        <ThirdSection sizes={matches} />
        <ForthSection sizes={matches} />
        <FifthSection sizes={matches} />
        <SixthSection sizes={matches} />
        <SectionSeven sizes={matches} />
        <SectionEight sizes={matches} />
        <SectionNine sizes={matches} />
        <SectionEight sizes={matches} />
        <SectionEleven sizes={matches} />
        <SectionTweleve sizes={matches} />
        <Footer sizes={matches} />
      </Box>
    </Box>
  );
}

export default App;
