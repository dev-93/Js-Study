function solution(jobs) {
    let total = jobs.length; // 전체 길이를 둡니다. 
    let answer = 0; // 총 기다린 시간을 저장하는 변수
    let now = 0; // 현재 시간
    let queue = []; // 작업 진행 예정

    while(true) {
        let index = 0;
        while(true) {
            if (index >= jobs.length) break;
            if (jobs[index][0] <= now) { // 현재 시간 보다 시작 시간이 작은 값들을 작업 진행 예정 배열에 넣습니다. splice를 하면 배열이 되기 때문에 0번째 인덱스를 넣어줍니다.
                queue.push(jobs.splice(index,1)[0]);
            } 
            else { // 아닐 경우 다음 index
                index += 1;
            }
        }

        if (queue.length === 0) { // 만약에 queue에도 아무것도 없고
            if (jobs.length === 0) { // jobs에도 아무것도 없다면 반복문을 끝낸다.
                break; // 끝
            }
            else { // jobs에는 남아 있을 경우 현재 시간이 1 지났다고 하고 넘어갑니다.
                now += 1;
            }
        }
        else { // queue에 있을 경우
            let minIndex = 0;
            for(let i = 1; i < queue.length; i ++) {
                if (queue[minIndex][1] > queue[i][1]]) {
                    minIndex = i; // queue 중에 소요 시간이 가장 작은 값을 할 것입니다.
                }
            };
            now += queue[minIndex][1]; // 현재 시간이 소요 시간만큼 지났다고 해주고.
            answer += now - queue[minIndex][0]; // 현재시간에서 - 요청된 시간을 빼주면 작업의 요청부터 종료까지 걸린시간이 됩니다.

            queue.splice(minIndex, 1); // 해당 index를 queue에서 없애줍니다.
        }
    }

    return Math.floor(answer/total); // 전체의 평균.