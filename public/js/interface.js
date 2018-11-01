$(document).ready(function() {
  var thermostat = new Thermostat();

  // ************** Startup *******************

  startUp();

  // ************** End *******************

  // ************** Functions *******************

  function updateTemperature() {
    $('#thermostatCurrentTemperature').text(thermostat.currentTemperature);
  }

  function updatePowerSave() {
    $('#thermostatTogglePowerSave').text(thermostat.powerSaveMode);
  }

  function startUp() {
    $.ajax({
      type: 'GET',
      url: '/retrieve',
      dataType: 'json',
  	  success: function(data) {
    		$('#thermostatCurrentTemperature').text(data.temperature);
        thermostat.setTemperature(data.temperature);
        $('#thermostatTogglePowerSave').text(data.psm);
        thermostat.setPowerSaveMode(data.psm);
        $('#userCity').text(data.city);
        displayWeather($('#userCity').text());
      }
    });
  }

  function passParameters() {
    $.ajax({
      type: "POST",
      url: "/",
      data: {
        temperature: $('#thermostatCurrentTemperature').text(),
        psm: $('#thermostatTogglePowerSave').text(),
        city: $('#userCity').text()
      }
    });
  }

  // ************** End functions *******************

  // ************** Weather API *******************

  $('#selectCity').submit(function(event) {
    event.preventDefault();
    var city = $('#currentCity').val();
    displayWeather(city);
  })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#cityCurrentTemperature').text(data.main.temp);
      $('#userCity').text(data.name);
      passParameters();
    })
  }

  // ************** End weather API *******************

  // ************** Thermostat controller *******************

  $('#thermostatIncrease').on('click', (function() {
    try {
      thermostat.increase();
    }
    catch(err) {
      alert(err.message);
    }
    updateTemperature();
    passParameters();
  }))

  $('#thermostatDecrease').on('click', (function() {
    try {
      thermostat.decrease();
    }
    catch(err) {
      alert(err.message);
    }
    updateTemperature();
    passParameters();
  }))

  $('#thermostatReset').on('click', (function() {
    thermostat.reset();
    updateTemperature();
    passParameters();
  }))

  $('#thermostatTogglePowerSave').on('click', (function() {
    console.log(thermostat.currentTemperature);
    thermostat.togglePowerSave();
    console.log(thermostat.currentTemperature);
    updatePowerSave();
    updateTemperature();
    passParameters();
  }))

  // ************** End thermostat controller *******************
})
