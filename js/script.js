$(document).ready(function() {
  // Initially hide all dropdowns
  $(".dropdown-content").hide();

  // Toggle dropdown with sliding effect when clicking on the toggle button
  $(".toggle").click(function(e) {
      e.stopPropagation();

      // Close other dropdowns before toggling the clicked one
      $(".dropdown-content").not($(this).siblings(".dropdown-content")).slideUp();

      // Get the dropdown that was clicked
      const dropdown = $(this).siblings(".dropdown-content");

      // Slide toggle the current dropdown
      dropdown.stop(true, true).slideToggle();

      // Set the position of the dropdown (left or right)
      const position = $(this).data("position"); // Assume data-position attribute is used to set position

      if (position === "right") {
          dropdown.removeClass("left").addClass("right");
      } else {
          dropdown.removeClass("right").addClass("left");
      }
  });

  // Close dropdown if clicked outside
  $(document).click(function(event) {
      if (!$(event.target).closest(".dropdown, .toggle").length) {
          $(".dropdown-content").slideUp();
      }
  });

  // Close dropdown on scroll
  $(window).scroll(function() {
      $(".dropdown-content").slideUp();
  });
});
