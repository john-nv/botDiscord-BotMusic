# Bot music Discord
Bot nhạc được sử dụng bởi các câu lệnh đơn giản để phát nhạc. Tìm kiếm theo tên bài hát hoặc theo đường dẫn (URL youtube) để phát.

## Xây dựng trên các nền thư viện chính
- Discord.js
- Node.js

## Chức năng
**Chức năng chính phát nhạc**
| play | stop | volume | skip | loop |pause | resume| queue |
|------|-------|------|-------|-------|-------|-------|-------|

**Lệnh nâng cao**
| w-filters | filter| nowplaying | clear-queue | shuffle |
|------|-------|------|-------|-------|

**Lệnh bổ trợ**
| help | debug | ping |
|------|-------|------|

**Lưu ý:** Hãy đọc kĩ các hướng dẫn sử dụng lệnh đối với các lệnh nâng cao vì nó sẽ ảnh hướng đến bài nhạc bạn đang thưởng thức.





### Cấu hình sử dụng

file : /config/bot.json
```
{
    "game": "NameGame",
    "prefix": "",
    "token_bot": "TOKEN_BOT"
}
```
* game ( trạng thái hoạt động của bot )
* prefix ( câu lệnh )
* token_bot ( token bot )

Chúc các bạn thành công.
