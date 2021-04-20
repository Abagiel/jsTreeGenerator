export default function baseTree(ctx, {x, y, w, h}) {
	const strokeW = w / 2;

	ctx.beginPath();
	ctx.fillStyle = 'brown';
	ctx.strokeStyle = 'brown';
	ctx.lineJoin = 'round';
	ctx.lineWidth = 10;
	ctx.fillRect(x, y, w, h);
	ctx.rect(x, y, w, h);
	ctx.stroke();
	ctx.closePath();
}