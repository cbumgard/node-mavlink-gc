# node-mavlink-gc

Experimental node.js/mavlink integration for a ground-control module to communicate with px4 drones.

## Getting started

    npm install
    node index.js

You should get the following output:

    Server bound
    Server connected
    Server sending MavLink message
    Client received & parsed MavLink message:
      format: <HBBBB
      id: 66
      order_map: 1,2,3,0,4
      crc_extra: 148
      name: REQUEST_DATA_STREAM
      fieldnames: target_system,target_component,req_stream_id,req_message_rate,start_stop
      target_system: 1
      target_component: 1
      req_stream_id: 0
      req_message_rate: 1
      start_stop: 1
      msgbuf: �B-�
      payload: -�
      crc: 46381
      header: [object Object]

## Customized build for different hardware

First clone/fork the mavlink repo at https://github.com/mavlink/mavlink and follow the instructions in the https://github.com/mavlink/mavlink/blob/master/pymavlink/generator/javascript/README.MD file. You'll be building JavaScript/Node.js modules for specific hardware (e.g. pixhawk). Then you copy the needed implementation to this project's node_modules (or into lib/[implementation]/. Clearly this needs an improved process.