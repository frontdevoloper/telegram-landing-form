// Обработка формы
document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const payload = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        service: formData.get("service"),
        message: formData.get("message"),
    };

    try {
        const response = await fetch("http://127.0.0.1:5000//send", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            form.reset();
            showModal("Спасибо! Мы свяжемся с вами в течение 15 минут.");
        } else {
            showModal(`Произошла ошибка. Попробуйте снова.`);
        }
    } catch (err) {
        showModal(`Ошибка соединения. Проверьте интернет. ${err}`);
    }
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target?.scrollIntoView({ behavior: "smooth" });
    });
});

// Модальное окно
function showModal(message) {
    const modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal">
        <p>${message}</p>
        <button onclick="this.parentElement.parentElement.remove()">Закрыть</button>
      </div>
    `;
    document.body.appendChild(modal);
}

// Анимации при скролле
const animated = document.querySelectorAll(".animate");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
        }
    });
}, { threshold: 0.2 });

animated.forEach(el => observer.observe(el));
