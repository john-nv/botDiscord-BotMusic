module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn không tham gia kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bạn không ở trong cùng một kênh thoại !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Hiện không có nhạc nào đang phát !`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => {
            if (client.player.getQueue(message).filters[filterName]) filters.push(filterName);
        });

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'Family - Bot này là một dự án music do Quang thực hiện (QC)' },
                fields: [
                    { name: 'Kênh', value: track.author, inline: true },
                    { name: 'Được yêu cầu bởi', value: track.requestedBy.username, inline: true },
                    { name: 'Từ danh sách phát', value: track.fromPlaylist ? 'Có' : 'Không', inline: true },

                    { name: 'Views', value: track.views, inline: true },
                    { name: 'Thời lượng', value: track.duration, inline: true },
                    { name: 'Bộ lọc đã được kích hoạt', value: filters.length, inline: true },

                    { name: 'Âm lượng', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Lặp lại các chế độ', value: client.player.getQueue(message).repeatMode ? 'Có' : 'Không', inline: true },
                    { name: 'Hiện đã tạm dừng', value: client.player.getQueue(message).paused ? 'Có' : 'Không', inline: true },

                    { name: 'Thanh tiến trình', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};