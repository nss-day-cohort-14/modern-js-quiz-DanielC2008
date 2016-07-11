"use strict";

const buildRobot = require("./buildRobot");
let robotOne = buildRobot.robotOne;
let robotTwo = buildRobot.robotTwo;





function attack(){
	robotTwo[0].health = robotTwo[0].health - robotOne[0].attack;	
	buildRobot.createRbt(robotTwo[0], "robotSelect2");
	robotOne[0].health = robotOne[0].health - robotOne[0].attack;	
	buildRobot.createRbt(robotOne[0], "robotSelect1");
}


module.exports = attack;