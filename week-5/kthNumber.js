const array = [1, 5, 2, 6, 3, 7, 4];

const commands = [[2,5,3],[4,4,1],[1,7,3]];

// 2번째부터 5번째를 먼저 오름차순으로 정렬 한뒤 그 중에서 3번째 뽑기

function solution(array, commands) {
    let answer = commands.map((list) => 
        array.slice(list[0]-1, list[1]).sort((a,b) => a-b)[list[2] -1]);
        console.log(answer);
    return answer;
};

solution(array, commands);