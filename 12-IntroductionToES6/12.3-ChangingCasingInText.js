let promptName = prompt("What is your real name?");

let toReturnName = `${promptName[0].toUpperCase()}${promptName
  .slice(1, promptName.length)
  .toLowerCase()}`;

console.log(toReturnName);

alert(`Welcome, ${toReturnName}!`);
