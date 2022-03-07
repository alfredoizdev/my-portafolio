import { FunctionComponent } from "react";
import SkillsComponents from "./SkillsComponents";
import { skillsData } from "data/data";
import svg from "constants/thecSvg";
import AppWrap from "wrapper/AppWrap";

interface SkillsContainerProps {}

const SkillsContainer: FunctionComponent<SkillsContainerProps> = () => {
	const {
		SiMongodb,
		SiSass,
		SiJavascript,
		SiRedux,
		SiNextdotjs,
		SiHtml5,
		SiCss3,
		SiGraphql,
		SiAngular,
		SiReact,
		SiNodedotjs,
		SiGit,
	} = svg;

	const setSvg = (svg: string) => {
		switch (svg) {
			case "angular":
				return <SiAngular />;
			case "react":
				return <SiReact />;
			case "grahpql":
				return <SiGraphql />;
			case "next":
				return <SiNextdotjs />;
			case "node":
				return <SiNodedotjs />;
			case "git":
				return <SiGit />;
			case "css":
				return <SiCss3 />;
			case "html":
				return <SiHtml5 />;
			case "sass":
				return <SiSass />;
			case "mongodb":
				return <SiMongodb />;
			case "redux":
				return <SiRedux />;
			case "javascript":
				return <SiJavascript />;

			default:
				return null;
		}
	};

	return (
		<SkillsComponents setSvg={setSvg} skills={skillsData} idName="skills" />
	);
};

export default AppWrap({ Component: SkillsContainer, idName: "skills" });
