import { Mic, Settings, Videocam } from "@mui/icons-material";
import { IconButton, Stack, Tooltip } from "@mui/material";

export default function SettingsMenu() {

  return(
    <>
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
    </>
  )
}