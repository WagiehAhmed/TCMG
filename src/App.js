import { Box, Toolbar, useMediaQuery } from "@mui/material";

import AppBar from "./components/AppBar";
import SideDrawer from "./components/SideDrawer";

import { useState } from "react";
import FirstSection from "./components/home/FirstSection";
import { theme } from "./styles/theme";
import SecondSection from "./components/home/SecondSection";
import ThirdSection from "./components/home/ThirdSection";
import ForthSection from "./components/home/ForthSection";
import FifthSection from "./components/home/FifthSection";
import SixthSection from './components/home/SixthSection';
import SectionSeven from "./components/home/SectionSeven";
import SectionEight from "./components/home/SectionEight";
import SectionNine from "./components/home/SectionNine";
import SectionEleven from "./components/home/ٍSectionEleven";
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
    <Box>
    {/* <Box sx={{ border: "2px solid yellow" }}> */}
      <AppBar openSideDrawer={sideDrawerTrigger} sizes={matches} />
      <Toolbar />
      <SideDrawer open={openSideDrawer} onClose={sideDrawerTrigger} />
      <Box sx={{ zIndex: -1 }}>
      {/* <Box sx={{ border: "2px solid red", zIndex: -1 }}> */}


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
