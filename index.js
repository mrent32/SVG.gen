import inquirer from "inquirer";
import fs from "fs";
import Shape from "./lib/generateShapes.js";


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Text: Enter up to three(3) characters',
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'Text-color: Enter a color keyword or hexadecimal number',
    },
    {
        type: 'input',
        name: 'shape',
        message: 'Shape Color: Enter a color keyword or hexadecimal number',
    },
    {
        type: 'checkbox',
        name: 'image',
        message: 'Select which image you would like.',
        choices: ['Circle,', 'Square', 'Triangle'],
    },
];
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

const init = () => {
    inquirer.prompt(questions)
    .then((responses)=> {
        console.log('Generating SVG file')
        writeToFile('./SVG.png', Shape)
    })    
}