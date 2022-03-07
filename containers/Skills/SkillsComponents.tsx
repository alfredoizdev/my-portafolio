import TechnologiesContainer from "components/Technologies";
import TitleComponent from "components/Title";
import { FunctionComponent } from "react";
import styles from "./SkillsComponents.module.scss";
import { motion } from "framer-motion";
import ScaleCardAnimation from "animations/ScaleCardAnimation/ScaleCardAnimation";
import { ISkill } from "interfaces";
import NavigationDotsComponent from "components/NavigationDots";

interface SkillsComponentsProps {
	skills: ISkill[];
	setSvg: Function;
	idName: string;
}

const SkillsComponents: FunctionComponent<SkillsComponentsProps> = ({
	skills,
	setSvg,
	idName,
}) => {
	return (
		<section className={styles.skillContainer}>
			<article className={styles.title}>
				<TitleComponent text="My Skills" subTitle="What I can do" />
			</article>
			<motion.article
				whileInView={{ opacity: [0, 1], y: [0, 10] }}
				transition={{ duration: 0.7, ease: "easeIn" }}
				className={styles.skillGrid}
			>
				{skills.map((skill, index) => (
					<ScaleCardAnimation key={index}>
						<>
							<h2>
								{skill.title} {setSvg(skill.svgSource)}
							</h2>
							<div className={styles.skillPercent}>
								<span>{skill.percent}</span>
							</div>
							<p>{skill.content}</p>
						</>
					</ScaleCardAnimation>
				))}
			</motion.article>
			<NavigationDotsComponent active={idName} />
		</section>
	);
};

export default SkillsComponents;
