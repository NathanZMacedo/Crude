const url ="https://crud-javascript-ff277-default-rtdb.firebaseio.com/pessoas.json"

async function PegarDados(){
    const resultado = await fetch(url);
    const resultadoConvertido = await resultado.json();
//  const array = Object.values(resultadoConvertido);
    const arr = Object.entries(resultadoConvertido).map(([id,values])=>({id,...values}));
//  console.log(arr)
//  console.log(array)
//  console.log(resultadoConvertido);
}
PegarDados();