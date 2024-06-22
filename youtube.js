// Sample comments
const comments = ["Great video!", "Thanks for sharing.", "Awesome content!"];

// Function to display comments
function displayComments() {
  const commentList = document.getElementById("comment-list");
  commentList.innerHTML = "";
  comments.forEach((comment) => {
    const li = document.createElement("li");
    li.classList.add("comment");
    li.textContent = comment;
    commentList.appendChild(li);
  });
}

// Event listener for submitting a comment
document
  .getElementById("comment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const commentInput = document.getElementById("comment-input");
    const newComment = commentInput.value.trim();
    if (newComment !== "") {
      comments.push(newComment);
      commentInput.value = "";
      displayComments();
    }
  });

// Initial display of comments
displayComments();
