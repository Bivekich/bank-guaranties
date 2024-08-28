import React, { useRef, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../style/MainPage.css';
import { Plus } from '../components/Plus';
import { Type } from '../components/Type';
import { MainStep } from '../components/MainStep';
import { Advant } from '../components/Advant';
import { CallbackCard } from '../components/CallbackCard';
import { ArticleCard } from '../components/ArticleCard';

import { getArticles, getOtzivi, urlFor } from '../sanityclient';
import { Article } from './Article';

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
          return {
            body: `${article.pharagraph1.substr(0, 200)}...`,
            title: article.title1,
            href: `/article/${article._id}`,
            image_src: urlFor(article.image).url(),
          };
        });
        setArticleElements(articleEls);
      } else {
        setArticleElements(['<p>Статьи недоступны.</p>']);
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
        setOtziviElements(['<p>Отзывы отсутствуют.</p>']);
      }
    };

    fetchData();
  }, []);

  const scrollToBlock = (anchor_ = '') => {
    if (anchor_ && blocks[anchor_]) {
      blocks[anchor_].current.scrollIntoView({
        behavior: 'smooth',
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
            <h3>Гарантии от банков</h3>
            <ul>
              <li>На участие и исполнение в рамках 44-ФЗ, 223-ФЗ, 615-ПП</li>
              <li>Гарантии для коммерческих целей</li>
            </ul>
            <a href="#" className="button">
              <span>Оформить гарантию</span>
            </a>
          </div>
          <img src="/mainImage.png" alt="Банковские гарантии" />
        </div>
      </div>
      <section className="pluses">
        <Plus
          image="/plus1.png"
          title="До 300 млн Р"
          body="Максимальный лимит на гарантии"
        />
        <Plus
          image="/plus2.png"
          title="До 150 млн Р"
          body="Максимальный размер гарантии"
        />
        <Plus
          image="/plus3.png"
          title="До 120 месяцев"
          body="Длительность гарантии"
        />
        <Plus
          image="/plus4.png"
          title="От 1000 Р"
          body="Комиссия за оформление"
        />
      </section>
      <section className="types">
        <h3>Виды банковских гарантий</h3>
        <div className="type-card">
          <Type
            image="/type1.png"
            title="Тендерная гарантия"
            body="Нужна для участия в госзакупках по 44-ФЗ, 223-ФЗ, 615-ПП."
          />
          <Type
            image="/type2.png"
            title="Гарантия для бизнеса"
            body="Подходит для коммерческих контрактов."
          />
          <Type
            image="/type3.png"
            title="Гарантия на таможенные операции"
            body="Необходима для участников внешнеэкономической деятельности."
          />
          <Type
            image="/type4.png"
            title="Гарантия на налоговые обязательства"
            body="Предоставляется при отсрочке налоговых выплат."
          />
        </div>
      </section>

      <section className="steps">
        <h3>Процесс получения гарантии</h3>
        <div className="steps-num">
          <MainStep number="1" title="Оформите заявку" body="На нашем сайте" />
          <MainStep
            number="2"
            title="Соберите документы"
            body="Предоставьте все необходимые бумаги"
          />
          <MainStep
            number="3"
            title="Оплатите комиссию"
            body="За получение банковской гарантии"
          />
          <MainStep
            number="4"
            title="Получите гарантию"
            body="В электронном виде"
          />
        </div>
      </section>
      <section className="online">
        <div className="text">
          <h3>Расчет стоимости гарантии онлайн</h3>

          <p>
            Мы предлагаем удобный калькулятор, чтобы вы могли быстро рассчитать
            стоимость банковской гарантии.
          </p>

          <p>
            Просто введите свои данные, и наш инструмент покажет вам точную
            стоимость с учетом суммы, срока действия и условий рынка.
          </p>
        </div>
        <Link to="/calc" className="button">
          <span>Рассчитать стоимость</span>
        </Link>
      </section>
      <section className="about-us">
        <div className="text">
          <h3>Кто мы</h3>
          <p>
            Финансовая компания "Гарант-БГ" активно развивается, и наши
            специалисты регулярно повышают свою квалификацию. Мы более 10 лет
            работаем в финансовом секторе, сотрудничая с ведущими банками.
          </p>
          <p>
            Мы предлагаем широкий спектр услуг, которые помогут вам в бизнесе.
            Независимо от того, нужна ли вам гарантия для участия в закупках,
            исполнения контрактов или другие виды гарантий, мы поможем вам
            получить нужные документы в кратчайшие сроки.
          </p>
          <p>
            Даже если вам отказали в другом месте, наши специалисты найдут
            оптимальное решение для вашей ситуации.
          </p>
        </div>
      </section>
      <section className="advants">
        <h3>Почему выбирают нас</h3>
        <div className="adv">
          <Advant
            image="/advant1.png"
            body="Только легальные банковские гарантии от банков, аккредитованных МинФином РФ. Наши гарантии проходят все проверки."
          />
          <Advant
            image="/advant2.png"
            body="Мы работаем с компаниями всех форм собственности: ИП, ООО, АО, ЗАО."
          />
          <Advant
            image="/advant3.png"
            body="Помогаем получить гарантию без необходимости залога или поручительства."
          />
        </div>
      </section>
      <section className="callback">
        <h2>Отзывы наших клиентов</h2>
        <ul className="callback-list">
          {otziviElements.map((elem) => {
            return (
              <CallbackCard image_src={elem.image_src} title={elem.title} />
            );
          })}
        </ul>
      </section>
      <section className="articles" ref={blocks.articles}>
        <h2>Полезные статьи</h2>
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
