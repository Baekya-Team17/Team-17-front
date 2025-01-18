import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import CustomColumn from "./components/CustomColumn";

const Layout: React.FC = () => {
	return (
		<CustomColumn $width="100%" $minHeight="90vh">
			<Outlet />
			<NavigationBar />
		</CustomColumn>
	);
};

export default Layout;
