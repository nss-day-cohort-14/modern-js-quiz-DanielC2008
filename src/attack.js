"use strict";

let buildRobot = require("./buildRobot");
let robotOne = buildRobot.robotOne;
let robotTwo = buildRobot.robotTwo;


$("#attack").click(() => {	
	robotTwo[0].health = robotTwo[0].health - robotOne[0].attack;	
	buildRobot.createRbt(robotTwo[0], "robotSelect2");
	robotOne[0].health = robotOne[0].health - robotOne[0].attack;	
	buildRobot.createRbt(robotOne[0], "robotSelect1");
});