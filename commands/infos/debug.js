module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}debug',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - Robot kết nối trong **${client.voice.connections.size}** kênh !`);
    },
};