// function openMainPage() {
//     document.querySelector('.login-page').style.display = 'none';
//     document.querySelector('.main-page').style.display = 'block';
// }
function openLogin() {
    document.querySelector('.start-page').style.display = 'none';
    document.querySelector('.main-page').style.display = 'block';
}
function openSignUp() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.login-page').style.display = 'block';
}
function openLogSign() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.main-page').style.display = 'block';
}
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('menu-active');
    
    // Close the menu if it's already open
    if (menu.classList.contains('menu-active')) {
        document.body.addEventListener('click', closeMenuOnClick);
    } else {
        document.body.removeEventListener('click', closeMenuOnClick);
    }
}

function closeMenuOnClick(event) {
    const menu = document.querySelector('.menu');
    const menuButton = document.querySelector('.menu-icon');
    
    // Check if the click event is outside the menu and menu button
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        toggleMenu(); // Close the menu
    }
}
function sendOTP() {
    // Here, We can implement code to send OTP to the provided phone number.
    // We may use an API for sending SMS or any other method you prefer.
}

// function login() {
    // Here, you can implement code to verify the OTP and perform the login process.
    // You can compare the entered OTP with the one sent to the user's phone.
    //const enteredOTP = document.getElementById("otp").value;
    // Perform the OTP verification logic here.
    // If the OTP is valid, proceed with the login.
    // If the OTP is invalid, show an error message.
//}
// We need to integrate Google Maps using JavaScript API here.
function goBack() {
    document.querySelector('.main-page').style.display = 'none';
    document.querySelector('.start-page').style.display = 'block';
}
const exampleBtn = document.getElementById('example-btn');

exampleBtn.addEventListener('click', () => {
  window.open('booking.html', '_self');
});
