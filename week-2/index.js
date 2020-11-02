// 문자열 내 마음대로 정렬하기

const strings = ["sun", "bed", "car"];
let n = 1;

// const strings = ["abce", "abcd", "cdx"];
// const n = 2;

function solution(strings, n) {
    return strings.sort((a, b) => {
        const chr1 = a.charAt(n);
        const chr2 = b.charAt(n);
        if (chr1 === chr2) {
            return (a > b) - (a < b);
        } else {
            return (chr1 > chr2) - (chr1 < chr2);
        }
    });
}

solution(strings, n);
// console.log(solution(strings, n));

// 2. 크레인 인형뽑기 게임

// board = 게임 화면의 격자의 상태가 담긴 2차원 배열
// moves = 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때,
// result = 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성해주세요.

// 배열 탐색

// const board = [
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 3],
//     [0, 2, 5, 0, 1],
//     [4, 2, 4, 4, 2],
//     [3, 5, 1, 3, 1],
// ];

// const moves = [1, 5, 3, 5, 1, 2, 1, 4];

// function solution(board, moves) {
//     let result = 0;
//     let size = board.length;
//     let num = 0;
//     let pocket = [];
//     moves.forEach((move) => {
//         let cnt = 0;
//         while (true) {
//             if (board[cnt][move - 1] !== 0) {
// 바구니에 인형이 있는데 잡은 인형과 같으면 터트린다
//                 if (pocket.length !== 0 && pocket[pocket.length - 1] === board[cnt][move - 1]) {
//                     pocket.pop();
//                     result += 2;
//                 } else {
// 그렇지 않다면 잡아서 옮긴다
//                     pocket.push(board[cnt][move - 1]);
//                 }
//                 board[cnt][move - 1] = 0;
//                 break;
//             }
//             cnt++;
//             if (cnt === size) break;
//         }
//     });
//     return result;
// }

// console.log(solution(board, moves));

// 3.예산
// 배열 d: 부서별로 신청한 금액이 들어있는 와
// budget: 예산, 이 매개변수로 주어질 때,
// 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

// key-point: 최대한 많은 부서의 물품을 구매해 줄 수 있도록
// const d = [1, 3, 2, 5, 4];
// const budget = 9;

// const d = [2,2,3,3];
// const budget = 10;

// function solution(d, budget) {
//     d.sort((a, b) => a - b);
//     while (d.reduce((acc, cur) => (acc + cur), 0) > budget) d.pop();
//     return d.length;
// }

// console.log(solution(d, budget));
// solution(d, budget);


