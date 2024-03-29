import React from "react";
import SecondSection from "./SecondSection";
import ThirdSection from "./SectionThree";
import ForthSection from "./SectionFour";
import FifthSection from "./SectionFive";
import SixthSection from "./SectionSix";
import SectionSeven from "./SectionSeven";
import SectionEight from "./SectionEight";
import SectionNine from "./SectionNine";
import SectionEleven from "./SectionEleven";
import Footer from "./Footer";
import SectionTweleve from "./SectionTweleve";
import { theme } from "../../styles/theme";
import { useMediaQuery } from "@mui/material";
import FirstSection from "./SectionOne";
import SectionTen from "./SectionTen";

const Home = () => {
     // use media hook to get access to different screens
  const matches = {
    xs: useMediaQuery(theme.breakpoints.down("sm")),
    sm: useMediaQuery(theme.breakpoints.down("md")),
    md: useMediaQuery(theme.breakpoints.down("lg")),
    lg: useMediaQuery(theme.breakpoints.down("xl")),
    xl: useMediaQuery(theme.breakpoints.only("xl")),
  };
  return (
    <>
      <FirstSection sizes={matches} />
      <SecondSection sizes={matches} />
      <ThirdSection sizes={matches} />
      <ForthSection sizes={matches} />
      <FifthSection sizes={matches} />
      <SixthSection sizes={matches} />
      <SectionSeven sizes={matches} />
      <SectionEight sizes={matches} />
      <SectionNine sizes={matches} />
      <SectionTen sizes={matches} />
      <SectionEleven sizes={matches} /> 
      <SectionTweleve sizes={matches} />
      <Footer sizes={matches} />
    </>
  );
};

export default Home;
