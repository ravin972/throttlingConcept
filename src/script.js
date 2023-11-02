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
    customDiv.style.overflow = "hidden"; // Set the overflow to hidden

    // var customImg = document.createElement("img");
    // customImg.setAttribute("src", "");
    // customImg.style.height = "100%"; // Set the height
    // customImg.style.width = "100%"; // Set the width
    // customImg.style.objectFit = "cover"; // Set the object fit to cover
    // // Append the image to the customDiv
    // customDiv.appendChild(customImg);

    // // Append the customDiv to the container with the class "container"
    // document.querySelector(".container").appendChild(customDiv);

    // Create an array of image URLs
    const imageUrls = [
      "https://c4.wallpaperflare.com/wallpaper/507/287/721/jujutsu-kaisen-gojo-satoru-satoru-gojo-anime-city-hd-wallpaper-preview.jpg",
      "https://wallpaperaccess.com/full/8287917.jpg",
      "https://wallpaperaccess.com/full/7797332.jpg",
    ];

    // Create and append multiple images to the customDiv
    for (const imageUrl of imageUrls) {
      var customImg = document.createElement("img");
      customImg.setAttribute("src", imageUrl);
      customImg.style.height = "100%"; // Set the height
      customImg.style.width = "100%"; // Set the width
      customImg.style.objectFit = "cover"; // Set the object fit to cover
      customImg.style.transform = "translateY(100%)";
      customDiv.appendChild(customImg);
    }

    // Append the customDiv to the container with the class "container"
    document.querySelector(".container").appendChild(customDiv);

    // Animation with GSAP
    gsap.to(customDiv.querySelectorAll("img"), {
      y: 0,
      ease: "power1.inOut", // Specify the easing as a string
      duration: 0.2,
    });

    gsap.to(customDiv.querySelectorAll("img"), {
      y: "100%",
      delay: 0.3,
      ease: "power2.inOut", // Specify the easing as a string
      duration: 0.3,
    });

    // Append it to the body or another container
    document.body.appendChild(customDiv);
    setTimeout(function () {
      customDiv.remove();
    }, 1000);
  }, 300)
);
