import { FunctionComponent } from "react";
import TechnologiesComponent from "./TechnologiesComponent";

import { useState } from "react";
import { useEffect } from "react";
import svg from "constants/thecSvg";

interface TechnologiesContainerProps {
	technologies:
		| "mongodb"
		| "sass"
		| "javascript"
		| "redux"
		| "next"
		| "html"
		| "css"
		| "sass"
		| "angular"
		| "react"
		| "graphql";
	color: "primary" | "secondary";
}

const TechnologiesContainer: FunctionComponent<TechnologiesContainerProps> = ({
	technologies,
	color,
}) => {
	const [tech, setTch] = useState<any | null>(null);

	useEffect(() => {
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
		} = svg;

		switch (technologies) {
			case "css":
				return setTch(<SiCss3 />);

			case "mongodb":
				return setTch(<SiMongodb />);

			case "sass":
				return setTch(<SiSass />);

			case "javascript":
				return setTch(<SiJavascript />);

			case "redux":
				return setTch(<SiRedux />);

			case "next":
				return setTch(<SiNextdotjs />);

			case "html":
				return setTch(<SiHtml5 />);

			case "graphql":
				return setTch(<SiGraphql />);

			case "angular":
				return setTch(<SiAngular />);

			case "react":
				return setTch(<SiReact />);

			default:
				return setTch(<SiJavascript />);
		}
	}, [technologies]);

	return (
		<>
			<TechnologiesComponent color={color} technologies={tech} />
		</>
	);
};

export default TechnologiesContainer;
