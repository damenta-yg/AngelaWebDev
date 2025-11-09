let maxCharacters = 250;

let strInput = prompt("Input your text:");

let availableText = maxCharacters - strInput.length;

console.log(
  `You have already input ${strInput.length} character and available characters are ${availableText} remaining.`
);

let charactersToSlice =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repudiandae deleniti soluta debitis laborum optio obcaecati accusantium beatae. Veritatis fugiat nesciunt sequi optio culpa? A, animi quia cupiditate voluptate quis voluptatibus quod! Eius accusantium impedit quod asperiores, tempora non amet enim odio optio eaque expedita repellendus ea ratione error accusamus excepturi dolor nemo debitis assumenda nihil sunt! Eius dolorum rerum id illum hic quia sint a vitae deserunt reprehenderit. Sint optio asperiores corrupti voluptates amet sit deserunt, provident dolores dolorum eligendi mollitia esse deleniti consectetur rerum magnam quisquam rem quod ratione laudantium corporis debitis dicta neque. Repudiandae quam officiis, qui officia suscipit eligendi debitis culpa expedita veniam voluptates mollitia possimus assumenda numquam omnis vero ducimus accusantium quasi maxime quidem quis incidunt itaque sit delectus? Ipsam, deserunt sint dolorum illo fugiat labore corporis cum aspernatur aut ad, et pariatur, quis repellendus?";

console.log(charactersToSlice[99]);
console.log(charactersToSlice[100]);
let sliceCharacters = charactersToSlice.slice(0, 100);
console.log(sliceCharacters);

let x = charactersToSlice.toLocaleUpperCase();
console.log(x);
