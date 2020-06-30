/**
 * Write and export your Predicate<T> functions in this file.
 */

import { Message } from "./Message";

interface Predicate<T> {
    (element: T): boolean;
}

export function byStarMessage(message: Message): boolean {
    return byStarString(message.text);
}

export function byStarString(s: string): boolean {
    return s[0] === "*";
}

export function byOldWell(message: Message): boolean {
    if (message.latitude <= 35.9122) {
        if (35.9120 <= message.latitude) {
            if (message.longitude <= -79.0511) {
                if (-79.0513 <= message.longitude) {
                    return true;
                }
            }
        }
    }
    return false;
}

export function by2ndLocation(message: Message): boolean {
    if (message.latitude <= 35.9130) {
        if (35.9128 <= message.latitude) {
            if (message.longitude <= -79.0516) {
                if (-79.0518 <= message.longitude) {
                    return true;
                }
            }
        }
    }
    return false;
}

export function by3rdLocation(message: Message): boolean {
    if (message.latitude <= 35.9111) {
        if (35.9109 <= message.latitude) {
            if (message.longitude <= -79.0480) {
                if (-79.0482 <= message.longitude) {
                    return true;
                }
            }
        }
    }
    return false;
}

export function by4thLocation(message: Message): boolean {
    if (message.latitude <= 35.9087) {
        if (35.9085 <= message.latitude) {
            if (message.longitude <= -79.0491) {
                if (-79.0493 <= message.longitude) {
                    return true;
                }
            }
        }
    }
    return false;
}

export function by11Stars(message: Message): boolean {
    return by11StarsString(message.text);
}

export function by11StarsString(s: string): boolean {
    if (s[0] === "*") {
        if (s[1] === "*") {
            if (s[2] === "*") {
                if (s[3] === "*") {
                    if (s[4] === "*") {
                        if (s[5] === "*") {
                            if (s[6] === "*") {
                                if (s[7] === "*") {
                                    if (s[8] === "*") {
                                        if (s[9] === "*") {
                                            if (s[10] === "*") {
                                                return true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}

export function notAllStars(s: string): boolean {
    let i: number = 0;
    while (i < s.length) {
        if (s[i] !== "*") {
            return true;
        }
        i++;
    }
    return false;   
}