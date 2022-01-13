/*
 * @Author: yxiawen
 * @Date: 2022-01-13 09:36:17
 * @LastEditTime: 2022-01-13 13:37:39
 * @LastEditors: yxiawen
 * @Description:
 * @FilePath: /blog/public/happynewyear/js/particle.js
 */

function Particle(x, y, hu, firework) {
  this.pos = createVector(x, y);
  this.firework = firework;
  this.lifespan = 255;
  this.hu = hu;
  if (this.firework) {
    if (window.innerHeight < 640) {
      this.vel = createVector(0, random(-16, -13));
    } else {
      this.vel = createVector(0, random(-17, -15));
    }
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2, 12));
  }
  this.acc = createVector(0, 0);
  this.applyForce = function (force) {
    this.acc.add(force);
  };
  this.update = function () {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };
  this.done = function () {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  };

  this.show = function () {
    colorMode(HSB);
    if (!this.firework) {
      strokeWeight(1);
      stroke(hu, 255, 255, this.lifespan);
    } else {
      strokeWeight(1);
      stroke(hu, 255, 255);
    }
    point(this.pos.x, this.pos.y);
  };
}
