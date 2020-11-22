let words = ["go","gone","guild"];
// let words = ['abc','def','ghi','jklm'];
// let words = ['word','war','warrior','world'];

function solution(words) {
    var answer = 0;
    words.map((word) => {
        console.log(word, word.length);
        console.log(word.slice(0,2));
        // if (word.length === 2) {
        //     answer = answer + 2;
        // } else if (word.length === 4 ){
        //      answer = answer + (word.length -1)
        // }
    })
    console.log(answer);
    return answer;
};

solution(words);