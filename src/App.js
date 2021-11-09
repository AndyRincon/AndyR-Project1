import "./styles.css";

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
export default function App() {
  for (let person of data) {
  }

  return (
    <div className="App">
      <div className="List"></div>
    </div>
  );
}
