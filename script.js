let chatBox = document.querySelector(".chatBox");
let prathamChatBox = document.getElementById("pratham");
let prathamContact = document.querySelector(".listHead h4");
let backButton = document.querySelector(".back");
let chatsTab = document.getElementById("chats");

// Initially hide the chatbox for Pratham Jain
prathamChatBox.style.display = "none";

// Click event for the Pratham Jain contact
prathamContact.addEventListener("click", function () {
  // Hide the main chat section
  chatBox.style.display = "none";

  // Show the chatbox for Pratham Jain
  prathamChatBox.style.display = "block";
});

// Click event for the "Back" button in the chatbox
backButton.addEventListener("click", function () {
  // Hide the chatbox for Pratham Jain
  prathamChatBox.style.display = "none";

  // Show the main chat section
  chatBox.style.display = "block";
});

// Click event for the "Chats" tab to go back to the main chat contacts display
chatsTab.addEventListener("click", function () {
  // Show the main chat section
  chatBox.style.display = "block";

  // Hide the chatbox for Pratham Jain
  prathamChatBox.style.display = "none";
});
