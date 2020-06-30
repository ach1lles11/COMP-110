import "introcs";

// TODO #1: Define a Rectangle class here

class Rectangle {
    color: string = "Black"; 
    width: number = 1.0;
    height: number = 1.0;
}

function main(): void {
    print("Rectangular Paper Sizes Demo");

    // TODO #2: Declare a Rectangle variable named origami

    let origami: Rectangle;
    // Constructed a new rectangle
    origami = new Rectangle();
    // Call rectToString
    print(rectToString(origami));
}

// TODO #3: Uncomment the function below.
function rectToString(input: Rectangle): string {
   return input.color + " Rectangle is " + input.width + "x" + input.height;
}

// TODO #4: Correctly implement the area function.
// function area(input: Rectangle): number {
//    return 0;
// }

main();