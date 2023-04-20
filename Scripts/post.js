function sendData() {

    console.log(editMode);
    if(editMode){
        const id = document.getElementById("submit").getAttribute("data-id")
        editData(id)
        return
    }
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const data ={
        name: name,
        email: email,
    }
    // fetch(url,{argumento})
    // metodos
    // POST envia dados
    // GET recebe dados
    // DELETE deleta os dados
    // PUT subistitue todo o objeto
    // PATCH substitui só os argumentos recebidos
    fetch("https://crud-javascript-ff277-default-rtdb.firebaseio.com/pessoas.json",{
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    })
        .then(resposta => resposta.json())
        .then(data =>{
            console.log(data)
            PegarDados()
        })
        .catch(erro=>console.error(erro))
}