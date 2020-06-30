import "introcs";

class Point {

    x: number = 0;
    y: number = 0;

    // TODO #1: Define a toString method

    toString(): string {
        return this.x + "," + this.y;
    }

    shiftX(amount: number): void {
        this.x = amount + this.x;
    }

    distance(other: Point): number {
        let xDelta2: number = Math.pow(other.x - this.x, 2);
        let yDelta2: number = Math.pow(other.y - this.y, 2);
        return Math.sqrt(xDelta2 + yDelta2);
    }

}

function toString(p: Point): string {
    return p.x + ", " + p.y;
}

function main(): void {
    
    let a: Point = new Point();
    a.x = 110;
    a.y = 110;
    a.shiftX(10);
    print(toString(a));
    print(a.toString());
   
    // TODO #2: call toString method on Point a

    let b: Point = new Point();
    b.x = 401;
    b.y = 401;
    b.shiftX(-10);
    print(toString(b));
    print(b.toString());

    // TODO #3: call toString method on Point b

    print(a.distance(b));
    
}

main();