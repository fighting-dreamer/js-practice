import  * as readline from 'readline'

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

function isPrime(n:number):boolean {
    if(n % 2 == 0) {
        return false
    }
    for(let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}

async function main() {
    let reader = new InteractiveInputReader()
    let n = await reader.readInt()
    reader.close()
    
    console.log(`is ${n} prime number : ${isPrime(n)}`)
}

main()