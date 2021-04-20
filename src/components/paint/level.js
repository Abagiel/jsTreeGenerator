import leftSide from './leftLevel.js';
import rightSide from './rightLevel.js';

export default function level(ctx, params) {
	if (params.count > 0) {
		params.count--;

		const { coords, h, w, degStep, extra } = params;
		const leftCoords = leftSide(ctx, coords, w, h, degStep, params.count, extra);
		const rightCoords = rightSide(ctx, coords, w, h, degStep, params.count, extra);

		changeCoords(params, leftCoords, rightCoords);
		changeHeightAndWidth(params);

		level(ctx, params);
	}
}

function changeCoords(params, leftCoords, rightCoords) {
	params.left.coords = leftCoords;
	params.right.coords = rightCoords;
}

function changeHeightAndWidth(params) {
	if (params.w > 1) {
		params.w = params.w / 2;
	}
	if (params.h > 20) {
		params.h = params.h / 1.5;
	}
}