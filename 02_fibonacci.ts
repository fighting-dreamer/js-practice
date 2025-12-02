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