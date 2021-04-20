export const WIDTH = 800;
export const HEIGHT = 600;

export const DPI_WIDTH = WIDTH * 2;
export const DPI_HEIGHT = HEIGHT * 2;

export const INITIAL_DEGREE = 0;
export const INITIAL_DEGREE_STEP = 20;
export const INITIAL_BRANCH_HEIGHT = 400;
export const INITIAL_BRANCH_WIDTH = 30;
export const INITIAL_COUNT = 10;

export const TREE_BASE = {
	w: 120,
	h: 150,
	get x() {
		return DPI_WIDTH / 2 - this.w / 2
	},
	y: 0
}

export const LEAVES = {
	w: 20,
	h: 20,
	degStep: 30
}
