module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Nhạc đã dừng vì không còn nhạc trong hàng đợi !`);
};