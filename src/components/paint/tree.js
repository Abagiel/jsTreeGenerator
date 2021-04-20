import treeBase from './baseTree.js';
import treeLevel from './level.js';
import treeLeaves from './leaves.js';
import { createParams } from '../params.js';
import { TREE_BASE } from '../consts.js';

export default function tree(ctx, params) {
	const allParams = [params];

	treeBase(ctx, TREE_BASE);
	treeLevel(ctx, params);
	paintExtraBranches(ctx, params, allParams);
	paintLeaves(ctx, allParams);
}

function paintExtraBranches(ctx, params, allParams) {
	params.extra.forEach(([side, x, y, deg, w, h]) => {
		w = w / 2;
		h = h / 1.5;
		const param = createParams(x, y, w, h, deg, false, false, 'auto', side);
		allParams.push(param);
		treeLevel(ctx, param, true);
	});
}

function paintLeaves(ctx, allParams) {
	allParams.forEach(param => {
		treeLeaves(ctx, param);
	});
}