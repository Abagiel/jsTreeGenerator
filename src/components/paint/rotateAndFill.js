import { toRad } from '../utils.js';

export default function rotateAndFillRect(ctx, x1, y1, w, h, deg, style) {
	const x2 = x1;
	const y2 = y1;

	ctx.save();
	if (style) {
		ctx.lineWidth = 1;
		ctx.fillStyle = 'brown';
		ctx.strokeStyle = 'brown';
		ctx.lineJoin = 'round';
	}

	ctx.translate(x2, y2);
	ctx.rotate(toRad(deg))
	ctx.fillRect(w / -2, y1 - y2, w, h);
	ctx.rect(w / -2, y1 - y2, w, h);
	if (style) {
		ctx.stroke();
	}
	ctx.restore();
}

// ctx.rect(1000 + 5, 600, 100 - 10, 100 - 10);