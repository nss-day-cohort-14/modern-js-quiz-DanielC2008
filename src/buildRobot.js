"use strict";

const typesArray = require("./quiz");
let nameOne;
let nameTwo;


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

$("#robots1").change( () => {
	console.log("hello");
});


