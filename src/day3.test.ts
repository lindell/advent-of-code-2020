import { expect } from 'chai';

import { part1, part2 } from './day3';

it('1-1', () => {
    const data = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;
    expect(part1(data)).to.eq(7);
    expect(part2(data)).to.eq(336);
});
