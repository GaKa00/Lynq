import { Box, Stack, Avatar, IconButton, Tooltip, Typography } from "@mui/material";
import { Circle, Mic, Videocam, Settings } from "@mui/icons-material";

export default function ProfileBar() {
  return (
    <Box
      color={"gray"}
      bgcolor={"#333"}
      Height={"15vh"}
      display={"flex"}
      justifyContent={"space-between"} 
      alignItems={"center"}
      paddingX={2}
    >
      <Stack spacing={2} direction={"row"} alignItems={"center"} padding={1}>
        <Circle sx={{ color: "green", fontSize: "16px" }} />
        <Avatar alt="User" sx={{ width: 32, height: 32 }} />
        <Typography variant="body2" color="white">
          Username
        </Typography>
      </Stack>
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <Tooltip title="Microphone">
          <IconButton size="small" sx={{ color: "white" }}>
            <Mic />
          </IconButton>
        </Tooltip>
        <Tooltip title="Camera">
          <IconButton size="small" sx={{ color: "white" }}>
            <Videocam />
          </IconButton>
        </Tooltip>
        <Tooltip title="Settings">
          <IconButton size="small" sx={{ color: "white" }}>
            <Settings />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  );
}
    