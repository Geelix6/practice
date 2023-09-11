console.log("JavaScript is working!");

function generateRandomColor() {
  const hexCodes = "0123456789abcdef";
  let color = "";
  for (let _ = 0; _ < 6; _++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return "#" + color;
}

setInterval(() => (document.body.style.backgroundColor = generateRandomColor()), 1000);
