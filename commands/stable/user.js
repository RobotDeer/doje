//require
const { Command } = require('discord.js-commando');

//export
module.exports = class hCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'user',
            aliases: ['account'],
            group: 'stable',
            memberName: 'user',
            description: 'Shows User Information',
        })
    };

    //run
    run(message) {
		message.reply(`User: ${message.author.username}\nUser ID: ${message.author.id}`);
    }
};