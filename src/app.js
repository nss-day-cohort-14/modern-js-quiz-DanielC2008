"use strict";

const domHandler = require("./domHandler");
const buildRobot = require("./buildRobot");
const attack = require("./attack");

domHandler();

$("input").keypress( (e) => {
	buildRobot.storeName(e);
});

$("select").change( (e) => {
	buildRobot.rbtObj(e);
});


$("#attack").click(() => {	
	attack();
});