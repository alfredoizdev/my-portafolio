import { menuData } from "data/data";
import { FunctionComponent } from "react";
import NavbarComponent from "./NavbarComponent";

interface NavbarContainerProps {}

const NavbarContainer: FunctionComponent<NavbarContainerProps> = () => {
	return (
		<>
			<NavbarComponent menu={menuData} />
		</>
	);
};

export default NavbarContainer;
