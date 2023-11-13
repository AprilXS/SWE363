const customEmitter = require('./eventEmitterModule');

// Function to simulate user login
function simulateUserLogin(userId) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${timestamp}: USER_${userId} logged in`);
}

// Listen for the "userLoggedIn" event
customEmitter.on('userLoggedIn', (userId) => {
  simulateUserLogin(userId);
});

// Listen for the "userLoggedOut" event (just for demonstration)
customEmitter.on('userLoggedOut', (userId) => {
  console.log(`USER_${userId} logged out`);
});

// Simulate users logging in every random number of seconds (0.1 to 2)
function simulateRandomUserLogins() {
  setInterval(() => {
    const userId = Math.floor(Math.random() * 1000) + 1;
    customEmitter.emit('userLoggedIn', userId);
  }, Math.random() * (2000 - 100) + 100); // Random time between 0.1 and 2 seconds
}

// Start the simulation
simulateRandomUserLogins();
