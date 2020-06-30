import "introcs";

interface Transform<T, U> {
    (element: T): U;
}

function toLength(s: string): number {
    return s.length;
}

function yell(s: string): string {
    return s.toUpperCase();
}

function main(): void {

    let sentence: string = "the quick brown fox named jinx";
    let words: string[] = sentence.split(" ");
    print(words);

    let stringToNumber: Transform<string, number>;
    
    // TODO: assign a function to stringToNumber
    stringToNumber = toLength;

    // TODO: declare a variable and call stringToNumber
    print(stringToNumber("hello"));

    // TODO: map words array using stringToNumber Transform
    print(words.map(stringToNumber));

    // TODO: map words array using the yell function
    print(words.map(yell));

}

main();