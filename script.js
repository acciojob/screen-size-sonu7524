//your JS code here. If required.
// define a function to get the width and height of the window
function getWindowSize() {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  // get the element with id "size" and update its text content with the current window size
  document.getElementById("sizeInfo").textContent = `Width: ${width} and Height: ${height}`;
}

// add a resize event listener to the window object
window.addEventListener('resize', getWindowSize);

// call the getWindowSize function once initially to get the initial size of the window and display it on the page
getWindowSize();
