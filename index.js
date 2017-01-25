var aio = require('asterisk.io'),
    events = require('events')

module.exports = (sources) => {
    var eventEmitter = new events.EventEmitter(),
        add = (config) => {
            var ami = aio.ami(config.host, config.port || 5038, config.user, config.password || config.pass);

            ami.on('error', function(err){
                eventEmitter.emit('error', err);
            });

            ami.on('eventAny', function(data){
                eventEmitter.emit(data.Event, data);
                eventEmitter.emit('eventAny', data)
            });

        }
    for(var x in sources)
        add(sources[x]);

    eventEmitter.on('addAsteriskSource', add);

    return eventEmitter;
}
 
