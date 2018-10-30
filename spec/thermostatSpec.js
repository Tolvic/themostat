describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('initializes', function() {
    it('with a default temperature of 20', function() {
      expect(thermostat.currentTemperature).toEqual(20)
    });
  });
});
