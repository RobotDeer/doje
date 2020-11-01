//require
const { Command } = require('discord.js-commando');

//export
module.exports = class hCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            aliases: ['pfp'],
            group: 'stable',
            memberName: 'avarar',
            description: 'Shows Avatar',
        })
    };

    //run
    run(message) {
        if (!message.mentions.users.size) {
			return message.channel.send(`Avatar: ${message.author.displayAvatarURL({ format: 'png', dynamic: true })}`);
		}
		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s Avatar: ${user.displayAvatarURL({ format: 'png', dynamic: true })}`;
		});
		message.channel.send(avatarList);
    }
};