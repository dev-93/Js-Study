function solution(words) {
    words.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);

    let r = 0, a, b, c;

    words.forEach((w, i) => {
        const right = words[i + 1] || words[i - 1];
        const left = words[i - 1] || words[i + 1];

        for (let i = 1, l = w.length; i <= l; i++) {
            r++;
            a = w.substring(0, i);
            if (a != left.substring(0, i) && a != right.substring(0, i))
                return;
        }
    });

    return r;

}

function solution(words) {
  var sortedWords = words.sort();
  return sortedWords.reduce((acc, word, idx, arr) => {
    var res = 1;
    if (idx > 0) res = Math.max(res, compare(word, arr[idx-1]));
    if (idx+1 < arr.length) res = Math.max(res, compare(word, arr[idx+1]));
    return acc + res;
  }, 0);
}

function compare(a, b) {
    for (var i = 0; i < a.length; ++i) {
        if (b[i] !== a[i]) return i+1;
    }
    return a.length;
}
