import { FunctionComponent } from "react";
import styles from "./ButtonComponent.module.scss";

interface ButtonComponentProps {
	text: string;
	color?: "primary" | "secondary";
}

const ButtonComponent: FunctionComponent<ButtonComponentProps> = ({
	text,
	color,
}) => {
	return (
		<button
			className={`${styles.buttonCustom} ${
				color === "primary" ? styles.primary : ""
			}${color === "secondary" ? styles.secondary : ""}`}
			type="button"
		>
			{text}
		</button>
	);
};

export default ButtonComponent;
