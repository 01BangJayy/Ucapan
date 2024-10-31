// Get the form and the name input element
const form = document.querySelector('form');
const nameInput = document.getElementById('name');

// Get the birthday card and the name placeholder element
const birthdayCard = document.getElementById('birthday-card');
const namePlaceholder = document.getElementById('name-placeholder');

// Add an event listener to the form submit event
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the name input
  const name = nameInput.value;

  // Set the name placeholder text to the input value
  namePlaceholder.textContent = name;

  // Hide the form
  form.style.display = 'none';

  // Show the birthday card
  birthdayCard.style.display = 'block';
});

const hoverElement = document.getElementById('hover-card');

// Get the birthday message element
const birthdayMessage = document.getElementById('birthday-message');

// Array of birthday messages
const messages = [
  'Selamat ulang tahun, cinta! Semoga setiap harimu dipenuhi kebahagiaan seperti kamu membahagiakan aku.',
  'Happy birthday sayang! Semoga semua impianmu tercapai, aku akan selalu ada untuk mendukungmu.',
  'Selamat ulang tahun, semoga cinta kita terus tumbuh dan membuat kita semakin kuat bersama.',
  'Bertambah usia, bertambah cinta untukmu. Happy birthday, my love!',
  'Semoga ulang tahun ini membawa kebahagiaan yang melimpah dan cinta yang semakin erat di antara kita. Love you!'
];

// Function to generate a random message and set the text in the HTML element
function generateMessage() {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  birthdayMessage.textContent = randomMessage;
}

// Add event listeners to the element
hoverElement.addEventListener('mouseenter', generateMessage);
hoverElement.addEventListener('mouseleave', generateMessage);