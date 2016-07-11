"use strict";

const buildRobot = require("./buildRobot");



function attack(){
	let robotOne = buildRobot.robotOne[0];
	let robotTwo = buildRobot.robotTwo[0];
	robotTwo.health = robotTwo.health - robotOne.attack;	
	buildRobot.createRbt(robotTwo, "robotSelect2");
	robotOne.health = robotOne.health - robotOne.attack;	
	buildRobot.createRbt(robotOne, "robotSelect1");
}


module.exports = attack;