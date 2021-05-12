module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn không tham gia kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bạn không ở trong cùng một kênh thoại !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Hiện không có nhạc nào đang phát !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Nhạc đã tạm dừng !`);

        client.player.pause(message);

        message.channel.send(`${client.emotes.success} - Bài hát ${client.player.getQueue(message).playing.title} **tạm dừng** !`);
    },
};