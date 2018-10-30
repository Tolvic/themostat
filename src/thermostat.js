var Thermostat = function(){
  this.currentTemperature = 20;
  this.minimumTemperature = 10;
  this.maximumTemperature = 32;
};

Thermostat.prototype.increase = function () {
  if (this.currentTemperature == this.maximumTemperature)
    throw new Error("Cannot increase temperature, maximum temperature reached.")
  this.currentTemperature++;
};

Thermostat.prototype.decrease = function () {
  this.currentTemperature--;
};

Thermostat.prototype.enablePowerSave = function () {
  this.maximumTemperature = 25;
};
