import { Stack, Box,} from "@mui/material";
import SideSearchBar from "./SideSearchbar";
import ProfileBar from "./ProfileBar";
import useBreakpointQuery from "hooks/useBreakpointQuery";

export default function Sidebar() {

  const isMobile = useBreakpointQuery("down", "sm");
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
        display: "flex",
        flexDirection: isMobile ? "column-reverse" : "column", 
        justifyContent: "flex-start",
      }}
    >
      <SideSearchBar />
      <Stack spacing={2} sx={{ marginY: "16px", flex:1 }}>
        {/* Add more Stack items here */}
      </Stack>
      <ProfileBar />
    </Box>
  );
}