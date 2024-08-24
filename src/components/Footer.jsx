import React, { useState } from "react";
import "../style/footer.css";

const token = "7107296270:AAHaoOr_WkEYCK6_kq9v3QZeyyEBlZz5hM8";
const chat_id = "-4504065332"; // Replace with your Telegram chat ID

export const Footer = () => {
  // State hooks for managing form inputs
  const [fio, setFio] = useState("");
  const [phone, setPhone] = useState("");
  const [inn, setInn] = useState("");
  const [confirm, setConfirm] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Construct the message to be sent to Telegram
    const message = `Новая заявка:\nФИО: ${fio}\nНомер телефона: ${phone}\nИНН: ${inn}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodedMessage}`;

    try {
      // Send the message to the Telegram bot
      const response = await fetch(url);

      if (response.ok) {
        alert("Заявка успешно отправлена!");
      } else {
        alert("Ошибка при отправке заявки. Попробуйте снова.");
      }
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
      alert("Ошибка при отправке заявки. Попробуйте снова.");
    }
  };

  return (
    <footer>
      <section id="form">
        <form onSubmit={handleSubmit}>
          <h1>
            Отправить заявку <br /> на банковскую гарантию
          </h1>
          <span>Оставьте свои контакты, и с вами свяжется менеджер</span>
          <input
            type="text"
            name="fio"
            placeholder="Фамилия Имя Отчество"
            value={fio}
            onChange={(e) => setFio(e.target.value)}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="text"
            name="inn"
            placeholder="ИНН или название компании"
            value={inn}
            onChange={(e) => setInn(e.target.value)}
            required
          />
          <div className="confirm_container">
            <input
              type="checkbox"
              name="confirm"
              id="confirm"
              checked={confirm}
              onChange={(e) => setConfirm(e.target.checked)}
              required
            />
            <label htmlFor="confirm">
              Выражаю <u>согласие</u> на обработку персональных данных и
              подтверждаю, что ознакомлен с <u>Политикой</u> обработки
              персональных данных
            </label>
          </div>
          <button type="submit" className="button">
            <span>Отправить заявку</span>
          </button>
        </form>
      </section>
      <hr />
      <h1>Банковские гарантии</h1>
      <h2>© банковские гарантии 2024. Все права защищены.</h2>
      <div className="links">
        <a href="">Политика конфиденциальности</a>
        <a href="">Согласие на обработку персональных данных</a>
      </div>
      <div className="links">
        <a href="">
          <img src="/tg.svg" alt="Telegram" />
        </a>
        <a href="">
          <img src="/tg.svg" alt="Telegram" />
        </a>
      </div>
      <div className="links">
        <a href="" className="latest_link">
          Made with ❤️ by <u>Лев Данилов</u>
        </a>
      </div>
    </footer>
  );
};
