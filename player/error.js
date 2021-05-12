module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Không có bản nhạc nào được phát trên máy chủ này !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Bạn chưa được kết nối trong bất kỳ kênh thoại nào !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Tôi không thể tham gia kênh thoại của bạn, vui lòng kiểm tra quyền của tôi !`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Đã xảy ra lỗi ... Lỗi.. Liên hệ **Quang** để biết thêm chi tiết...  : ${error}`);
    };
};
