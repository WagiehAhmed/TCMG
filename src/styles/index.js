import {
  AppBar,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { theme } from "./theme";
import {
  backgroundAnimation,
  backgroundAnimationController,
} from "../animations";

//home page
export const CustomAppBar = styled(AppBar)(() => ({
  boxSizing: "border-box",
  position: "fixed",
  zIndex: 2000,
  backgroundColor: "#002240",
  color: "white",
  //   border: "2px solid red",
}));

export const CustomToolBar = styled(Toolbar)(() => ({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  //   border: "2px solid green",
}));

export const CustomDrawer = styled(Drawer)(() => ({
  boxSizing: "border-box",
  // border: "2px solid green",
  zIndex: 1000,
  width: "240px",
  // flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "240px",
    boxSizing: "border-box",
    // width: "100vw",
    backgroundColor: "#002240",
  },
  "& .MuiBackdrop-root , &.MuiModal-backdrop": {
    boxSizing: "border-box",
    // width: "100vw",
    backgroundColor: "transparent",
  },
  // width:"700px",

  "&.admin-dashboard": {
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      backgroundColor: "white",
    },
    "& .MuiBackdrop-root , &.MuiModal-backdrop": {
      boxSizing: "border-box",
      backgroundColor: "transparent",
    },
  },
}));

export const CustomBox = styled(Box)(() => ({
  boxSizing: "border-box",
  // padding: "10px",
  // border: "2px solid yellow",
  
  "&.section-one,&.second-section, &.section-three, &.section-four ,&.section-five,&.section-six ,&.section-seven,&.section-eight,&.section-nine,&.section-eleven,&.section-tweleve,&.footer":
  {
      padding: "0px 5vw",
      minHeight: "80dvh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      // alignItem: "center",
      // "scroll-snap-align": "start",
    },

  "&.section-one": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "flex-start",
    backgroundColor: "#011429",
  },

  "&.second-section": {
    position: "relative",
    "&:before": {
      content: "''",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: "50%",
      left: "50%",
      boxSizing: "border-box",
      translate: "-50% -50%",
      // border: "2px solid red",

      animation: `${backgroundAnimation} 4s linear infinite`,
      animationFillMode: "both",
      // animationTimeline: "scroll(y)",
    },

    backgroundColor: "#002240",
    // padding: "0px 5vw",
  },
  "&.section-three": {
    backgroundColor: "#0D1429",
    // height: "75vh",
    // padding: "0px 5vw",
  },
  "&.section-four": {
    backgroundColor: "#0A1328",
  },

  "&.section-five": {
    backgroundColor: "#0D1B36",
  },

  "&.section-six": {
    backgroundColor: "#0A1328",
  },
  "&.section-seven": {
    backgroundColor: "#0A1328",
  },
  "&.section-eight": {
    minHeight: "50dvh",
    backgroundColor: "white",
  },

  "&.section-four-p1,&.section-five-p1,&.section-eleven-p1,&.section-nine-p1": {
    height: "100%",
    padding: "0px",
    padding: "20px 5px",
    // overflowY: "hidden",
  },

  "&.section-four-p2,&.section-five-p2,&.section-eleven-p2,&.section-nine-p2": {
    padding: "0px",
    "&::-webkit-scrollbar": {
      width: "0px",
    },
    overflowY: "scroll",
    "scroll-snap-type": "y mandatory",
  },

  "&.section-nine": {
    backgroundColor: "#0A1328",
  },
  "&.footer": {
    backgroundColor: "#0A1328",
  },
  "&.section-eleven": {
    backgroundColor: "#0D1B36",
  },
  "&.section-tweleve": {
    backgroundColor: "#0D1B36",
  },
}));

//image
export const CustomAvatar = styled(Avatar)(({ src }) => ({
  src: `url(${src})`,
  width: "60px",
  height: "60px",
  boxSizing: "border-box",
}));
export const CustomImageContainer = styled(Box)(() => ({
  width: "200px",
  height: "70px",
  boxSizing: "border-box",

  "&.section-four-image, &.section-five-image": {
    width: "100%",
    height: "400px",
  },
  "&.section-six-image": {
    width: "100%",
    height: "80%",
  },

  "&.section-nine-image-container": {
    width: "100%",
    height: "100%",
  },

  "&.section-eleven-image-container": {
    width: "100%",
    height: "400px",
  },

  "&.section-tweleve-image-container": {
    width: "100%",
    height: "600px",
  },

  // border: "2px solid blacK",
}));
export const CustomImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  width: "100%",
  height: "100%",
  objectFit: "fill",
  boxSizing: "border-box",
  // border: "2px solid green",
  "&.logo-image,&.section-tweleve-image": {
    objectFit: "cover",
  },
}));

//forms
export const CustomForm = styled("form")(({ sizes }) => ({
 
  maxWidth: "100%",
  // border: "2px solid red",

  "&.center-form": {
     width: sizes ? "90%" : "25%",
  minWidth: sizes ? "90%" : "350px",
    borderRadius: "25px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // border: "2px solid red",+
    backgroundColor: "rgba(100,100,250,0.5)",
    backgroundColor: "#4E6768",
    boxShadow:
      "rgba(100, 150, 40, 0.3) 0px 19px 38px, rgba(100, 50, 100, 0.22) 0px 15px 12px",
  },
}));

export const CustomFormControl = styled(FormControl)(() => ({
  boxSizing: "border-box",
  width: "100%",
  height: "100%",
  padding: "10px",
  borderRadius: "25px",
  justifyContent: "flex-start",
  // padding: sizes.md ? "10px" : "20px",
  //   boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
  // border: "2px solid red",
}));

export const CustomTextFeild = styled(TextField)(() => ({
  boxSizing: "border-box ",
  width: "100%",
  color: "white",
  direction: "ltr",
  flexGrow: 1,
  


  "&.login-form":{
    marginBottom: "15px",
    color: "secondary",
    borderRadius: "50px",
    backgroundColor: "white",
    color: "black",
    "& .MuiInputBase-root": {
      borderRadius: "50px",
      color: "black",
    },
    "& .MuiInputBase-input": {
      color: "black",
      padding: "10px ",
      borderRadius: "50px",
    },
  },
  // border: "2px solid green",
  "& .MuiInputBase-root": {
    color: "white",
  },
  "& .MuiInputBase-input": {
    color: "white",
    padding: "10px ",
  },

  "& label.Mui-focused": {},

  "& .MuiOutlinedInput-root": {
    "& fieldset": {},
    "&:hover fieldset": {
      margin: "-1px",
    },
    "&.Mui-focused fieldset": {
      margin: "-1px",
    },
  },

  "&.multiline": {
    borderRadius: "25px",
    "& .MuiInputBase-root": {
      borderRadius: "25px",
    },
    "& .MuiInputBase-input": {
      padding: "10px ",
      borderRadius: "25px",
    },
  },

  "&.search": {
    backgroundColor: "white",
    color: "black",
    minWidth: "400px",
    borderRadius: "10px",

    "& .MuiInputBase-root": {
      borderRadius: "10px",
    },
    "& .MuiInputBase-input": {
      color: "black",
      padding: "10px ",
      borderRadius: "10px",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        margin: "-1px",
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        margin: "-1px",
        borderColor: "white",
      },
    },
  },

  "& label": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },

  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
      margin: "-1px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
      margin: "-1px",
    },
  },

  // "&.multiline": {
  //   borderRadius: "25px",
  //   "& .MuiInputBase-root": {
  //     borderRadius: "25px",
  //   },
  //   "& .MuiInputBase-input": {
  //     padding: "10px ",
  //     borderRadius: "25px",
  //   },
  // },
}));

//comman
export const IconContainer = styled(IconButton)(() => ({
  boxSizing: "border-box",
  position: "relative",
  color: "white",
  "&.search-icon": {
    color: "black",
  },
  "&.arrow-icon": {
    // border: "1px solid gold",
    margin: "0px 5px",
  },
  "&.footer-icon": {
    // border: "2px solid white",
  },
  "&:hover": {
    backgroundColor: "rgba(50,100,255,0.2)",
  },
}));

export const SlideItem = styled(Box)(() => ({
  // border: "5px solid yellow",
  // padding: "32px",
  direction: "rtl",
  maxWidth: "900px",
  margin: "0px auto",
  padding: "5px",
}));

export const CustomStack = styled(Stack)(() => ({
  color: "white",
  // minWidth: "80px",
  // height: "100%",
  // border: "2px solid blue",
  boxSizing: "border-box",
  "&.horizontal": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  "&.footer-horizontal1": {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  "&.footer-horizontal2": {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  "&.footer-horizontal22": {
    minWidth: "300px",
    justifyContent: "space-evenly",
  },
  "&.footer-horizontal3": {
    padding: "10px 0px",
    alignItems: "center",
    justifyContent: "space-evenly",
  },


  "&.section-four-container,&.section-five-container,&.section-eleven-container":
    {
      justifyContent: "center",
      alignItems: "flex-start",
    },

  "&.section-four-subContainer,&.section-five-subContainer,&.section-eleven-subContainer":
    {
      flexDirection: "column",
      alignItems: "center",
      maxHeight: "100%",
    },

  "&.section-six-container, &.section-seven-container, &.section-eleven-container": {
    // justifyContent: "center",
    alignItems: "center",
  },

  
  "&.section-nine-container":
    {
      justifyContent: "center",
      alignItems: "center",
    },
  "&.details": {
    height: "200px",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  "&.slider-details": {
    width: "97%",
    position: "absolute",
    zIndex: 10,
    top: "50%",
    left: "50%",
    translate: "-50% -50%",
    justifyContent: "space-around",
    alignItems: "center",
    // border:"2px solid red",
  },

  "&.footer": {
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
export const CustomTypography = styled(Typography)(() => ({
  fontFamily: "",
  boxSizing: "border-box",
  color: "white",
  fontFamily: "Text",
  // border: "2px solid red",

  "&.fs-primary": {
    maxWidth: "900px",
    fontFamily: "Titles",
  },
  "&.fs-secondary": {
    maxWidth: "800px",
    lineHeight: "2em",
  },
  "&.ss-primary": {
    fontFamily: "Titles",
    maxWidth: "900px",
  },
  "&.ss-secondary": {
    maxWidth: "800px",
    lineHeight: "2em",
  },
  "&.ts-primary": {
    fontFamily: "Titles",
    // textAlign: "center",
  },
  "&.ts-secondary": {
    textAlign: "center",
  },
  "&.ts-secondary": {
    width: "80%",
  },
  "&.section-four-primary": {
    margin: "10px 0px",
    fontFamily: "Titles",
  },
  "&.section-four-secondary": {
    lineHeight: "30px",
  },
  "&.section-five-primary": {
    margin: "10px 0px",
    fontFamily: "Titles",

    color: "#845F38",
  },
  "&.section-five-secondary": {
    lineHeight: "30px",
  },
  "&.section-six-primary": {
    textAlign: "center",
  },
  "&.footer-last": {
    textAlign: "center",
    maxWidth: "600px",
    minWidth: "300px",
  },
}));

export const CustomGrid = styled(Grid)(() => ({
  boxSizing: "border-box",
  color: "black",
  // backgroundColor: "white",

  "&.container": {
    // border:"2px solid red",
    padding: "15px 0px",
  },

  "&.item": {
    // border:"2px solid green"
  },
  "&.form-item": {
    padding: "10px",
    // border: "2px solid green",
  },
}));

export const CustomList = styled(List)(() => ({
  boxSizing: "border-box",
  // border: "2px solid red",
  color: "white",
}));

export const CustomListItem = styled(ListItem)(() => ({
  boxSizing: "border-box",
  // border: "2px solid red",
  color: "white",
}));

export const CustomListItemText = styled(ListItemText)(() => ({
  boxSizing: "border-box",
  color: "white",
  // fontFamily: "Rubik",
  textTransform: "capitalize",
  // border:"2px solid red",
}));

// // forms section ...........................................................................
// export const CustomForm = styled("form")(({ sizes }) => ({
//   width: sizes.xs ? "90%" : "25%",
//   minWidth: sizes.xs ? "90%" : "350px",
//   maxWidth: "100%",
//   margin: "0px auto",
//   borderRadius: "10px",
//   boxShadow:
//     "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
//   border: "2px solid green",

//   "&.center-form": {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     border: "2px solid green",
//   },

//   "&.dialog-form": {
//     width: "100%",
//   },
// }));

// export const CustomFormControl = styled(FormControl)(({ sizes }) => ({
//   boxSizing: "border-box",
//   width: "100%",
//   height: "100%",
//   borderRadius: "8px",
//   padding: sizes.md ? "10px" : "20px",
//   //   boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
//   border: "2px solid red",
// }));

// // export const CustomFormLabel = styled(FormLabel)(() => ({
// //   textAlign: "center",
// //   padding: "10px",
// //   margin: "10px 0px",
// //   // border: "2px solid red",
// //   "&::first-letter": {
// //     textTransform: "capitalize",
// //   },
// //   "&.new-account": {
// //     fontWeight: "bold",
// //   },
// // }));

// // export const CustomFormControlLabel = styled(FormControlLabel)(() => ({
// //   textTransform: "capitalize",
// //   padding: "0px",
// //   margin: "5px 0px",
// //   // border: "2px solid red",
// // }));

// export const CustomTextFeild = styled(TextField)(() => ({
//   flexGrow: 1,
//   marginBottom: "15px",
//   color: "secondary",
//   borderRadius: "50px",
//   //   border:"2px solid green",
//   "& .MuiInputBase-root": {
//     borderRadius: "50px",
//   },
//   "& .MuiInputBase-input": {
//     padding: "10px ",
//     borderRadius: "50px",
//   },

//   "& label.Mui-focused": {},

//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {},
//     "&:hover fieldset": {
//       margin: "-1px",
//     },
//     "&.Mui-focused fieldset": {
//       margin: "-1px",
//     },
//   },

//   "&.multiline": {
//     borderRadius: "25px",
//     "& .MuiInputBase-root": {
//       borderRadius: "25px",
//     },
//     "& .MuiInputBase-input": {
//       padding: "10px ",
//       borderRadius: "25px",
//     },
//   },
// }));

export const CustomButton = styled(Button)(() => ({
  textTransform: "capitalize",
  width: "fit-content",
  margin: "0px auto",

  // color: ,
  backgroundColor: "white",
  borderRadius: "25px",
  padding: "5px 25px",
  "&:hover": {
    // backgroundColor: ``,
    scale: "1.05",
  },
}));
