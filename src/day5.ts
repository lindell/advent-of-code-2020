export function getSeatID(row: string): number {
    return row
        .split('')
        .reverse()
        .reduce((sum, val, i) => (val.match(/R|B/) ? 2 ** i + sum : sum), 0);
}

export function part1(data: string): number {
    return Math.max(...data.split('\n').map(getSeatID));
}

export function part2(data: string): number {
    const ids = data.split('\n').map(getSeatID);
    return ids.find((id) => ids.includes(id + 2) && !ids.includes(id + 1)) + 1;
}
