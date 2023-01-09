import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Container customClass="min_height">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/contato" element={<Contact />}></Route>
        <Route path="/newproject" element={<NewProject />}></Route>
      </Routes>
      </Container>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
