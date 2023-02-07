import { useState } from "react";
import "./App.scss";
import Game from "../Game/Game";
import { questions } from "../../questions";
import Result from "../Result/Result";
import Header from "../Header/Header";

function App() {
  const [data] = useState(questions);
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = data[step];

  const onClickVariant = (event, index) => {
    if (index === question.correct) {
      event.target.classList.add("true");
      setCorrect(correct + 1);
      setTimeout(async () => {
        await event.target.classList.remove("true");
        setStep(step + 1);
      }, 300);
    } else {
      event.target.classList.add("false");
      setTimeout(async () => {
        await event.target.classList.remove("false");
        setStep(step + 1);
      }, 1000);
    }
  };

  const percentage = Math.round((step / questions.length) * 100);

  return (
    <div className="wrapper">
      {step !== questions.length ? (
        <Header step={step} questionsLength={questions.length} />
      ) : null}

      <main>
        {step !== questions.length ? (
          <Game
            question={question}
            onClickVariant={onClickVariant}
            percentage={percentage}
          />
        ) : (
          <Result correct={correct} questions={questions} />
        )}
      </main>
    </div>
  );
}

export default App;
