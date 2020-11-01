// 문자열 내 마음대로 정렬하기

const strings = ["sun", "bed", "car"];
let n = 1;

// var strings = ["abce", "abcd", "cdx"];
// var n = 2;

// function solution(strings, n) {
//     let answer = [];

// strings.sort();
// const listIndex = list[n];
// for (let i = 0; i < strings.length; i++) {
//     return strings;
// }

// return answer;
// }

const solution = strings.map((list, index) => {
    const listIndex = list[n];
    // const temp = listIndex.sort();
    return listIndex;
});

console.log(solution);
// console.log(solution(strings, n));

// srtings의 배열에서 n번째의 값을 sorting
