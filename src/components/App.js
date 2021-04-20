import tree from './paint/tree.js';

import { WIDTH, HEIGHT, DPI_WIDTH, DPI_HEIGHT, TREE_BASE } from './consts.js';
import { setSizes } from './utils.js';
import { createParams } from './params.js';

export default function App(canvas) {
	setSizes(canvas, WIDTH, HEIGHT, DPI_WIDTH, DPI_HEIGHT);

	const ctx = canvas.getContext('2d');
	const params = createParams(false, TREE_BASE.h);

	tree(ctx, params);
}