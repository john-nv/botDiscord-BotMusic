
module.exports = {
    name: 'info',
    aliases: ['if'],
    utilisation: '{prefix}info',

  execute(client, message, args){
    if (!args[0]) {

        message.channel.send({
            embed: {
                color: 'ORANGE',
                author: { name: 'Giới thiệu Bot'},
                footer: { text: 'Đệ QuangC'},
                fields: [
                    { name: 'Bot', value: 'Bot - Music' },
                    { name: 'Source', value: 'Liên hệ trực tiếp Quang để được hỗ trợ' },
                    { name: 'Chức năng', value: 'Vẫn còn đang trong chế độ phát triển' },
                ],
                timestamp: new Date(),
                description: 'Giới thiệu về Bot của Quang',
                image:{url: 'https://cdn.discordapp.com/avatars/788618594132295731/e315098d6292319b4113e3c4f5fd7358.png'},
                
                // hình thu nhỏ
                thumbnail:{ url:'https://cdn.discordapp.com/avatars/788618594132295731/e315098d6292319b4113e3c4f5fd7358.png' },
                // nhà cung cấp
                // provider: {name: 'quang',
                //            url: 'https://fb.com'
                //           },
            },
        });
    }
  },
};