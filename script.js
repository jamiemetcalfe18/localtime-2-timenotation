function updateTime() {
  // Get the current local time
  var currentDateTime = new Date();

  // Extract the time components
  var hours = currentDateTime.getHours();
  var minutes = currentDateTime.getMinutes();
  var seconds = currentDateTime.getSeconds();

  // Format the time components
  var formattedTime = [
    ('0' + hours).slice(-2),  // Ensure two digits for hours
    ('0' + minutes).slice(-2),  // Ensure two digits for minutes
    ('0' + seconds).slice(-2)  // Ensure two digits for seconds
  ].join(':');

  // Update the time display on the web page
  var timeDisplay = document.getElementById('time-display');
  timeDisplay.textContent = formattedTime;
}

// Update the time every second
setInterval(updateTime, 1000);
