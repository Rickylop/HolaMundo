
var mensaje = "hola mundo con javacript";

console.log(mensaje);

//otras pruebas de codigo

console.log('prueba');

const hellowPromise = ()=>{
    return new Promise((resolve, reject) =>{
      if(false) resolve('Hey')
      else{reject('ups')}
    });
  }
  
  hellowPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));
  

