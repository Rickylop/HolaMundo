console.log('prueba');

//Promesas
const hellowPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) resolve('Hey')
    else { reject('ups') }
  });
}

hellowPromise()
  .then(response => console.log(response))
  .then(() => console.log('hola'))
  .catch(error => console.log(error));

console.log('Luego')