import TitleComponent from "components/Title";
import Image from "next/image";
import Link from "next/link";
import { worksData } from "data/data";
import { IWork } from "interfaces";
import { Fragment, FunctionComponent } from "react";
import styles from "./WorkComponent.module.scss";
import FadeAnimation from "animations/FadeAnimation/FadeAnimation";
import { HiLink } from "react-icons/hi";
import NavigationDotsComponent from "components/NavigationDots";

interface WorkComponentProps {
	works: IWork[];
	fetchSvg: Function;
	idName: string;
}

const WorkComponent: FunctionComponent<WorkComponentProps> = ({
	works,
	fetchSvg,
	idName,
}) => {
	return (
		<section className={styles.workContainer}>
			<article className={styles.title}>
				<TitleComponent text="My Work" subTitle="What I did" />
			</article>
			<FadeAnimation className={styles.workInfo}>
				<>
					{works &&
						worksData.map((work, index) => (
							<div key={index} className={styles.workCard}>
								<div className={styles.imgContainer}>
									<Image
										src={`/assets/${work.imgUrl}`}
										layout="responsive"
										width={1200}
										height={900}
										alt={work.company}
									/>
									<Link href={"/"}>
										<a className={styles.projectLink}>
											See more <HiLink />
										</a>
									</Link>
								</div>
								<h2>{work.company}</h2>
								<span>{work.duration}</span>
								<p>{work.description}</p>
								<div className={styles.techBar}>
									{work?.techUsed &&
										work?.techUsed.map((svg, index) => (
											<Fragment key={index}>
												{fetchSvg(svg)}
											</Fragment>
										))}
								</div>
							</div>
						))}
				</>
			</FadeAnimation>
			<NavigationDotsComponent active={idName} />
		</section>
	);
};

export default WorkComponent;
