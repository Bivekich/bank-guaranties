import React, { useRef, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../style/MainPage.css";
import { Plus } from "../components/Plus";
import { Type } from "../components/Type";
import { MainStep } from "../components/MainStep";
import { Advant } from "../components/Advant";
import { CallbackCard } from "../components/CallbackCard";
import { ArticleCard } from "../components/ArticleCard";

import { getArticles, getOtzivi, urlFor } from "../sanityclient";
import { Article } from "./Article";

export const MainPage = () => {
  const { anchor } = useParams();
  const [articleElements, setArticleElements] = useState([]);
  const [otziviElements, setOtziviElements] = useState([]);
  const blocks = {
    articles: useRef(null),
  };

  useEffect(() => {
    const fetchData = async () => {
      const articles = await getArticles();
      const otzivi = await getOtzivi();

      if (Object.keys(articles).length > 0) {
        const articleEls = Object.keys(articles).map((i) => {
          const article = articles[i];
          console.log(article);
          return {
            body: `${article.pharagraph1.substr(0, 200)}...`,
            title: article.title1,
            href: `/article/${article._id}`,
            image_src: urlFor(article.image).url(),
          };
        });
        setArticleElements(articleEls);
      } else {
        setArticleElements(["<p>Нет доступных товаров.</p>"]);
      }

      if (Object.keys(otzivi).length > 0) {
        const otziviEls = Object.keys(otzivi).map((i) => {
          const otziv = otzivi[i];
          return {
            title: otziv.name,
            image_src: urlFor(otziv.otziv).url(),
          };
        });
        setOtziviElements(otziviEls);
      } else {
        setOtziviElements(["<p>Нет доступных товаров.</p>"]);
      }
    };

    fetchData();
  }, []);

  const scrollToBlock = (anchor_ = "") => {
    if (anchor_ && blocks[anchor_]) {
      blocks[anchor_].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBlock(anchor);
  }, [anchor]);

  return (
    <div className="mainPage">
      <div className="gray-bg">
        <div className="gray-bg-inner">
          <div className="text">
            <h3>Банковские гарантии</h3>
            <ul>
              <li>На участие и исполнение по 44-ФЗ, 223-ФЗ, 615-ПП</li>
              <li>Коммерческая банковская гарантия</li>
            </ul>
            <a href="#" className="button">
              <span>Получить гарантию</span>
            </a>
          </div>
          <img src="/src/assets/mainImage.png" alt="" />
        </div>
      </div>
      <section className="pluses">
        <Plus
          image="/src/assets/plus1.png"
          title="До 300 млн Р"
          body="Лимит гарантий"
        />
        <Plus
          image="/src/assets/plus2.png"
          title="До 150 млн Р"
          body="Сумма гарантии"
        />
        <Plus
          image="/src/assets/plus3.png"
          title="До 120 месяцев"
          body="Срок гарантии"
        />
        <Plus
          image="/src/assets/plus4.png"
          title="До 1000 Р"
          body="Комиссия за выдачу"
        />
      </section>
      <section className="types">
        <h3>Виды гарантий</h3>
        <div className="type-card">
          <Type
            image="/src/assets/type1.png"
            title="Тендерная гарантия"
            body="необходима в госзакупках по 44-ФЗ., 223-ФЗ., 615-ПП.РФ."
          />
          <Type
            image="/src/assets/type2.png"
            title="Коммерческая гарантия"
            body="применяется в основном в коммерческих контрактах, которые заключаются вне закупок"
          />
          <Type
            image="/src/assets/type3.png"
            title="Таможенная гарантия"
            body="необходима тем кто занимается перевозкой товаров через границу"
          />
          <Type
            image="/src/assets/type4.png"
            title="Налоговая гарантия"
            body="применяется при отсрочке от уплаты налогов"
          />
        </div>
      </section>

      <section className="steps">
        <h3>Как получить гарантию</h3>
        <div className="steps-num">
          <MainStep number="1" title="Подайте заявку" body="На нашем сайте" />
          <MainStep
            number="2"
            title="Предоставьте документы"
            body="необходимый пакет документов"
          />
          <MainStep
            number="3"
            title="Оплатите комиссию"
            body="за выдачу банковской гарантии"
          />
          <MainStep number="4" title="Получите гарантию" body="электронно" />
        </div>
      </section>
      <section className="online">
        <div className="text">
          <h3>Онлайн расчет стоимости банковской гарантии</h3>

          <p>
            Этот инструмент создан для того, чтобы помочь вам легко и быстро
            оценить стоимость банковской гарантии в зависимости от ваших
            потребностей и условий сделки.
          </p>

          <p>
            Наш калькулятор учитывает различные параметры, такие как сумма
            гарантии, срок ее действия и рынок, на котором вы работаете, чтобы
            предоставить вам максимально точные цифры. Просто введите
            необходимые данные, и вы получите прогнозируемую стоимость
            банковской гарантии в считанные минуты.
          </p>
        </div>
        <Link to="/calc" className="button">
          <span>Рассчитать</span>
        </Link>
      </section>
      <section className="about-us">
        <div className="text">
          <h3>О нас</h3>
          <p>
            Финансовая Компания Гарант-БГ постоянно развивается и растет, наши
            специалисты ежегодно проходят <br /> обучение и семинары по
            повышению квалификации. В финансовой сфере работаем более 10 лет, со{" "}
            <br /> многими банками партнёрские взаимоотношения. <br />
            Мы предоставляем широкий спектр финансовых услуг обеспечивающий
            прекрасный результат и <br /> положительное влияние на вашу
            деятельность, экономим ваше время и деньги. <br />
            В кротчайшие сроки поможем вам получить банковские гарантии: <br />
            на участие в закупках, <br />
            на обеспечения исполнения контракта, <br />
            на возврат аванса, <br />
            на гарантийное обслуживание <br />
            таможенные, налоговые и т.д. от наших банков партнеров, без всяких
            проблем и подводных камней. <br /> Если вам где-то даже и отказали в
            выдаче банковской гарантии не расстраивайтесь, наши <br />{" "}
            специалисты обязательно разберутся в вашей ситуации и помогут в
            получении.{" "}
          </p>
        </div>
      </section>
      <section className="advants">
        <h3>Наши преимущества</h3>
        <div className="adv">
          <Advant
            image="/src/assets/advant1.png"
            body="Только белые банковские гарантии. В числе наших партнеров только банки, входящие в официальный перечень МинФина РФ Гарантия подлинная - проходит любые проверки"
          />
          <Advant
            image="/src/assets/advant2.png"
            body="Работаем с любыми формами организаций: ИП, ООО, АО, ЗАО"
          />
          <Advant
            image="/src/assets/advant3.png"
            body="Поможем получить гарантию без залога и поручительства"
          />
        </div>
      </section>
      <section className="callback">
        <h2>Отзывы клиентов</h2>
        <ul className="callback-list">
          {otziviElements.map((elem) => {
            return (
              <CallbackCard image_src={elem.image_src} title={elem.title} />
            );
          })}
        </ul>
      </section>
      <section className="articles" ref={blocks.articles}>
        <h2>Статьи</h2>
        <ul role="list" className="articles-list">
          {articleElements.map((elem) => {
            return (
              <ArticleCard
                href={elem.href}
                image_src={elem.image_src}
                title={elem.title}
                body={elem.body}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
};
