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
        {[t("sideDrawer1"),t("sideDrawer2"),t("sideDrawer3"),t("sideDrawer4",t("sideDrawer5"))].map(
          (text, index) => (
            <CustomListItem key={text} disablePadding  onClick={onClose}>
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
        {[t("sideDrawer6"),t("sideDrawer7") ,t("sideDrawer8") ].map(
          (text, index) => (
            <CustomListItem key={text} disablePadding  onClick={onClose}>
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
