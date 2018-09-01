const { MessageEmbed } = require("discord.js");
module.exports = async function(message) {
	if (message.author.timers.sides !== null) return;
	if (message.guild.settings.sidesTimer === 'on' && message.author.settings.sidesTimer === 'on') {
		if (message.content.toLowerCase().startsWith(`#!mine`)|| message.content.toLowerCase().startsWith(`,mine`)|| message.content.toLowerCase().startsWith(`.mine`)) {
			const emoji = ["🥕","🍋","🥔","🐟"];
			var randomemoji = (`${emoji[~~(Math.random() * emoji.length)]}`);
			if (message.guild.settings.autoDelete !== `off`) message.delete(500);
			const timerEmbed = new MessageEmbed()
				.setAuthor(message.author.username, message.author.avatarURL())
				.setColor(0x00AE86)
				.setDescription(`React with 🚫 to cancel timer.`)
			message.channel.send({embed: timerEmbed}).then(mesg => {
				mesg.react("🚫");
				mesg.awaitReactions((reaction, user) => reaction.emoji.name === "🚫" && user.id == message.author.id, {time: 5000, max: 1}).then(reactions => {
					mesg.delete(5000);
					if (reactions.get("🚫") === undefined) {
						const embed = new MessageEmbed()
							.setDescription(`Your sides timer has been set!`)
							.setAuthor(message.author.username, message.author.avatarURL())
							.setColor(0x00AE86);
						message.channel.send({embed}).then(timerset => {
							timerset.delete(5000);
							message.author.timers.sides = setTimeout(() => {
								message.channel.send(`<@${message.author.id}> sides time! ${randomemoji}`).then(msg => {
								  	msg.delete(180000);
								});
								message.author.timers.sides = null;
							}, 312500);
						});
					} else {
						const embed1 = new MessageEmbed()
							.setDescription(`Timer Canceled`)
							.setAuthor(`${message.author.username}`)
							.setColor(`RED`)
						message.channel.send({embed: embed1}).then(timernotset => {
							timernotset.delete(5000);
						});
					}
				});
			});
		} 
	}
}     
