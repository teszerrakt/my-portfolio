import About from "./components/About";
import Landing from "./components/Landing";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="w-screen text-white font-fjalla">
      <Landing />
      <About />
      <Projects />
    </div>
  );
};

export default App;
