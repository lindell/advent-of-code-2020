export function part1(data: string): number {
    const jolts = data.split('\n').map(Number);
    const myJolt = Math.max(...jolts) + 3;

    jolts.sort((a, b) => a - b).push(myJolt);

    const diffs = new Map<number, number>();
    let current = 0;
    jolts.forEach((jolt) => {
        const diff = jolt - current;
        diffs.set(diff, (diffs.get(diff) ?? 0) + 1);
        current = jolt;
    });

    return diffs.get(1) * diffs.get(3);
}

export function part2(data: string): number {
    const jolts = data.split('\n').map(Number);
    const myJolt = Math.max(...jolts) + 3;

    jolts.sort((a, b) => a - b).push(myJolt);

    const perms = new Map<number, number>();
    perms.set(0, 1);

    jolts.forEach((jolt) => {
        let totalPerm = 0;
        [1, 2, 3].forEach((diff) => {
            if (perms.has(jolt - diff)) {
                totalPerm += perms.get(jolt - diff);
            }
        });
        perms.set(jolt, totalPerm);
    });

    return perms.get(myJolt);
}
