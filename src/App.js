import "./styles.css";
// 
// function list(
//   name,
//   pronouns,
//   school,
//   graduation_Year,
//   color,
//   social,
//   animal,
//   nickname
// ) {
//   return (
//     <div>
//       <div>{name}</div>
//       <div>{pronouns}</div>
//       <div>{school}</div>
//       <div>{graduation_Year}</div>
//       <div>{color}</div>
//       <div>{social}</div>
//       <div>{animal}</div>
//       <div>{nickname}</div>
//     </div>
//   );
// }
let data = [
  [
    "Mikkail Allen",
    "He/His",
    "Williamsburg Charter High School",
    "2022",
    "Blue",
    "Tiktok",
    "Dogs",
    "Yes"
  ],
  [
    "Justin Apupalo",
    "He/His",
    "NYIT",
    "2025",
    "Blue",
    "Insta",
    "Rooster",
    "SI"
  ],
  [
    "Christopher Bonifacio",
    "He/His",
    "Orchard Collegiate Academy(OCA)",
    "2022",
    "Blue",
    "Insta",
    "Fish",
    "Chris"
  ],
  [
    "Angel Campoverde",
    "He/His",
    "Cristo Rey High School",
    "2022",
    "Purple",
    "Insta",
    "Dogs",
    "None"
  ],
  [
    "Mahdiya Chowdhury",
    "She/Hers",
    "TYWLS",
    "2023",
    "Pink",
    "Tiktok",
    "Cats",
    "None"
  ],
  ["Diego Cruz", "He/His", "Macalester", "2026", "Red", "Insta", "---", "None"],
  ["Heber Cruz, Hernandez", "He/His", "---", "---", "---", "---", "---", "---"],
  ["Yonatan De La Mora", "He/His", "---", "---", "---", "---", "---", "---"],
  [
    "Denny Fernandez",
    "He/His",
    "Williamsburg Charter High School",
    "2022",
    "Blue",
    "Tiktok",
    "Dogs",
    "L bozo"
  ],
  [
    "Athzin Garcia",
    " She/Hers",
    "Cristo Rey",
    "2022",
    "Blue",
    "Insta",
    "Dogs",
    ""
  ],
  ["", "", "", "", "", "", "", ""]
];
function person(name, pronouns, school, year, color, media, animal, nickname) {
  return (
    <div className="row">
      <span>{name}</span>
      <span>{pronouns}</span>
      <span>{school}</span>
      <span>{year}</span>
      <span>{color}</span>
      <span>{media}</span>
      <span>{animal}</span>
      <span>{nickname}</span>
    </div>
  );
}

let display = data.map(function (person) {
  return (
    <div className="row">
      <p>{person[0]}</p>
      <p>{person[1]}</p>
      <p>{person[2]}</p>
      <p>{person[3]}</p>
      <p>{person[4]}</p>
      <p>{person[5]}</p>
      <p>{person[6]}</p>
      <p>{person[7]}</p>
      {/* <span>{pronouns}</span>
        <span>{school}</span>
        <span>{year}</span>
        <span>{color}</span>
        <span>{media}</span>
        <span>{animal}</span>
        <span>{nickname}</span> */}
    </div>
  );
});

export default function App() {
  return (
    <div className="App">
      <div className="List">{display}</div>
    </div>
  );
}

// Create a NEW variable that will store the HTML that is the looped data