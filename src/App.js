import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ContactInfo from "./components/ContactInfo";
import Navbar from "./components/navbar.jsx";
//import Footer from "./components/footer.jsx";
function App() {
  return (  
    <div>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <ContactInfo />
      {/* <Footer /> */}
      
    </div>
  );
}


export default App;
