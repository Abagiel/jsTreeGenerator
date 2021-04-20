import { computeNewCoords, pushTo } from './utils.js';
import { DPI_WIDTH, INITIAL_DEGREE, INITIAL_DEGREE_STEP, INITIAL_BRANCH_HEIGHT, INITIAL_BRANCH_WIDTH, INITIAL_COUNT } from './consts.js';

export function computeParams(x, y, w, h, deg, degStep, count, countDef, side) {
	x = OR(x, DPI_WIDTH / 2);
	y = OR(y, 0);
	side = OR(side, 'main');
	deg = OR(deg, INITIAL_DEGREE);
	count = OR(getCount(w, countDef), INITIAL_COUNT);
	w = OR(w, INITIAL_BRANCH_WIDTH);
	h = OR(h, INITIAL_BRANCH_HEIGHT);
	degStep = OR(degStep, INITIAL_DEGREE_STEP);

	return { x, y, w, h, deg, degStep, count, side }
}

function getCount(width, countDef) {
	if (countDef === 'auto') {
		let w = width;
		let count = 1;
		while(w > 1) {
			w /= 2;
			count++;
		}

		return count;
	}
}

const OR = (value, defaultValue) => value || defaultValue;


export function updateCoords(targets, side, count, w, curHeight, ...args) {
	args.push(curHeight);
	const { newX, newY, newDeg, xRandom, yRandom } = computeNewCoords(side, ...args);
	pushTo([side, newX, newY, newDeg], targets[0]);

	if (count > 2 && w > 5) {
		pushTo([side, xRandom, yRandom, newDeg * randomDegMuli(), w, curHeight], targets[1]);
	}
}

function randomDegMuli() {
	const mult =  Math.ceil(Math.random() * 4);

	return Math.random < 0.5 ? -mult : mult;
}