import * as readline from 'readline';

class InteractiveInputReader {
    private rl: readline.Interface;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    /** Asks a question and returns the user's answer as a string. */
    public readString(prompt: string = ''): Promise<string> {
        return new Promise((resolve) => {
            this.rl.question(prompt, resolve);
        });
    }

    /** Asks a question and returns the user's answer as an integer. */
    public async readInt(prompt: string = ''): Promise<number> {
        const answer = await this.readString(prompt);
        return parseInt(answer, 10);
    }

    /** Asks a question and returns the user's answer as a floating-point number. */
    public async readDouble(prompt: string = ''): Promise<number> {
        const answer = await this.readString(prompt);
        return parseFloat(answer);
    }

    /** Closes the input stream, allowing the program to exit. */
    public close(): void {
        this.rl.close();
    }
}

function factorial(n: number): number {
    let res = 1
    for (let i = 2; i <= n; i++) {
        res = res * i
    }
    return res
}

async function main() {
    let reader = new InteractiveInputReader()
    let n = await reader.readInt()
    reader.close()
    console.log(`factorial of ${n} : ${factorial(n)}`)
}

main()