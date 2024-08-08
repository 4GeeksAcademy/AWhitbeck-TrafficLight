import React, { useState } from "react";


const Home = () => {
	const [currentLight, setCurrentLight] = useState("green")
	return (
		<div className="wrapper h-100 align-items-center justify-content-center d-flex">
			<div className="shell">
				<div className="trafficLight">
					<div className={currentLight === "red" ? "light lightOn redGlow" : "red light"} onClick={(e) => { currentLight !== "red" ? setCurrentLight("red") : setCurrentLight("") }}></div>
					<div className={currentLight === "yellow" ? "light lightOn yellowGlow" : "yellow light"} onClick={(e) => { currentLight !== "yellow" ? setCurrentLight("yellow") : setCurrentLight("") }}></div>
					<div className={currentLight === "green" ? "light lightOn greenGlow" : "green light"} onClick={(e) => { currentLight !== "green" ? setCurrentLight("green") : setCurrentLight("") }}></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
