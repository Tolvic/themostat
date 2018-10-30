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
      expect(thermostat.minimumTemperature).toEqual(10)
    });

    it('with a maximum temperature of 32', function() {
      expect(thermostat.maximumTemperature).toEqual(32)
    });
  });

  describe('increases the temperature', function() {
    it('by 1 degree', function() {
      thermostat.increase()
      expect(thermostat.currentTemperature).toEqual(21)
    });
  });

  describe('decreases the temperature', function() {
    it('by 1 degree', function() {
      thermostat.decrease()
      expect(thermostat.currentTemperature).toEqual(19)
    });
  });

  describe('enables saving mode', function() {
    it('and limits the maximum temperature to 25 degrees', function() {
      thermostat.enablePowerSave()
      expect(thermostat.maximumTemperature).toEqual(25)
    });
  });
});
