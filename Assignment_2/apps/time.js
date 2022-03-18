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
