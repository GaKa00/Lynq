import { useMediaQuery, useTheme } from "@mui/material";

export default function useBreakpointQuery(direction: "up" | "down" | "only" , size: "xs" | "sm" | "md" | "lg" | "xl") {

    const theme = useTheme();
    
    switch (direction) {
        case "up":
            return useMediaQuery(theme.breakpoints.up(size));
        case "down":
            return useMediaQuery(theme.breakpoints.down(size));
        case "only":
            return useMediaQuery(theme.breakpoints.only(size));
    }
   
}