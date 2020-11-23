let words = ["go","gone","guild"];
// let words = ['abc','def','ghi','jklm'];
// let words = ['word','war','warrior','world'];

function solution(words) {
    let answer = 0;
    words.sort();
    // 학습된 단어들이 go, guild,gone으로 주어질 경우 대비해서 sort 했음. 
    words.map((word) => {
        console.log(word, word.length);
        let firstTwoWords = word.slice(0,2);  
        console.log(firstTwoWords);
        let isExist = words.indexOf(firstTwoWords);
        console.log(isExist);
        if (isExist === 0) {
            if (word.length === firstTwoWords.length) {
                answer += word.length;
            } else if (word.length !== firstTwoWords.length) {
                answer += word.length -1
            }
        } else if(isExist === -1) {
            answer +=2;
        }
    })

    // 예외처리는 words에 go gone gonz guild 가 있을때, gone과 gonz를 구분하려면 4글자를 쳐야함
    return answer;
};

solution(words);