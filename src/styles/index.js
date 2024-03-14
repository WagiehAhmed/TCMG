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
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { theme } from "./theme";

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
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    // width: "100vw",
    backgroundColor: "#002240",
  },
}));

export const CustomBox = styled(Box)(() => ({
  boxSizing: "border-box",
  // border: "2px solid red",
  padding: "10px",

  "&.first-section": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "flex-start",
    backgroundColor: "#002240",
    height: "700px",
    // height: "70vh",
    padding: "5vw",
  },

  "&.second-section": {
    backgroundColor: "#002240",
    // padding: "0px 5vw",
  },
  "&.third-section": {
    backgroundColor: "#0D1429",
    // height: "75vh",
    // padding: "0px 5vw",
  },
  "&.section-four": {
    backgroundColor: "#0A1328",
  },

  "&.fifth-section": {
    backgroundColor: "#0D1B36",
  },

  "&.sixth-section": {
    backgroundColor: "#0A1328",
  },

  "&.section-four-p1,&.section-five-p1,&.section-eleven-p1": {
    height: "100%",
    padding: "0px",
    padding: "20px 5px",
    // overflowY: "hidden",
  },

  "&.section-four-p2,&.section-five-p2,&.section-eleven-p2": {
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
  "&.sis-image": {
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
export const CustomForm = styled("form")(() => ({
  // width: sizes.xs ? "90%" : "25%",
  // minWidth: sizes.xs ? "90%" : "350px",
  maxWidth: "100%",
  // border: "2px solid green",
  // boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",

  // "&.dialog-form":{
  //  width:"100%",
  // }
}));

export const CustomFormControl = styled(FormControl)(() => ({
  boxSizing: "border-box",
  width: "100%",
  height: "100%",
  padding: "10px",
  justifyContent: "flex-start",
  // padding: sizes.md ? "10px" : "20px",
  //   boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
  // border: "2px solid red",
}));

export const CustomTextFeild = styled(TextField)(() => ({
  boxSizing: "border-box ",
  width: "100%",
  // backgroundColor: "white",

  // border: "2px solid green",

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

  "&.sis-container": {
    // justifyContent: "center",
    alignItems: "center",
  },

  "&.details": {
    height: "200px",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  "&.footer": {
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
export const CustomTypography = styled(Typography)(() => ({
  boxSizing: "border-box",
  color: "white",
  fontFamily: "Rubik",
  // border: "2px solid red",

  "&.fs-primary": {
    maxWidth: "900px",
  },
  "&.fs-secondary": {
    maxWidth: "800px",
    lineHeight: "2em",
  },
  "&.ss-primary": {
    maxWidth: "900px",
  },
  "&.ss-secondary": {
    maxWidth: "800px",
    lineHeight: "2em",
  },
  "&.ts-secondary,ts-primary": {
    textAlign: "center",
  },
  "&.ts-secondary": {
    width: "80%",
  },
  "&.section-four-primary": {
    margin: "10px 0px",
  },
  "&.section-four-secondary": {
    lineHeight: "30px",
  },
  "&.section-five-primary": {
    margin: "10px 0px",
    color: "#845F38",
  },
  "&.section-five-secondary": {
    lineHeight: "30px",
  },
  "&.sis-primary": {
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

export const CustomListItem = styled(ListItem)(() => ({
  boxSizing: "border-box",
  // border: "2px solid red",
  color: "white",
}));

export const CustomListItemText = styled(ListItemText)(() => ({
  boxSizing: "border-box",
  color: "white",
  fontFamily: "Rubik",
  textTransform: "capitalize",
  // border:"2px solid red",
}));
