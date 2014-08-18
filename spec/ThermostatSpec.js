describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should begin at 20 degrees", function() {
// set the initial temperature of the thermostat to 20 degrees    
    expect(thermostat.temperature).toEqual(20); 
  });

    it("should begin with PSM on", function() {
// set the initial temperature of the thermostat to 20 degrees    
    expect(thermostat.powerSavingMode).toBe(true) 
  });

  describe('maximum temperature', function() {

    it('is 25 degrees with PSM on', function(){
      expect(thermostat.maximumTemperature()).toEqual(25);
    })

     it('is 32 degrees with PSM off', function(){
      thermostat.powerSavingMode = false;
      expect(thermostat.maximumTemperature()).toEqual(32);        
    })
  });

  describe('increasing the temperature', function() {
    describe('PSM on', function() {
// increases as long as the temperature is below 25 degrees
      it('increases if < 25 degrees', function() {
// calls the increase temperature method on the thermostat
        thermostat.increaseTemperature();
// set the expectation of the thermostat temperature to be 21 degrees
        expect(thermostat.temperature).toEqual(21);
      })

      it('does not increase if the temperature is >= 25 degrees', function() {
        thermostat.temperature = 25;
// doesn't allow the temperature to be increased, if above 25
        thermostat.increaseTemperature();
        expect(thermostat.temperature).toEqual(25);
      })
    })
  })

  describe('increasing the temperature', function() {
    describe('PSM off', function() {
      beforeEach(function(){
        thermostat.powerSavingMode = false;
      });

        it('increases if < 32 degrees', function() {
          thermostat.temperature = 25;

          thermostat.increaseTemperature();
          expect(thermostat.temperature).toEqual(26);
        })

        it('does not increase if the temperature is >= 32 degrees', function() {
          thermostat.temperature = 32;
          thermostat.increaseTemperature();
          expect(thermostat.temperature).toEqual(32);
        })
      
    })
  })

  describe('decreasing the temperature', function() {
// decreases as long as the temperature is above 10 degrees//
    it('decreases if > 10 degrees', function() {
// calls the decrease temperature method on the thermostat//
      thermostat.decreaseTemperature();
// set the expectation of the thermostat temperature to be 19 degrees//
      expect(thermostat.temperature).toEqual(19);
    })

    it('does not decrease if the temperature is <= 10 degrees', function() {
      thermostat.temperature = 10;
// doesn't allow the temperature to be decreased, if below 10 degrees
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(10);
    })
  })

  describe('resetting temperature', function() {
    it('resets to 20 degrees', function() {
      thermostat.temperature = 10;
      thermostat.reset();

      expect(thermostat.temperature).toEqual(20);
    })
  })

  describe('energy usage', function() {
    it('is efficient if < 18', function() {
      thermostat.temperature = 15;
      expect(thermostat.energyUsage()).toEqual('efficient');
    })

    it('is average if >= 18 and < 25', function() {
      thermostat.temperature = 20;
      expect(thermostat.energyUsage()).toEqual('average');
    })

    it('is inefficient if >= 25', function() {
      thermostat.temperature = 26;
      expect(thermostat.energyUsage()).toEqual('inefficient');
    })
  })

});

