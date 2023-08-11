const inquirer = require('inquirer')

function multi(tabla) {

}

inquirer.prompt({
    name: 'color',
    message: 'what is yout favorite color',
    default: 'red'
}).then(rst => {
    console.log('respuesta', rst);
    for (let index = 1; index < 11; index++) {
        console.log(rst.color, ' x ', index, ' = ', rst.color * index);

    }
})