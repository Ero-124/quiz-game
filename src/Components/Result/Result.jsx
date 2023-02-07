import React from "react";
import "./Result.scss";

const Result = ({ correct, questions }) => {
  return (
    <div className="result">
      <div className="result__wrapper">
      {/*   <img
          src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
          alt=""
        /> */}
        <h2 className="result__title">
          Вы отгадали <span className="result__correct">{correct}</span> ответ
          из <span className="asnwers__length">{questions.length}</span>
        </h2>
        <a href="/quiz-game">
          <button className="result__btn">Попробовать снова</button>
        </a>
      </div>
    </div>
  );
};

export default Result;
