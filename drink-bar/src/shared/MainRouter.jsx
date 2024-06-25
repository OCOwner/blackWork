import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Info from '../pages/Info';
import About from '../pages/About';
import WayToCome from '../pages/WayToCome';
import { PATH_URL } from '../constants/constants';
import Layout from './Layout';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={PATH_URL.HOME} element={<Home />} />
          <Route path={PATH_URL.INFO} element={<Info />} />
          <Route path={PATH_URL.ABOUT} element={<About />} />
          <Route path={PATH_URL.WELCOME} element={<WayToCome />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default MainRouter;
