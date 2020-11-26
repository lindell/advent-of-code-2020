import aocLoader from 'aoc-loader';

const TEST_DAY = Number(process.argv[2]);

if (!TEST_DAY) {
    throw new Error('Please supply a day to test using the format `npm start {day}`');
}

aocLoader(2019, TEST_DAY)
    .then(async (data) => {
        const day = await import(`./src/day${TEST_DAY}.ts`);

        if (day.part1) {
            const before = new Date().getTime();
            console.log(`Part 1: ${day.part1(data)}`);
            console.log(`  Took: ${(new Date().getTime() - before) / 1000} sek`);
        } else {
            console.log('Missing part 1');
        }

        if (day.part2) {
            const before = new Date().getTime();
            console.log(`Part 2: ${day.part2(data)}`);
            console.log(`  Took: ${(new Date().getTime() - before) / 1000} sek`);
        } else {
            console.log('Missing part 2');
        }
    })
    .catch(console.log);
