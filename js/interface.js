$(document).ready(function() {
  var thermostat = new Thermostat();

  function updateTemperature() {
    $('#thermostatCurrentTemperature').text(thermostat.currentTemperature);
  }

  function updatePowerSave() {
    $('#thermostatTogglePowerSave').text(thermostat.powerSaveMode);
  }

  // Start weather API

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#cityCurrentTemperature').text(data.main.temp);
  })

  $('#selectCity').submit(function(event) {
    event.preventDefault();
    var city = $('#currentCity').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#cityCurrentTemperature').text(data.main.temp);
    })
  })

  // End weather API

  // Start thermostat controller

  updateTemperature();
  updatePowerSave();

  $('#thermostatIncrease').on('click', (function() {
    thermostat.increase();
    updateTemperature();
  }))

  $('#thermostatDecrease').on('click', (function() {
    thermostat.decrease();
    updateTemperature();
  }))

  $('#thermostatReset').on('click', (function() {
    thermostat.reset();
    updateTemperature();
  }))

  $('#thermostatTogglePowerSave').on('click', (function() {
    thermostat.togglePowerSave();
    updateTemperature();
    updatePowerSave();
  }))

  // End thermostat controller
})
