// 1. 가장 큰수 

// key-point
// 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
// 각 원소 중 앞자리가 제일 큰게 제일 앞으로, 앞자리가 같다면, 더 큰게 앞으로,
// 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

let numbers = [6, 10, 2];
6210

// let numbers= [3, 30, 34, 5, 9];
// 9534330

function solution(numbers) {
    const result = numbers.sort().reverse().join('');

    return result;
}



// solution(numbers);
console.log(solution(numbers));