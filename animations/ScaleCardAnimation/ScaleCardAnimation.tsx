import { FunctionComponent } from "react";
import { motion } from "framer-motion";

interface ScaleCardAnimationProps {
	children: JSX.Element;
}

const ScaleCardAnimation: FunctionComponent<ScaleCardAnimationProps> = ({
	children,
}) => {
	return (
		<motion.div
			whileHover={{
				scale: 1.1,
				boxShadow: "3px 4px 10px 2px rgb(207 22 103 / 34%)",
				backgroundColor: "#c11b63",
				zIndex: 1,
			}}
		>
			{children}
		</motion.div>
	);
};

export default ScaleCardAnimation;
