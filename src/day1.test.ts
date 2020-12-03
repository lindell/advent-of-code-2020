import { expect } from 'chai';

import { part1, part2 } from './day1';

it('1-1', () => {
    const data = `1721
979
366
299
675
1456`;
    expect(part1(data)).to.eq(514579);
});

it('2-1', () => {
    const data = `1721
979
366
299
675
1456`;
    expect(part2(data)).to.eq(241861950);
});
