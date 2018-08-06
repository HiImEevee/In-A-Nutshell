let arr = [];
let r = 3;
let len;
let cnv, holder;
let color, offset;

function Background_setup(c, m) {
  holder = select('#canvas');
  cnv = createCanvas(holder.width, holder.height);
  cnv.style('z-index', '-500');
  cnv.parent('#canvas');
  color = c; offset = m;
  len = (holder.width/15 < 60)?holder.width/15:60;
  for(let i = 0; i < len; i++) {
    arr[i] = new Point(floor(random(width)), floor(random(height)), r);
  }
}

function Background_draw() {
  clear();
  for(let i = 0; i < arr.length; i++) {
    arr[i].show();
    arr[i].update();
    for(let j = i+1; j < arr.length; j++) {
      Conect(i, j);
    }
  }
}

function Conect(i, j) {
  let d = dist(arr[i].x, arr[i].y, arr[j].x, arr[j].y);
  if(d <= 150) {
    let value = map(d, 150, 0, 0, 50);
    stroke(color, value);
    strokeWeight(1);
    line(arr[i].x, arr[i].y, arr[j].x, arr[j].y);
  }
}

function Point(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.vel = createVector(random(-0.2, 0.2), random(-0.2, 0.2));
  this.show = function() {
    fill(color, 70);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
  }
  this.update = function() {
    if(this.x < -150) {
      this.x = width;
      this.y = height - this.x * offset;
    } else if(this.x > width) {
      this.x = -150;
    }
    if(this.y < -150) {
      this.y = height - this.x * offset;
    } else if(height - this.y < this.x * offset) {
      this.y = -150;
    }
    this.x += this.vel.x;
    this.y += this.vel.y;

  }
}
