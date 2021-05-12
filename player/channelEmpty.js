module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Nhạc đã dừng do không còn thành viên nào trong kênh thoại !`);
};