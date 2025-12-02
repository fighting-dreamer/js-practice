import * as readline from 'readline';

function fib_memo(dp: Record<number, number>, n: number): number {
    // Base cases for the recursion
    if (n <= 1) {
        return n;
    }

    // Check if the value is already in the cache before computing it.
    if (n in dp) {
        return dp[n];
    }

    // Compute, store in cache, and then return.
    dp[n] = fib_memo(dp, n - 1) + fib_memo(dp, n - 2);
    return dp[n];
}

function fibonacci(n : number) :number {
    return fib_memo({}, n);
}

async function main(): Promise<void> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    /** Helper function to ask a question and get an answer asynchronously */
    const question = (prompt: string): Promise<string> => {
        return new Promise((resolve) => {
            rl.question(prompt, resolve);
        });
    };

    const nStr = await question("Enter a number for Fibonacci calculation (n): ");
    const n = parseInt(nStr, 10);

    if (isNaN(n)) {
        console.log("Invalid input. Please enter a number.");
    } else {
        console.log(`fib(${n}) : ${fibonacci(n)}`);
    }

    rl.close();
}

main();

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

// Example of how to use the new class (this replaces the old main function)
async function exampleMain() {
    const reader = new InteractiveInputReader();

    const n = await reader.readInt("Enter a number for Fibonacci calculation (n): ");

    reader.close();
}

// To run this example, you could replace `main()` with `exampleMain()` at the top.

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
