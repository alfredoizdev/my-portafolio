import { FunctionComponent, ReactComponentElement } from "react";
import styles from "./TechnologiesComponent.module.scss";

interface TechnologiesComponentProps {
	technologies: ReactComponentElement<any>;
	color?: string;
	noBg?: boolean;
}

const TechnologiesComponent: FunctionComponent<TechnologiesComponentProps> = ({
	technologies,
	color = "primary",
	noBg = true,
}) => {
	return (
		<div
			className={`${
				color === "primary" ? styles.svgPrimary : styles.svgSecondary
			}`}
		>
			{technologies}
		</div>
	);
};

export default TechnologiesComponent;
