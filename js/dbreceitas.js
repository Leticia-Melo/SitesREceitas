const receitas=[ 
    { 
        "id":1,
        "destaque":0,
        "categoria":"doces",
        "nome":"brigadeiro",
        "thumb":"img-brigadeiro.jpg",
        "ingredientes":`<ul>
        <li>1 caixa de leite condensado</li>
        <li>1 colher (sopa) de margarina sem sal</li>
        <li>7 colheres (sopa) de achocolatado ou 4 colheres (sopa) de chocolate em pó</li>
        <li>chocolate granulado</li>
        </ul>`,
        "preparo":`<ul>
        <li>Em uma panela funda, acrescente o leite condensado, a margarina e o chocolate em pó.</li>
        <li>Cozinhe em fogo médio e mexa até que o brigadeiro comece a desgrudar da panela.</li>
        <li>Deixe esfriar e faça pequenas bolas com a mão passando a massa no chocolate granulado.</li>
        </ul>`
    },
    { 
        "id":2,
        "destaque":0,
        "categoria":"doces",
        "nome":"beijinho",
        "thumb":"img-beijinho.jpg",
        "ingredientes":`<ul>
        <li>2 latas de leite condensado</li>
        <li>2 colheres (sopa) de manteiga</li>
        <li>300 g de coco fresco ralado (fino)</li>
        <li>açúcar cristal</li>
        <li>cravos-da-índia a gosto</li>
        </ul>`,
        "preparo":`<ul>
        <li>Numa panela, misture o leite condensado, a manteiga e o coco ralado.</li>
        <li>Leve ao fogo e misture por aproximadamente 15 minutos.</li>
        <li>Retire a mistura do fogo e deixe amornar.</li>
        <li>Modele a massa em formato de bolinhas, passe pelo açúcar cristal ou coco ralado e finalize com cravos-da-índia.</li>
        </ul>`
    },
    { 
        "id":3,
        "destaque":0,
        "categoria":"doces",
        "nome":"mousse de limão",
        "thumb":"img-mousse-de-limao.jpg",
        "ingredientes":`<ul>
        <li>1 lata de leite condensado</li>
        <li>1 lata de creme de leite</li>
        <li>1/2 copo (americano) de suco puro de limão</li>
        <li>Bis de limão</li>
        </ul>`,
        "preparo":`<ul>
        <li>No liquidificador, bata o leite condensado e o creme de leite por 3 minutos.</li>
        <li>Acrescente aos poucos o suco de limão e continue batendo.</li>
        <li>Despeje o mousse em um refratário e leve à geladeira.</li>
        <li>Na hora de servir, triture o bis e coloque por cima do mousse para decorar.</li>
        </ul>`
    },
    { 
        "id":4,
        "destaque":0,
        "categoria":"doces",
        "nome":"gelatina colorida",
        "thumb":"img-gelatina-colorida.jpg",
        "ingredientes":`<ul>
        <li>4 caixas de gelatina (sabores a gosto)</li>
        <li>1 lata de leite condensado</li>
        <li>1 lata de creme de leite</li>
        <li>1 gelatina sabor morango</li>
        </ul>`,
        "preparo":`<ul>
        <li>Prepare as 4 caixas de gelatina separadas de acordo com as instruções do fabricante, corte em quadradinhos e leve à geladeira.</li>
        <li>Bata no liquidificador o leite condensado, o creme de leite e a gelatina sabor morango dissolvida em 1 copo de água fria e 1 copo de água quente, por aproximadamente 5 minutos.</li>
        <li>Misture este creme na gelatina colorida, misture e leve à geladeira até obter uma consistência firme.</li>
        </ul>`
    },
    {
        "id":5,
        "destaque":0,
        "categoria":"doces",
        "nome":"queijadinha",
        "thumb":"img-queijadinha.jpg",
        "ingredientes":`<ul>
        <li>1 lata de leite condensado</li>
        <li>2 gemas peneiradas</li>
        <li>3 colheres de queijo ralado</li>
        <li>1 xícara de coco ralado</li>
        </ul>`,
        "preparo":`<ul>
        <li>Misturar o leite condensado com as gemas, até o creme ficar consistente.</li>
        <li>Colocar no creme, o queijo e o coco.</li>
        <li>Assar em forminhas forradas com papel manteiga por 30 minutos.</li>
        </ul>`
    },
    {
        "id":6,
        "destaque":0,
        "categoria":"doces",
        "nome":"pé de moleque",
        "thumb":"img-pe-de-moleque.jpg",
        "ingredientes":`<ul>
        <li>3 xícaras de chá de amendoim cru</li>
        <li>2 xícaras de chá de açúcar</li>
        <li>1 xícara de chá de Karo</li>
        <li>1 colher de chá de bicarbonato de sódio</li>
        </ul>`,
        "preparo":`<ul>
        <li>Em recipiente fundo, mistura-se o amendoim, o açúcar e o Karo, leva-se ao forno por 10 minutos em potência alta, mexendo algumas vezes.</li>
        <li>Retiro do microondas acrescente o bicarbonato, mexa e despeje imediatamente em pedra mármore untada com margarina.Deixe esfriar e quebre em pedaços.</li>
        </ul>`
    },
    {
        "id":7,
        "destaque":0,
        "categoria":"salgados",
        "nome":"massa de panqueca",
        "thumb":"img-panqueca.jpg",
        "ingredientes":`<ul>
        <li>2 xícaras (chá) de farinha de trigo</li>
        <li>2 xícaras (chá) de leite</li>
        <li>3 ovos</li>
        <li>1 pitada de sal</li>
        </ul>`,
        "preparo":`<ul>
        <li>Bata todos os ingredientess no liquidificador por 2 minutos.</li>
        <li>Em seguida desligue e, com uma colher, misture a farinha que grudou no copo do liquidificador.</li>
        <li>Bata novamente só para misturar e reserve.</li>
        <li>Unte a frigideira com um fio de óleo e leve ao fogo até aquecer</li>
        <li>Com o auxílio de uma concha, pegue uma porção de massa e coloque na frigideira, gire a frigideira para espalhar bem a massa.</li>
        <li>Abaixe o fogo e deixe dourar por baixo, em seguida vire do outro lado e deixe dourar, repita o processo com toda a massa.</li>
        </ul>`
    },
    {
        "id":8,
        "destaque":1,
        "categoria":"salgados",
        "nome":"pão",
        "thumb":"img-pao.jpg",
        "ingredientes":`<ul>
        <li>1 copo de água</li>
        <li>1 kg de farinha de trigo</li>
        <li>1 copo de leite</li>
        <li>1 xícara de açúcar</li>
        <li>1 xícara de óleo</li>
        <li>3 ovos</li>
        <li>1 pitada de sal</li>
        <li>2 colheres (sopa) de fermento para pão (50g)</li>
        </ul>`,
        "preparo":`<ul>
        <li>Bata todos os ingredientess no liquidificador, exceto a farinha de trigo.</li>
        <li>Despeje numa vasilha grande e coloque a farinha aos poucos, mexendo bem até ficar em ponto de uma massa mole.</li>
        <li>Coloque numa assadeira bem grande untada com margarina para crescer.</li>
        <li>Tempo para crescer a massa: 1 hora.</li>
        <li>Asse até dourar, em forno médio, por aproximadamente 50 minutos.</li>
        </ul>`
    },
    {
        "id":9,
        "destaque":0,
        "categoria":"salgados",
        "nome":"pão de queijo",
        "thumb":"img-pao-de-queijo.jpg",
        "ingredientes":`<ul>
        <li>1 copo de óleo</li>
        <li>2 copos de leite</li>
        <li>3 ovos</li>
        <li>1 kg de polvilho (doce)</li>
        <li>2 saquinhos de queijo ralado</li>
        <li>1 pitada de sal</li>
        </ul>`,
        "preparo":`<ul>
        <li>Bater no liquidificador todos os ingredientess.</li>
        <li>Como o resultado ficará um tanto líquido, coloque em forminhas (empadinhas) e as forminhas em uma forma maior para levar ao forno, previamente aquecido.</li>
        <li>Desenforme ainda morno (não quente).</li>
        </ul>`
    },
    {
        "id":10,
        "destaque":0,
        "categoria":"salgados",
        "nome":"salpicão de frango",
        "thumb":"img-salpicao.jpg",
        "ingredientes":`<ul>
        <li>500 g de peito de frango cozido e desfiado</li>
        <li>2 cenouras grandes raladas</li>
        <li>1 lata de ervilha</li>
        <li>1 lata de milho verde</li>
        <li>200 g de uva passa</li>
        <li>1 maçã</li>
        <li>maionese a gosto</li>
        <li>cheiro-verde a gosto</li>
        <li>batata palha a gosto</li>
        </ul>`,
        "preparo":`<ul>
        <li>Misture todos os ingredientess, menos a batata palha.</li>
        <li>Depois de tudo misturado, forre com a batata palha.</li>
        <li>Depois, e só servir.</li>
        </ul>`
    },
    {
        "id":11,
        "destaque":0,
        "categoria":"salgados",
        "nome":"molho branco",
        "thumb":"img-molho-branco.jpg",
        "ingredientes":`<ul>
        <li>2 xícaras de leite</li>
        <li>2 colheres (sopa) de manteiga</li>
        <li>2 colheres (sopa) de farinha de trigo</li>
        <li>sal a gosto</li>
        <li>noz-moscada a gosto</li>
        <li>pimenta-do-reino branca a gosto</li>
        </ul>`,
        "preparo":`<ul>
        <li>Ferva o leite.</li>
        <li>Derreta a manteiga, junte a farinha e mexa bem até obter uma pasta homogênea.</li>
        <li>Aos poucos, acrescente o leite e bata, constantemente, para não empelotar.</li>
        <li>Deixe cozinhar por alguns minutos e tempere com sal, noz-moscada e pimenta.</li>
        </ul>`
    },
    {
        "id":12,
        "destaque":0,
        "categoria":"salgados",
        "nome":"feijão tropeiro",
        "thumb":"img-feijao-tropeiro.jpg",
        "ingredientes":`<ul>
        <li>150 g de bacon picadinho</li>
        <li>250 g de linguiça calabresa picadinha</li>
        <li>1 xícara (café) de azeite</li>
        <li>2 cebolas picadinhas</li>
        <li>6 dentes de alho amassados</li>
        <li>500 g de feijão cozido e escorrido</li>
        <li>1 cubo de caldo de bacon</li>
        <li>4 ovos fritos inteiros e picadinhos</li>
        <li>cheiro-verde a gosto</li>
        <li>1 e 1/2 colher de farinha de mandioca crua</li>
        <li>sal a gosto</li>
        <li>pimenta a gosto</li>
        </ul>`,
        "preparo":`<ul>
        <li>Coloque o azeite em uma panela e frite o bacon e a linguiça separadamente, depois reserve.</li>
        <li>Na mesma panela, frite a cebola e o alho, junte o feijão escorrido e o caldo de bacon.</li>
        <li>Junte novamente o bacon e a linguiça, acrescente a farinha de mandioca e os ovos fritos picadinhos.</li>
        <li>Acrescente bastante cheiro-verde.</li>
        <li>Acerte o sal e a pimenta e está pronto para servir.</li>
        </ul>`
    }
]
export default receitas