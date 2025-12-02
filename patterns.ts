import * as readline from 'readline';
/*
    *****
    *****
    *****
    *****
    .
    .
    .
    n times
*/
function patterns(n: number, m : number): void {
    for (let index = 0; index < n; index++) {
     console.log('*'.repeat(m));   
    }
}

// --- Main Execution ---

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

    const nStr = await question("Enter number of rows (n): ");
    const n = parseInt(nStr, 10);

    const mStr = await question("Enter number of columns (m): ");
    const m = parseInt(mStr, 10);

    console.log(`\nPrinting pattern for n=${n}, m=${m}\n`);
    patterns(n, m);

    rl.close();
}

// Run the main function to start the script.
main();
