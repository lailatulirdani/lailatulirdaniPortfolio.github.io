/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // You can add your logic here to handle the form submission
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Example: Outputting form data to console
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
});