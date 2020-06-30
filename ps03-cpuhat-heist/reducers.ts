/**
 * Write and export your Reducer<T, U> functions in this file.
 */

export function sum(memo: number, n: number): number {
    return memo + n;
}

export function concatenate(memo: string, s: string): string {
    return memo + s;
}

export function toSentance(memo: string, s: string): string {
    if (memo === "") {
        return s;
    } else {
        return memo + " " + s;
    }
}