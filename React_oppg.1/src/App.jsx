import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import { meny } from "./data/menu.js";

function App() {
  return (
    <>
      <Header />
      <Menu meny={meny} />
      <Footer />
    </>
  );
}

export default App;
