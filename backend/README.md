# Telegram Landing Form — Backend

Flask-приложение для приема заявок с фронтенда и отправки в Telegram.

## Установка

1. Установите зависимости:

```bash
pip install -r requirements.txt
```

2. Создайте `.env` файл:

TELEGRAM_TOKEN=ваш_токен_бота, TELEGRAM_CHAT_ID=ваш_chat_id

Получи токен у @BotFather.
Получи chat_id, отправив /start боту и открыв https://api.telegram.org/bot<token>/getUpdates.

3. 🚀 Запуск backend:

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

## 🌐 Работа frontend

1. Перейди в папку frontend/

2. Открой index.html в браузере

3. Заполни форму — заявка уйдёт в Telegram



## ✅ Пример заявки в Telegram

📩 Новая заявка:
👤 Имя: Иван
📞 Телефон: +79991234567
🛠 Услуга: Создание сайта
💬 Сообщение: Хочу лендинг за 3 дня!