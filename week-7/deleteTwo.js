(function solution(s) {
    for(let i=0;i<s.length -1;i++) {

        if(s[i] === s[i+1]) {
            s = s.substr(0, i) + s.substr(i + 2);
            i -= 2;
        };
        console.log(s);
    };
    return !s ? 1 : 0;

})(s = 'baabaa');

