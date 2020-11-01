//require
const { Command } = require('discord.js-commando');

//export
module.exports = class hCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'server',
            aliases: ['guild'],
            group: 'stable',
            memberName: 'guild',
            description: 'Shows Server Information',
            guildOnly: true,
        })
    };

    //run
    run(message) {
		message.reply(`Server: ${message.guild.name}\nTotal members: ${message.guild.memberCount}
        \nRegion: ${message.guild.region}\nCreated: ${message.guild.createdAt}
        ${message.guild.iconURL({ size: 2048, dynamic: true })}`);
    }
};