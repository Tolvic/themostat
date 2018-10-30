var Thermostat = function(){
  this.currentTemperature = 20;
  this.minimumTemperature = 10;
};

Thermostat.prototype.increase = function () {
  this.currentTemperature++;
};

Thermostat.prototype.decrease = function () {
  this.currentTemperature--;
};
