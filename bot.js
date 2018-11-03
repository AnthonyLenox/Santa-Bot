var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

//Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
  colorize:true
});
logger.level = 'debug';

//Initialize Bot
var bot = new Discord.Client({
  token:auth.token,
  autorun:true
});
bot.on('ready',function(evt) {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + '-('+bot.id +')');

  //Read in list of participants

  //Check if assignment has already been completed
  //If no assignment, randomly assign participants for secret santa
  /* Check for it participant is given themself
     edge case for if last participant received themself
     While assigning remove already assigned from list, no duplicates
     
  */
  //Save file for assignments
});

//Reading messages
bot.on('message',function(user, userID, channelID, message, evt) {
  logger.info('Message Received');

  if(message.substring(0, 1) == '!'){
    logger.info('Command found');
    var args = message.substring(1).split(' ');
    var cmd = args[0];
    args = args.splice(1);
    logger.info('args' + args);
    logger.info('cmd' + cmd);
    
//Admin commands
    if(user == 'zegaryno'){
      switch(cmd){
        case 'remove':
          logger.info('Remove command');
          bot.sendMessage({
            to: channelID,
            message: ('removed ' + args)
          });
        break;
        case 'assign':
          logger.info('Assign command');
          bot.sendMessage({
            to: userID,
            message: 'A test direct message'
          });
        break;
      }
    }

//Commands
    switch(cmd){
      case 'hello':
        logger.info('Hello command');
        bot.sendMessage({
          to: channelID,
          message: 'Hello!'
         });
        break;
      case 'remove':

    }
  }
});
