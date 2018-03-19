const auth = require('./auth.json');
const token = auth.token;

const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '^';

client.on('ready', () => {
    console.log('Connected.');
});

client.on('message', message => {
	
	var channel = message.channel;
	var messageContents = message.cleanContent;
	
	if(messageContents.substring(0, 1) == PREFIX){
	
		channel.send(message.author + " sent a message");
		console.log(message.author + " sent a message with content: " + message.cleanContent);
		
		var messageContent = message.cleanContent;
		var messageToSend = "";
		
		for(var i = 0; i < messageContent.length; i++){
			
			messageToSend += messageContent.charCodeAt(i).toString(2) + " ";
			
			if(i % 4 == 0 && i != 0)
				messageToSend += "\n";
			
		}
	
		channel.send(messageToSend);
	
	}
	
});

client.login(token);