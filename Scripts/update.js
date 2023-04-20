const urlDelete = "https://crud-javascript-ff277-default-rtdb.firebaseio.com/pessoas/"
// DIFERENÇA DE PATCH VS PUT
// PATCH MODIFICA APENAS OS ATRIBUTOS ENVIADOS
// PUT MODIFICCA O OBJETO INTEIRO

var editMode = document.getElementById("submit").innerHTML === "Edit Aqui!";

function EnviandoDadosAtuais(id,nameItem,emailItem){
    document.getElementById("email").value = emailItem;
    document.getElementById("name").value = nameItem;

    document.getElementById('submit').setAttribute("data-id", id);
    document.getElementById('submit').innerHTML = "Edit Aqui!";
    editMode = document.getElementById("submit").innerHTML === "Edit Aqui!";
    // console.log(editMode)
}

async function editData(id){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const data ={
        name: name,
        email: email,
    }
    responde = await fetch(`${urlEdit}${id}.json`,{
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res=>{
            PegarDados();
            documents.getElementById("submit").removeAttribute("data-id");
            document.getElementById('email').value="";
            document.getElementById('name').value="";
            document.getElementById('submit').innerText="Cadastrar!";
            editMode= document.getElementById("submit").innerHTML === "Edit Aqui!";
        })
            .catch(err=>cpnsole.log("erro ao editar",err));
}
