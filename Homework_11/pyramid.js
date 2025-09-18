function drawPyramid(height) {
  for (let i = 1; i <= height; i++) {
    let line = "";

    for (let j = 0; j < height - i; j++) {
      line += " ";
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      line += "*";
    }

    console.log(line);
  }
}

drawPyramid(5);
