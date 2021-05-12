const fs = require('fs');
const discord = require('discord.js');

const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

client.player = new Player(client);
client.config = require('./config/bot.json');
client.emotes = require('./config/emojis.json');
client.filters = require('./config/filters.json');
client.commands = new discord.Collection();

const core = fs.readdirSync('./commands/core').filter(file => file.endsWith('.js'));
const infos = fs.readdirSync('./commands/infos').filter(file => file.endsWith('.js'));
const music = fs.readdirSync('./commands/music').filter(file => file.endsWith('.js'));

const infosv = fs.readdirSync('./commands/infosv').filter(file => file.endsWith('.js'));

client.once("ready",() =>{
    client.user.setPresence({
        activity: {
            name: "TGD"
            ,
            // type: "WATCHING"
            // type : "WATCHING"
            type : "LISTENING"
        }
        ,
        // status: "idle"
        status : "dnd"
    })
})

for (const file of core) {
    console.log(`Loading command ${file}`);
    const command = require(`./commands/core/${file}`);
    client.commands.set(command.name.toLowerCase(), command);
};

for (const file of infos) {
    console.log(`Loading command ${file}`);
    const command = require(`./commands/infos/${file}`);
    client.commands.set(command.name.toLowerCase(), command);
};

for (const file of music) {
    console.log(`Loading command ${file}`);
    const command = require(`./commands/music/${file}`);
    client.commands.set(command.name.toLowerCase(), command);
};

for (const file of infosv) {
    console.log(`Loading command ${file}`);
    const command = require(`./commands/infosv/${file}`);
    client.commands.set(command.name.toLowerCase(), command);
};

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Đang tải discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Đang tải discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

// bot say
client.on("message", msg=>{
    // if(!msg.author.bot) return;
    // if(!msg.guild) return;

    const argss = msg.content.split(' ');
    const cmd = argss.shift().toLowerCase();
    switch(cmd){
        case 'hs':{
            if(msg.deletable) msg.delete()
            msg.channel.send(argss.join(' '))
            break;
        }
        case 'havatar':
        case 'havt':    
        {
            const member = msg.mentions.members.first() || msg.guild.members.cache.get(argss[0]) || msg.member
            const URL = member.user.avatarURL({format: 'jpg', dynamic: true, size: 1024 })
            const avatarEmbed = new discord.MessageEmbed()
            .setImage(URL)
            .setURL(URL)
            .setTitle('Download hình ở đây !!! Nhớ cảm ơn Bot đấy >< ')
            msg.channel.send(avatarEmbed)
        }
    }
})

client.login(client.config.token_bot);