const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);MzkzODYwODYwNjEyODM3Mzc2.DR77Jg.HZvQ_MNe6WhJxbsYb__hrEyDEfU
