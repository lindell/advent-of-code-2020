import { expect } from 'chai';

import { part1, part2 } from './day6';

it('1-1', () => {
    const data = `abc

a
b
c

ab
ac

a
a
a
a

b`;
    expect(part1(data)).to.eq(11);
    expect(part2(data)).to.eq(6);
});
