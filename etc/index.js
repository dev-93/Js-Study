// 두개 뽑아서 더하기

function solution(numbers) {
    var answer=[];
    for(var i=0;i<numbers.length; i++) {
        for(var j=0; j<numbers.length; j++) {
            if(i === j) continue;
            var sum = numbers[i] + numbers[j];
            answer.push(sum);
        }
    }
    return answer
    .sort((a,b) => a-b)
    .reduce(function(acc,cur){
        if (acc.slice(-1)[0] !== cur) acc.push(cur);
        return acc;
    },[]);
}

// solution([2,1,3,4,1]);
// console.log(solution([2,1,3,4,1]));
console.log(solution([5,0,2,7]));