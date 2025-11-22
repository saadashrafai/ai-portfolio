import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}
