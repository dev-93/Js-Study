(function solution(n) {
    let answer = [];
    console.log(answer);
    for(let i = 1; i<n+1; i++) {
        answer.push(i);
        if (i % 2 === 0) {
            answer.pop(i);
        } else if (i % 3 === 0) {
            if (i=== 3) {
                continue;
            } else {
                answer.pop(i);
            };
        } else if (i % 5 === 0) {
            if (i=== 5) {
                continue;
            } else {
                answer.pop(i);
            };
        } else if (i % 7 === 0) {
            if (i=== 7) {
                continue;
            } else {
                answer.pop(i);
            };
        };
        console.log(i);
        console.log(answer);
    };
    return answer.length;
})(n=50);