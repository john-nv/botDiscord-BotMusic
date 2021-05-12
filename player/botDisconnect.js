module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Nhạc đã dừng vì tôi đã bị ngắt kết nối khỏi kênh !`);
};