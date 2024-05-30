/*
*    main.js
*/
var svg = d3.select("#chart-area").append("svg")

	.attr("width", 400)

	.attr("height", 400);

var circle = svg.append("circle")

	.attr("cx", 100)

	.attr("cy", 100)

	.attr("r", 70)

	.attr("fill", "purple");

var rect = svg.append("rect")

	.attr("x", 200)

	.attr("y", 200)

	.attr("width", 30)

	.attr("height", 30)

	.attr("fill","blue");