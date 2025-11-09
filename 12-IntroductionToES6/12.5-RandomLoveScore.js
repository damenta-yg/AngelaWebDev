let maleName = prompt("What is male name? ");
let femaleName = prompt("What is female name? ");

let randomLoveScore = Math.floor(Math.random() * 100) + 1;

console.log(
  `${maleName[0].toUpperCase()}${maleName
    .slice(1, maleName.length)
    .toLowerCase()} and ${femaleName[0].toUpperCase()}${femaleName
    .slice(1, femaleName.length)
    .toLowerCase()} love score is ${randomLoveScore}%`
);
