import { FunctionComponent } from "react";
import styles from "./FooterComponent.module.scss";

interface FooterComponentProps {}

const FooterComponent: FunctionComponent<FooterComponentProps> = () => {
	return (
		<footer className={styles.footerContainer}>
			<p>
				© Copyright Epitome 2022 | Design by <b>Alfredo Izquierdo</b>
			</p>
		</footer>
	);
};

export default FooterComponent;
