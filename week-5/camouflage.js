const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]

function solution(clothes) {
    let answer = 1;
    const obj = {};
    for(let arr of clothes) {
        obj[arr[1]] = (obj[arr[1]] || 0) + 1;
    }

    for(let key in obj) {
        answer *= (obj[key]+1);
    }

    return answer - 1;
};

solution(clothes);

// 의상의 이름 전부 나열
// 의상의 종류가 같으면 같이 입을 수 없음.
// answer 배열에 넣고 결국에는 갯수새기
