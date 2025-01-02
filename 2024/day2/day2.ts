const bytes: string = await Deno.readTextFile("levels.txt");
let lines: string[] = bytes.trim().split("\n");
const arlen: number = lines.length;
let levels: number[][] = [];

for(let i = 0; i < arlen; i++) {
  levels.push(lines[i].split(" "));
  for(let j = 0; j < levels[i].length; j++) {
    levels[i][j] = Number(levels[i][j]);
  }
}

function diff(arr: number[]): number[]{
  let k = arr.length - 1;
  let temp = new Array<number>(k);
  for(let i = 0; i < k; i++) {
    temp[i] = arr[i + 1] - arr[i];
  }
  return temp;
}

let safeRep: number = 0;
for(let i = 0; i < arlen; i++) {
  let increasing: boolean = true;
  let decreasing: boolean = true;

  let differences = diff(levels[i]);

  for(let j = 0; j < differences.length; j++) {
    if(differences[j] > 0) {
      decreasing = false;
    } else if(differences[j] < 0) {
      increasing = false;
    } else {
      increasing = false;
      decreasing = false;
    }
  }

  let vD: boolean = true;
  for(let j = 0; j < differences.length; j++) {
    if(increasing) {
      if(differences[j] < 1 || differences[j] > 3) {
        vD= false;
      }
    } else if(decreasing) {
      if(differences[j] > -1 || differences[j] < -3) {
        vD = false;
      }
    } else {
      vD = false;
    }
  }
  if(vD && (increasing || decreasing)) {
    safeRep++;
  }
}
  console.log(safeRep);
