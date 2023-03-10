import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/home";
import Header from "./components/header/header";
import About from "./pages/about/about";
import ServicesPage from "./pages/services/services";
import Pricing from "./pages/pricing/pricing";
// import Pricing from './pages/pages/pages';
import Contact from "./pages/contact/contact";
import Cars from "./pages/cars/cars";
import CarDetails from "./pages/carDetails/carDetails";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/carDetails" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
