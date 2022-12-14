// export function mergeArray(a, b) {
//   if (!Array.isArray(a) || !Array.isArray(b) || (a.length === 0 && b.length === 0)) return [];
//   const newArr = [...a, ...b];
//   let tempArr = [];
//   for (let i = 0; i < newArr.length; i++) {
//     const number = newArr[i];
//     if (!tempArr.includes(number)) tempArr.push(number);
//   }
//   return tempArr;
// }
export function mergeArray(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || (a.length === 0 && b.length === 0)) return [];
  return [...a, ...b].reduce((merge, number) => {
    if (!merge.includes(number)) merge.push(number);
    return merge;
  }, []);
}
