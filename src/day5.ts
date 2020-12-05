export function getSeatID(row: string): number {
    return parseInt(row.replace(/B|R/g, '1').replace(/F|L/g, '0'), 2);
}

export function part1(data: string): number {
    return Math.max(...data.split('\n').map(getSeatID));
}

export function part2(data: string): number {
    const ids = data.split('\n').map(getSeatID);
    return ids.find((id) => ids.includes(id + 2) && !ids.includes(id + 1)) + 1;
}
