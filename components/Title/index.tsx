import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import styles from "./TitleComponent.module.scss";

interface TitleComponentProps {
	text: string;
	margingTop?: "3.5" | "2.5" | "1.5";
	subTitle?: string;
	subTitleColor?: "primary" | "secondary";
}

const TitleComponent: FunctionComponent<TitleComponentProps> = ({
	text,
	margingTop,
	subTitle,
	subTitleColor,
}) => {
	return (
		<>
			<motion.h2
				style={{ marginTop: `${margingTop ? margingTop : 0}rem` }}
				whileInView={{ opacity: [0, 1], y: [0, 5] }}
				transition={{ duration: 0.5, ease: "easeIn" }}
				className={styles.title}
			>
				{text}
			</motion.h2>

			{subTitle && (
				<motion.p
					whileInView={{ opacity: [0, 1], y: [0, 7] }}
					transition={{ duration: 0.5, ease: "easeIn" }}
					className={`${styles.subTitle} ${
						subTitleColor === "primary"
							? styles.primary
							: styles.secondary
					}`}
				>
					{subTitle}
				</motion.p>
			)}
		</>
	);
};

export default TitleComponent;
