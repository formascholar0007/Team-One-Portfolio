import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Github from "./pages/Github";
import About from "./pages/About";
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
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/github" element={<Github />} />
            </Routes>
          </div>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
