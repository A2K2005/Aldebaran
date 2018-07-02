// Command Developed with the help of Akashic Bearer#2305
const { RichEmbed } = require('discord.js');
exports.run = function(bot, message, args) {
    const embed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setTitle('New Bug Report')
        .setDescription(args.join(' '))
        .setFooter(`Channel : #${message.channel.name} [ID: ${message.channel.id}] • Server : ${message.guild.name} [ID: ${message.guild.id}]`)
    bot.guilds.get("461792163525689345").channels.get("463094132248805376").send({embed}).then(() => {
        message.channel.send(`Your bug report has been sent to the main server!`);
    });
}

exports.infos = {
    category: "General",
    description: "Sends a bug repory",
    usage: "\`&bugreport <bug report>\`",
    example: "\`&suggest ur bot doesnt work\`",
}