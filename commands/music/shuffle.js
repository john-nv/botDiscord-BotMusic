module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn không tham gia kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bạn không ở trong cùng một kênh thoại !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Hiện không có nhạc nào đang phát !`);

        client.player.shuffle(message);

        return message.channel.send(`${client.emotes.success} - Hàng đợi xáo trộn **${client.player.getQueue(message).tracks.length}** bài hát(s) !`);
    },
};