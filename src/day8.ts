/* eslint-disable no-continue */
interface Instruction {
    name: string;
    value: number;
}

function parseInstructions(data: string): Instruction[] {
    return data.split('\n').map((row) => {
        const [name, value] = row.split(' ');
        return {
            name,
            value: parseInt(value, 10),
        };
    });
}

function run(instructions: Instruction[]) {
    const visited = new Set<number>();

    let current = 0;
    let acc = 0;
    while (true) {
        // Terminate if an infinite loop was detected
        if (visited.has(current)) {
            return [current, acc];
        }
        visited.add(current);

        const last = current;
        const instruction = instructions[current];
        switch (instruction.name) {
            case 'nop':
                current += 1;
                break;
            case 'acc':
                acc += instruction.value;
                current += 1;
                break;
            case 'jmp':
                current += instruction.value;
                break;
            default:
                throw new Error(`unknown instruction ${instruction.name}`);
        }

        // Terminate only after running the last instruction
        if (last === instructions.length - 1) {
            return [last, acc];
        }
    }
}

export function part1(data: string): number {
    const instructions = parseInstructions(data);
    const [, acc] = run(instructions);
    return acc;
}

export function part2(data: string): number {
    const instructions = parseInstructions(data);

    for (let i = 0; i < instructions.length; i++) {
        const instructionsCopy: Instruction[] = JSON.parse(JSON.stringify(instructions));

        if (instructionsCopy[i].name === 'jmp') {
            instructionsCopy[i].name = 'nop';
        } else if (instructionsCopy[i].name === 'nop') {
            instructionsCopy[i].name = 'jmp';
        } else {
            continue;
        }

        const [endLine, acc] = run(instructionsCopy);
        if (endLine === instructions.length - 1) {
            console.log(i);
            return acc;
        }
    }

    throw new Error('could not find an answer');
}
