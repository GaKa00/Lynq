import { Circle } from "@mui/icons-material";
import { Avatar, Box, Stack, Typography } from "@mui/material";

export default function FriendCard() {
    return (
        <Box
        bgcolor={"#333"}
        color={"gray"}
        height={"5vh"}
        display={"flex"}
        justifyContent={"space-between"}
        width={"80%"}
        alignItems={"center"}
        paddingX={2}
        >
        <Stack spacing={2} direction={"row"} alignItems={"center"} padding={1}>
            <Circle sx={{ color: "green", fontSize: "16px",}} />
            <Avatar alt="User" sx={{ width: 32, height: 32 }} />
            <Typography variant="body2" color="white">
            Username
            </Typography>
        </Stack>
        </Box>
    );
    }