const canny = document.getElementById("canny");
let ctx = canny.getContext('2d');
const button = document.getElementById("startButton");
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

window.requestAnimationFrame = window.requestAnimationFrame
                               || window.mozRequestAnimationFrame
                               || window.webkitRequestAnimationFrame
                               || window.msRequestAnimationFrame
                               || function(f){return setTimeout(f, 1000/60)};

window.cancelAnimationFrame = window.cancelAnimationFrame
                              || window.mozCancelAnimationFrame
                              || function(requestID){clearTimeout(requestID)};

let x = 50;
let y = 50;
let bun = document.createElement("IMG");
bun.setAttribute("src", "bun1.png");

/* Button actions */
function start() {
	button.setAttribute("class", "hide");
	menuButton.setAttribute("class", "");
	ctx.drawImage(bun, x, y);
	
	document.addEventListener('keypress', evt => {
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
	requestAnimationFrame(run);
}

function openMenu() {
	menu.setAttribute("class", "");
	menuButton.setAttribute("class", "hide");
}

function closeMenu() {
	menu.setAttribute("class", "hide");
	menuButton.setAttribute("class", "");
	let boo = particle("e.png");
	ctx.drawImage(boo, 50, 50);
}



/* new particles */
let e = new Image();
e.src = 'e.png';
let posi = new Image();
posi.src = 'posi.png';
let up = new Image();
up.src = 'up.png';
let down = new Image();
down.src = 'down.png';
let antiup = new Image();
antiup.src = 'antiup.png';
let antidown = new Image();
antidown.src = 'antidown.png';

function Particle () {
	this.x = Math.floor(Math.random() * 500);
	this.y = Math.floor(Math.random() * 500);  
	this.type = Math.floor(Math.random() * 5);
	if (this.type === 0) {
		this.img = e;
	} else if (this.type === 1) {
		this.img = posi;
	} else if (this.type === 2) {
		this.img = up;
	} else if (this.type === 3) {
		this.img = antiup;
	} else if (this.type === 4) {
		this.img = down;
	} else {
		this.img = antidown;
	}
	this.update = function() {
		ctx.clearRect(this.x, this.y, 10, 10);
		this.x += Math.floor((Math.random() * 5) - 2);
		this.y += Math.floor((Math.random() * 5) - 2);
		if (this.x < 0 || this.x > 500) {
			this.x = Math.floor(Math.random() * 500);
		}
		if (this.y < 0 || this.y > 500) {
				this.y = Math.floor(Math.random() * 500);
		}
		ctx.drawImage(this.img, this.x, this.y);
	};
}

let particles = [];
for (let i = 0; i < 20; i++) {
	particles.push(new Particle());
}

let requestFrame;
function run(timestamp) {
	for (let i = 0; i < 20; i++) {
		particles[i].update();
	}
	ctx.drawImage(bun, x, y);
	requestFrame = requestAnimationFrame(run);
}

/* bun bank */
let eNum = 0;
let upNum = 0;
let downNum = 0;
let proNum = 0;
let neuNum = 0;
let hNum = 0;
let heNum = 0;
let oNum = 0;
let cNum = 0;
let neNum = 0;
let naNum = 0;
let mNum = 0;
let sNum = 0;
let siNum = 0;

