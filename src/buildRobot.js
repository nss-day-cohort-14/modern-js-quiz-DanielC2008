"use strict";

const typesArray = require("./quiz");
let nameOne;
let nameTwo;

//STORE NAME
$("input").keypress( (e) => {
	 let enter = e.which === 13 ?  
		(e.target.id === "player1" ? (nameOne = $(e.target).val()) : (nameTwo = $(e.target).val())) 
		: null;
});


//CREATE ROBOT OBJECT
$("select").change( (e) => {
	let robot;
	let divId = e.target.id;
	typesArray.forEach( (index) => {
		let getModel = index.model === $(e.target).val() ? (robot = index) : null; 
	});
		createRbt(robot, divId);
});


//ADD NAME AND SEND TO DOM
let createRbt = (robot, divId) => {
	let robotEl; 
	if (divId === "robotSelect1") {
		 robotEl = $("#robot1");
		if (nameOne !== undefined) {
		 robot.name = nameOne;
		} 
	}	
	else {
		 robotEl = $("#robot2");
		if (nameTwo !== undefined) {
		 robot.name = nameTwo;
		} 
	}	

		let a = `Model: ${robot.model}`, b = `Name: ${robot.name}`, c = `Current Health: ${robot.health}`, d = `Damage: ${robot.attack}`;
		let robAttr = [a, b, c, d];
		robotEl.empty();
		robAttr.forEach( (index) => {
		let create = $("<div>").html(`${index}`);
		robotEl.append(create);
	});
};

// let createRbt2 = (robot) => {
// 	let a = `Model: ${robot.model}`, b = `Name: ${nameTwo}`, c = `Current Health: ${robot.health}`, d = `Damage: ${robot.attack}`;
// 	let robAttr = [a, b, c, d];
// 	let rob = $("#robot2");
// 	rob.empty();
// 	robAttr.forEach( (index) => {
// 		let create = $("<div>").html(`${index}`);
// 		rob.append(create);
// 	});
// };