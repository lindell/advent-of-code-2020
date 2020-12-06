export function part1(data: string): number {
    return data
        .split('\n\n')
        .map((d) => {
            const yesAnswerers = new Set();
            d.split('')
                .filter((v) => v !== '\n')
                .forEach((v) => yesAnswerers.add(v));
            return yesAnswerers.size;
        })
        .reduce((a, b) => a + b, 0);
}

export function part2(data: string): number {
    return data
        .split('\n\n')
        .map((d) => {
            const yesAnswerers = new Map<string, number>();

            const nrOfParticipants = d.split('\n').length;

            // Calculate all occurrences of all question
            d.split('')
                .filter((v) => v !== '\n')
                .forEach((v) => yesAnswerers.set(v, yesAnswerers.get(v) ? yesAnswerers.get(v) + 1 : 1));

            return Array.from(yesAnswerers.values()).filter((v) => v === nrOfParticipants).length;
        })
        .reduce((a, b) => a + b, 0);
}
