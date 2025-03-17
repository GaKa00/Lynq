import { Box, Stack, Avatar, IconButton, Tooltip, Typography } from "@mui/material";
import { Circle, Mic, Videocam, Settings } from "@mui/icons-material";
import Status from "./Status";
import SettingsMenu from "./Settings";

export default function ProfileBar() {
  return (
    <Box
      color={"gray"}
      bgcolor={"#333"}
      height={"5vh"}
      display={"flex"}
      justifyContent={"space-between"} 
      alignItems={"center"}
      paddingX={2}
    >
      <Stack spacing={2} direction={"row"} alignItems={"center"} padding={1}>
        <Status/>
        <Avatar alt="User" sx={{ width: 32, height: 32 }} />
        <Typography variant="body2" color="white">
          Username
        </Typography>
      </Stack>
      
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <SettingsMenu/>
      </Stack>
    </Box>
  );
}
    