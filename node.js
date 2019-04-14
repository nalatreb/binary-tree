function Node(val, x, y) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.x = x;
  this.y = y;
  this.isLeft = false;
  this.isRoot = false;
}

Node.prototype.addNode = function(n) {
  if (n.value < this.value) {
    if (this.left === null) {
      this.left = n;
      this.left.isLeft = true;
      this.left.x = this.x - 50;
      this.left.y = this.y + 40;
    } else {
      this.left.addNode(n);
    }
  } else if (n.value > this.value) {
    if (this.right === null) {
      this.right = n;
      this.right.x = this.x + 50;
      this.right.y = this.y + 40;
    } else {
      this.right.addNode(n);
    }
  }
};

Node.prototype.visit = function(parent) {
  if (this.left !== null) {
    this.left.visit(this);
  }
  this.draw(parent);
  if (this.right !== null) {
    this.right.visit(this);
  }
};

Node.prototype.draw = function(parent) {
  console.log(this.value);
  fill(255);
  noStroke();
  textAlign(CENTER);
  text(this.value, this.x, this.y + 5);
  stroke(255);
  noFill();
  ellipse(this.x, this.y, 20, 20);
  if (this.isRoot) {
    return;
  }
  let selfXPosition = this.x - 7;
  let parentXPosition = parent.x + 7;
  if (this.isLeft) {
    selfXPosition = this.x + 7;
    if (parent.isLeft) {
      parentXPosition = parent.x - 7;
    } else {
      parentXPosition = parent.x - 7;
    }
  } else {
    if (parent.isLeft) {
      parentXPosition = parent.x + 7;
    } else {
      parentXPosition = parent.x + 7;
    }
  }
  line(parentXPosition, parent.y + 7, selfXPosition, this.y - 7);
};

Node.prototype.search = function(val) {
  if (this.value === val) {
    return this;
  } else if (val < this.value && this.left !== null) {
    return this.left.search(val);
  } else if (val > this.value && this.right !== null) {
    return this.right.search(val);
  }

  return null;
};
