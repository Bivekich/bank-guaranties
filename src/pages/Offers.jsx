import React from "react";
import "../style/offers.css";
// import Bank from "../components/Bank";
import OfferStep from "../components/OfferStep";
import Bank from "../components/Bank";

// Assuming Bank and Step are defined components, make sure to import them

export const Offers = () => (
  <>
    <section className="offers">
      <div className="top-t-2">
        <div className="top-t">
          <h2>
            Рассчитайте банковскую гарантию <br /> или кредит для бизнеса
          </h2>
          <p>
            Гарантируем положительное <br />
            решение банка даже в сложном <br />
            случае или нестандартной ситуации
          </p>
          <a href="#form" className="button">
            <span>Оставить заявку</span>
          </a>
        </div>

        <img src="/bank.png" alt="" />
      </div>
      <div className="banks">
        <h3>
          Отправим вашу заявку в банк-партнер <br />
          из реестра Министерства финансов
        </h3>
        <div className="bank">
          <Bank image="/sber.png" body="СБЕРБАНК" />
          <Bank image="/vtb.png" body="ВТБ" />
          <Bank image="/tinkoff.png" body="Т-Банк" />
          <Bank image="/alfabank.png" body="АЛЬФА-БАНК" />
        </div>
      </div>
      <div className="steps">
        <h3>
          Поможем получить банковскую гарантию <br />
          или кредит даже в сложном случае
        </h3>
        <div className="step">
          <OfferStep
            number="1"
            title="Подготовим отчетность компании в соответствии со скорингом банков"
            body="Наши аналитики проанализируют отчетность вашей компании и подготовят документы в соответствии со скорингом банков, чтобы обойти “подводные камни” и избежать отказа в предоставлении банковской гарантии."
          />
          <OfferStep
            number="2"
            title="Быстро найдем банки с самыми выгодными условиями"
            body="Отправим вашу заявку в несколько банков, входящих в реестр
                Министерства финансов, и вы узнаете, какие банки предоставят вашей
                компании банковскую гарантию на самых выгодных условиях,
                соответствующих требованиям заказчика."
          />
          <OfferStep
            number="3"
            title="Согласуем проект банковской гарантии с вашим заказчиком"
            body="Возьмем на себя процесс согласования текста банковской гарантии с вашим заказчиком, а также утверждение правок с банком. Доведем его до полного соответствия с законодательством Российской Федерации и принятия заказчиком."
          />
        </div>
      </div>
    </section>
  </>
);
