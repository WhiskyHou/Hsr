import { Test } from './test/test';
// import eig from 'eigen';
// const eig = require('eigen');
import './bootscrip';

console.log('Here is Hsr.js, welcome!!');
new Test().log();

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
console.log('context ', ctx);
ctx.fillRect(0, 0, 100, 100);

eig.ready.then(() => {
  const m = new eig.Matrix([[1, 2], [3, 4]]);
  m.print('M');
  m.delete();
});
