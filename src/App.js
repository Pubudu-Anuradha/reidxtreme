import "./App.css";
import About from "./components/About/About";
import Contactus from "./components/Contactus/Contactus";
import Countdown from "./components/Countdown/Countdown";
import Howto from "./components/Howto/Howto";
import Prizes from "./components/Prizes/Prizes";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Countdown />
      <About />
      <Howto />
      <Prizes />
      <Contactus />
    </div>
  );
}

export default App;
