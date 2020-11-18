
// 스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 
// 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

// clothes = [의상의 이름, 의상의 종류]


// let clothes = [[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]];

(function solution(clothes) {
    const answer = [];
    const arrayToObject = clothes.map((list) => Object.assign({},list));
    console.log(arrayToObject);



    // console.log(answer);

    // return answer;
})(clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]);

// 의상의 이름 전부 나열
// 의상의 종류가 같으면 같이 입을 수 없음.
// answer 배열에 넣고 결국에는 갯수새기

// 1. yellow_hat
// 2. blue_sunglasses
// 3. green_turban
// 4. yellow_hat + blue_sunglasses
// 5. green_turban + blue_sunglasses

