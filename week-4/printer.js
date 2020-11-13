// 프린터 

(function solution(priorities, loc) {
    const answer = 0;

    const docList = [];
    
    // docList에 내용을 추가한다.
    priorities.map((list,index) => {
        docList.push({
            id:index,
            prioritie: list,
        })
    });

    // docList에 있는 prioritie의 내용을 내림차순으로 정렬한다.
    docList.map((list) => console.log(list.prioritie));

    return answer;
})(priorities=[2,1,3,2], loc=2);  //return 1
// })(priorities=[1,1,9,1,1,1], loc=0); // return 5




