"use strict";

const buildRobot = require("./buildRobot");
const domHandler = require("./domHandler");
const attack = require("./attack");

function handleFight() {
	let robotOne = buildRobot.robotOne[0];
	let robotTwo = buildRobot.robotTwo[0];

	attack(robotOne, robotTwo);
	if (robotTwo.health <= 0) {
		domHandler.announce(robotOne.name, robotTwo.name);
		return;
	}
	else {
		buildRobot.createRbt(robotTwo, "robotSelect2");
		attack(robotTwo, robotOne);
	}
	if (robotOne.health <= 0) {
		domHandler.announce(robotTwo.name, robotOne.name);
		return;
	}
	else {
	buildRobot.createRbt(robotOne, "robotSelect1");

	}
}

module.exports = handleFight;