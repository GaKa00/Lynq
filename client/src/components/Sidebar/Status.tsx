import { Circle, Check } from "@mui/icons-material";
import { Popover, Stack, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import { useToggleState } from "hooks/useToggleState";
import { useRef, useState } from "react";

export default function Status() {
  function setStatus(status: string) {
    setUserStatus(status);
    toggleOpen();
  }
  const [isOpen, toggleOpen] = useToggleState(false);
  const [userStatus, setUserStatus] = useState("green");
  const status = ["Online", "Away", "Busy", "Offline", "Invisible"];
  const statusColor = ["green", "yellow", "red", "darkgray", "black"];
  const anchorRef = useRef(null);
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Circle
        sx={{color: userStatus, fontSize: "16px", cursor: "pointer",}}
        onClick={toggleOpen}
        ref={anchorRef}
      />
      <Popover
        open={isOpen}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          style: {
            marginTop: isMobile? "1.5vh" : "-3vh", 
          },
        }}
      >
        <Box
          sx={{padding: 2, backgroundColor: "#282828", borderRadius: 1,}}
        >
          <Stack spacing={1}>

            {status.map((status, index) => (
              <Stack key={status} direction="row" alignItems="center" spacing={2}
                sx={{cursor: "pointer", backgroundColor: "#3a3a3a", padding: 1,  borderRadius: 1,
                  transition: "background-color 0.2s ease-in-out",}}
                onClick={() => setStatus(statusColor[index])}>

                <Circle sx={{ color: statusColor[index], fontSize: "16px" }} />
                <Typography variant="body2" color="white">
                  {status}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Popover>
    </>
  );
}
