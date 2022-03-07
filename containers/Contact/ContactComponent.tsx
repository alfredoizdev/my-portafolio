import { FunctionComponent } from "react";
import styles from "./ContactComponent.module.scss";
import Wave from "../../public/assets/wave.svg";
import TitleComponent from "components/Title";
import { GoDeviceMobile } from "react-icons/go";
import { MdAlternateEmail } from "react-icons/md";
import ButtonComponent from "components/Button";
import FadeAnimation from "animations/FadeAnimation/FadeAnimation";
import { motion } from "framer-motion";
import NavigationDotsComponent from "components/NavigationDots";

interface ContactComponentProps {
	idName: string;
}

const ContactComponent: FunctionComponent<ContactComponentProps> = ({
	idName,
}) => {
	return (
		<>
			<section className={styles.wave}>
				<Wave />
			</section>
			<section className={styles.contactContainer}>
				<article className={styles.title}>
					<TitleComponent
						text="Contact me"
						subTitle="get in touch"
						subTitleColor="primary"
					/>
				</article>

				<FadeAnimation className={styles.contact} delay={0.2}>
					<>
						<h2>
							<GoDeviceMobile />
							1+(907) 345-3345
						</h2>
						<h2>
							<MdAlternateEmail />
							alfredo@develop.com
						</h2>
					</>
				</FadeAnimation>

				<FadeAnimation className={styles.contactForm} delay={0.4}>
					<>
						<input type="text" placeholder="Your name" />
						<input type="email" placeholder="Your email" />
						<textarea placeholder="How I can help you" />
						<div className={styles.formButton}>
							<motion.button
								whileHover={{
									boxShadow: "3px 4px 5px 2px rgb(0 0 0 / 45%)",
								}}
								type="button"
							>
								Send
							</motion.button>
						</div>
					</>
				</FadeAnimation>
				<NavigationDotsComponent active={idName} />
			</section>
		</>
	);
};

export default ContactComponent;
