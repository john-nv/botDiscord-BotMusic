module.exports = {
    name: 'loop',
    aliases: ['lp'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn không tham gia kênh thoại!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bạn không ở trong cùng một kênh thoại !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Hiện không có nhạc nào đang phát!`);

        if (client.player.getQueue(message).repeatMode) {
            client.player.setRepeatMode(message, false);
            return message.channel.send(`${client.emotes.success} - Chế độ lặp lại **đã tắt**!`);
        } else {
            client.player.setRepeatMode(message, true);
            return message.channel.send(`${client.emotes.success} - Chế độ lặp lại **được bật** !`);
        };
    },
};