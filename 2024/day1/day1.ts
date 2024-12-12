const bytes: string = await Deno.readTextFile("list.txt");
let pairs: string[] = bytes.trim().split("   ");
// pairs = pairs.split("    ");
let arlen: number = pairs.length;
// console.log(`${pairs}`);

let pairs_left = new Array(Math.floor(arlen / 2));
let pairs_right = new Array(Math.floor(arlen / 2));

let pointer: numebr = 0;
while (pointer < arlen) {
  if (pointer%2 == 0) {
    pairs_left[pointer] = pairs[pointer];
  } else {
    pairs_right[pointer] = pairs[pointer];
  }
  pointer++;
}


console.log(`${pairs_left[1]}`);
// console.log(`${pairs_right[1]}`);
console.log(`${arlen}`);
