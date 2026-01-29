import "./App.css";
import Menu from "./components/Menu.jsx";
import { meny } from "./data/menu.js";

function App() {
  return (
    <>
      <Menu meny={meny} />
    </>
  );
}

export default App;
