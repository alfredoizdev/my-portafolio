import { FunctionComponent } from "react";
import { FaGithubAlt } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import styles from "./SocialNavbar.module.scss";

interface SocialNavbarProps {}

const SocialNavbarContainer: FunctionComponent<SocialNavbarProps> = () => {
	return (
		<div className={styles.socialBar}>
			<FaGithubAlt />
			<GrLinkedin />
		</div>
	);
};

export default SocialNavbarContainer;
