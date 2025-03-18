import Main from "@/components/chat/Main";
import Sidebar from "@/components/Sidebar/Sidebar";
import useBreakpointQuery from "hooks/useBreakpointQuery";

export default function Home() {

  const isMobile = useBreakpointQuery("down", "sm");
    return (
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "30vw 1fr", // Grid layout
        height: "100vh",
    }}>
        <Sidebar/>
        <Main/>
      </div>
    );
  }