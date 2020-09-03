class AlbumByGenre {
  constructor(song) {
    this.plays = song.plays;
    this.songs = [song];
  }

  addSong(song) {
    this.plays += song.plays;
    this.songs.push(song);
  }

  chooseBestSong() {
    this.songs.sort((prev, next) => {
      if (next.plays - prev.plays === 0) {
        return prev.idx - next.idx;
      }
      return next.plays - prev.plays;
    });

    return this.songs.splice(0, 2).map((song) => {
      return song.idx;
    });
  }
}

class Song {
  constructor(idx, plays) {
    this.idx = idx;
    this.plays = plays;
  }
}

//시간복잡도 : O(n + n + n + n + n + nlogn + n + nlogn) => O(nlogn) ...?
export const bestAlbum = (genres, plays) => {
  let answer = [];
  let genresObj = {};

  //장르별 분류
  genres.forEach((genre, idx) => {
    const song = new Song(idx, plays[idx]);
    if (!genresObj[genre]) {
      genresObj[genre] = new AlbumByGenre(song);
      return;
    }
    genresObj[genre].addSong(song);
  });

  //장르 정렬 후 2곡 선정
  Object.entries(genresObj)
    .sort((prev, next) => next[1].plays - prev[1].plays)
    .forEach((albumByGenre) => (answer = [...answer, ...albumByGenre[1].chooseBestSong()]));

  return answer;
};
