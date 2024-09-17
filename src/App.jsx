import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";
import DonationPage from "./pages/Donate";
import GetInvolve from "./pages/GetInvolve";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/volunteering" element={<GetInvolve />} />
        <Route path="/donate" element={<DonationPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
