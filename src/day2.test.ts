import { expect } from 'chai';

import { part1, part2 } from './day2';

it('1-1', () => {
    const data = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;
    expect(part1(data)).to.eq(2);
    expect(part2(data)).to.eq(1);
});
