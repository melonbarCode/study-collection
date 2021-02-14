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

      console.log(albumList);

      for (let i = 0; i < needAlbumCount; i++) {
        if (!albumList[i]) {
          break;
        }
        p.push(albumList[i].index);
      }

      return p;
    }, []);
}

console.log(solution(["A", "A", "B", "A"], [5, 5, 6, 5]));

//   ["classic", "pop", "classic", "classic", "pop"],
//   [500, 600, 150, 800, 2500]
