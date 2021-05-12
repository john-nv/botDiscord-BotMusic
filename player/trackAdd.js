module.exports = (client, message, queue, track) => {
    message.channel.send(`${client.emotes.music} - ${track.title} đã được thêm vào hàng đợi !`);
};