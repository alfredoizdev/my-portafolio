export interface ISkill {
	title: string;
	percent: string;
	content: string;
	svgSource: any;
}

export interface IMenu {
	url: string;
	title: string;
}

export interface IWork {
	duration: string;
	company: string;
	description: string;
	techUsed: Array<string>;
	imgUrl: string;
}
