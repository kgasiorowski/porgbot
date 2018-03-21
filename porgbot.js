const auth = require('./auth.json');
const token = auth.token;

const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '^';
const EMOTE1 = '<:porg:411257738744692760>';
const EMOTE0 = '<:sadporg:411257697451769857>';

client.on('ready', () => {
    console.log('Connected.');
});

client.on('message', message => {
	
	var channel = message.channel;
	var messageContents = message.cleanContent;
	
	if(messageContents.substring(0, 1) == PREFIX){
	
		var messageToSend = "";
	
		messageToSend += message.author + " sent a message";
		console.log(message.author.username + " sent a message with content: " + message.cleanContent);
		
		var messageContent = message.cleanContent;
		var final_emoji_text = "";
		var raw_binary = "";
		
		for(var i = 1; i < messageContent.length; i++){
			
			console.log(i + ": " + messageContent.charCodeAt(i).toString(2) + '(' + messageContent.charAt(i) + ')');
			
			raw_binary += messageContent.charCodeAt(i).toString(2) + " ";
			
			if(i % 4 == 0)
				raw_binary += '\n';
			
		}
	
		for(var j = 0; j < raw_binary.length; j++){
			
			//Skip spaces
			if(raw_binary.charAt(j) == ' ')
				final_emoji_text += '\t';
			else if(raw_binary.charAt(j) == '\n'){
			
				channel.send(final_emoji_text);
				final_emoji_text = "";
				//final_emoji_text += '\n';
			
			}else if(raw_binary.charAt(j) == '0')
				final_emoji_text += EMOTE0;
			else if(raw_binary.charAt(j) == '1')
				final_emoji_text += EMOTE1;
			
		}
	
		channel.send(final_emoji_text);
	
		messageToSend = "(" + message.cleanContent.substring(1) + ")";
		channel.send(messageToSend);
	
	}
	
});

client.login(token);