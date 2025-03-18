import { Stack, Box,} from "@mui/material";
import SideSearchBar from "./SideSearchbar";
import ProfileBar from "./ProfileBar";
import useBreakpointQuery from "hooks/useBreakpointQuery";
import FriendCard from "./FriendCard";

export default function Sidebar() {

  const isMobile = useBreakpointQuery("down", "sm");
  return (
    <Box
    sx={{
      width: "100%", 
      height: "100%", 
      backgroundColor: "#121212",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: isMobile ? "column-reverse" : "column",
      justifyContent: "flex-start",
  }}
    >
      <SideSearchBar />
      <Stack spacing={2} sx={{ marginY: "16px", flex:1,  alignItems:"center" }}>
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
      </Stack>
      <ProfileBar />
    </Box>
  );
}