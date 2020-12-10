import { expect } from 'chai';

import { part1, part2 } from './day10';

it('1-1', () => {
    const data = `16
10
15
5
1
11
7
19
6
12
4`;
    expect(part1(data)).to.eq(35);
    expect(part2(data)).to.eq(8);
});

it('2-1', () => {
    const data = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;
    expect(part2(data)).to.eq(19208);
});
