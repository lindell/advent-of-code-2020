export function part1(data: string): number {
    const numbers = data.split('\n').map(Number);

    for (let i = 0; i < numbers.length; i++) {
        const n1 = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            const n2 = numbers[j];
            if (n1 + n2 === 2020) {
                return n1 * n2;
            }
        }
    }

    return 0;
}

export function part2(data: string): number {
    const numbers = data.split('\n').map(Number);

    for (let i = 0; i < numbers.length; i++) {
        const n1 = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            const n2 = numbers[j];
            for (let k = j + 1; k < numbers.length; k++) {
                const n3 = numbers[k];
                if (n1 + n2 + n3 === 2020) {
                    return n1 * n2 * n3;
                }
            }
        }
    }

    return 0;
}
