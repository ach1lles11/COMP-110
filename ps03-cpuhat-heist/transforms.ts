/**
 * Write your Transform<T, U> functions in this file.
 */

import { Message } from "./Message";
import { concatenate } from "./reducers";
import { byStarString } from "./predicates";

export function starCount(message: Message): number {
    // Using the split method with an empty string returns an array of single characters
    let letters: string[] = message.text.split("");
    let stars: string[] = letters.filter(byStarString);
    return stars.length;
}

export function toText(message0: Message): string {
    return message0.text;
}

export function extractLetter(s: string): string {
    let i: number = 0;
    while (i < s.length) {
        if (s[i] === "[") {
            if (s[i + 1] === "[") {
                return s[i + 2];
            }
        }
        i++;
    }
    return "";
}

export function decode(s: string): string {
    let i: number = 0;
    let j: number = 1;
    let k: number = 0;
    let a: string[] = [];
    while (i < s.length) {
        a[i] = s[k];
        a[i + 1] = (s[s.length - j]);
        i = i + 2;
        j++;
        k++;
    }
    a[s.length] = "";
    return a.reduce(concatenate);
}

