document.addEventListener("DOMContentLoaded", function () {
  // Show the modal when the page loads
  const modal = document.getElementById("myModal");
  const closeModal = document.getElementById("closeModal");
  
  // Show modal on page load
  modal.style.display = "block";

  // Close modal when clicking on the close button
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking anywhere outside of it
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  

  // Add functionality to all buttons 
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(button => {
    button.addEventListener("click", function() {
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Select all buttons with the class 'join-now'
  const joinNowButtons = document.querySelectorAll('.join-now');

  // Add click event listener to each button
  joinNowButtons.forEach(function(button) {
    button.addEventListener('click', function () {
      // Redirect to the join form page
      window.location.href = 'html/join-form.html';
    });
  });
});

document.getElementById("bookClassBtn").addEventListener("click", function() {
  window.location.href = "html/book-a-class.html"; // اسم الصفحة اللي فيها الفورم
});







