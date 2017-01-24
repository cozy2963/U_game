var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max-min)) + min;
};


var Enemy = function(x, y) {
var randomSpeed = getRandomInt(50, getRandomInt(75, 250));
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  this.speed = getRandomInt(100, randomSpeed);
};

Enemy.prototype.collision = function() {
var enemyBox = {x: this.x, y: this.y, width: 50, height: 60};
var playerBox = {x: player.x, y: player.y, width: 50, height: 60};

  if (enemyBox.x < playerBox.x + playerBox.width &&
   enemyBox.x + enemyBox.width > playerBox.x &&
   enemyBox.y < playerBox.y + playerBox.height &&
   enemyBox.height + enemyBox.y > playerBox.y) {
     console.log('collision detected');{

       player.x = 200
       player.y = 400
       console.log('dead');
       window.alert('You died! Try again.')

 };
}
}


Enemy.prototype.update = function(dt) {
    this.x = this.x + (this.speed * dt);
      if(this.x > 505) {
        this.x = 0;

      }


};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    this.collision();
};


var Player = function() {
  this.sprite = 'images/char-pink-girl.png';
  this.x = 200;
  this.y = 400;
};

Player.prototype.update = function() {

};

Player.prototype.handleInput = function(key) {
  switch (key) {
  case "up":
    this.y = this.y - 30;
    if(this.y < -17)
      this.y = -16;
    break;
  case "down":
    this.y = this.y + 30;
    if(this.y > 400)
      this.y = 399;
    break;
  case "right":
    this.x = this.x + 30;
    if(this.x >400)
      this.x = 399;
    break;
    case "left":
      this.x = this.x - 30;
      if(this.x < 5)
        this.x = 6;
      break;
}

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    if(this.y <= 0) {
      this.x = 200;
      this.y = 400;
      window.alert("You Win!\nPlay again!");
    }
};

var allEnemies = [new Enemy(-500, 55), new Enemy(-200, 145), new Enemy(-510, 225)];
var player = new Player();

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
