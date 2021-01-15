function solution(m, musicinfos) {
  const entitleMusics = [];

  for (const musicinfo of musicinfos) {
    const [start, end, title, scales] = musicinfo.split(",");
    const scaleArr = scales.match(/A#|C#|D#|F#|G#|[A-G]/g);
    const playTime = getPlayTime(start, end);
    let fullMusicScale = "";

    for (let i = 0; i < playTime; i++) {
      fullMusicScale += scaleArr[i % scaleArr.length];
    }

    const idx = fullMusicScale.indexOf(m);
    console.log(fullMusicScale[idx + m.length] )
    if (idx !== -1 && fullMusicScale[idx + m.length] !== "#")
      entitleMusics.push({ title, playTime });
  }

  if (entitleMusics.length === 0) {
    return "(None)";
  }

  //   entitleMusics.sort((a, b) => b.playTime - a.playTime);
  entitleMusics.sort((a, b) => {
    if (a.playTime > b.playTime) {
      return -1;
    } else if (a.playTime < b.playTime) {
      return 1;
    } else {
      return 0;
    }
  });

  return entitleMusics[0].title;

  function getPlayTime(start, end) {
    const st = getMin(start);
    const ed = getMin(end);

    console.log(ed, st)
    return ed - st;
  }

  function getMin(timeString) {
    return (
      Number(timeString.substring(0, 2)) * 60 +
      Number(timeString.substring(3, 5)) * 1
    );
  }
}

solution("ABC", ["13:50,14:00,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]);