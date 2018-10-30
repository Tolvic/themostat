var Thermostat = function(){
  this.currentTemperature = 20;
  this.minimumTemperature = 10;
  this.maximumTemperature = 25;
};

Thermostat.prototype.increase = function () {
  if (this.currentTemperature == this.maximumTemperature)
    throw new Error("Cannot increase temperature, maximum temperature reached.")
  this.currentTemperature++;
};

Thermostat.prototype.decrease = function () {
  if (this.currentTemperature == this.minimumTemperature)
    throw new Error("Cannot decrease temperature, minimum temperature reached.")
  this.currentTemperature--;
};

Thermostat.prototype.enablePowerSave = function () {
  this.maximumTemperature = 25;
};

Thermostat.prototype.disablePowerSave = function () {
  this.maximumTemperature = 32;
};

Thermostat.prototype.reset = function () {
  this.currentTemperature = 20;
};

Thermostat.prototype.usage = function () {
  if (this.currentTemperature < 18)
    return "Low-Usage";
  if (this.currentTemperature >= 18 && this.currentTemperature < 25)
    return "Medium-Usage";
  if (this.currentTemperature >= 25)
    return "High-Usage";
};
