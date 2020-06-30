/** 
 * Author: 
 * ONYEN: 
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received 
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */

import "introcs";

export function main(): void {
    print("It is a Saturday night, and you are playing trumpet at Sharp 9 gallery, a jazz club.");
    print("You are choosing between two songs");
    print("a. Take the A-Train");
    print("b. So What");
    promptString("What do you want to play?", forkMain);
}

export function forkMain(choice: string): void {
    clear();
    if (choice === "a") {
        storyA();
    } else {
        if (choice === "b") {
            print("storyB");
        } else {
            main();
        }

    }
}

export function storyA(): void {
    print("Great choice! The crowd loves it");
    print("A solo section is coming up. You have two choices for solo style");
    print("1. loud and flashy");
    print("2. smooth and cool");
    promptNumber("How do you play the solo?", forkA);
}

export function forkA(choice: number): void {
    clear();
    if (choice === 1) {
        storyC();
    } else {
        if (choice === 2) {
            storyD();
        } else {
            storyA();
        }
    }
}

export function storyB(): void {
    print("Awesome! The crowd is going wild!");
    print("The song ends. You have two options");
    print("1. End the concert with a deafeneing last chord");
    print("2. Play an encore");
    promptNumber("What do you do?", forkB);
}

export function forkB(choice: number): void {
    clear();
    if (choice === 1) {
        storyE();
    } else {
        if (choice === 2) {
            storyF();
        } else {
            storyB();
        }
    }
}

export function storyC(): void {
    print("Your blare your trumpet in a crowd pleasing solo, even hitting a high D");
    print("Awesome solo! Tonight was a great night");
}

export function storyD(): void {
    print("You keep your solo smooth and everyone is grooving to the beat");
    print("Way to hold it down! Tonight was a blast");
}

export function storyE(): void {
    print("You hit the final chord, blasting on your horn while the crowd roars.");
    print("Wow what a way to end the show! Hope you had fun.");
}

export function storyF(): void {
    print("You play Take Five as an encore, and the crowd loves it.");
    print("Great job! You had a great show this evening.");
}

main();