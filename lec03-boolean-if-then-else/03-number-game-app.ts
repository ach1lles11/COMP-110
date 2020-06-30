import "introcs";

function main(): void {
    promptNumber("I'm thinking of a number, what is it?", handleGuess);
}

function handleGuess(guess: number): void {
    clear();
    if (guess === 78) {
        correct();
    } else {
        if (guess < 78) {
            higher();
        } else {
            lower();
        }
        main();
    }
}

function incorrect(): void {
    image("https://media.giphy.com/media/l44QkVjrTiBgettq8/giphy.gif");
    print("Nope :(");
}

function correct(): void {
    image("https://media.giphy.com/media/r1fDuPIcs18d2/giphy.gif");
    print("You win!!!");
}

function higher(): void {
    image("https://media.giphy.com/media/4UMgC1X6SX7AA/giphy.gif");
    print("Higher!");
}

function lower(): void {
    image("https://media.giphy.com/media/3o7TKNV6C9L58Idabm/giphy.gif");
    print("Lower!");
}

main(); // Start the program by calling main()