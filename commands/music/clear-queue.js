module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn không thể tham kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bạn không ở cùng một kênh thoại với bot !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Hiện tại không có nhạc nào đang phát !`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - Hàng đợi vừa được **gỡ bỏ** !`);
    },
};