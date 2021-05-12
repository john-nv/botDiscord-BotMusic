module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(c => c.category == 'Infos').map((c) => '`' + c.name + '`').join(', ');
            // const music = message.client.commands.filter(c => c.category == 'Music').map((c) => '`' + c.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Trợ giúp (help == h)' },
                    footer: { text: 'Bot - Music' },

                    fields: [
                        { name: 'Thông tin bot', value: '`info = if`' },
                        { name: 'Bot', value: infos },
                        { name: 'Các lệnh gọi nhạc', value: '`clear-queue`, `filter`, `loop`, `nowplaying`, `pause`, `play`, `queue`, `resume`, `shuffle`, `skip`, `stop`, `volume`, `w-filters` \n\n Các bí danh được bot hỗ trợ : `clear-queue = cq`, `loop = lp`, `nowplaying = np`, `play = p`, `shuffle = sh`, `skip = sk`, `w-filters`' },
                        { name: 'Bộ lọc âm thanh (filter)', value: '`bassboost`, `8D`, `vaporwave`, `nightcore`, `phaser`, `tremolo`, `vibrato`, `reverse`, `treble`, `normalizer`, `surrounding`, `pulsator`, `subboost`, `karaoke`, `flanger`, `gate`, `haas`, `mcompand`\nLưu ý : Bộ lọc âm thanh (filter) sẽ ảnh hưởng trực đến âm thanh nhạc, nếu không hiểu rõ vui lòng không can thiệp để ảnh hưởng đến chất lượng âm thanh' },
                        
                    ],
                    timestamp: new Date(),
                    description: `- Điền tiền tố lệnh **${client.config.prefix}** sau đó là câu lệnh. *Ví dụ : ${client.config.prefix}info.* \n - Có thể sử dụng bí danh để rút ngắn các lệnh gọi (chỉ những bí danh được cung cấp)`,

                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(c => c.aliases && c.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Trợ giúp' },
                    footer: { text: 'Bot - Music' },
                    fields: [
                        { name: 'Tên', value: command.name, inline: true },
                        { name: 'Thể loại', value: command.category, inline: true },
                        { name: 'Bí danh(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join('\n'), inline: true },
                        { name: 'Sử dụng', value: command.utilisation.replace('{prefix}', client.config.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Tìm thông tin về lệnh được cung cấp.\nĐối số bắt buộc `[]`, đối số tùy chọn `<>`.',
                }
            });
        };
    },
};