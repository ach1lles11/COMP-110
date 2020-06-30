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

function main(): void {
    promptCSV("Enter the data file...", Message, process);
}

function process(data: Message[]): void {
    
    show(data);

}

/**
 * This helper function will print out an array of messages when you call it.
 */
function show(data: Message[]): void {
    for (let i: number = 0; i < data.length; i++) {
        print(data[i].time + " " + data[i].who + ": " + data[i].text);
    }
}


main();