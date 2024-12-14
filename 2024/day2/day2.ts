const bytes: string = await Deno.readTextFile("levels.txt");
let levels: string[] = bytes.trim().split("\n");

const arlen: number = levels.length;

let llvs: number[][] = new Array(arlen).map(() => []);
for (let i = 0; i < arlen; i++) {
  llvs[i] = levels[i].split(" ").map(Number);
}

let safeRep: number = 0;
let badRep: number = 0;
let deff: number[][] = [];
let diff: number[][] = [];
const allowedVal = new Set([1, 2, 3]);
for (let i = 0; i < arlen; i++) {
  const llen: number = llvs[i].length;
  let lineDeff: number[] = [];
  for (let j = 0; j < llen - 1; j++) {
    lineDeff.push(Math.abs(llvs[i][j] - llvs[i][j + 1]));
  }
  deff.push(lineDeff);

  let lineDiff: number[] = [];
  for (let j = 0; j < arlen - 1; j++) {
    lineDiff.push(deff[i][j] - deff[i][j + 1]);
  }
  diff.push(lineDiff);
}
console.log(diff);
// console.log(safeRep);
// console.log(badRep);
