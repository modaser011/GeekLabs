import "./App.css";
import GeekLaps from "./Component/GeekLapsMain";
import Sidebar from "./Component/SideBar";
function App() {
  return (
    <div
      style={{
        maxWidth: "100vw",
      }}
    >
      {/* <Notification /> */}
      <Sidebar />
      <GeekLaps />
      {/* <Slides /> */}
    </div>
  );
}

export default App;
