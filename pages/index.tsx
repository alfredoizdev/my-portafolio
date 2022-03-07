import type { NextPage } from "next";
import Head from "next/head";
import HomePageComponent from "../containers/HomePage/HomePageComponent";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Home/Alfredo-Portafolio</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomePageComponent />
		</div>
	);
};

export default Home;
