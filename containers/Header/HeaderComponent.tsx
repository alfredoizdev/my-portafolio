import TechnologiesContainer from "components/Technologies";
import { FunctionComponent } from "react";
import styles from "./HeaderComponent.module.scss";
import { motion } from "framer-motion";
import AppWrap from "wrapper/AppWrap";

interface HeaderComponentProps {}

const HeaderComponent: FunctionComponent<HeaderComponentProps> = () => {
	return (
		<section className={`container`}>
			<div className={styles.Banner}>
				<div className={styles.bg}></div>
				<section className={styles.bannerInformation}>
					<article>
						<motion.p
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5, ease: "easeIn" }}
						>
							Hello I am, Alfredo Izquierdo
						</motion.p>
						<motion.h2
							whileInView={{ opacity: [0, 1], y: [0, 5] }}
							transition={{ duration: 0.5, ease: "easeIn" }}
						>
							Web Developer & <span>Full Stack</span>
						</motion.h2>
						<motion.div
							className={styles.techBar}
							whileInView={{ opacity: [0, 1], y: [0, -5] }}
							transition={{ duration: 0.5, ease: "easeIn" }}
						>
							{[
								"graphql",
								"css",
								"html",
								"sass",
								"javascript",
								"mongodb",
								"next",
								"angular",
								"react",
							].map((item: any, index) => (
								<TechnologiesContainer
									key={index}
									technologies={item}
									color="primary"
								/>
							))}
						</motion.div>
					</article>
				</section>
				<motion.div
					whileInView={{ opacity: [0, 1], y: [0, -5] }}
					transition={{ duration: 0.5, ease: "easeIn" }}
					className={styles.mouseIcon}
				>
					<motion.div
						animate={{ y: [0, 5] }}
						transition={{
							type: "spring",
							duration: 1,
							delay: 0.1,
							repeat: Infinity,
						}}
						className={styles.wheel}
					></motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default AppWrap({ Component: HeaderComponent, idName: "home" });
