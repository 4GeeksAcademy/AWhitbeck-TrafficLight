import React, { useState } from "react";


const Home = () => {
	const [currentLight, setCurrentLight] = useState("green")
	return (
		<div className="text-center">
			<div className="stick"></div>
			<div className="trafficLight">
				<div className={currentLight === "red" ? "red light glow" : "red light"} onClick={(e) => { currentLight !== "red" ? setCurrentLight("red") : setCurrentLight("") }}></div>
				<div className={currentLight === "yellow" ? "yellow light glow" : "yellow light"} onClick={(e) => { currentLight !== "yellow" ? setCurrentLight("yellow") : setCurrentLight("") }}></div>
				<div className={currentLight === "green" ? "green light glow" : "green light"} onClick={(e) => { currentLight !== "green" ? setCurrentLight("green") : setCurrentLight("") }}></div>

			</div>
		</div>
	);
};

export default Home;
