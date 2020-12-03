export function part1(data: string): number {
    const rows = data.split('\n').map(parse);

    let correct = 0;
    rows.forEach((row) => {
        const matching = row.password.split('').reduce((sum, char) => (char === row.letter ? sum + 1 : sum), 0);
        if (matching >= row.min && matching <= row.max) {
            correct += 1;
        }
    });

    return correct;
}

export function part2(data: string): number {
    const rows = data.split('\n').map(parse);

    let correct = 0;
    rows.forEach((row) => {
        const firstCorrect = row.password[row.min - 1] === row.letter;
        const secondCorrect = row.password[row.max - 1] === row.letter;
        if ((firstCorrect && !secondCorrect) || (!firstCorrect && secondCorrect)) {
            correct += 1;
        }
    });

    return correct;
}

function parse(row: string) {
    const match = row.match(/^(\d+)-(\d+) ([a-z]): (.*)$/);
    return {
        min: parseInt(match[1], 10),
        max: parseInt(match[2], 10),
        letter: match[3],
        password: match[4],
    };
}
