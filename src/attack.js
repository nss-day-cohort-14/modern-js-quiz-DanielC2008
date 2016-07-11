"use strict";

const buildRobot = require("./buildRobot");

function attack() {
	let robotOne = buildRobot.robotOne[0];
	let robotTwo = buildRobot.robotTwo[0];
	
	robotTwo.health = robotTwo.health - robotOne.attack;
	if (robotTwo.health <= 0) {
		announce(robotOne.name, robotTwo.name);
		return;
	}
	else {
		buildRobot.createRbt(robotTwo, "robotSelect2");
		robotOne.health = robotOne.health - robotOne.attack;
	}
	if (robotOne.health <= 0) {
		announce(robotTwo.name, robotOne.name);
		return;
	}
	else {
	buildRobot.createRbt(robotOne, "robotSelect1");

	}
}

function announce(winner, loser) {
	let announcement = $("#announcement");
	let winnerDiv = $("<div>").html(`${winner} destroyed ${loser}!`);
	announcement.append(winnerDiv);
	$("#attack").prop("disabled", true);
}

module.exports = attack;

