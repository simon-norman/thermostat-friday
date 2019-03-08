$(document).ready(function() {
  var thermostat = new Thermostat()

  function updateTempInView() {
    $('#temp-display').text(`${thermostat.temp}°C`)
  }

  $('#arrow-up').on('click', function() {
    thermostat.up(1)
    updateTempInView()
  })
})