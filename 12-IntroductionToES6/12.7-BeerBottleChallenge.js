let count = 99;

while (count >= 0) {
  if (count > 1) {
    console.log(
      `${count} bottles of beer on the wall, ${count} bottles of beer.`
    );
    count--;
    console.log(
      `Take one down and pass it around, ${count} bottles of beer on the wall.`
    );
    console.log("");
  } else if (count === 1) {
    console.log(
      `${count} bottle of beer on the wall, ${count} bottles of beer.`
    );
    count--;
    console.log(
      `Take one down and pass it around, no more bottles of beer on the wall.`
    );
    console.log("");
  } else {
    console.log(
      `No more bottles of beer on the wall, no more bottles of beer.`
    );
    console.log(
      `Go to the sore and but some more, 99 bottles of beer on the wall.`
    );
    count--;
  }
}
