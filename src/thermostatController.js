$(document).ready(function() {

  $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=540378eb7428b089f0f49076bca7ef4b&units=metric", function(weatherData){
    $('#city-temp').text(`${weatherData.main.temp}°C`)
  })
  var thermostat = new Thermostat()

  function updateTempInView() {
    $('#temp-display').text(`${thermostat.temp}°C`)
  }

  $('#arrow-up').on('click', function() {
    thermostat.up(1)
    updateTempInView()
  })

  $('#city-opts').change(function() {
    var value = $(this).val()
  })
})
