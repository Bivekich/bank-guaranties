import React, { useState } from "react";
import "../style/footer.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

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
        <a style={{ fontWeight: 800 }} href="tel:8(800)6004592">
          8(800)6004592
        </a>
        <a style={{ fontWeight: 800 }} href="mailto:info@garant-bg.ru ">
          info@garant-bg.ru
        </a>
      </div>
      <center>
        <h4>Режим работы: 10.00-19.00 без выходных</h4>
      </center>
      <center>
        <h5>
          123242 город Москва ул., Садовая-Кудринская д., 11 стр., 1 офис 101
          (здание Федеральной Монопольной Службы).
        </h5>
      </center>
      <div className="map-container">
        <YMaps>
          <Map
            defaultState={{ center: [55.763255, 37.586652], zoom: 15 }}
            style={{ width: "100%", height: "400px" }} // Set explicit styles for width and height
          >
            <Placemark geometry={[55.763255, 37.586652]} />
          </Map>
        </YMaps>
      </div>
      <div className="links">
        <a href="tel:8(800)6004592">
          <img src="/phone.svg" alt="Номер телефона" />
        </a>
        <a href="mailto:info@garant-bg.ru ">
          <img src="/mail.svg" alt="Mail" />
        </a>
        <a href="wa.me/+79035129685 ">
          <img src="/wa.svg" alt="Whatsapp" />
        </a>
      </div>
    </footer>
  );
};
