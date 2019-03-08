$(document).ready(function() {
  var thermostat = new Thermostat()

  $('#arrow-up').on('click', function() {
    thermostat.up()
  })
})