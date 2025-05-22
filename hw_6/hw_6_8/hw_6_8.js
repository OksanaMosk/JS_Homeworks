let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];

//  — відсортувати його за спаданням за monthDuration

//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців

//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const sortMonthDuration = coursesAndDurationArray.sort(
  (a, b) => b.monthDuration - a.monthDuration
);
console.log("sortMonthDuration:", sortMonthDuration);

const fiveMonthDuration = coursesAndDurationArray.filter(
  (value) => value.monthDuration > 5
);
console.log("fiveMonthDuration:", fiveMonthDuration);
