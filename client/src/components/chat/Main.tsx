import { Box } from "@mui/material";
import Chatbox from "./Chatbox";

export default function Main() {
    return (
       <Box sx={{ backgroundColor: "#D3D3D3", color: "white", width: "100%", height: "100%" }}>
        {/* <Navbar/> */}
        <Chatbox/> 
       </Box>
    )
}