import "./App.css";
import LetsConnect from "./components/LetsConnect";
import Footer from "./components/Footer";
import Home from "./components/Home";

import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <TechStack />
      <LetsConnect />
      <Footer />
    </div>
  );
}

export default App;
