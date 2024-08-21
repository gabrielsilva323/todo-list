const taskInput = document.getElementById("task-input");
const taskInputId = document.getElementById("task-id");
const listContainer = document.getElementById("task-list");
let respostaAPI = [
    {"id": 1, "descrição": "varrer a sala"}, // 'objeto" (json) //
    {"id": 2, "descricao": "revisar a aula de bd"},
    {"id": 3, "descricao": "lavar a louça"},
    {"id": 4, "descricao": "lavar a roupa"}
]; 

 const tasklist = document.getElementById("");
function init(){
    carregarLista();
}

function carregarLista(){
 let idx = -1;
 listContainer.innerHTML = ''

 while(respostaAPI.length > 0 && ++idx < respostaAPI.length) {
      listContainer.innerHTML += ` <div id="" class="atv">
            <input type="checkbox">
            <p>comprar o boneco do mike walsike</p>
            <div class="botoes">
                <button>
                    <img src="./imagens/lapis.webp" alt="lapis">
                </button>
                <button>
                    <img src="./imagens/lixo.png" alt="lixo">
                </button>
            </div>
        </div>`    
    };
}