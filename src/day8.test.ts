import { expect } from 'chai';

import { part1, part2 } from './day8';

it('1-1', () => {
    const data = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;
    expect(part1(data)).to.eq(5);
    expect(part2(data)).to.eq(8);
});
