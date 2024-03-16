import React from "react";
import {
  CustomDrawer,
  CustomList,
  CustomListItem,
  CustomListItemText,
  IconContainer,
} from "../styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";

const AdminSideBar = ({ open, onClose, sizes }) => {
  const navigate = useNavigate();
  return (
    <CustomDrawer
      variant="permenant"
      // open={open}
      open={true}
      onClose={onClose}
      anchor="right"
      className="admin-dashboard"
    >
      <Toolbar>
        {/* menu icon */}
        <IconContainer onClick={onClose}>
          <ClearIcon />
        </IconContainer>
      </Toolbar>

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
    </CustomDrawer>
  );
};

export default AdminSideBar;
