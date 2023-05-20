const sketch = (p) => {
  p.setup = () => {
    const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent("p5-container");
  };

  p.draw = () => {
    p.background(200, 0, 200); // A solid purple color
  };
};

new p5(sketch);
