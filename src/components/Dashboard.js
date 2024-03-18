import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  CustomDrawer,
  CustomList,
  CustomListItem,
  CustomListItemText,
  IconContainer,
} from "../styles";
import { Outlet, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // border:"2px solid red",
    background:"#EEE",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Dashboard = () => {
  const navigate = useNavigate();
  // const matches = {
  //   xs: useMediaQuery(theme.breakpoints.down("sm")),
  //   sm: useMediaQuery(theme.breakpoints.down("md")),
  //   md: useMediaQuery(theme.breakpoints.down("lg")),
  //   lg: useMediaQuery(theme.breakpoints.down("xl")),
  //   xl: useMediaQuery(theme.breakpoints.only("xl")),
  // };
  //drawer trigger
  // const [openSideDrawer, setOpenSideDrawer] = useState(true);
  // const sideDrawerTrigger = () => {
  //   setOpenSideDrawer(!openSideDrawer);
  // };

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{backgroundColor:"#002240"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {/* Persistent drawer */}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <CustomListItem key={"dashboard"} disablePadding>
        <ListItemButton>
          <CustomListItemText
            // primary="Main"
            primaryTypographyProps={{ fontSize: "1em" }}
            onClick={() => navigate("", { replace: true })}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<DashboardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Dashboard
              </AccordionSummary>
             
            </Accordion>
          </CustomListItemText>
         
        </ListItemButton>
      </CustomListItem>
        <List>
          {["admins", "blogs"].map((text, index) => (
            <CustomListItem key={text} disablePadding>
              <ListItemButton>
                <CustomListItemText
                  // primary={text}
                  primaryTypographyProps={{ fontSize: "1em" }}
                >
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      {text}
                    </AccordionSummary>
                    <AccordionDetails>
                      <Button onClick={() => navigate(`${text}`)}>
                        List All Admins
                      </Button>
                    </AccordionDetails>
                  </Accordion>
                </CustomListItemText>
              </ListItemButton>
            </CustomListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       
        <Outlet/>
      </Main>
    </Box>
  );
};

export default Dashboard;
