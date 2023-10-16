// Get the game element
const gameElement = document.querySelector('.game');

// Add click event listener to the game element
gameElement.addEventListener('click', event => {
  // Get the URL of the game
  const gameUrl = event.currentTarget.querySelector('a').href;
  // Redirect the user to the game URL
  window.location.href = gameUrl;
});