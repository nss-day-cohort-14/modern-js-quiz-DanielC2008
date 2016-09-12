"use strict";

const typesArray = require("./quiz");

//Build up select element
const buildSelect = () => {
	const robots = $("select").append("<option>");
	typesArray.forEach( (index) => {
		let option = $("<option>").html(`${index.model}`);
		robots.append(option);
	});
};

// ANNOUNCE WINNER/////////
function announce(winner, loser) {
	const announcement = $("#announcement");
	let winnerDiv = $("<div>").html(`${winner} destroyed ${loser}!`);
	announcement.append(winnerDiv);
	$("#attack").prop("disabled", true);
}

module.exports = {buildSelect, announce};
