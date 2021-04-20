import { computeParams } from './paramsOperations.js';

export function createParams(...args) {
	const { x, y, w, h, deg, degStep, count, countDef, side } = computeParams(...args);

	return {
		left: {
			coords: [[side, x, y, deg]]
		},
		right: {
			coords: [[side, x, y, deg]]
		},
		extra: [],

		w,
		h,
		degStep,
		count,

		get coords() {
			if (this.left.coords[0][0] === 'main') {
				return [['main', ...this.left.coords[0].slice(1)]];
			}
			return [...this.left.coords, ...this.right.coords];
		}
	} 
}
