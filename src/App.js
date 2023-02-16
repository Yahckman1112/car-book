import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/home";
import Header from "./components/header/header";
import About from "./pages/about/about";
import ServicesPage from './pages/services/services';
import BannerUsed from './components/banner/banner';

function App() {
  return (
    <div className="App">
      <Header />
      {/* < BannerUsed/> */}
      <Routes>
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
