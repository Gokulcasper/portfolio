import About from "./About";
import "./App.css";
// import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import Service from "./Service";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 10,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      once: false,
    });
  });
  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <Project />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
