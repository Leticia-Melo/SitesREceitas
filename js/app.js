import receitas from "./dbreceitas.js";
let conteinerReceitas=document.querySelector('[data-conteiner-receitas]')
function carregarReceitas(){
    receitas.forEach(item => {
            conteinerReceitas.innerHTML+=` 
            <div class="card-receita">
                    <div class="conteudo-receita">
                        <h1>${item.nome}</h1>
                        <picture class="tumb">
                            <img src="assets/img/${item.tumb}">
                        </picture>
                        <div class="ver-receita">
                            <button>Ver Receita</button>
                        </div>
                    </div>
                </div>
            `    
    });
}
export default carregarReceitas