/**
 * https://programmers.co.kr/learn/courses/30/lessons/42579
 * @param {*} genres
 * @param {*} plays
 */
function solution(genres, plays) {
  const needAlbumCount = 2;
  const totalPlaysGenres = {};
  const matchPlayList = genres.map((genre, i) => {
    totalPlaysGenres[genre]
      ? (totalPlaysGenres[genre] += plays[i])
      : (totalPlaysGenres[genre] = plays[i]);
    return { genre, plays: plays[i], index: i };
  });

  
  return Object.entries(totalPlaysGenres)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .reduce((p, c) => {
      const albumList = matchPlayList
        .filter((album) => album.genre === c[0])
        .sort((a, b) => {
          if (b.plays > a.plays) {
            return 1;
          } else if (b.plays < a.plays) {
            return -1;
          } else {
            return b.index < a.index ? 1 : -1;
          }
        });

      albumList[0] && p.push(albumList[0].index);
      albumList[1] && p.push(albumList[1].index);

      return p;
    }, []);
}

console.log(solution(["pop", "pop", "pop", "rap", "rap"], [45, 50, 4, 60, 70]));

//   ["classic", "pop", "classic", "classic", "pop"],
//   [500, 600, 150, 800, 2500]

function solution(genres, plays) {
  var list = genres.reduce((hash, g, i) => {
    if (!hash[g]) {
      hash[g] = { plays: plays[i], music: [] };
    } else {
      hash[g].plays += plays[i];
    }
    hash[g].music.push([i, plays[i]]);
    return hash;
  }, {});
  var answer = [];
  var sorted = Object.values(list).sort((l, r) => r.plays - l.plays);
  sorted.forEach((g) => {
    if (g.music.length > 1) {
      g.music.sort((l, r) => {
        if (l[1] > r[1]) {
          return -1;
        } else if (l[1] < r[1]) {
          return 1;
        } else {
          return l[0] > r[0] ? 1 : -1;
        }
      });
      answer.push(g.music[0][0]);
      answer.push(g.music[1][0]);
    } else {
      answer.push(g.music[0][0]);
    }
  });
  return answer;
}
