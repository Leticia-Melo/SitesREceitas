import receitas from "./dbreceitas.js";
let buttonHome=document.querySelector('[data-home]')
let buttonDoces=document.querySelector('[data-doces]')
let buttonSalgados=document.querySelector('[data-salgados]')
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
buttonHome.addEventListener("click",()=>{
    conteinerReceitas.innerHTML=""
    return carregarReceitas()
})
buttonDoces.addEventListener("click",()=>{
    conteinerReceitas.innerHTML=""
    receitas.forEach(item => {
        if(item.categoria=="doces"){
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
        }
});
})
buttonSalgados.addEventListener("click",()=>{
    conteinerReceitas.innerHTML=""
    receitas.forEach(item => {
        if(item.categoria=="salgados"){
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
        }
});
})
export default carregarReceitas