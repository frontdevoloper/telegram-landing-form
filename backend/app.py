from flask import Flask, request, jsonify
import requests
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()  # Загружаем переменные окружения

TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")
CHAT_ID = os.getenv("CHAT_ID")

app = Flask(__name__)
CORS(app)  # Разрешаем запросы с фронта (если frontend и backend на разных портах)


@app.route("/send", methods=["POST"])
def send():
    data = request.get_json()

    name = data.get("name", "Без имени")
    phone = data.get("phone", "Без телефона")
    service = data.get("service", "Не выбрано")
    message = data.get("message", "")

    text = (
        f"📩 Новая заявка:\n\n"
        f"👤 Имя: {name}\n"
        f"📞 Телефон: {phone}\n"
        f"🛠 Услуга: {service}\n"
        f"💬 Сообщение: {message}"
    )

    telegram_url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    payload = {
        "chat_id": CHAT_ID,
        "text": text
    }

    try:
        resp = requests.post(telegram_url, json=payload)
        if resp.status_code == 200:
            return jsonify({"success": True})
        else:
            return jsonify({"success": False, "error": "Ошибка при отправке в Telegram"}), 500
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
