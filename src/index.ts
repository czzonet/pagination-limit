import { limitPage } from "./components/pageLimit";

console.log('Here we are.');

/**
 * test
 */

let ps = [1, 2, 3, 4, 5, 6]
let cs = [0, 12, 20]

for (let i = 0; i < cs.length; i++) {
  let c = cs[i];
  for (let j = 0; j < ps.length; j++) {
    let p = ps[j];
    console.log(`limitPage(${p},${c}): `, limitPage(p, c))
  }
}

debugger