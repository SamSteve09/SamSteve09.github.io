// Define the routes and the corresponding HTML files
const routes = {
  "/quiz1" : "index.html",
  "/quiz1/hometown": "hometown.html",
  "/quiz1/profile": "profile.html",
  "/quiz1/food": "food.html",
  "/quiz1/tourist": "tourist.html",
};

// Route function to handle navigation
const route = (event) => {
  event = event || window.event;
  event.preventDefault(); // Prevent default anchor behavior

  // Update the browser's URL using pushState
  window.history.pushState({}, "", event.target.closest('a').href);
  handleLocation();
};

// Handle the location change and load the corresponding content
const handleLocation = async () => {
  const path = window.location.pathname; // Get the current path
  const route = routes[path] || null; // Find the corresponding route

  if (route) {
    // Fetch and load the HTML content for the route
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
  } else {
    // If no route is found, show a 404 error message
    //document.getElementById("main-page").innerHTML = "<h2>404 - Page Not Found</h2>";
  }
};

// Handle browser back/forward button navigation
window.onpopstate = handleLocation;

// Call handleLocation on initial page load
handleLocation();
