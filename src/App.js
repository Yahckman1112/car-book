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
import Admin from "./pages/admin/admin";
import AdminAuth from "./pages/admin/AuthPage/AdminAuth";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import AdminPage from "./pages/admin/admin";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      <Routes>
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={< AdminAuth />} />
        <Route path="/adminAuth/*" element={< AdminPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
