"use strict";

const typesArray = require("./quiz");
let nameOne;
let nameTwo;

//STORE NAME
$("input").keypress( (e) => {
	if (e.which == 13) {
		if (e.target.id === "player1"){
			nameOne = $(e.target).val();
		}
		else if (e.target.id === "player2"){
			nameTwo = $(e.target).val();
		}
	}
});


//CREATE ROBOT OBJECT
$("select").change( (e) => {
	let robot;
	typesArray.forEach( (index) => {
		if (index.model === $(e.target).val()) {
			robot = index;
		}
	});
		e.target.id = "robots1" ? createRbt1(robot) : createRbt2(robot);
});


//ADD NAME AND SEND TO DOM
let createRbt1 = (robot) => {
	console.log(robot);
};

let createRbt2 = (robot) => {
console.log(robot);
};