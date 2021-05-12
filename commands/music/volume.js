module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn không tham gia kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bạn không ở trong cùng một kênh thoại !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Hiện không có nhạc nào đang phát !`);

        if (!args[0] || isNaN(args[0])) return message.channel.send(`${client.emotes.error} - Vui lòng nhập một số hợp lệ !`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error} - Vui lòng nhập một số hợp lệ (từ 1 đến 100) !`);

        client.player.setVolume(message, args[0]);

        message.channel.send(`${client.emotes.success} - Âm lượng được đặt thành **${parseInt(args[0])}%** !`);
    },
};