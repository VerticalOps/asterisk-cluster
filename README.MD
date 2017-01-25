# Asterisk-Cluster

I made this node js package to listen to multiple asterisk instances for call events. This package is based off of the `asterisk.io` npm package, and the events module.

### Using the API
Here is an example of how to use the code API
~~~~
var ast = require('asterisk-cluster'),
    ami = ast([
        {
            host : 'asterisk-server-1',
            port : 5038,
            user : 'cron',
            pass : '1234'
        },
        {
            host : 'asterisk-server-2',
            port : 5038,
            user : 'cron',
            pass : '1234'
        }
    ])

ami.on('error', (err) => {
    throw err;
})

ami.on('eventAny', function(data){
    console.log(data.Event, data);
});
~~~~~

A complete list of all the events sent can be found here:
https://wiki.asterisk.org/wiki/display/AST/Asterisk+13+AMI+Events

### Adding A Source Afterwards
Use the eventemitter to add a new asterisk source to the cluster:
~~~~~
ami.emit('addAsteriskSource', {
            host : 'asterisk-server-3',
            port : 5038,
            user : 'cron',
            pass : '1234'
        })
~~~~~
### Requirements
This requires node.js 4 or greater, or a node runtime that supports ES6.

### Source Code Licence

Copyright (c) 2017 Adam Fowler; Vertical OPS LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.