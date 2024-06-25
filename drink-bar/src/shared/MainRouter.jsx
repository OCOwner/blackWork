import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Info from '../pages/Info';
import About from '../pages/About';
import WayToCome from '../pages/WayToCome';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/About" element={<About />} />
        <Route path="/WayToCome" element={<WayToCome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
