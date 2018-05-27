const canny = document.getElementById("canny");
let ctx = canny.getContext('2d');
const button = document.getElementById("startButton");
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

let x = 50;
let y = 50;
let bun = document.createElement("IMG");
bun.setAttribute("src", "bun1.png");
bun.setAttribute("width", 600);
bun.setAttribute("height", 600);

function start() {
	button.setAttribute("class", "hide");
	menuButton.setAttribute("class", "");
	ctx.drawImage(bun, x, y);
	
	document.addEventListener('keypress', evt => {
		//bun.setAttribute("class", "hide");
		console.log(evt);
		if (evt.key === "s") {
			ctx.clearRect(x, y, 40, 40);
			y += 10;
			ctx.drawImage(bun, x, y);
		} else if (evt.key === "w") {
			ctx.clearRect(x, y, 40, 40);
			y -= 10;
			ctx.drawImage(bun, x, y);
		} else if (evt.key === "a") {
			ctx.clearRect(x, y, 40, 40);
			x -= 10;
			ctx.drawImage(bun, x, y);
		} else if (evt.key === "d") {
			ctx.clearRect(x, y, 40, 40);
			x += 10;
			ctx.drawImage(bun, x, y);
		}
	});
}

function openMenu() {
	menu.setAttribute("class", "");
	menuButton.setAttribute("class", "hide");
}

function closeMenu() {
	menu.setAttribute("class", "hide");
	menuButton.setAttribute("class", "");

}
