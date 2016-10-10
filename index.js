function clear(bot, config) {
  return function run(message, args) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      message.reply('You don\'t have permission for this command').then(reply => {
        setTimeout(() => reply.delete(), 2000);
      });
      return;
    }
    if (!args.length) return message.reply('Invalid arguments provided');
    if (isNaN(args[0])) return message.reply('Amount should be a number');

    const self = message.guild.member(bot.user);
    if (!self.hasPermission('MANAGE_MESSAGES')) bot.reply('I don\'t have permission to manage messages');

    message.channel.fetchMessages().then(messages => {
      messages.array().forEach((msg, i) => i <= args[0] && msg.deletable? msg.delete() : null);
      message.reply(`Deleted ${args[0]} messages`).then(reply => {
        setTimeout(() => reply.delete(), 2000);
      });
    }).catch(err => message.reply('An error occured while trying to fetch messages'));
  }
}

clear.command = 'clear';
clear.usage = 'clear <amount>';

module.exports = clear;
