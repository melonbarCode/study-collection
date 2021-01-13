/**
 * https://programmers.co.kr/learn/courses/30/lessons/17680
 */
// function solution(cacheSize, cities) {
//   const cache = [];
//   let processTime = 0;

//   if (cacheSize === 0) {
//     return cities.length * 5;
//   }

//   for (let city of cities) {
//     city = city.toLowerCase();

//     if (cache.length < cacheSize) {
//       const cacheIndex = cache.indexOf(city);

//       if (cacheIndex !== -1) {
//         const cachedCity = cache[cacheIndex];
//         cache.splice(cacheIndex, 1);
//         cache.push(cachedCity);
//         processTime += 1;
//       } else {
//         cache.push(city);
//         processTime += 5;
//       }
//     } else {
//       const cacheIndex = cache.indexOf(city);

//       if (cacheIndex !== -1) {
//         const cachedCity = cache[cacheIndex];
//         cache.splice(cacheIndex, 1);
//         cache.push(cachedCity);
//         processTime += 1;
//       } else {
//         cache.shift();
//         cache.push(city);
//         processTime += 5;
//       }
//     }
//   }

//   return processTime;
// }

//정리된 풀이
function solution(cacheSize, cities = []) {
  const MISS = 5;
  const HIT = 1;
  const cache = [];
  let processTime = 0;

  if (cacheSize === 0) return cities.length * MISS;

  for (let city of cities) {
    city = city.toLowerCase();

    const cacheIndex = cache.indexOf(city);

    if (cacheIndex !== -1) {
      processTime += HIT;
      cache.splice(cacheIndex, 1);
    } else {
      processTime += MISS;
      if (cache.length === cacheSize) cache.shift();
    }

    cache.push(city);
  }
  
  return processTime;
}
