var Thermostat = function(){
  this.currentTemperature = 20;
  this.maximumTemperature = 25;
  this.powerSaveMode = "Power Save Off"
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.LOW_ENERGY_USAGE_LIMIT = 18;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 25;
  this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
  this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
};

Thermostat.prototype.increase = function () {
  if (this.currentTemperature == this.maximumTemperature)
    throw new Error("Cannot increase temperature, maximum temperature reached.")
  this.currentTemperature++;
};

Thermostat.prototype.decrease = function () {
  if (this.currentTemperature == this.MINIMUM_TEMPERATURE)
    throw new Error("Cannot decrease temperature, minimum temperature reached.")
  this.currentTemperature--;
};

Thermostat.prototype.togglePowerSave = function () {
  if (this.maximumTemperature == this.MAXIMUM_TEMPERATURE_PSM_OFF) {
    this.enablePowerSave();
  } else if (this.maximumTemperature == this.MAXIMUM_TEMPERATURE_PSM_ON) {
    this.disablePowerSave();
  }
};

Thermostat.prototype.enablePowerSave = function () {
  if (this.currentTemperature > this.MAXIMUM_TEMPERATURE_PSM_ON) {
    this.currentTemperature = this.MAXIMUM_TEMPERATURE_PSM_ON;
  }
  this.maximumTemperature = this.MAXIMUM_TEMPERATURE_PSM_ON;
  this.powerSaveMode = "Power Save Off"
};

Thermostat.prototype.disablePowerSave = function () {
  this.maximumTemperature = this.MAXIMUM_TEMPERATURE_PSM_OFF;
  this.powerSaveMode = "Power Save On"
};

Thermostat.prototype.reset = function () {
  this.currentTemperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.usage = function () {
  if (this.currentTemperature < this.LOW_ENERGY_USAGE_LIMIT) {
    return "Low-Usage";
  } else if (this.currentTemperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return "Medium-Usage";
  } else {
    return "High-Usage";
  }
};
