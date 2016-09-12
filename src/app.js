"use strict";


const domHandler = require("./domHandler");
const buildRobot = require("./buildRobot");
const handleFight = require("./handleFight");

domHandler.buildSelect();

$("input").keypress( function(e) {
	buildRobot.storeName(e, $(this));
});

$("select").change( function() {
	buildRobot.rbtObj($(this));
});

$("#attack").click(() => {	
	handleFight();
});

