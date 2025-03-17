import Main from "@/components/chat/Main";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
    return (
      <div style={{ display: "flex", flexDirection: "row", height: "full" }}>
        <Sidebar/>
        <Main/>
      </div>
    );
  }