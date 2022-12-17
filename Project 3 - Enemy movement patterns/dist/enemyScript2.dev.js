"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// /** @type {HTMLCanvasElement} */
// const canvas = document.getElementById('canvas1');
// const ctx = canvas.getContext('2d');
// const CANVAS_WIDTH = canvas.width = 500;
// const CANVAS_HEIGHT = canvas.height = 1000;
var numberOfEnemys2 = 10;
var enemiesArray2 = []; // let gameFrame = 0;

var Enemy2 =
/*#__PURE__*/
function () {
  function Enemy2() {
    _classCallCheck(this, Enemy2);

    this.image = new Image();
    this.image.src = './enemies/enemy2.png';
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 266;
    this.spriteHeight = 188;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.angle = Math.random() * 2;
    this.angleSpeed = Math.random() * 0.2;
    this.curve = Math.random() * 7;
  }

  _createClass(Enemy2, [{
    key: "update",
    value: function update() {
      this.x -= this.speed;
      this.y += this.curve * Math.sin(this.angle);
      this.angle += this.angleSpeed;
      if (this.x + this.width < 0) this.x = canvas.width; //animate sprites

      if (gameFrame % this.flapSpeed === 0) {
        this.frame > 4 ? this.frame = 0 : this.frame++;
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
  }]);

  return Enemy2;
}();

;

for (var i = 0; i < numberOfEnemys2; i++) {
  enemiesArray2.push(new Enemy2());
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemiesArray.forEach(function (enemy) {
    enemy.update();
    enemy.draw();
  });
  enemiesArray2.forEach(function (enemy) {
    enemy.update();
    enemy.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
//# sourceMappingURL=enemyScript2.dev.js.map
