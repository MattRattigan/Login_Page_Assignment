function startTime() {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var date = new Date();
  var day = date.getDay();
  var nameDay = weekdays[date.getDay()];
  var nameMonth = month[date.getMonth()];

  document.getElementById('time').innerHTML = nameDay + ' ' + nameMonth + ' ' + day + ':';
  clock();
  startTime2();
  clock2();
}

function clock() {
  var watch = new Date();
  document.getElementById('hours').innerHTML =
    watch.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    })
}

function startTime2() {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var date = new Date();
  var day = date.getDay();
  var nameDay = weekdays[date.getDay()];
  var nameMonth = month[date.getMonth()];
  var year = date.getFullYear();
  document.getElementById('time2').innerHTML = nameMonth +', '  + nameDay + ' ' + year;
}

function clock2() {
  var watch = new Date();
  document.getElementById('hours2').innerHTML =
    watch.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    })
}

function leaveFunc() {
  var val = "Called in Sick";
  document.getElementById("outStatus").innerHTML = val;
}

function leaveFunc2() {
  var val = "On Vacation";
  document.getElementById("outStatus").innerHTML = val;
}

function selectEmployee() {
  var val = document.getElementById("ex1").value;
  var newVal = "Employee:" + " " + val;
  document.getElementById("outStatusEmployee").innerHTML = newVal;
}

function selectEmployee2() {
  var val = document.getElementById("ex2").value;
  var newVal = "Employee:" + " " + val;
  document.getElementById("outStatusEmployee").innerHTML = newVal;
}

function selectEmployee3() {
  var val = document.getElementById("ex3").value;
  var newVal = "Employee:" + " " + val;
  document.getElementById("outStatusEmployee").innerHTML = newVal;
}

function selectLocation() {
  var val = document.getElementById("lx1").value;
  var newVal = "Location:" + " " + val;
  document.getElementById("outLocation").innerHTML = newVal;
}

function selectLocation2() {
  var val = document.getElementById("lx2").value;
  var newVal = "Location:" + " " + val;
  document.getElementById("outLocation").innerHTML = newVal;
}

function selectLocation3() {
  var val = document.getElementById("lx3").value;
  var newVal = "Location:" + " " + val;
  document.getElementById("outLocation").innerHTML = newVal;
}
