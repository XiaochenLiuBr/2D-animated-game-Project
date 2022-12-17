"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** @type {HTMLCanvasElement} */
var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
var CANVAS_WIDTH = canvas.width = 500;
var CANVAS_HEIGHT = canvas.height = 1000;
var numberOfEnemys4 = 20;
var enemiesArray4 = [];
var gameFrame = 0;

var Enemy4 =
/*#__PURE__*/
function () {
  function Enemy4() {
    _classCallCheck(this, Enemy4);

    this.image = new Image();
    this.image.src = './enemies/enemy4.png';
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 213;
    this.spriteHeight = 213;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.newX = Math.random() * (canvas.width - this.width);
    this.newY = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.interval = Math.floor(Math.random() * 200 + 50);
  }

  _createClass(Enemy4, [{
    key: "update",
    value: function update() {
      if (gameFrame % this.interval === 0) {
        this.newX = Math.random() * (canvas.width - this.width);
        this.newY = Math.random() * (canvas.height - this.height);
      }

      var dx = this.x - this.newX;
      var dy = this.y - this.newY;
      this.x -= dx / 20;
      this.y -= dy / 20;
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

  return Enemy4;
}();

;

for (var i = 0; i < numberOfEnemys4; i++) {
  enemiesArray4.push(new Enemy4());
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemiesArray4.forEach(function (enemy) {
    enemy.update();
    enemy.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
//# sourceMappingURL=enemyScript4.dev.js.map
