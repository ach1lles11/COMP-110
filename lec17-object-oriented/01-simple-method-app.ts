import "introcs";

class Point {

    x: number = 0;
    y: number = 0;
    sayHello(): void {
        print("Hello, world");
    }

    // Todo #1: Define the sayHello method

}

function main(): void {
    
    let a: Point = new Point();
    a.sayHello();

    // Todo #2: Call the sayHello method

}

main();