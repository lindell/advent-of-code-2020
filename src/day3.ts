export function part1(data: string): number {
    const map = data.split('\n').map((row) => row.split(''));

    return encounteredTrees(map, 3, 1);
}

export function part2(data: string): number {
    const map = data.split('\n').map((row) => row.split(''));

    return (
        encounteredTrees(map, 1, 1) *
        encounteredTrees(map, 3, 1) *
        encounteredTrees(map, 5, 1) *
        encounteredTrees(map, 7, 1) *
        encounteredTrees(map, 1, 2)
    );
}

function encounteredTrees(map: string[][], slopeX: number, slopeY: number): number {
    const height = map.length;
    const width = map[0].length;

    let trees = 0;
    for (let i = 0; i * slopeY < height; i++) {
        if (map[i * slopeY][(i * slopeX) % width] === '#') {
            trees += 1;
        }
    }

    return trees;
}
