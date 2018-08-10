const canny = document.getElementById("canny");
let ctx = canny.getContext('2d');
const button = document.getElementById("startButton");
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const tiles = document.getElementById("tiles"); 
let numParticles = 30; //initial number to create but actual number will vary 
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
let clock = document.getElementById("timer");

let play = true;
/* Button actions */
function start() {
	button.setAttribute("class", "hide");
	menuButton.setAttribute("class", "");
	clock.setAttribute("class", "");
	ctx.drawImage(bun, x, y);
	document.addEventListener('keypress', evt => {
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
	updateCounts();
	menu.setAttribute("class", "");
	tiles.setAttribute("class", "");
	menuButton.setAttribute("class", "hide");
	clock.setAttribute("class", "hide");
	play = false;
}

function closeMenu() {
	tiles.setAttribute("class", "hide");
	menu.setAttribute("class", "hide");
	menuButton.setAttribute("class", "");
	clock.setAttribute("class", "");
	play = true;
	run();
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
	this.type = Math.floor(Math.random() * 6);
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
for (let i = 0; i < numParticles; i++) {
	particles.push(new Particle());
}
let time = 60;
function run() {
	if (play) {
		for (let i = 0; i < particles.length; i++) {
			particles[i].update();
		}
		detectAnnihilation();
		detectCollection();
		ctx.drawImage(bun, x, y);
		time -= (1/60);
		clock.innerHTML = Math.floor(time);
		requestAnimationFrame(run);
	}
}

/* bun bank */
let bunBank = [];
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
let mgNum = 0;
let sNum = 0;
let siNum = 0;
let niNum = 0;
let phNum = 0;
let arNum = 0;
let caNum = 0;
let tiNum = 0;
let crNum = 0;
let feNum = 0;

/* annihilation */
function detectAnnihilation() {
	let toDelete = [];
	for (let i = 0; i < particles.length; i++) {
		for (let j = 0; j < particles.length; j++) {
			if (Math.abs(particles[i].x - particles[j].x) < 10 && 
			Math.abs(particles[i].y - particles[j].y) < 10) {
				if (i !== j) {
					if ((particles[i].type === 0 && 
						particles[j].type === 1) || 
						(particles[i].type === 1 && 
							particles[j].type === 0) || 
						(particles[i].type === 2 && 
							particles[j].type === 3) || 
						(particles[i].type === 3 && 
							particles[j].type === 2) || 
						(particles[i].type === 4 && 
							particles[j].type === 5) || 
						(particles[i].type === 5 && 
							particles[j].type === 4)) {
						toDelete.push(particles[i]);
					}
				}
			}
		}	
	}
	for (let i = 0; i < toDelete.length; i++) {
			ctx.clearRect(toDelete[i].x, toDelete[i].y, 10, 10);
			particles.splice(particles.indexOf(toDelete[i]),1);
	}
}

function detectCollection() {
	let toDelete = [];
	for (let i = 0; i < particles.length; i++) {
		if ((particles[i].x - x) < 20 && 
			(particles[i].x - x) > 0 &&
			(particles[i].y - y) < 20 &&
			(particles[i].y - y) > 0) {
			toDelete.push(particles[i]);
		}
	}
	for (let i = 0; i < toDelete.length; i++) {
		ctx.clearRect(toDelete[i].x, toDelete[i].y, 10, 10);
		if (toDelete[i].type === 0) {
			eNum++;
		} else if (toDelete[i].type === 1) {
			eNum--;
		} else if (toDelete[i].type === 2) {
			upNum++;
		} else if (toDelete[i].type === 3) {
			upNum--;
		} else if (toDelete[i].type === 4) {
			downNum++;
		} else {
			downNum--;
		}
		particles.splice(particles.indexOf(toDelete[i]),1);
	}
}

/* check bun bank to see what can be built */
function canBuildP() {
	if (upNum >= 2 && downNum >= 1) {
		return true;
	}  
	return false;
}

function canBuildN() {
	if (upNum >= 1 && downNum >= 2) {
		return true;
	}
	return false;
}

function canBuildH() {
	if (proNum > 0 && neuNum > 0) {
		return true;
	}
	return false;
}

function canBuildHe() {
	if (hNum >= 4) {
		return true;
	}
	return false;
}

function canBuildC() {
	if (heNum >= 3) {
		return true;
	}
	return false;
}

function canBuildO() {
	if (cNum > 0 && heNum > 0) {
		return true;
	}
	return false;
}

function canBuildNe() {
	if (oNum > 0 && heNum > 0) {
		return 1;
	} else if (cNum >= 2) {
		return 2;
	}
	return false;
}

function canBuildNa() {
	if (cNum > 2) {
		return true;
	}
	return false;
}

function canBuildMg() {
	if (neNum > 0 && heNum > 0) {
		return 1;
	} else if (oNum >= 2) {
		return 2;
	} else if (cNum >= 2) {
		return 3;
	}
	return false;
}

function canBuildSi() {
	if (mgNum > 0 && heNum > 0) {
		return 1;
	} else if (cNum > 0 && oNum > 0) {
		return 2;
	}
	return false;
}

function canBuildPh() {
	if (oNum >= 2) {
		return true;
	}
	return false;
}

function canBuildS() {
	if (siNum > 0 && heNum > 0) {
		return 1;
	} else if (oNum >= 2) {
		return 2;
	} 
	return false;
}

function canBuildAr() {
	if (sNum > 0 && heNum > 0) {
		return true;
	} 
	return false;
}

function canBuildCa() {
	if (arNum > 0 && heNum > 0) {
		return true;
	}
	return false;
}

function canBuildTi() {
	if (caNum > 0 && heNum > 0) {
		return true;
	}
	return false;
}

function canBuildCr() {
	if (tiNum > 0 && heNum > 0) {
		return true;
	} 
	return false;
}

function canBuildFe() {
	if (crNum > 0 && heNum > 0) {
		return 1;
	} else if (siNum >= 2) {
		return 2;
	}
	return false;
}

function canBuildNi() {
	if (feNum > 0 && heNum > 0) {
		return true;
	}
	return false;
}

/* changing the counts on screen */
function updateCounts() {
	document.getElementById("eNum").innerHTML = eNum;
	if (eNum < 1) {
		document.getElementById("e").setAttribute("class", "hide");
	} else {
		document.getElementById("e").setAttribute("class", "");
	}
	document.getElementById("upNum").innerHTML = upNum;
	if (upNum < 1) {
		document.getElementById("up").setAttribute("class", "hide");
	} else {
		document.getElementById("up").setAttribute("class", "");
	}
	document.getElementById("downNum").innerHTML = downNum;
	if (downNum < 1) {
		document.getElementById("down").setAttribute("class", "hide");
	} else {
		document.getElementById("down").setAttribute("class", "");
	}
	pro = document.getElementById("p");
	document.getElementById("pNum").innerHTML = proNum;
	if (pNum < 1 && !canBuildP()) {
		pro.setAttribute("class", "hide");
	} else if (canBuildP()){
		pro.onmouseover = function() {
    		this.style.backgroundColor = "blue";
		}
	} else {
		pro.onmouseover = function() 
		{
			this.style.backgroundColor = "yellow";
		}
	}

	document.getElementById("neuNum").innerHTML = neuNum;
	document.getElementById("hNum").innerHTML = hNum;
	document.getElementById("heNum").innerHTML = heNum;
	document.getElementById("oNum").innerHTML = oNum;
	document.getElementById("cNum").innerHTML = cNum;
	document.getElementById("neNum").innerHTML = neNum;
	document.getElementById("naNum").innerHTML = naNum;
	document.getElementById("mgNum").innerHTML = mgNum;
	document.getElementById("sNum").innerHTML = sNum;
	document.getElementById("siNum").innerHTML = siNum;
	document.getElementById("niNum").innerHTML = niNum;
	document.getElementById("phNum").innerHTML = phNum;
	document.getElementById("arNum").innerHTML = arNum;
	document.getElementById("caNum").innerHTML = caNum;
	document.getElementById("tiNum").innerHTML = tiNum;
	document.getElementById("crNum").innerHTML = crNum;
	document.getElementById("feNum").innerHTML = feNum;
}

/*all the build functions!!*/
function buildp() {
	if (canBuildP()) {
		proNum++;
		upNum -= 2;
		downNum--;
		updateCounts();
	}
}

function buildN() {
	if(canBuildN()) {
		neuNum++;
		upNum++;
		downNum -= 2;
		updateCounts();
	}
}

function buildH() {
	if(canBuildH()) {
		hNum++;
		
	}
}

function buildHe() {
	if(canBuildHe()) {
		heNum++;
		hNum -= 2;
		updateCounts();
	}
}

function buildC() {
	if (canBuildC()) {
		cNum++;
		heNum -= 3;
		updateCounts();
	}
}

function buildO() {
	if (canBuildO()) {
		oNum++;
		heNum--;
		cNum--;
		updateCounts();
	}
}

function buildNe() {
	if (canBuildNe() === 1) {
		neNum++;
		heNum--;
		oNum--;
		updateCounts();
	} else if (canBuildNe() === 2) {
		neNum++;
		cNum -= 2;
		updateCounts();
	} 
}

function buildNa() {
	if (canBuildNa()) {
		naNum++;
		hNum++;
		cNum -= 2;
		updateCounts();
	}
}

function buildMg() {
	if (canBuildMg() === 1) {
		mgNum++;
		he--;
		neNum--;
		updateCounts();
	} else if (canBuildMg() === 2) {
		mgNum++;
		oNum -= 2;
		heNum += 2;
		updateCounts();
	} else if (canBuildMg() === 3) {
		mgNum++;
		cNum -= 2;
		updateCounts();
	}
}

function buildSi() {
	if (canBuildSi() === 1) {
		siNum++;
		heNum--;
		mgNum--;
		updateCounts();
	} else if (canBuildSi() === 2) {
		siNum++;
		cNum--;
		oNum--;
		updateCounts();
	}
}

function buildPh() {
	if (canBuildPh()) {
		phNum++;
		oNum -= 2;
		hNum++;
		updateCounts();
	}
}

function buildS() {
	if (canBuildS() === 1) {
		sNum++;
		heNum--;
		siNum--;
		updateCounts();
	} else if (canBuildS() === 2) {
		sNum++;
		oNum -= 2;
		updateCounts();
	}
}

function buildAr() {
	if (canBuildAr()) {
		arNum++;
		sNum--;
		heNum--;
		updateCounts();
	}
}

function buildCa() {
	if (canBuildCa()) {
		caNum++;
		arNum--;
		heNum--;
		updateCounts();
	}
}

function buildTi() {
	if (canBuildTi()) {
		tiNum++;
		caNum--;
		heNum--;
		updateCounts();
	}
}

function buildCr() {
	if (canBuildCr()) {
		crNum++;
		tiNum--;
		heNum--;
		updateCounts();
	}
}

function buildFe() {
	if (canBuildFe() === 1) {
		feNum++;
		heNum--;
		crNum--;
		updateCounts();
	} else if (canBuildFe() === 2) {
		feNum++;
		siNum -= 2;
		updateCounts();
	}
}

function buildNi() {
	if (canBuildNi()) {
		niNum++;
		feNum--;
		heNum--;
		updateCounts();
	}
}
