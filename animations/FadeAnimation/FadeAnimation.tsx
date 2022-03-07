import { motion } from "framer-motion";
import { FunctionComponent } from "react";

interface FadeAnimationProps {
	children: JSX.Element;
	className?: string;
	delay?: number;
}

const FadeAnimation: FunctionComponent<FadeAnimationProps> = ({
	children,
	className,
	delay,
}) => {
	return (
		<motion.article
			whileInView={{ opacity: [0, 1], y: [0, 10] }}
			transition={{ duration: 0.7, ease: "easeIn", delay: delay }}
			className={className ? className : ""}
		>
			{children}
		</motion.article>
	);
};

export default FadeAnimation;
