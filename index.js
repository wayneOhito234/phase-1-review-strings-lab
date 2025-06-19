// Step 1: Define the user
const currentUser = 'Grace Hopper';

// Step 2: Greeting with the user's name (with interpolation)
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Step 3: Excited greeting (uppercase version)
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Step 4: Short greeting with only the first letter of the user's name
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
