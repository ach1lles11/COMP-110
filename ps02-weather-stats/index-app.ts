/**  
 * Author: Nick Georgiou 
 * ONYEN: nag11 
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received  
 * or given in the completion of this work. I certify that I understand and
 * could now rewrite on my own, without assistance from course staff, 
 * the problem set code I am submitting.
 */

import "introcs";

export class WeatherRow {
    date: string = "";
    precipitation: number = 0;
    snow: number = 0;
    tempHigh: number = 0;
    tempLow: number = 0;
}

export function main(): void {
    print("Weather Stats 110");
    promptCSV("Select Weather Data CSV", WeatherRow, process);
}

export function process(data: WeatherRow[]): void {
    print("Total Precipitation: " + totalPrecipitation(data));
    print("Total Snow Days: " + snowDays(data));
    print("Total Nice Days: " + niceDays(data));
    print("Maximum Temperature: " + maximumTemperature(data));
    print("Coldest Day: " + coldestDay(data));
    print("Days Above: " + daysAbove(data, 90));
}

export function totalPrecipitation(data: WeatherRow[]): number {
    let sum: number = 0;
    let i: number = 0;
    while (i < data.length) {
        sum = sum + data[i].precipitation;
        i++;
    }
    return sum;
}

export function snowDays(data: WeatherRow[]): number {
    let count: number = 0;
    let i: number = 0;
    while (i < data.length) {
        if (data[i].snow > 0) {
            count = count + 1;
        }
        i++;
    }
    return count;
}

export function niceDays(data: WeatherRow[]): number {
    let count: number = 0;
    let i: number = 0;
    while (i < data.length) {
        if (data[i].tempLow >= 60) {
            if (data[i].tempHigh <= 80) {
                count = count + 1;
            }
        }
        i++;
    }
    return count;
}

export function maximumTemperature(data: WeatherRow[]): number {
    let max: number = 0;
    let i: number = 0;
    while (i < data.length) {
        if (data[i].tempHigh > max) {
            max = data[i].tempHigh;
        }
        i++;
    }
    return max;
}

export function coldestDay(data: WeatherRow[]): string {
    let date: string = "";
    let min: number = 100;
    let i: number = 0;
    while (i < data.length) {
        if (data[i].tempLow <= min) {
            date = data[i].date;
            min = data[i].tempLow;
        }
        i++;
    }
    return date;
}

export function daysAbove(data: WeatherRow[], temp: number): number {
    let count: number = 0;
    let i: number = 0;
    while (i < data.length) {
        if (data[i].tempHigh > temp) {
            count = count + 1;
        }
        i++;
    }
    return count;
}


main();

