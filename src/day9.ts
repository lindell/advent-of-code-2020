export function part1(data: string, preambleSize = 25): number {
    const numbers = data.split('\n').map(Number);

    const noMatch = numbers.filter((n, i) => {
        if (i <= preambleSize) {
            return false;
        }

        const prev = numbers.slice(i - preambleSize, i);
        for (let k = 0; k < prev.length; k++) {
            for (let j = k + 1; j < prev.length; j++) {
                if (prev[k] + prev[j] === n) {
                    return false;
                }
            }
        }

        return true;
    });

    return noMatch[0];
}

export function part2(data: string, preambleSize = 25): number {
    const number = part1(data, preambleSize);

    const numbers = data.split('\n').map(Number);

    for (let i = 0; i < numbers.length; i++) {
        const res = addTo(numbers.slice(i + 1), number);
        if (res !== 0) {
            return res;
        }
    }

    return 0;
}

function addTo(numbers: number[], to: number): number {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        if (i >= 1 && sum === to) {
            const sorted = numbers.slice(0, i + 1).sort((a, b) => a - b);
            return sorted[0] + sorted[sorted.length - 1];
        }
        if (sum > to) {
            return 0;
        }
    }
    return 0;
}
