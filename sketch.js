
var angle;
var axiom;
var sentence = "";
var len = 100;
var type;
var w=1440;
var h=800;



function generate() {

	rules[type]["len"]*=rules[type]["scl"];
	console.log(type);
	var nextSentence = "";

	for (var i = 0; i < sentence.length; i++) {
		var current = sentence.charAt(i);
		var found = false;
		for (var j = 0; j < rules[type]["system"].length; j++) {
		//	console.log(type,rules[type]["system"][j]);
			if (current == rules[type]["system"][j].a) {
				found = true;
				nextSentence += rules[type]["system"][j].b;
				break;
			}
		}
		if (!found) {
			nextSentence += current;
		}
	}
	sentence = nextSentence;
//  createP(sentence);
	turtle();

}

function turtle() {
	background(0);
	resetMatrix();
	translate(rules[type]["transX"], rules[type]["transY"]);
	stroke(255);
	strokeWeight(2);
	var r=random(255);
	var g=random(255);
	var b=random(255);
	for (var i = 0; i < sentence.length; i++) {
		stroke((r++)%255,(g++)%255,(b++)%255, 100);
		var current = sentence.charAt(i);

		if (current == "F" || current == "G") {
			line(0, 0, 0, -rules[type]["len"]);
			translate(0, -rules[type]["len"]);
		} else if (current == "+") {
			rotate(angle);
		} else if (current == "-") {
			rotate(-angle)
		} else if (current == "[") {
			push();
		} else if (current == "]") {
			pop();
		}
	}
}

function setup() {

	var button = createButton("generate");
	button.mousePressed(generate);
	var b1 = createButton("clear");
	b1.mousePressed(function(){
		background(0);
	});
	var b2 = createButton("Tree");
	b2.mousePressed(function(){
		changeType("Tree");
	});
	var b3 = createButton("Hilbert");
	b3.mousePressed(function(){
		changeType("Hilbert");
	});
	var b4 = createButton("Sierpinski");
	b4.mousePressed(function(){
		changeType("Sierpinski");
	});
	var b5 = createButton("Koch");
	b5.mousePressed(function(){
		changeType("Koch");
	});
	var b6 = createButton("Dragon");
	b6.mousePressed(function(){
		changeType("Dragon");
	});
	var b7 = createButton("Quadratic");
	b7.mousePressed(function(){
		changeType("Quadratic");
	});
	var b8 = createButton("32-Segment");
	b8.mousePressed(function(){
		changeType("32-Segment");
	});
	var b9 = createButton("Arrowhead");
	b9.mousePressed(function(){
		changeType("Arrowhead");
	});
	var b10 = createButton("Peano-Gosper");
	b10.mousePressed(function(){
		changeType("Peano-Gosper");
	});
	var b11 = createButton("Peano");
	b11.mousePressed(function(){
		changeType("Peano");
	});



	button.position(0, 19);
	b1.position(70, 19);
	b2.position(110, 19);
	b3.position(150, 19);
	b4.position(200, 19);
	b5.position(270, 19);
	b6.position(320, 19);
	b7.position(380, 19);
	b8.position(450, 19);
	b9.position(530, 19);
	b10.position(600, 19);
	b11.position(690, 19);
	createCanvas(w, h);
	type="Tree";
	angle = radians(rules[type]["angle"]) ;
	axiom = rules[type]["axiom"];
	sentence=axiom;
	len = rules[type]["len"];
	background(0);
//	createP(axiom);
	turtle();


}
function changeType(t){
	type=t;
	background(0);
	console.log(type);
	angle = radians(rules[type]["angle"]) ;
	axiom = rules[type]["axiom"];
	sentence=axiom;
	len = rules[type]["len"];
	turtle();
}
