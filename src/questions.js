import f90 from "../src/img/m5f90.jpg";
import w124 from "../src/img/w124.jpg";
import audi from "../src/img/audi.jpg";
import pobeda from "../src/img/pobeda-e1456592070171.jpg";
import jiguli from "../src/img/jiguli.jpg";
import gagarin from "../src/img/gagarin.jpg";
import steveJobs from "../src/img/steve-jobs.jpg";

export const questions = [
  {
    id: 1,
    title: "Какая марка машины ?",
    variants: ["Mercedes W222", "Bmw M5 F90", "Audi RS6"],
    correct: 1,
    imgPath: f90,
  },
  {
    id: 2,
    title: "Сколько лошадиных сил у Mercedes W124 E500 ( Волчок )",
    variants: ["381 л.с", "306 л.с", "326 л.с"],
    correct: 2,
    imgPath: w124,
  },
  {
    id: 3,
    title: "Какая страна производитель марки Audi (Ауди)?",
    variants: ["Германия", "Япония", "Америка"],
    correct: 0,
    imgPath: audi,
  },
  {
    id: 4,
    title: "Как первоначально хотели назвать популярный автомобиль «Победа»?",
    variants: ["Родина", "Москва", "Звезда"],
    correct: 0,
    imgPath: pobeda,
  },
  {
    id: 5,
    title:
      "По причине созвучия с каким словом автомобиль «Жигули» стали поставлять в Европу под брендом «Лада»?",
    variants: ["Жиган", "Жулик", "Жиголо"],
    correct: 2,
    imgPath: jiguli,
  },
  {
    id: 6,
    title:
      "Каким автомобилем был награжден после полета в космос Юрий Гагарин?",
    variants: ["Жигули", "Нива", "Волга"],
    correct: 2,
    imgPath:
      gagarin,
  },
  {
    id: 7,
    title: "Какую марку автомобилей предпочитал всем остальным Стив Джобс?",
    variants: ["Феррари", "Мерседес", "БМВ"],
    correct: 1,
    imgPath: steveJobs,
  },
];
