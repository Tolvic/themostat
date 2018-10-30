'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('initializes', function() {
    it('with a default temperature of 20', function() {
      expect(thermostat.currentTemperature).toEqual(20)
    });

    it('with a minimum temperature of 10', function() {
      expect(thermostat.MINIMUM_TEMPERATURE).toEqual(10)
    });

    it('with a maximum temperature of 25', function() {
      expect(thermostat.maximumTemperature).toEqual(25)
    });

    it('with power save mode on', function() {
      expect(thermostat.powerSaveMode).toEqual("Power Save Off")
    });
  });

  describe('increases the temperature', function() {
    it('by 1 degree', function() {
      thermostat.increase()
      expect(thermostat.currentTemperature).toEqual(21)
    });

    it('no further than the maximum temperature with power saving mode off', function() {
      thermostat.disablePowerSave()
      for (var i = 0; i < 12; i++) {
        thermostat.increase()
      }
      expect(function() {thermostat.increase()}).toThrow(new Error("Cannot increase temperature, maximum temperature reached."));
    });

    it('no further than the maximum temperature with power saving mode on', function() {
      thermostat.enablePowerSave()
      for (var i = 0; i < 5; i++) {
        thermostat.increase()
      }
      expect(function() {thermostat.increase()}).toThrow(new Error("Cannot increase temperature, maximum temperature reached."));
    });
  });

  describe('decreases the temperature', function() {
    it('by 1 degree', function() {
      thermostat.decrease()
      expect(thermostat.currentTemperature).toEqual(19)
    });

    it('no further than the minimum temperature', function() {
      for (var i = 0; i < 10; i++) {
        thermostat.decrease()
      }
      expect(function() {thermostat.decrease()}).toThrow(new Error("Cannot decrease temperature, minimum temperature reached."));
    });
  });

  describe('enables power saving mode', function() {
    it('and limits the maximum temperature to 25 degrees', function() {
      thermostat.enablePowerSave()
      expect(thermostat.maximumTemperature).toEqual(25)
      expect(thermostat.powerSaveMode).toEqual("Power Save Off")
    });
  });

  describe('disables power saving mode', function() {
    it('and sets the maximum temperature to 32 degrees', function() {
      thermostat.disablePowerSave()
      expect(thermostat.maximumTemperature).toEqual(32)
      expect(thermostat.powerSaveMode).toEqual("Power Save On")
    });

    it('increases the temperature, turns off power save mode, and then returns to power save mode', function() {
      for (var i = 0; i < 5; i++) {
        thermostat.increase()
      }
      thermostat.togglePowerSave()
      for (var i = 0; i < 7; i++) {
        thermostat.increase()
      }
      thermostat.togglePowerSave()
      expect(thermostat.currentTemperature).toEqual(25)
    });
  });

  describe('toggles power save mode', function () {
    it('reduces the maximum temperature from 32 to 25 degrees', function() {
      thermostat.disablePowerSave()
      thermostat.togglePowerSave()
      expect(thermostat.maximumTemperature).toEqual(25)
    });

    it('increases the maximum temperature from 25 to 32 degrees', function() {
      thermostat.togglePowerSave()
      expect(thermostat.maximumTemperature).toEqual(32)
    });
  });

  describe('resets the temperature', function() {
    it('to 20 degrees', function() {
      thermostat.reset()
      expect(thermostat.currentTemperature).toEqual(20)
    });
  });

  describe("reports it's energy usage", function() {
    it('as low-usage', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.decrease()
      }
      expect(thermostat.usage()).toEqual("Low-Usage")
    });

    it('as medium-usage', function() {
      expect(thermostat.usage()).toEqual("Medium-Usage")
    });

    it('as high-usage', function() {
      for (var i = 0; i < 5; i++) {
        thermostat.increase()
      }
      expect(thermostat.usage()).toEqual("High-Usage")
    });
  });
});
