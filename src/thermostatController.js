var countryList = {
  'London': 'uk', 
  'New York': 'us', 
  'Moscow': 'ru', 
  'New Delhi': 'in', 
  'Tokyo': 'jp', 
  'San Francisco': 'us'
}

function weatherServiceUrl(city, country) {
  return `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=540378eb7428b089f0f49076bca7ef4b&units=metric`
}


$(document).ready(function() {
  function displayWeather({city='London', country='uk'}={}) {
    $.get(weatherServiceUrl(city, country), function(weatherData){
      $('#city-temp').text(`${weatherData.main.temp}°C`)
    })
  }
  displayWeather()

  var thermostat = new Thermostat()

  function updateTempInView() {
    $('#temp-display').text(`${thermostat.temp}°C`)
  }

  $('#arrow-up').on('click', function() {
    thermostat.up(1)
    updateTempInView()
  })

  $('#city-opts').change(function() {
    var city = $(this).val()
    country = countryList[city]
    displayWeather({city, country})
  })
})
