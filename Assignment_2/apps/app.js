function myFunction() {
  var password = document.getElementById('floatingPassword').value;
  if (password == 1234) {
    location.replace("clock-out.html")
  } else {
    alert("Please enter correct password")
  }
}

function aFunction() {
  var val = document.getElementById('text1').value;
  var val2 = document.getElementById('text2').value;
  document.getElementById('textOutput').innerHTML = val;
  document.getElementById('textOutput2').innerHTML = val2;
}

function save() {
  var text_box_one = document.getElementById('text1').value;
}
