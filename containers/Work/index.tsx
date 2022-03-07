import { worksData } from "data/data";
import { FunctionComponent } from "react";
import AppWrap from "wrapper/AppWrap";
import WorkComponent from "./WorkComponent";
import svg from "constants/thecSvg";

interface WorkContainerProps {}

const WorkContainer: FunctionComponent<WorkContainerProps> = () => {
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
		SiFirebase,
		SiPhp,
		SiWebrtc,
		SiMysql,
		SiWordpress,
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
			case "firebase":
				return <SiFirebase />;
			case "php":
				return <SiPhp />;
			case "webrtc":
				return <SiWebrtc />;
			case "mysql":
				return <SiMysql />;
			case "wordpress":
				return <SiWordpress />;

			default:
				return null;
		}
	};

	return (
		<>
			<WorkComponent idName="work" fetchSvg={setSvg} works={worksData} />
		</>
	);
};

export default AppWrap({ Component: WorkContainer, idName: "work" });
