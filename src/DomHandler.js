"use strict";

const typesArray = require("./quiz");

//Build up select element
let buildSelect = () => {
	let robots = $("select").append("<option>");
	typesArray.forEach( (index) => {
		let option = $("<option>").html(`${index.model}`);
		robots.append(option);
	});
};

// ANNOUNCE WINNER/////////
function announce(winner, loser) {
	let announcement = $("#announcement");
	let winnerDiv = $("<div>").html(`${winner} destroyed ${loser}!`);
	announcement.append(winnerDiv);
	$("#attack").prop("disabled", true);
}

module.exports = {buildSelect, announce};
