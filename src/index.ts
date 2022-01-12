import { Test } from './test/test';
import { inverse, Matrix } from 'ml-matrix';

console.log('Here is Hsr.js, welcome!!');
new Test().log();

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
console.log('context ', ctx);
ctx.fillRect(0, 0, 100, 100);

const A = new Matrix([[4, 7], [2, 6]]);
console.log(inverse(A));
