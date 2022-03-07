import { FunctionComponent } from "react";
import HeaderComponent from "./HeaderComponent";

interface HeaderContainerProps {}

const HeaderContainer: FunctionComponent<HeaderContainerProps> = () => {
	return (
		<>
			<HeaderComponent />
		</>
	);
};

export default HeaderContainer;
