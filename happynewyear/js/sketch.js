/*
 * @Author: yxiawen
 * @Date: 2022-01-13 09:37:02
 * @LastEditTime: 2022-01-13 11:36:49
 * @LastEditors: yxiawen
 * @Description:
 * @FilePath: /blog/public/happynewyear/js/sketch.js
 */
var fireworks = [];
var gravity;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  if (random(1) < 0.5) {
    fireworks.push(new Firework());
  }
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
