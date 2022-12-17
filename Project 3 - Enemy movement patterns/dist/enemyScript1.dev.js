"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** @type {HTMLCanvasElement} */
var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
var CANVAS_WIDTH = canvas.width = 500;
var CANVAS_HEIGHT = canvas.height = 1000;
var numberOfEnemys = 8;
var enemiesArray = []; // const enemyImage = new Image();
// enemyImage.src = './enemies/enemy1.png';

var gameFrame = 0; // enemy1 = {
//     x: 10,
//     y: 60,
//     width: 200,
//     height: 200,
// }

var Enemy =
/*#__PURE__*/
function () {
  function Enemy() {
    _classCallCheck(this, Enemy);

    this.image = new Image();
    this.image.src = './enemies/enemy1.png';
    this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }

  _createClass(Enemy, [{
    key: "update",
    value: function update() {
      this.x += Math.random() * 15 - 7.5;
      this.y += Math.random() * 5 - 2.5; //animate sprites

      if (gameFrame % this.flapSpeed === 0) {
        this.frame > 4 ? this.frame = 0 : this.frame++;
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      //ctx.strokeRect(this.x, this.y, this.width, this.height);
      ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
  }]);

  return Enemy;
}();

; // const enemy1 = new Enemy();

for (var i = 0; i < numberOfEnemys; i++) {
  enemiesArray.push(new Enemy());
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // enemy1.update();
  // enemy1.draw();

  enemiesArray.forEach(function (enemy) {
    enemy.update();
    enemy.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
//# sourceMappingURL=enemyScript1.dev.js.map
