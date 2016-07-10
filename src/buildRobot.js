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
	typesArray.forEach( (index) => {
		let getModel = index.model === $(e.target).val() ? (robot = index) : null; 
	});
		let getRobotDiv = e.target.id === "robotSelect1" ? createRbt1(robot) : createRbt2(robot);
});


//ADD NAME AND SEND TO DOM
let createRbt1 = (robot) => {
	let a = `Model: ${robot.model}`, b = `Name: ${nameOne}`, c = `Current Health: ${robot.health}`, d = `Damage: ${robot.attack}`;
	let robAttr = [a, b, c, d];
	let rob = $("#robot1");
	rob.empty();
	robAttr.forEach( (index) => {
		let create = $("<div>").html(`${index}`);
		rob.append(create);
	});
};

let createRbt2 = (robot) => {
	let a = `Model: ${robot.model}`, b = `Name: ${nameTwo}`, c = `Current Health: ${robot.health}`, d = `Damage: ${robot.attack}`;
	let robAttr = [a, b, c, d];
	let rob = $("#robot2");
	rob.empty();
	robAttr.forEach( (index) => {
		let create = $("<div>").html(`${index}`);
		rob.append(create);
	});
};