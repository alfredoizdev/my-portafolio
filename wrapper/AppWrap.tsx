import React from "react";

interface AppWrapProps {
	Component: any;
	idName: string;
}

const AppWrap = ({ Component, idName }: AppWrapProps) =>
	function HOC() {
		return (
			<div id={idName}>
				<div>
					<Component />
				</div>
			</div>
		);
	};

export default AppWrap;
