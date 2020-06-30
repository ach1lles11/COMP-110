import "introcs";

import {
    SVG,
    Group,
    Rectangle,
    Circle,
    Stroke,
    Color
} from "introcs/graphics";

import { Axes } from "./Axes";

let svgTag: SVG = new SVG("artboard");

function main(): void {

    let group: Group = new Group();

    let xAxis: Rectangle = new Rectangle(100, 0.01);
    group.add(xAxis);

    let yAxis: Rectangle = new Rectangle(0.01, 100);
    group.add(yAxis);

    svgTag.render(group);
    
}

main();