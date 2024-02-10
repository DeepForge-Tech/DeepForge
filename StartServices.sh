#!/bin/bash
cd users && npm install && nohup node server.js < /dev/null &
cd posts && npm install && nohup node server.js < /dev/null &
cd gateway && npm install && node server.js
