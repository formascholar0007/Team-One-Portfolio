import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import StyleGuide from "./pages/StyleGuide"
import GetTheme from "./pages/GetTheme";
import "./App.css"
import './index.css';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />

          <div className="container mx-auto mt-4">
            <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/style-guide" element={<StyleGuide />} />
          <Route path="/get-theme" element={<GetTheme />} />
            </Routes>
          </div>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
