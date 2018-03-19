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
	
		var messageToSend = "";
	
		messageToSend += message.author + " sent a message";
		console.log(message.author + " sent a message with content: " + message.cleanContent);
		
		var messageContent = message.cleanContent;
		var final_emoji_text = "";
		var raw_binary = "";
		
		//Start at 1 to skip the prefix
		for(var i = 1; i < messageContent.length; i++){
			
			console.log(i + ": " + messageContent.charCodeAt(i).toString(2) + '(' + messageContent.charAt(i) + ')');
			
			raw_binary += messageContent.charCodeAt(i).toString(2) + " ";
			
			if(i % 5 == 0)
				raw_binary += '\n';
			
			//:smile:
			//:stuck_out_tongue:
			
		}
	
		for(var j = 0; j < raw_binary.length; j++){
			
			//Skip spaces
			if(raw_binary.charAt(j) == ' ')
				final_emoji_text += '\t';
			else if(raw_binary.charAt(j) == '\n')
				final_emoji_text += '\n';
			else if(raw_binary.charAt(j) == '0')
				final_emoji_text += ':smile:';
			else if(raw_binary.charAt(j) == '1')
				final_emoji_text += ':stuck_out_tongue:';
			
		}
	
		messageToSend = /* raw_binary + "\n\n\n" + */ final_emoji_text + "\n\n(" + message.cleanContent.substring(1) + ")";
	
		console.log("Final message length: " + messageToSend.length)
	
		channel.send(messageToSend);
	
	}
	
});

client.login(token);