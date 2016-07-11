"use strict";

const domHandler = require("./domHandler");
const buildRobot = require("./buildRobot");
const attack = require("./attack");

domHandler();

$("input").keypress( function(e) {
	buildRobot.storeName(e, $(this));
});

$("select").change( function() {
	buildRobot.rbtObj($(this));
});

$("#attack").click(() => {	
	attack();
});