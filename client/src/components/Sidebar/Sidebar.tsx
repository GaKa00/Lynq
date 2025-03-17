import { Stack, Box } from "@mui/material";
import SideSearchBar from "./SideSearchbar";
import ProfileBar from "./ProfileBar";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: "30vw",
        height: "100vh", 
        backgroundColor: "#121212", 
        position: "fixed", 
        left: 0, 
        top: 0, 
        padding: "16px",
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

