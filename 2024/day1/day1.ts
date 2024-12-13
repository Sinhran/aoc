// Reading file into memory and trimming it
// and splitting by newline
const bytes: string = await Deno.readTextFile("list.txt");
let pairs: string[] = bytes.trim().split("\n");
// Checking the length of the array
let arlen: number = pairs.length;

// Breaking the elements by whitespaces
let broken: string[][] = pairs.map((line) => line.split("   "));

// Declaring arrays
let pairs_left: number[] = new Array(arlen);
let pairs_right: number[] = new Array(arlen);

// Assigning the respective element of the
// nested array to respective arrays
for (let i = 0; i < arlen; i++) {
  pairs_left[i] = Number(broken[i][0]);
  pairs_right[i] = Number(broken[i][1]);
}

// Good ol' bubblesort
for (let i = 0; i < arlen; i++) {
  let temp: number = 0;
  for (let j = 0; j < arlen - i - 1; j++) {
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

// Calculating the distance
let distance: number = 0;

for (let i = 0; i < arlen; i++) {
  distance = distance + Math.abs(pairs_left[i] - pairs_right[i]);
  // console.log(pairs_left[i] - pairs_right[i]);
}
// console.log(distance);

// Part Two

let freq: number[] = new Array(arlen).fill(0);
for (let i = 0; i < arlen; i++) {
  for (let j = 0; j < arlen; j++) {
    if (pairs_right[j] === pairs_left[i]) {
      freq[i] = freq[i] + 1;
    }
  }
}

let similarity: number = 0;
for (let i = 0; i < arlen; i++) {
  similarity = similarity + pairs_left[i] * freq[i];
}
console.log(similarity);
