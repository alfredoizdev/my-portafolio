import { FunctionComponent } from "react";
import AppWrap from "wrapper/AppWrap";
import AboutComponent from "./AboutComponent";

interface AboutContainerProps {}

const AboutContainer: FunctionComponent<AboutContainerProps> = () => {
	return (
		<>
			<AboutComponent idName="about" />
		</>
	);
};

export default AppWrap({ Component: AboutContainer, idName: "about" });
