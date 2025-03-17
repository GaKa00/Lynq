import { Stack, Box, useMediaQuery, useTheme } from "@mui/material";
import SideSearchBar from "./SideSearchbar";
import ProfileBar from "./ProfileBar";


export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 
  return (
    <Box
      sx={{
        width: isMobile ? "100vw" : "30vw",
        height: "100vh", 
        backgroundColor: "#121212", 
        position: "fixed", 
        left: 0, 
        top: 0, 
        boxSizing: "border-box",
      }}
    >
      <SideSearchBar />
      <Stack spacing={2} sx={{marginY:"16px"}} >
        {/* Add more Stack items here */}
      </Stack>
      <ProfileBar/>
    </Box>
  );
}

