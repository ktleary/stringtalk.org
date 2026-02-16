let display = document.getElementById("display");
const getFontColor = (value) =>
  1 * value < 500 || 1 * value.split("a")[1] < 500 ? "#000000" : "#FFFFFF";

const makeColorCells = (color, subColors) => {
  return Object.keys(subColors).reduce(
    (all, subColor) =>
      (all += `
<div style="display: block; padding: 8px; margin: 8px; width: 200px; color: ${getFontColor(
        subColor
      )}; background: ${colors[color][subColor]};">
${subColor}: ${colors[color][subColor]}
</div>`),
    ""
  );
};

display.innerHTML = Object.keys(colors)
  .filter((color) => colorNames.indexOf(color) !== -1)
  .reduce(
    (all, color) =>
      (all += `
<div class='column' style='flex: 2; width: 250px; margin-bottom: 8px;'>
<div style="color:${color}; display: block">
  ${color}
</div>
${makeColorCells(color, colors[color])}
</div>`),
    ""
  );
