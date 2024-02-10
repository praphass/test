document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Here, you can perform your login validation
    if (username === "waranat" && password === "waranat") {
        alert("Login successful!");
        // Redirect to another page or perform any other action
        window.location.href = "intro.html";
    } else {
        document.getElementById("error-message").innerText = "Invalid username or password";
    }
});


function viewResults1() {
   // Redirect to another page
   window.location.href = 'answer1.html';
  // Your code to show the answers
  // alert("Showing answers!");
}

function viewResults2() {
  // Redirect to another page
  window.location.href = 'answer2.html';
 // Your code to show the answers
 //alert("Showing answers!");
}

function viewResults3() {
  // Redirect to another page
  window.location.href = 'answer3.html';
 // Your code to show the answers
 //alert("Showing answers!");
}

function gogo() {
  // Redirect to another page
  window.location.href = 'home.html';
 // Your code to show the answers
 //alert("Showing answers!");
}

///document.getElementById('viewResults1').addEventListener('click', function() {
    // Redirect to another page
  ///  window.location.href = 'answer1.html';
    
    // Or trigger some event
    // For example, show an alert
   ///  alert('Button clicked!');
    
 /// });
  
 

function sendMessage() {
    var userInput = document.getElementById("user-input");
    var message = userInput.value;
    if (message.trim() !== "") {
      var chatBox = document.getElementById("chat-box");
      var newMessage = document.createElement("div");
      newMessage.textContent = message;
      newMessage.classList.add("message");
      chatBox.appendChild(newMessage);
      userInput.value = "";
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }
  
