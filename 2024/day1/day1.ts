const bytes: string = await Deno.readTextFile("list.txt");
let pairs: string[] = bytes.trim().split("\n");

let arlen: number = pairs.length;

let broken: string[][] = pairs.map(line => line.split("   "));

let pairs_left = new Array(arlen);
let pairs_right = new Array(arlen);

for (let i = 0; i < arlen; i++) {
  pairs_left[i] = Number(broken[i][0]);
  pairs_right[i] = Number(broken[i][1]);
}

for (let i = 0; i < arlen; i++) {
  let temp: number = 0;
  for (let j = 0; j < (arlen - i - 1); j++) {
    if (pairs_left[j] > pairs_left[j + 1]) {
      temp = pairs_left[j];
      pairs_left[j] = pairs_left[j + 1];
      pairs_left[j + 1] = temp;
    }
    if (pairs_right[j] > pairs_right[j + 1]) {
      temp = pairs_right[j];
      pairs_right[j] = pairs_right[j + 1];
      pairs_right[j + 1] = temp;
    }
  }
}

let distance: number = 0;

for (let i = 0; i < arlen; i ++) {
  distance = distance + Math.abs(pairs_left[i] - pairs_right[i]);
  console.log(pairs_left[i] - pairs_right[i]);
}
console.log(distance);
