import { FunctionComponent } from "react";
import HomePageComponent from "./HomePageComponent";

interface HomePageContainerProps {}

const HomePageContainer: FunctionComponent<HomePageContainerProps> = () => {
	return (
		<>
			<HomePageComponent />
		</>
	);
};

export default HomePageContainer;
