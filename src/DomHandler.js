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

module.exports = buildSelect;
