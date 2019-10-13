import { limitPage } from "./components/pageLimit";

console.log('Here we are.');

/**
 * test
 */

let ps = [1, 2, 3, 4, 5, 6]
let cs = [0, 12, 20]
console.log(`测试：默认每页数量5`);
for (let i = 0; i < cs.length; i++) {
  let c = cs[i];
  console.log(`总数为${c}`);
  for (let j = 0; j < ps.length; j++) {
    let p = ps[j];
    console.log(`当前分页${p}，修正后： `, limitPage(p, c))
  }
}
console.log('\n========\n');
console.log(`测试：每页数量11`);
for (let i = 0; i < cs.length; i++) {
  let c = cs[i];
  console.log(`总数为${c}`);
  for (let j = 0; j < ps.length; j++) {
    let p = ps[j];
    console.log(`当前分页${p}，修正后： `, limitPage(p, c, 11))
  }
}
debugger