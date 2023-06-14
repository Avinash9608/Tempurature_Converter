function calculateTemp() {
  function celToFah(celsius) {
    var fahrenheit = Math.round(celsius * (9 / 5.0) + 32);
    return fahrenheit;
  }

  function fahToCel(fahrenheit) {
    var celsius = Math.round((fahrenheit - 32) * (5 / 9.0));
    return celsius;
  }

  var tempSelected = document.getElementById("temp_diff");
  var valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

  var numberTemp = document.getElementById("temp").value;

  var result;

  if (valueTemp == 1) {
    result = celToFah(numberTemp);
    document.getElementById("resultContainer").innerHTML =
      " " + result + "°Fahrenheit";
  } else {
    result = fahToCel(numberTemp);
    document.getElementById("resultContainer").innerHTML =
      " " + result + "°Celsius";
  }
}
