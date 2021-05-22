//npm install -g typescript 
//npm install -g ts-node
//tsc --version  (4.2.4)
//tsc nombreArchivo.ts       si requerimos crear el archivo .js

//tsc --init
//solo teniendo el archivo de configuracion del comando anterior podemos ejecutar (tsc -w) para convertir automaticamente a js

/*      para la extencion code runner SOLO necesitamos instalar ts-node y adicionar en la configuracion

        "code-runner.executorMap": {
            "typescript": "/home/ricardo/.nvm/versions/node/v14.16.1/bin/ts-node",
            
        },
*/

let mensaje: string = "hola mundo con typescript";

console.log(mensaje);
