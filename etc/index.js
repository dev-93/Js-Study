// 두개 뽑아서 더하기

function solution(numbers) {
    var answer = [];
    
    for(var i=0; i < numbers.length; i++) {
        // console.log(numbers[i]);
        console.log(numbers[i+1]);
        // numbers[i] + numbers[i+1];
    }
    return answer;
}

// solution([2,1,3,4,1]);
console.log(solution([2,1,3,4,1]));
// solution([5,0,2,7]);