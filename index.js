const { prompt} = require('inquirer')
const fs = require('fs')
const { Circle, Square, Triangle }  = require('./lib/Shapes')
const path = require('path')


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Text: Enter up to three(3) characters.',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Text-color: Enter a color keyword or hexadecimal number.',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Shape Color: Enter a color keyword or hexadecimal number.',
    },
    {
        type: 'list',
        name: 'image',
        message: 'Select which image you would like.',
        choices: ['Circle', 'Square', 'Triangle'],
    },
];
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), "/Examples/", fileName), data)
}

const init = () => {
    prompt(questions)
    .then((responses)=> {
        console.log('Generating SVG file', responses)
        let svgString = ''
        if (responses.image === "Circle") {
            const circle = new Circle(responses.text, responses.textColor, responses.shapeColor)
            svgString = circle.renderStart() + circle.renderShape() + circle.renderText() + circle.renderEnd()
        } else if (responses.image === "Square") {
            const square = new Square(responses.text, responses.textColor, responses.shapeColor)
            svgString = square.renderStart() + square.renderShape() + square.renderText() + square.renderEnd();
            console.log(svgString)
        } else {
            const triangle = new Triangle(responses.text, responses.textColor, responses.shapeColor)
            svgString = triangle.renderStart() + triangle.renderShape() + triangle.renderText() + triangle.renderEnd();
            console.log(svgString)
        }
        writeToFile('logo.svg', svgString)

    })    
}
init();