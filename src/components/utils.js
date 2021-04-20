export function setSizes(target, w, h, dw, dh) {
	css(target, {width: w + 'px', height: h + 'px'});
	target.width = dw;
	target.height = dh;
}

export function css(target, css = {}) {
	Object.assign(target.style, css);
}

export function toRad(deg) {
	return deg * Math.PI / 180;
}

export function randomGreen() {
	const h = Math.floor(Math.random() * 20 + 140);
	const s = Math.floor(Math.random() * 30 + 40);
	const l = Math.floor(Math.random() * 20 + 40);

	return `hsl(${h}, ${s}%, ${l}%)`;
}

export function computeNewCoords(side, x, y, currentDeg, degStep, curHeight) {
	const num = Math.random() * 4 + 2;
	const newX = x - (Math.sin(toRad(currentDeg)) * curHeight);
	const newY = y + (Math.cos(toRad(Math.abs(currentDeg))) * curHeight);
	const xRandom = x - (Math.sin(toRad(currentDeg)) * curHeight) / num;
	const yRandom = y + (Math.cos(toRad(Math.abs(currentDeg))) * curHeight) / num;
	const newDeg = side === 'right' 
		? currentDeg - degStep 
		: currentDeg + degStep;

	return { newX, newY, newDeg, xRandom, yRandom };
}

export function pushTo(values, target) {
	target.push(values);
}

export function randomHeight(initHeight, width, count, initCount) {
	if (count === initCount) {
		return Math.random() * initHeight * 1.1 + initHeight * 0.1;
	}

	return Math.random() * initHeight / 2 + initHeight / 2;
}

export function randomDegree(initDegree, count) {
	if (count <= 1) return initDegree;

	return Math.random() * (initDegree / count) + initDegree;
}