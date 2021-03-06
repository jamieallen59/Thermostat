JavaScript Thermostat
=========================

Have a look at the final version on Heroku: [JavaScript Thermostat](http://js-wall-thermostat.herokuapp.com/)

#### Challenge criteria:

Completion time 2-3 hours.

The challenge is to create a simple interface for a digital thermostat, like so:

![Thermostat](https://github.com/makersacademy/course/raw/master/images/thermostat.png)

Use the specifications below (hint: this could help you plan your Jasmine expectations).

Spec:

- Thermostat starts at 20 degrees
- You can increase the temp with the up button
- You can decrease the temp with the down button
- The minimum temperature is 10 degrees
- If powersaving mode is on, the maximum temperature is 25 degrees
- If powersaving mode is off, the maximum temperature is 32 degrees
- Power saving mode is default
- You can reset the temperature to 20 by hitting the reset button
- The thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red
- After every temperature change, the thermostat makes a POST request to localhost:4567/temperature_change, with the new temperature

##Final version
![](public/images/screenshot_3.png)

##Version 1
![](public/images/screenshot.png)

Technologies and methods used:
- Javascript and JQuery
- Tested in Jasmine
- Styled with HTML and CSS

### Take a look at the code
```sh
git clone git@github.com:jamieallen59/Thermostat.git
cd Thermostat
```

### Run the tests
```sh
open SpecRunner.html
```


