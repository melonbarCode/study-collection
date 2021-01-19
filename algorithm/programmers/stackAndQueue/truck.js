/**
 * https://programmers.co.kr/learn/courses/30/lessons/42583
 */
function solution(bridge_length, weight, truck_weights) {
  const brige = new Array(bridge_length);
  let timer = 0;

  while (truck_weights.length !== 0) {
    let truck = truck_weights.shift();
    while (truck) {
      brige.shift();
      if (
        truck &&
        weight >= truck + brige.reduce((p, c) => (c ? p + c : p), 0)
      ) {
        brige.push(truck);
        truck = null;
      } else {
        brige.push(undefined);
      }
      timer++;
    }
  }

  console.log(brige, timer);
  const idx = brige.findIndex((v) => !!v);
  if (idx !== -1) {
    brige.splice(0, idx);
    timer += idx;
  }

  while (brige.some((v) => v)) {
    brige.shift();
    timer++;
  }

  return timer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
