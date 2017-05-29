var five = require("johnny-five");
var edison = require("edison-io");
var board = new five.Board({io:new edison()});

var awsIot = require('aws-iot-device-sdk');
var moment = require('moment');

board.on("ready", function() {
  var led    =  new five.Led(8);
  var sensor = new five.Sensor.Digital(2);

  sensor.on("change", function() {
    console.log(this.value);
    if (this.value == 0) {
      console.log("no person");
      led.off();
    } else {
      console.log("person here");
      led.on();
    } 
  });
});
