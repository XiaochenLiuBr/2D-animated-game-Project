"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
var CANVAS_WIDTH = canvas.width = 800;
var CANVAS_HEIGHT = canvas.height = 700;
var gameSpeed = 5;
var backgroundLayer1 = new Image();
backgroundLayer1.src = './backgrounds/layer-1.png';
var backgroundLayer2 = new Image();
backgroundLayer2.src = './backgrounds/layer-2.png';
var backgroundLayer3 = new Image();
backgroundLayer3.src = './backgrounds/layer-3.png';
var backgroundLayer4 = new Image();
backgroundLayer4.src = './backgrounds/layer-4.png';
var backgroundLayer5 = new Image();
backgroundLayer5.src = './backgrounds/layer-5.png';
var slider = document.getElementById('slider');
slider.value = gameSpeed;
var showGameSpeed = document.getElementById('showGameSpeed');
showGameSpeed.innerHTML = gameSpeed;
slider.addEventListener('change', function (e) {
  gameSpeed = e.target.value;
  showGameSpeed.innerHTML = e.target.value;
}); // let x = 0;
// let x2 = 2400;

var Layer =
/*#__PURE__*/
function () {
  function Layer(image, speedModifier) {
    _classCallCheck(this, Layer);

    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    this.x2 = this.width;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
  }

  _createClass(Layer, [{
    key: "update",
    value: function update() {
      this.speed = gameSpeed * this.speedModifier;

      if (this.x <= -this.width) {
        this.x = this.width + this.x2 - this.speed;
      }

      if (this.x2 <= -this.width) {
        this.x2 = this.width + this.x - this.speed;
      }

      this.x = Math.floor(this.x - this.speed);
      this.x2 = Math.floor(this.x2 - this.speed);
    }
  }, {
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
  }]);

  return Layer;
}();

var layer1 = new Layer(backgroundLayer1, 0.2);
var layer2 = new Layer(backgroundLayer2, 0.4);
var layer3 = new Layer(backgroundLayer3, 0.6);
var layer4 = new Layer(backgroundLayer4, 0.8);
var layer5 = new Layer(backgroundLayer5, 1);
var gameObjects = [layer1, layer2, layer3, layer4, layer5];

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gameObjects.forEach(function (Object) {
    Object.update();
    Object.draw();
  }); // ctx.drawImage(backgroundLayer5, x, 0);
  // ctx.drawImage(backgroundLayer5, x2, 0);
  // if(x < -2400) x = 2400 + x2 - gameSpeed;
  // else x -= gameSpeed;
  // if(x2 < -2400) x2 = 2400 + x - gameSpeed;
  // else x2 -= gameSpeed;

  requestAnimationFrame(animate);
}

;
animate();
//# sourceMappingURL=script.dev.js.map
