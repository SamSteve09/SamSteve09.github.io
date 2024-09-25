$(document).ready(function() {
  function loadContent(page) {
      $("#content").load(page + ".html", function(response, status, xhr) {
          if (status === "error") {
              $("#content").html("<h2>Error loading page: " + xhr.status + " " + xhr.statusText + "</h2>");
          }
      });
  }

  // Load content based on URL path
  const path = window.location.pathname.split("/").pop(); // Get the last part of the URL
  loadContent(path || 'home'); // Default to home if no path is provided

  // Handle clicks on navigation links
  $('nav a').on('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      const target = $(this).attr('href').substring(1); // Get target from href
      history.pushState(null, '', `/${target}`); // Update URL without reloading
      loadContent(target); // Load the selected content
  });

  // Handle back/forward navigation
  window.onpopstate = function() {
      const path = window.location.pathname.split("/").pop();
      loadContent(path || 'home'); // Reload content based on the URL
  };
});

