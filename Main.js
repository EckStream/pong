var Canvas = document.getElementById("pong");
var ctx = Canvas.getContext("2d");

var width = Canvas.width;
var height = Canvas.height;

// var x = 200;
// var y = 200;

var r1 = new Rectangle(400,400,100,100);
var r2 = new Rectangle(200,200,100,100);

setInterval(main, 1000/60); // main-Methode alle 1000/60 ms aufrufen

//Implementation der Tastatureingabe
var input = new Input();	// Objekt der Klasse Input wird erzeugt!

function addEvent(name, func){
	if (navigator.appName == "Microsoft Internet Explorer"){
		attachEvent("on" + name, func);
	}else{
		addEventListener(name, func); 
	}
}

addEvent("keydown", function(event) {  input.set(event, true); }  );
addEvent("keyup", function(event) {  input.set(event, false); }  );

function main(){
	clear();
	if(input.d){
		r1.x++;
	}
	if(input.a){
		r1.x--;
	}
	if(input.w){
		r1.y--;
	}
	if(input.s){
		r1.y++;
	}
	if(r1.intersects(r2)){
		ctx.fillStyle = "#FFFFFF";
		ctx.fillText("Intersection!!",100,100);
	}

	r1.draw("#ff0000");
	r2.draw("#00ff00");
}

function clear(){
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,width, height);
}



