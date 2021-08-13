import "./App.css";
import Countdown from "./components/Countdown/Countdown";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Countdown />
    </div>
  );
}

export default App;
