import Link from "next/link";
import { FunctionComponent } from "react";
import styles from "./Navbar.module.scss";
import { HiMenuAlt2 } from "react-icons/hi";
import SocialNavbarContainer from "components/SocialNavbar";
import { IMenu } from "interfaces";

interface NavbarComponentProps {
	menu: IMenu[];
}

const NavbarComponent: FunctionComponent<NavbarComponentProps> = ({ menu }) => {
	return (
		<nav className={styles.nav}>
			<div className={styles.navMobile}>
				<HiMenuAlt2 />
			</div>
			<h2>
				<span>My</span> Portafolio
			</h2>
			<ul>
				{menu &&
					menu.map((item, index) => (
						<li key={index}>
							<Link href={`${item.url}`}>
								<a>{item.title}</a>
							</Link>
						</li>
					))}
			</ul>
			<SocialNavbarContainer />
		</nav>
	);
};

export default NavbarComponent;
