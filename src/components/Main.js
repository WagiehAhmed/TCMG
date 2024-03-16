import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { IconContainer } from "../styles";
import BookIcon from "@mui/icons-material/Book";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Book } from "@mui/icons-material";
const Main = () => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        boxSizing: "border-box",
        // border: "2px solid green",
      }}
    >
      <Stack
        sx={{
          width: "300px",
          height: "150px",
          flexDirection: "row",
          backgroundColor: "white",
          borderRadius: "25px",
          justifyContent: "center",
          // border: "2px solid red",
        }}
      >
        <Stack sx={{ width: "50%",height:"100%",justifyContent:"space-evenly" }}>
          <Typography sx={{ textAlign: "center" }}>Admins</Typography>
          <Typography sx={{ textAlign: "center" }}>50</Typography>
        </Stack>
        <Box sx={{ width: "50%",height:"100%",position:"relative" }}>
          <IconContainer
            sx={{ alignSelf: "center",padding:"10px",borderRadius:"5px" ,position:"absolute",top:"50%",left:"50%",translate:"-50% -50%"}} >
            <SupervisorAccountIcon color="primary" fontSize="large"/>
          </IconContainer>
        </Box>
      </Stack>

      
      <Stack
        sx={{
          width: "300px",
          height: "150px",
          flexDirection: "row",
          backgroundColor: "white",
          borderRadius: "25px",
          justifyContent: "center",
          // border: "2px solid red",
        }}
      >
        <Stack sx={{ width: "50%",height:"100%",justifyContent:"space-evenly" }}>
          <Typography sx={{ textAlign: "center" }}>Blog</Typography>
          <Typography sx={{ textAlign: "center" }}>50</Typography>
        </Stack>
        <Box sx={{ width: "50%",height:"100%",position:"relative" }}>
          <IconContainer
            sx={{ alignSelf: "center",padding:"10px",borderRadius:"5px" ,position:"absolute",top:"50%",left:"50%",translate:"-50% -50%"}} >
            <BookIcon color="primary" fontSize="large"/>
          </IconContainer>
        </Box>
      </Stack>

      
    </Stack>
  );
};

export default Main;
