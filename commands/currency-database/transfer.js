//require
const { Command } = require('discord.js-commando');

//export
module.exports = class hCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'name',
            aliases: ['aliases'],
            group: 'experimental',
            memberName: 'membername',
            description: 'description',
        })
    };

//code here

};
