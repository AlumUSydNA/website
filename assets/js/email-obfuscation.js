document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll('.email-link');

  elements.forEach(function(element) {
    // Get the Base64-encoded email from the data-contact attribute
    var base64Email = element.getAttribute('data-contact');

    if (base64Email) {
      // Decode the email
      var decodedEmail = atob(base64Email);

      // Set the href and innerHTML dynamically
      element.href = 'mailto:' + decodedEmail;
      element.innerHTML = decodedEmail;
    }
  });
});
