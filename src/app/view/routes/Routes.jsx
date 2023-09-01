import { Route, Routes } from 'react-router-dom';
import "primereact/resources/themes/viva-dark/theme.css";
import "primereact/resources/primereact.min.css";
import Main from '../main/Main';
import Login from '../authentication/Login';
import NotFound from '../notFound/NotFound';
// import About from './components/About';
//TODO: import PrivateRoute from './components/PrivateRoute'; // Custom private route component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/Login" element={<Login />} />
      <Route path="/*" element={<NotFound/>} />
      {/* Add more routes here */}
    </Routes>
  );
};

export default AppRoutes;
