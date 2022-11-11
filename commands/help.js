const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: i18n.__("help.description"),
  execute(message) {
    let commands = message.client.commands.array();

    let array = ['https://c.tenor.com/ZxdFzDJhoRkAAAAC/anime-destiny.gif', 'https://c.tenor.com/iEoMXaFdx_cAAAAC/takt-op-destiny-cosette.gif', 'https://c.tenor.com/WJfTf3bAGf4AAAAd/anime-destiny.gif', 'https://c.tenor.com/6a-CTWIzuNcAAAAd/takt-op-destiny.gif', 'https://c.tenor.com/iqY9LzWlb_8AAAAC/takt-op-destiny-destiny.gif', 'https://c.tenor.com/YvksoVQBeGQAAAAC/cosette-flex-takt-op-destiny.gif', 'https://c.tenor.com/3_yWz2IA9uwAAAAC/anime-destiny.gif', 'https://c.tenor.com/SBiW1sqOljQAAAAC/destiny-takt-op.gif', 'https://c.tenor.com/zPzInoishG4AAAAd/takt-op-destiny-destiny.gif', 'https://c.tenor.com/ZxdFzDJhoRkAAAAC/anime-destiny.gif', 'https://c.tenor.com/iEoMXaFdx_cAAAAC/takt-op-destiny-cosette.gif']
    /** Generating random number between 0 to length of array **/
    let index = Math.floor(Math.random() * array.length);

    let helpEmbed = new MessageEmbed()
      .setTitle(i18n.__mf("help.embedTitle", { botname: message.client.user.username }))
      .setDescription(i18n.__("help.embedDescription"))
      .setFooter(`Бот від ExLime#1111 та SudhanPlayz | Версія 3.1 | Sources from EvoBot`, 'https://cdn.discordapp.com/avatars/311482517272133632/a_f06dca7741788b448ee27f90cc23f452.gif?size=2048')
      .setImage(`${array[index]}`)
      .setColor("#d1081cs");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
