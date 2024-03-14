import React from "react";
import { CustomDrawer, CustomListItem, CustomListItemText, IconContainer } from "./../styles";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import ClearIcon from '@mui/icons-material/Clear';

const SideDrawer = ({ open, onClose }) => {
  return (
    <CustomDrawer
      variant="temporary"
      open={open}
      onClose={onClose}
      anchor="right"
    >
      <Toolbar>
        {/* menu icon */}
        <IconContainer onClick={onClose}>
          <ClearIcon />
        </IconContainer>
      </Toolbar>
      <List>
        {["people", "capabilities", "about us", "insights", "careers"].map(
          (text, index) => (
            <CustomListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index}</ListItemIcon>
                <CustomListItemText
                  primary={text}
                  primaryTypographyProps={{ fontSize: "3em" }}
                />
              </ListItemButton>
            </CustomListItem>
          )
        )}
      </List>
    </CustomDrawer>
  );
};

export default SideDrawer;
