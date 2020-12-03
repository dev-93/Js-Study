function solution(n) {
	let a = 1;
    let b = 1;
    for (let i = 0; i < n - 1; i++) {
    // 숫자가 너무 커지는 것을 방지하기 위해 나머지를 구한다.
        let c = (a + b) % 1000000007;
        console.log(a,b,c);
            a = b;
        console.log(a,b,c);
            b = c;
        console.log(a,b,c);
        console.log("----------------------")
        }
        return b;
}

solution(n=4);