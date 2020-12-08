interface Bag {
    name: string;
    contains: BagEdge[];
}

interface BagEdge {
    Bag: Bag;
    Size: number;
}

function parseBags(data: string): Map<string, Bag> {
    const bags = new Map<string, Bag>();

    function getOrCreate(name: string) {
        const existing = bags.get(name);
        if (existing) {
            return existing;
        }
        const newBag = {
            name,
            contains: [],
            visited: false,
        };
        bags.set(name, newBag);
        return newBag;
    }

    data.split('\n')
        .map((row) => row.slice(0, -1)) // Remove dot
        .forEach((row) => {
            const [containingStr, containsStr] = row.split(' bags contain ', 2);

            const containing = getOrCreate(containingStr);

            if (containsStr === 'no other bags') {
                return;
            }

            containsStr.split(', ').forEach((c) => {
                const [, nBags, name] = c.match(/^(\d+) (.+?) bags?$/);
                const contains = getOrCreate(name);
                containing.contains.push({
                    Bag: contains,
                    Size: Number(nBags),
                });
            });
        });

    return bags;
}

export function part1(data: string): number {
    const bags = parseBags(data);

    return Array.from(bags.values()).filter((bag) => bagExistIn(bag, 'shiny gold')).length;
}

function bagExistIn(bag: Bag, name: string): boolean {
    return bag.contains.some((b) => {
        if (b.Bag.name === name) {
            return true;
        }
        return bagExistIn(b.Bag, name);
    });
}

export function part2(data: string): number {
    const bags = parseBags(data);

    return numberOfBagsIn(bags.get('shiny gold'));
}

function numberOfBagsIn(bag: Bag): number {
    return bag.contains.reduce((sum, b) => {
        return sum + b.Size + b.Size * numberOfBagsIn(b.Bag);
    }, 0);
}
