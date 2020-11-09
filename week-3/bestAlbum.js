// 베스트 앨범

// 1. 총 플레이 횟수 많은 순으로 장르 별로 내림차순으로 정렬
// 2. 장르 내에서도 플레이 횟수 내림차순, 고유 번호 오름차순으로 정렬
// 한 장르 당 최대 2개까지만 뽑아서, 플레이 목록을 만들 수 있다.
// 플레이 목록은 고유 번호로 하는 리스트이다.

function solution(genres, plays) {
    const songs = genres.map((genre, index) => {
        return {
            no: index,
            genre: genre,
            playCount: plays[index]    
        };
    });

    const genrePlayCount = [];
    
    songs.forEach(song => {
        const thisGenre = genrePlayCount.find(genrePlay => genrePlay.genre === song.genre);
        if (!thisGenre) {
            genrePlayCount.push({
                genre: song.genre, totalPlayCount: song.playCount
            });
        } else {
            thisGenre.totalPlayCount += song.playCount;
        }
    });

    genrePlayCount.sort((a, b) => b.totalPlayCount - a.totalPlayCount);

    const answer = [];
    
    genrePlayCount.forEach(genrePlay => {
        const thisGenreSongs = songs.filter(song => genrePlay.genre === song.genre);
        thisGenreSongs.sort((a, b) => b.playCount - a.playCount);
        answer.push(thisGenreSongs[0].no);
        if (thisGenreSongs.length > 1) {
            answer.push(thisGenreSongs[1].no);
        }
    });

    return answer;
}