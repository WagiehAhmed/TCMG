import React from "react";
import { CustomDrawer, CustomList, CustomListItem, CustomListItemText, IconContainer } from "./../styles";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

import ClearIcon from '@mui/icons-material/Clear';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const SideDrawer = ({ open, onClose ,sizes}) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <CustomDrawer
      variant="temporary"
      open={open}
      onClose={onClose}
      anchor={i18n.language==="ar"?"right":"left"}
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
                {/* <ListItemIcon>{index}</ListItemIcon> */}
                <CustomListItemText
                  primary={text}
                  primaryTypographyProps={{ fontSize: "1em" }}
                />
              </ListItemButton>
            </CustomListItem>
          )
        )}
      </List>
      
    {/* --------------------------------------------------------------------------- */}

    <CustomList sx={{display:"flex",flexDirection:sizes.md?"column":"column"}} >
        {["locations", "news", "events"].map(
          (text, index) => (
            <CustomListItem key={text} disablePadding>
              <ListItemButton onClick={()=>navigate(`/${text}`,{replace:false})}>
                {/* <ListItemIcon>{index}</ListItemIcon> */}
                <CustomListItemText
                  primary={text}
                  primaryTypographyProps={{ fontSize: "1em" }}
                />
              </ListItemButton>
            </CustomListItem>
          )
        )}
      </CustomList>
    </CustomDrawer>
  );
};

export default SideDrawer;
