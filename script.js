function sendOTP() {
  const mobile = document.getElementById('mobile').value;
  if (mobile.length === 10) {
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    document.getElementById('status').innerText = 'OTP sent to ' + mobile;
  } else {
    alert('Please enter a valid 10-digit mobile number');
  }
}

function verifyOTP() {
  const otp = document.getElementById('otp').value;
  if (otp === '123456') {
    document.getElementById('status').innerText = 'Login successful!';
  } else {
    document.getElementById('status').innerText = 'Invalid OTP. Try again.';
  }
}
function verifyOTP() {
  window.location.href = "home.html"; // Instantly redirect
}
