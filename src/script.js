const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    if (now - prev > delay) {
      prev = now;

      return func(...args);
    }
  };
};

document.querySelector(".container").addEventListener(
  "mousemove",
  throttleFunction((e) => {
    // Create a new <div> element
    var customDiv = document.createElement("div");

    // Set attributes and properties
    customDiv.id = "myCustomDiv";
    customDiv.className = "custom-div";
    customDiv.style.top = e.clientY + "px";
    customDiv.style.left = e.clientX + "px";

    // Set CSS styles (height, width, position, and background color)
    customDiv.style.height = "150px"; // Set the height to 100 pixels
    customDiv.style.width = "120px"; // Set the width to 200 pixels
    customDiv.style.position = "absolute"; // Set the position to absolute
    customDiv.style.overflow  = "hidden"; // Set the overflow to hidden
    customDiv.style.backgroundColor = "lightblue"; // Set the background color to light blue

    // Append it to the body or another container
    document.body.appendChild(customDiv);
    setTimeout(function() {
      customDiv.remove();
    }, 1000);
  }, 300)
);
