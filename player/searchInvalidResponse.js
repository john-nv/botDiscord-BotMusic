module.exports = (client, message, query, tracks, content, collector) => {
    message.channel.send(`${client.emotes.error} - Bạn phải gửi một số hợp lệ trong khoảng từ **1** đến **${tracks.length}** !`);
};