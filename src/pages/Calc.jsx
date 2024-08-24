import React, { useState } from "react";
import "../style/calc.css";

export const Calc = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const [formData, setFormData] = useState({
    num1: "",
    num2: "",
    benef: "",
    fin: "",
    obesp: "",
    rs: false,
  });
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRangeChange = (e) => {
    setRangeValue(e.target.valueAsNumber);
  };

  //   setResult("Тут будет результат вычислений");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you would calculate the result based on formData
    console.log(formData);
    let coef;
    if (formData.benef == "commercial") {
      coef = 0.045;
    } else {
      coef = 0.03;
    }

    const result = formData.num1 * (formData.num2 * coef);

    setResult(result);
  };
  if (!result) {
    setResult("Тут будет результат вычислений");
  }

  return (
    <>
      <section className="calculator">
        <div className="warn">
          <p>
            Используйте наш калькулятор для более информированного принятия
            решений и повышения уровня финансовой безопасности вашего бизнеса.
          </p>
        </div>
        <form name="myform" onSubmit={handleFormSubmit}>
          <div className="calc">
            <h2>Расчет стоимости банковской гарантии</h2>

            <div className="forms">
              <div className="form1">
                <h4>Размер банковской гарантии, руб.</h4>
                <input
                  name="num1"
                  id="num1"
                  value={formData.num1}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form2">
                <h4>Срок банковской гарантии, мес.</h4>
                <input
                  name="num2"
                  id="num2"
                  value={formData.num2}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="list">
            <div className="top_block">
              <h4>Бенефициар по банковской гарантии</h4>
              <select
                name="benef"
                id="benef"
                value={formData.benef}
                onChange={handleInputChange}
                required
              >
                <option value="">-- Выберите --</option>
                <option value="state">Государственный заказчик</option>
                <option value="commercial">Коммерческая</option>
              </select>
            </div>
            <div className="top_block">
              <h4>Финансовая устойчивость</h4>
              <select
                name="fin"
                id="fin"
                value={formData.fin}
                onChange={handleInputChange}
              >
                <option value="">-- Выберите --</option>
                <option value="unsatisfactory">Неудовлетворительное</option>
                <option value="satisfactory">Удовлетворительное</option>
              </select>
            </div>
            <div className="top_block">
              <h4>Обеспечение</h4>
              <select
                name="obesp"
                id="obesp"
                value={formData.obesp}
                onChange={handleInputChange}
              >
                <option value="">-- Выберите --</option>
                <option value="no">Нет</option>
                <option value="yes">Да</option>
              </select>
            </div>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="rs"
              id="rs"
              checked={formData.rs}
              onChange={handleInputChange}
            />
            <label htmlFor="rs">
              <h2>Расчетный счет (перевод оборотов) в банке, выдавшем БГ</h2>
            </label>
          </div>

          <div className="but-res">
            <button
              id="return_result"
              className="button"
              style={{ backgroundColor: "#428BCA", margin: "auto" }}
              type="submit"
            >
              <span>Рассчитать</span>
            </button>
            <div className="res">
              <p id="result">{result}</p>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
