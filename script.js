// script.js
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate credentials (you can customize this logic)
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Logged in successfully!');
        // Redirect to the dashboard or another page
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const signupUsername = document.getElementById('signup-username').value;
    const signupEmail = document.getElementById('signup-email').value;
    const signupPassword = document.getElementById('signup-password').value;

    // Store user data (you can hash the password before storing it)
    localStorage.setItem('username', signupUsername);
    localStorage.setItem('password', signupPassword);

    alert('Account created successfully! You can now log in.');
});
