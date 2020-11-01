// 문자열 내 마음대로 정렬하기

// const strings = ["sun", "bed", "car"];
// let n = 1;

const strings = ["abce", "abcd", "cdx"];
const n = 2;

function solution(strings, n) {
    return strings.sort((a, b) => {
        const chr1 = a.charAt(n);
        const chr2 = b.charAt(n);

        if (chr1 == chr2) {
            return (a > b) - (a < b);
        } else {
            return (chr1 > chr2) - (chr1 < chr2);
        }
    });
}

console.log(solution(strings, n));
