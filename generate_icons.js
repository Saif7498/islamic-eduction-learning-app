const fs = require('fs');
const { createCanvas } = require('canvas');

function createIcon(size, text) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#059669'; // emerald-600
  ctx.beginPath();
  ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2);
  ctx.fill();

  // Text
  ctx.fillStyle = '#ffffff';
  ctx.font = `bold ${size * 0.5}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, size/2, size/2);

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`public/pwa-${size}x${size}.png`, buffer);
}

if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

createIcon(192, 'Z');
createIcon(512, 'Z');
console.log('Icons generated');
