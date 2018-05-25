const canny = document.getElementById("canny");
let ctx = canny.getContext('2d');

let x = 50;
let y = 50;
let bun = document.createElement("IMG");
bun.setAttribute("src", "bun1.png");
bun.setAttribute("width", 600);
bun.setAttribute("height", 600);

function start() {
	const button = document.getElementById("startButton");
	button.setAttribute("class", "hide");
	ctx.drawImage(bun, x, y);
	
	document.addEventListener('keypress', function() {
		//bun.setAttribute("class", "hide");
		ctx.clearRectangle(x, y, 40, 40);
		x += 100;
		y += 100;
		ctx.drawImage(bun, x, y);
	});
}
