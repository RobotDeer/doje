//require
const { Command } = require('discord.js-commando');

//export
module.exports = class hCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            aliases: ['ping'],
            group: 'stable',
            memberName: 'ping',
            description: 'Pings the bot',
        })
    };

    //run
    run(message) {
        return message.say('Ping')
        .then(newmsg => newmsg.edit(newmsg.createdTimestamp - message.createdTimestamp + 'ms'));
    }
};