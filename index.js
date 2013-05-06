var mavlink = require('./lib/mavlink_pixhawk_v1.0/mavlink')
  , net = require('net')
  _ = require('underscore')
  ;

// Configuration
var PORT = 9999;

// TCP Server
var server = net.createServer(function(c) {
  console.log('Server connected');
  c.on('end', function() {
    console.log('Server disconnected');
  });
  console.log('Server sending MavLink message');
  var request = new mavlink.messages.request_data_stream(
    1, 1, mavlink.MAV_DATA_STREAM_ALL, 1, 1);
  var p = new Buffer(request.pack()); 
  c.write(p);
});
server.listen(PORT, function() {
  console.log('Server bound');
});

// TCP Client
var client = net.createConnection(PORT);
var mavlinkParser = new MAVLink();
mavlinkParser.on('message', function(message) {
  console.log('Client received & parsed MavLink message:');
  _.each(message, function(val, key) {
    console.log('\t%s: %s', key, val);
  });
});
client.on('data', function(data) { 
  mavlinkParser.parseBuffer(data); 
});