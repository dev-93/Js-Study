function solution(priorities, location) {
    let answer = 0;
    // priorities 배열의 인덱스를 요소로 갖는 prints 배열 선언
    let prints = priorities.map((_, i) => i);
    
    // prints 배열에 요소가 있을 동안 탐색
    while(prints.length > 0){
    	// tmp: prints의 맨 앞 요소(=priorities의 인덱스)
        let tmp = prints.shift();
        // priorities 배열 요소 중 priorities[tmp]보다 큰 우선순위가 있다면
        for(let i = 0; i < priorities.length; i++){
            if(priorities[i] > priorities[tmp]){
            	// prints 배열 앞에서 빼냈던 tmp를 push로 뒤에 넣는다
                prints.push(tmp);
                break;
            }
        }
        // 만약 prints 배열에서 tmp가 삭제됐다면
        if(!prints.includes(tmp)){
            // priorities 배열의 tmp 번째 인덱스를 -1로 채워넣고(작은 숫자가 우선순위 낮음)
            priorities.fill(-1, tmp, tmp + 1);
            // 삭제된 요소가 있기 때문에 answer에 +1 해준다
            answer++;
            // tmp가 location와 동일할 경우 answer 반환
            if(tmp === location){
                return answer;   
            }
        }
    }
}