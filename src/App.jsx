import About from "./components/About";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="w-screen text-white font-fjalla">
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
