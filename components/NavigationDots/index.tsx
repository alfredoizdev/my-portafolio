import { menuData } from "data/data";
import React from "react";
import styles from "./NavigationDostComponent.module.scss";

interface NavigationDotsProps {
	active: any;
}

const NavigationDotsComponent = ({ active }: NavigationDotsProps) => (
	<span className={styles.navigation}>
		{menuData.map((item, index) => (
			<a
				href={`${item.url}`}
				key={item.title.toLowerCase() + index}
				className={styles.navigationDot}
				style={
					active === item.title.toLowerCase()
						? { backgroundColor: "#070606" }
						: {}
				}
			/>
		))}
	</span>
);

export default NavigationDotsComponent;
