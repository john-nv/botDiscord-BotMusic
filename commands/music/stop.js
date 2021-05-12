module.exports = {
    name: 'stop',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn không tham gia kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bạn không ở trong cùng một kênh thoại !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Hiện không có nhạc nào đang phát !`);

        client.player.setRepeatMode(message, false);
        client.player.stop(message);

        message.channel.send(`${client.emotes.success} - Nhạc **đã dừng** vào server này !`);
    },
};