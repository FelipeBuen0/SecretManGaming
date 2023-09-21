import { Route, Routes } from 'react-router-dom';
import "primereact/resources/themes/viva-dark/theme.css";
import "primereact/resources/primereact.min.css";
import Main from '../view/main/Main';
import Login from '../view/authentication/Login';
import NotFound from '../view/notFound/NotFound';
import { PrivateRoute } from '../view/components/privateRoute/PrivateRoute';

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				exact
				path="/"
				element={
					<PrivateRoute token={localStorage.getItem('auhT')}>
						<Main/>
					</PrivateRoute>
				} 
			/>
			{/* <Route path="/about" element={<About />} /> */}
			<Route exact path="/Login" element={<Login />} />
			<Route path="/*" element={<NotFound />} />
			{/* Add more routes here */}
		</Routes>
	);
};

export default AppRoutes;
