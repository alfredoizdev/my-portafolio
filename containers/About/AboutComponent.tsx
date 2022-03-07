import { FunctionComponent } from "react";
import Image from "next/image";
import styles from "./AboutComponent.module.scss";
import { motion } from "framer-motion";
import TitleComponent from "components/Title";
import ButtonComponent from "components/Button";
import NavigationDotsComponent from "components/NavigationDots";

interface AboutComponentProps {
	idName: string;
}

const AboutComponent: FunctionComponent<AboutComponentProps> = ({ idName }) => {
	return (
		<section className={`container ${styles.aboutContainer}`}>
			<div className={styles.title}>
				<TitleComponent text="About me" subTitle="How I am" />
			</div>
			<div>
				<motion.article
					whileInView={{ opacity: [0, 1], y: [0, 20] }}
					transition={{ duration: 0.5, ease: "easeIn" }}
					className={styles.imgContainer}
				>
					<Image
						src={"/assets/me2.jpeg"}
						alt="profile"
						layout="responsive"
						width={80}
						height={100}
					/>
				</motion.article>
				<motion.article
					className={styles.infoContainer}
					whileInView={{ opacity: [0, 1], y: [0, 15] }}
					transition={{ duration: 0.9, ease: "easeIn" }}
				>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
						consectetur officiis dolorem architecto soluta a ab delectus
						assumenda quasi incidunt recusandae suscipit, ducimus at
						veniam aliquam necessitatibus deserunt. Non, iure. Lorem
						ipsum, dolor sit amet consectetur adipisicing elit. Illo
						consectetur officiis dolorem architecto soluta a ab delectus
						assumenda quasi incidunt recusandae suscipit, ducimus at
						veniam aliquam necessitatibus deserunt. Non, iure. Lorem
						ipsum, dolor sit amet consectetur adipisicing elit. Illo
						consectetur officiis dolorem architectoassumenda quasi
						incidunt recusandae suscipit, ducimus at veniam aliquam
						necessitatibus deserunt. Non, iure. Lorem ipsum, dolor sit
						amet consectetur adipisicing elit. Illo consectetur officiis
						dolorem architecto, veniam aliquam necessitatibus deserunt.
						Non, iure. Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Illo consectetur officiis dolorem architectoassumenda
						quasi incidunt recusandae suscipit, ducimus at veniam aliquam
						necessitatibus deserunt. Non, iure. Lorem ipsum, dolor sit
						amet consectetur adipisicing elit. Illo consectetur officiis
						dolorem architecto.
						<br />
						elit. Illo consectetur officiis dolorem architectoassumenda
						quasi incidunt recusandae suscipit, ducimus at veniam aliquam
						necessitatibus deserunt. Non, iure. Lorem ipsum, dolor sit
						amet consectetur adipisicing elit. Illo consectetur officiis
						dolorem architecto
					</p>
					<div className={styles.buttonsSections}>
						<ButtonComponent color="primary" text="Hire me" />
						<ButtonComponent color="secondary" text="Contact me" />
					</div>
				</motion.article>
			</div>
			<NavigationDotsComponent active={idName} />
		</section>
	);
};

export default AboutComponent;
