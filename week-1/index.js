// 1. 완료하지 못한 선수
function solution(participant, completion) {
    var answer = "";
    participant.sort();
    completion.sort();
    var length = participant.length;
    for (var i = 0; i < length; i++) {
        if (participant[i] !== completion[i]) {
            answer = participant[i];
            break;
        }
    }
    return answer;
}

// 2. 모의고사
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
    var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
    var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
    var max = Math.max(a1c, a2c, a3c);

    if (a1c === max) {
        answer.push(1);
    }
    if (a2c === max) {
        answer.push(2);
    }
    if (a3c === max) {
        answer.push(3);
    }

    return answer;
}
