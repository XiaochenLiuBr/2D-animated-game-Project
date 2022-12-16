"use strict";

var playerState = "sit";
var dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function (e) {
  playerState = e.target.value;
});
var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
var CANVAS_WIDTH = canvas.width = 600;
var CANVAS_HEIGHT = canvas.height = 600;
var playerImage = new Image();
playerImage.src = 'shadow_dog.png';
var spriteWidth = 575;
var spriteHeight = 523;
var gameFrame = 0;
var staggerFrames = 5;
var spriteAnimations = [];
var animationStates = [{
  name: 'idle',
  frames: 7
}, {
  name: 'jump',
  frames: 7
}, {
  name: 'fall',
  frames: 7
}, {
  name: 'run',
  frames: 9
}, {
  name: 'dizzy',
  frames: 11
}, {
  name: 'sit',
  frames: 5
}, {
  name: 'roll',
  frames: 7
}, {
  name: 'bite',
  frames: 7
}, {
  name: 'ko',
  frames: 12
}, {
  name: 'gethit',
  frames: 4
}];
animationStates.forEach(function (state, index) {
  var frames = {
    loc: []
  };

  for (var j = 0; j < state.frames; j++) {
    var positionX = j * spriteWidth;
    var positionY = index * spriteHeight;
    frames.loc.push({
      x: positionX,
      y: positionY
    });
  }

  spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  var position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
  var frameX = spriteWidth * position;
  var frameY = spriteAnimations[playerState].loc[position].y;
  ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight); // if(gameFrame % staggerFrames == 0){
  //     if(frameX < 6) frameX++;
  //     else frameX = 0;
  // }

  gameFrame++;
  requestAnimationFrame(animate);
}

;
animate(); // spriteAnimations = [
//     "idle" = {
//         loc: [
//             {x: 0, y: 0},
//             {x: 575, y: 0},
//             {x: 1150, y: 0},
//             {x: 1725, y: 0},
//             {x: 2300, y: 0},
//             {x: 2875, y: 0},
//             {x: 3450, y: 0},
//         ]
//     },
//     "jump" = {
//     }
// ];
//# sourceMappingURL=script.dev.js.map
