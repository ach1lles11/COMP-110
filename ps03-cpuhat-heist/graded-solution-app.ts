import "introcs";

/**   
 * Author: Nick Georgiou   
 * ONYEN: 730166981   
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */

import { Message } from "./Message";
import { byStarMessage } from "./predicates";
import { starCount } from "./transforms";
import { sum } from "./reducers";
import { byOldWell } from "./predicates";
import { by2ndLocation } from "./predicates";
import { concatenate } from "./reducers";
import { toText } from "./transforms";
import { by3rdLocation } from "./predicates";
import { extractLetter } from "./transforms";
import { by4thLocation } from "./predicates";
import { by11Stars } from "./predicates";
import { notAllStars } from "./predicates";
import { decode } from "./transforms";
import { toSentance } from "./reducers";

function main(): void {
    promptCSV("Enter the data file...", Message, process);
}

function process(data: Message[]): void {

    // Note: You should not need to change this process function.
    // Solve the mystery in the functions below.

    print("Bandit 0: " + findSuspect0(data));
    print("Clue 0: " + findClue0(data));

    print("Bandit 1: " + findSuspect1(data));
    print("Clue 1: " + findClue1(data));

    print("Bandit 2: " + findSuspect2(data));
    print("Clue 2: " + findClue2(data));

    print("Gang Boss: " + findBoss(data));
    print("Final Clue: " + solveMystery(data));
}

/**
 * This helper function will print out an array of messages when you call it.
 */
function show(data: Message[]): void {
    for (let i: number = 0; i < data.length; i++) {
        print(data[i].time + " " + data[i].who + ": " + data[i].text);
    }
}

export function demoFunction(data: Message[]): void {
    let filtered: Message[] = data.filter(byStarMessage);
    let stars: number[] = filtered.map(starCount);
    let total: number = stars.reduce(sum, 0);
    print("Total Stars: " + total);
    print("Messages with Stars:");
    show(filtered);

}

export function findSuspect0(data: Message[]): string {
    let suspect0: Message[] = data.filter(byOldWell);
    return suspect0[0].who;

}

export function findClue0(data: Message[]): string {
    let suspect0: Message[] = data.filter(byOldWell);
    return suspect0[0].text;
}

export function findSuspect1(data: Message[]): string {
    let suspect1: Message[] = data.filter(by2ndLocation);
    return suspect1[0].who;
}

export function findClue1(data: Message[]): string {
    let suspect1: Message[] = data.filter(by2ndLocation);
    let suspect11: string[] = suspect1.map(toText);
    return suspect11.reduce(concatenate);
}

export function findSuspect2(data: Message[]): string {
    let suspect2: Message[] = data.filter(by3rdLocation);
    return suspect2[0].who;
}

export function findClue2(data: Message[]): string {
    let suspect2: Message[] = data.filter(by3rdLocation);
    let suspect22: string[] = suspect2.map(toText);
    let suspect222: string[] = suspect22.map(extractLetter);
    return suspect222.reduce(concatenate);
}

export function findBoss(data: Message[]): string {
    let boss: Message[] = data.filter(by4thLocation);
    return boss[0].who;
}

export function solveMystery(data: Message[]): string {
    let filtered: Message[] = data.filter(by11Stars);
    let f: string[] = filtered[0].text.split(" ");
    let g: string[] = f.filter(notAllStars);
    let h: string[] = g.map(decode);
    return h.reduce(toSentance);    
}

main();