import AboutContainer from "containers/About";
import HeaderContainer from "containers/Header";
import NavbarContainer from "components/Navbar";
import WorkContainer from "containers/Work";
import { FunctionComponent } from "react";
import SkillsContainer from "containers/Skills";
import ContactContainer from "containers/Contact";
import FooterContainer from "containers/Footer";

interface HomePageComponentProps {}

const HomePageComponent: FunctionComponent<HomePageComponentProps> = () => {
	return (
		<>
			<NavbarContainer />
			<HeaderContainer />
			<main>
				<AboutContainer />
				<SkillsContainer />
				<WorkContainer />
			</main>
			<ContactContainer />
			<FooterContainer />
		</>
	);
};

export default HomePageComponent;
