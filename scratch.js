const canny = document.getElementById("canny");
let ctx = canny.getContext('2d');
let e = new Image();
e.src = 'e.png';
let posi = new Image(30,30);
posi.src = 'posi.png';
let up = new Image(30,30);
up.src = 'up.png';
let down = new Image(30,30);
down.src = 'down.png';
let antiup = new Image(30,30);
antiup.src = 'antiup.png';
let antidown = new Image(30,30);
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
		this.x += Math.floor((Math.random() * 20) - 10);
		this.y += Math.floor((Math.random() * 20) - 10);
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
	for (let j = 0; j < 1000; j++) {
setTimeout(function(){
	for (let i = 0; i < 20; i++) {
		particles[i].update();
	} 
},1000);} 
console.log("moo");
