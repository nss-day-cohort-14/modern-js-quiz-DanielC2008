"use strict";

const typesArray = require("./quiz");

let buildSelect = () => {
	let robots = $("select").append("<option>");
	typesArray.forEach(index => {
		let option = $("<option>").html(`${index.model}`);
		robots.append(option);
	});
};

module.exports = buildSelect;
