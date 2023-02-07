import React from "react";
import "./Game.scss";
import { motion } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";

const Game = ({ question, onClickVariant, percentage }) => {
  return (
    <div className="question">
      <div className="progress">
        <ProgressBar completed={percentage} bgColor="#CE7151" height="12px" />
      </div>
      <h2 className="question__title">{question.title}</h2>
      {question.imgPath !== "" ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
          }}
        >
          <div className="question__img">
            <img src={question.imgPath} alt="" />
          </div>
        </motion.div>
      ) : null}

      <ul className="question__list">
        {question.variants.map((item, index) => (
          <li
            className={"question__item"}
            key={index}
            onClick={(e) => onClickVariant(e, index)}
          >
            {`${index + 1})`} &nbsp;
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
