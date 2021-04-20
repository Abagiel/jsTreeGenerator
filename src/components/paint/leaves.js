import rotateAndFillRect from './rotateAndFill.js';
import {randomGreen} from '../utils.js';
import { LEAVES } from '../consts.js';

const { w, h, degStep } = LEAVES;

export default function leaves(ctx, params) {
	params.coords.forEach(([side, x, y, deg]) => {
		if (side === 'left') {
			deg -= params.degStep;
		} else {
			deg += params.degStep;
		}

		ctx.beginPath();
		ctx.fillStyle = randomGreen();
		generateLeaves(ctx, x, y, w, h, deg, degStep, 7);
		ctx.closePath();
	});
}

function generateLeaves(ctx, x, y, w, h, deg, degStep, count) {
	w = Math.random() * w + 5;
	h = Math.random() * h + 10;

	for(let i = 0; i < count; i++) {
		if (i === 0) {
			rotateAndFillRect(ctx, x, y, w, h, deg + degStep * i);
		} else {
			rotateAndFillRect(ctx, x, y, w, h, deg + degStep * i);
			rotateAndFillRect(ctx, x, y, w, h, deg - degStep * i);
		}
	}
}