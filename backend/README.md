# Telegram Landing Form — Backend

Flask-приложение для приема заявок с фронтенда и отправки в Telegram.

## Установка

1. Установите зависимости:

```bash
pip install -r requirements.txt
```

2. Создайте `.env` файл:

TELEGRAM_TOKEN=ваш_токен_бота, TELEGRAM_CHAT_ID=ваш_chat_id

3. Запуск:

```bash
python backend/app.py
```

## Использование

POST-запрос на `/send` с JSON:

```json
{
  "name": "Имя",
  "phone": "+79991234567",
  "service": "Выбранная услуга",
  "message": "Комментарий"
}
```

Ответ: 
```json
{ "success": true }
``` или 
```json
{ "success": false, "error": "..." }
```
