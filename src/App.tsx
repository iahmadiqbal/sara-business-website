import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./views/Home";
import Services from "./views/Services";
import About from "./views/About";
import Singlemember from "./views/Singlemember";
import Pricing from "./views/Pricing";
import Contact from "./views/Contact";
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/about" element={<Pricing />} />
            <Route path="/Singlemember" element={<Singlemember />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
