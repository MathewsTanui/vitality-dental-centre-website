// Add an event listener to the form with the id "contact-form"
document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Create a new FormData object from the form
    const formData = new FormData(this);
  
    // Convert the FormData object to JSON format
    const formDataJSON = Object.fromEntries(formData.entries());
  
    // Call the sendEmail function with the form data
    sendEmail(formDataJSON);
  
    // Show a confirmation message to the user
    alert("Your message has been sent!");
  
    // Clear the form fields after submission
    this.reset();
  });