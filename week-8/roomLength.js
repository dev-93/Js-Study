function solution(arrows) {
    const dirs = [
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
    ];

    const V = new Set();
    const E = new Set();

    const toStringForV = (v) => `${v}`;
    const toStringForE = ([i, j], [x, y]) => {
        if (i > x || (i === x && j > y)) {
            return toStringForE([x, y], [i, j]);
        }

        return `${[i, j]}->${[x, y]}`;
    };

    let i = 0;
    let j = 0;
    V.add(toStringForV([i, j]));

    for (const arrow of arrows) {
        const [di, dj] = dirs[arrow];
        let [x, y] = [i, j];
        for (let k = 0; k < 2; ++k) {
            x += di;
            y += dj;

            V.add(toStringForV([x, y]));
            E.add(toStringForE([i, j], [x, y]));

            [i, j] = [x, y];
        }
    }

    return 1 + E.size - V.size;
}
