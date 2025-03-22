document.getElementById("startButton").addEventListener("click", function () {
  let timeInput = document.getElementById("timeInput").value;
  let timeDisplay = document.getElementById("timeDisplay");
  let time = parseInt(timeInput);
  clearInterval(window.timer);

  if (isNaN(time) || time <= 0) {
    alert("Vui lòng nhập số giây hợp lệ.");
    return;
  }

  window.timer = setInterval(function () {
    if (time > 0) {
      time--;
      timeDisplay.textContent = `Thời gian còn lại: ${time}`;
    } else {
      clearInterval(window.timer);
      timeDisplay.textContent = "Hết giờ!";
    }
  }, 1000);
});
