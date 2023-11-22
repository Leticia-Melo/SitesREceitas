import receitas from "./dbreceitas.js";
let buttonHome=document.querySelector('[data-home]')
let buttonDoces=document.querySelector('[data-doces]')
let buttonSalgados=document.querySelector('[data-salgados]')
let conteinerReceitas=document.querySelector('[data-conteiner-receitas]')
let modal=document.querySelector('[data-modal]')
let bodytag=document.body
function carregarReceitas(){
    receitas.forEach(item => {
            conteinerReceitas.innerHTML+=` 
            <div class="card-receita">
                    <div class="conteudo-receita">
                        <h1>${item.nome}</h1>
                        <picture class="thumb">
                            <img src="assets/img/${item.thumb}">
                        </picture>
                        <div class="ver-receita">
                            <button data-btn-modal data-id="${item.id}">Ver Receita</button>
                        </div>
                    </div>
                </div>
            `    
    });
    document.querySelectorAll('[data-btn-modal]').forEach(btn => {
        btn.addEventListener("click",(event)=>{
            const id=event.target.getAttribute('data-id')
            const conteudo=receitas.find(getItem=>getItem.id==id)
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            bodytag.classList.add("hidden-scroll")
            modal.classList.remove("hidden")
            modal.classList.add("show")

            modal.innerHTML=`
            <div class="conteiner-modal">
            <div class="header-modal">
                <h1>${conteudo.nome}</h1>
                <button data-btn-close><i class="fa-solid fa-circle-xmark fa-2x"></i></button>
            </div>
            <div class="conteudo-modal">
                <div class="thumb-modal">
                    <img src="assets/img/img-modal.jpg">
                </div>
                <div class="receita-modal">
                    <div class="ingredientes-modal">
                        <h2>Ingredientes</h2>
                        ${conteudo.ingredientes}
                    </div>
                    <div class="preparo-modal">
                        <h2>Preparo</h2>
                        ${conteudo.preparo}
                    </div>
                </div>
            </div>
        </div>
            `
            document.querySelector('[data-btn-close]').addEventListener("click", ()=>{
                bodytag.classList.remove("hidden-scroll")
                modal.classList.remove("show")
                modal.classList.add("hidden")
            })
        })
    })
    
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
                        <picture class="thumb">
                            <img src="assets/img/${item.thumb}">
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
                        <picture class="thumb">
                            <img src="assets/img/${item.thumb}">
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