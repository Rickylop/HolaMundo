var preguntas = ['cual es tu nombre? ', 'cuantos annios tienes? ', 'Lenguaje favorito? '];
var respuestas = [];

function pregunta(i) {
    process.stdout.write(preguntas[i]);
}

process.stdin.on('data', function (data) {
    respuestas.push(data.toString().trim());
    console.log('var: ', respuestas.length, preguntas.length);
    if (respuestas.length < preguntas.length) {
        pregunta(respuestas.length);
    } else {
        console.log('Respuestas:');
        for (let index = 0; index < preguntas.length; index++) {
            console.log(`${preguntas[index]}:  ${respuestas[index]}`);
        }
        process.exit();
    }
});

pregunta(0);