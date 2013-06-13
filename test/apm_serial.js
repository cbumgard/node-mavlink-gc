var mavlink = require('../lib/mavlink_ardupilotmega_v1.0/mavlink')
  , fs = require('fs')
  _ = require('underscore')
  ;

// Configuration
var usbDev = '/dev/ttyUSB0';

// TCP Client
var rs = fs.createReadStream(usbDev);
var mavlinkParser = new MAVLink();
mavlinkParser.on('message', function(message) {
  console.log('Client received & parsed MavLink message:');
  _.each(message, function(val, key) {
    console.log('\t%s: %s', key, val);
  });
});
rs.on('data', function(data) { 
  mavlinkParser.parseBuffer(data); 
});