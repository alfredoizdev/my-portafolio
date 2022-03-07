import { IMenu, ISkill, IWork } from "interfaces";

export const skillsData: ISkill[] = [
	{
		title: "Next",
		percent: "95%",
		content: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente, quibusdam fugiat suscipit quod,velit!`,
		svgSource: "next",
	},
	{
		title: "React",
		percent: "100%",
		content: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente, quibusdam fugiat suscipit quod,velit!`,
		svgSource: "react",
	},
	{
		title: "Angular",
		percent: "90%",
		content: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente, quibusdam fugiat suscipit quod,velit!`,
		svgSource: "angular",
	},
	{
		title: "Node",
		percent: "90%",
		content: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente, quibusdam fugiat suscipit quod,velit!`,
		svgSource: "node",
	},
	{
		title: "Git",
		percent: "100%",
		content: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente, quibusdam fugiat suscipit quod,velit!`,
		svgSource: "git",
	},
	{
		title: "Graphql",
		percent: "80%",
		content: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente, quibusdam fugiat suscipit quod,velit!`,
		svgSource: "grahpql",
	},
	{
		title: "Css",
		percent: "100%",
		content: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente, quibusdam fugiat suscipit quod,velit!`,
		svgSource: "css",
	},
	{
		title: "Html",
		percent: "100%",
		content: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente, quibusdam fugiat suscipit quod,velit!`,
		svgSource: "html",
	},
	{
		title: "Sass",
		percent: "100%",
		content: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente, quibusdam fugiat suscipit quod,velit!`,
		svgSource: "sass",
	},
	{
		title: "MongoDb",
		percent: "100%",
		content: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente, quibusdam fugiat suscipit quod,velit!`,
		svgSource: "mongodb",
	},
	{
		title: "Java Script",
		percent: "100%",
		content: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente, quibusdam fugiat suscipit quod,velit!`,
		svgSource: "javascript",
	},
	{
		title: "Redux",
		percent: "100%",
		content: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente, quibusdam fugiat suscipit quod,velit!`,
		svgSource: "redux",
	},
];

export const menuData: IMenu[] = [
	{
		url: "#home",
		title: "Home",
	},
	{
		url: "#about",
		title: "About",
	},
	{
		url: "#skills",
		title: "Skills",
	},
	{
		url: "#work",
		title: "Work",
	},
	{
		url: "#contact",
		title: "Contact",
	},
];

export const worksData: IWork[] = [
	{
		duration: "2014-2018",
		company: "Am Global Group",
		description: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente, quibusdam fugiat suscipit quod,velit!`,
		techUsed: ["angular", "firebase", "php", "mysql", "laravel", "wordpress"],
		imgUrl: `about01.png`,
	},
	{
		duration: "2018-2019",
		company: "Dahsboard Hosting",
		description: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente, quibusdam fugiat suscipit quod,velit!`,
		techUsed: ["react", "node", "sql", "webrtc"],
		imgUrl: `about02.png`,
	},
	{
		duration: "2019-2021",
		company: "Fusus",
		description: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente, quibusdam fugiat suscipit quod,velit!`,
		techUsed: ["angular", "node", "firebase", "react"],
		imgUrl: `about03.png`,
	},
	{
		duration: "2021-2022",
		company: "Redcon1",
		description: `	Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sapiente, quibusdam fugiat suscipit quod,velit!`,
		techUsed: ["angular", "node", "firebase", "react"],
		imgUrl: `about04.png`,
	},
];
