import rotateAndFillRect from './rotateAndFill.js';
import { updateCoords } from '../paramsOperations.js';
import { randomHeight, randomDegree } from '../utils.js';
import { INITIAL_COUNT } from '../consts.js'; 

export default function left(ctx, coords, w, h, degStep, count, extra) {
	const newCoords = [];

	ctx.beginPath();
	coords.forEach(([side, x, y, deg]) => {
		if (side === 'right') {
			deg = deg + degStep * 2;
		}

		let currentDeg = randomDegree(deg, count);
		let curHeight = randomHeight(h, w, count, INITIAL_COUNT);

		rotateAndFillRect(ctx, x, y, w, curHeight, currentDeg, true);
		updateCoords([newCoords, extra], 'right', count, w, curHeight, x, y, currentDeg, degStep);
	});
	ctx.closePath();


	return newCoords;
}