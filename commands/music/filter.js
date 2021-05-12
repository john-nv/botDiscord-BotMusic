module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn không tham gia kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bạn không ở trong cùng một kênh thoại !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Hiện không có nhạc nào đang phát !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Vui lòng chỉ định một bộ lọc hợp lệ để bật hoặc tắt !`);

        const filterToUpdate = Object.values(client.filters).find((f) => f.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Bộ lọc này không tồn tại !`);

        const filterRealName = Object.keys(client.filters).find((f) => client.filters[f] === filterToUpdate);

        const queueFilters = client.player.getQueue(message).filters;
        const filtersUpdated = {};
        filtersUpdated[filterRealName] = queueFilters[filterRealName] ? false : true;
        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterRealName]) message.channel.send(`${client.emotes.music} - Tôi **thêm vào** bộ lọc cho nhạc, vui lòng đợi ... Lưu ý: nhạc càng dài, quá trình này sẽ mất nhiều thời gian hơn.`);
        else message.channel.send(`${client.emotes.music} - Tôi **vô hiệu hóa** bộ lọc trên nhạc, vui lòng đợi ... Lưu ý: nhạc phát càng lâu, quá trình này sẽ mất nhiều thời gian hơn.`);
    },
};