/**    
 * Author: Nick Georgiou   
 * ONYEN: 730166981   
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */

// TODO: Import the classes you need to work with your Emoji
import { Group, Color, Text, Circle, Path, Rectangle } from "introcs/graphics";

export class FaceShape {

    /**
     * The tone of the FaceShape class is a property so that you can
     * easily change the tone of an Emoji (i.e. red FaceShape tone is angry,
     * green sick, etc);
     */
    tone: Color;

    constructor(tone: Color) {
        this.tone = tone;
    }

    shapes(): Group {
        let shapes: Group = new Group();
        let face: Circle = new Circle(60);
        face.fill = this.tone;
        shapes.add(face);
        return shapes;
    }

}

// TODO: Eye class

export class Eye {
    irisColor: Color;

    constructor(irisColor: Color) {
        this.irisColor = irisColor;
    }

    shapes(): Group {
        let shapes: Group = new Group();
        let eye: Path = new Path(-10, 0);
        eye.lineTo(0, -10);
        eye.lineTo(10, 0);
        eye.fill = this.irisColor;
        shapes.add(eye);
        return shapes;
    }
}

// TODO: Mouth class

export class Mouth {
    shapes(): Group {
        let shapes: Group = new Group();
        let mouth: Rectangle = new Rectangle(30, 5);
        shapes.add(mouth);
        return shapes;
    }
}

// TODO: Emoji class

export class Emoji {
    faceShape: FaceShape;
    mouth: Mouth;
    leftEye: Eye;
    rightEye: Eye;

    constructor() {
        this.faceShape = new FaceShape(new Color(.5, 0, 0));
        this.mouth = new Mouth();
        this.leftEye = new Eye(new Color(.5, 0, 0));
        this.rightEye = new Eye(new Color(.5, 0, 0));
    }

    shapes(): Group {
        let shapes: Group = new Group;
        let faceShapeShapes: Group = this.faceShape.shapes();
        faceShapeShapes.transform = faceShapeShapes.transform.translate(10, -30);
        shapes.add(faceShapeShapes);
        let mouthShapes: Group = this.mouth.shapes();
        mouthShapes.transform = mouthShapes.transform.translate(-30, -20);
        shapes.add(mouthShapes);
        let leftEyeShapes: Group = this.leftEye.shapes();
        leftEyeShapes.transform = leftEyeShapes.transform.translate(-30, -30);
        shapes.add(leftEyeShapes);
        let rightEyeShapes: Group = this.rightEye.shapes();
        rightEyeShapes.transform = rightEyeShapes.transform.translate(10, -30);
        shapes.add(rightEyeShapes);
        return shapes;
    }
}