document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Here, you can perform your login validation
    if (username === "waranat" && password === "waranat") {
        //alert("Login successful!");
        // Redirect to another page or perform any other action
        localStorage.setItem("loggedIn", "true");
        window.location.href = "intro.html";
       
       // showLogoutButton();
   
    } else {
        document.getElementById("error-message").innerText = "Invalid username or password";
    }
});

// Function to handle logout
// document.getElementById("logout-btn").addEventListener("click", function() {
//  localStorage.removeItem("loggedIn");
//  location.reload(); // Refresh the page to show login form again
//});

function logout() {

  localStorage.removeItem("loggedIn");
  location.reload(); // Refresh the page to show login form again
  window.location.href = "index.html";
}

// Check if user is already logged in
//if (localStorage.getItem("loggedIn") === "true") {
 // showLogoutButton();
//}

// Function to show logout button
function showLogoutButton() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("logout-container").style.display = "block";
}



function viewResults1() {
  if (localStorage.getItem("loggedIn") === "true") {
   // Redirect to another page
   window.location.href = 'answer1.html';
  // Your code to show the answers
  // alert("Showing answers!");
  }
}

function viewResults2() {
  if (localStorage.getItem("loggedIn") === "true") {
  // Redirect to another page
  window.location.href = 'answer2.html';
 // Your code to show the answers
 //alert("Showing answers!");
  }
}

function viewResults3() {
  if (localStorage.getItem("loggedIn") === "true") {
  // Redirect to another page
  window.location.href = 'answer3.html';
 // Your code to show the answers
 //alert("Showing answers!");
  }
}

function gogo() {
  if (localStorage.getItem("loggedIn") === "true") {
  // Redirect to another page
  window.location.href = 'answer3.html';// 'home.html';
 // Your code to show the answers
 //alert("Showing answers!");
  } 
}

///document.getElementById('viewResults1').addEventListener('click', function() {
    // Redirect to another page
  ///  window.location.href = 'answer1.html';
    
    // Or trigger some event
    // For example, show an alert
   ///  alert('Button clicked!');
    
 /// });
  
// Function to show container
function showContainer() {
  document.getElementById("container").style.display = "block";
}

// Function to hide container
function hideContainer() {
  document.getElementById("container").style.display = "none";
}


 // Function to check if user is already logged in
function checkLogin() {
  if (localStorage.getItem("loggedIn") === "true") {
     // showLogoutButton();
      showContainer();
  } else {
      //document.getElementById("login-form").style.display = "block";
      hideContainer();
  }
}

 

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
  
// Check login status when the page loads
checkLogin();