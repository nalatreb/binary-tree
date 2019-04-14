let tree;

function setup() {
  createCanvas(600, 400);
  background(51);
  tree = new Tree();

  for (let i = 0; i < 10; i++) {
    tree.addValue(floor(random(1, 100)));
  }

  tree.traverse();
}
