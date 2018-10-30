var Thermostat = function(currentTemperature = 20){
  this.currentTemperature = currentTemperature;
};

Thermostat.prototype.increase = function () {
  this.currentTemperature++;
};
