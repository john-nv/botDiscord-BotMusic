module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Đang chơi ${track.title} thành ${message.member.voice.channel.name} ...`);
};