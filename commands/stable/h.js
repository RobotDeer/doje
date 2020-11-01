//require
const { Command } = require('discord.js-commando');

//export
module.exports = class hCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'h',
            aliases: ['h-response'],
            group: 'stable',
            memberName: 'h',
            description: 'h',
        })
    };

    //run
    run(message) {
        return message.say('h');
    }
};