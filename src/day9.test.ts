import { expect } from 'chai';

import { part1, part2 } from './day9';

it('1-1', () => {
    const data = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;
    expect(part1(data, 5)).to.eq(127);
    expect(part2(data, 5)).to.eq(62);
});
