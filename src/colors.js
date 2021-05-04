const min = (arr) => {
  return Math.min.apply(Math, arr)
}

const max = (arr) => {
  return Math.max.apply(Math, arr)
}

const randomColor = (mixColor) => {
  let max = 155;
  let offset = 6;
  let color = [
    Math.floor(Math.random() * max) + offset,
    Math.floor(Math.random() * max) + offset,
    Math.floor(Math.random() * max) + offset,
  ]
  if (mixColor) {
    color[0] = color[0] + mixColor[0] / 2;
    color[1] = color[1] + mixColor[1] / 2;
    color[2] = color[2] + mixColor[2] / 2;
  } 
  return color
}

const genColors = () => {
  let initColor = randomColor()

  let colors = [
    randomColor(initColor),
    randomColor(initColor),
    randomColor(initColor),
  ];

  colors[3] = [
    min([colors[0][0], colors[1][0], colors[2][0]]),
    min([colors[0][1], colors[1][1], colors[2][1]]),
    min([colors[0][2], colors[1][2], colors[2][2]]),
  ];

  colors[4] = [
    max([colors[0][0], colors[1][0], colors[2][0]]),
    max([colors[0][1], colors[1][1], colors[2][1]]),
    max([colors[0][2], colors[1][2], colors[2][2]]),
  ];

  return colors
}

export default genColors;

