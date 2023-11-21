const receitas=[ 
    { 
        "id":1,
        "destaque":1,
        "categoria":"doces",
        "nome":"brigadeiro",
        "tumb":"img-brigadeiro.jpg",
        "ingredientes":['1 caixa de leite condensado','1 colher (sopa) de margarina sem sal','7 colheres (sopa) de achocolatado ou 4 colheres (sopa) de chocolate em pó','chocolate granulado'],
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
        "tumb":"img-beijinho.jpg",
        "ingredientes":['2 latas de leite condensado','2 colheres (sopa) de manteiga','300 g de coco fresco ralado (fino)','açúcar cristal','cravos-da-índia a gosto'],
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
        "tumb":"img-mousse-de-limao.jpg",
        "ingredientes":['1 lata de leite condensado','1 lata de creme de leite','1/2 copo (americano) de suco puro de limão','Bis de limão'],
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
        "tumb":"img-gelatina-colorida.jpg",
        "ingrediente":['4 caixas de gelatina (sabores a gosto)','1 lata de leite condensado','1 lata de creme de leite','1 gelatina sabor morango'],
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
        "tumb":"img-queijadinha.jpg",
        "ingrediente":['1 lata de leite condensado','2 gemas peneiradas','3 colheres de queijo ralado','1 xícara de coco ralado'],
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
        "tumb":"img-pe-de-moleque.jpg",
        "ingrediente":['3 xícaras de chá de amendoim crú','2 xícaras de chá de açúcar','1 xícara de chá de Karo','1 colher de chá de bicarbonato de sódio'],
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
        "tumb":"img-panqueca.jpg",
        "ingrediente":['2 xícaras (chá) de farinha de trigo','2 xícaras (chá) de leite','3 ovos','1 pitada de sal'],
        "preparo":`<ul>
        <li>Bata todos os ingredientes no liquidificador por 2 minutos.</li>
        <li>Em seguida desligue e, com uma colher, misture a farinha que grudou no copo do liquidificador.</li>
        <li>Bata novamente só para misturar e reserve.</li>
        <li>Unte a frigideira com um fio de óleo e leve ao fogo até aquecer</li>
        <li>Com o auxílio de uma concha, pegue uma porção de massa e coloque na frigideira, gire a frigideira para espalhar bem a massa.</li>
        <li>Abaixe o fogo e deixe dourar por baixo, em seguida vire do outro lado e deixe dourar, repita o processo com toda a massa.</li>
        </ul>`
    },
    {
        "id":8,
        "destaque":0,
        "categoria":"salgados",
        "nome":"pão",
        "tumb":"img-pao.jpg",
        "ingrediente":['1 copo de água','1 kg de farinha de trigo','1 copo de leite','1 xícara de açúcar','1 xícara de óleo','3 ovos','1 pitada de sal','2 colheres (sopa) de fermento para pão (50g)'],
        "preparo":`<ul>
        <li>Bata todos os ingredientes no liquidificador, exceto a farinha de trigo.</li>
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
        "tumb":"img-pao-de-queijo.jpg",
        "ingrediente":['1 copo de óleo','2 copos de leite','3 ovos','1 kg de polvilho (doce)','2 saquinhos de queijo ralado','1 pitada de sal'],
        "preparo":`<ul>
        <li>Bater no liquidificador todos os ingredientes.</li>
        <li>Como o resultado ficará um tanto líquido, coloque em forminhas (empadinhas) e as forminhas em uma forma maior para levar ao forno, previamente aquecido.</li>
        <li>Desenforme ainda morno (não quente).</li>
        </ul>`
    },
    {
        "id":10,
        "destaque":0,
        "categoria":"salgados",
        "nome":"salpicão de frango",
        "tumb":"img-salpicao.jpg",
        "ingrediente":['500 g de peito de frango cozido e desfiado','2 cenouras grandes raladas','1 lata de ervilha','1 lata de milho verde','200 g de uva passa','1 maçã','maionese a gosto','cheiro-verde a gosto','batata palha a gosto'],
        "preparo":`<ul>
        <li>Misture todos os ingredientes, menos a batata palha.</li>
        <li>Depois de tudo misturado, forre com a batata palha.</li>
        <li>Depois, e só servir.</li>
        </ul>`
    },
    {
        "id":11,
        "destaque":0,
        "categoria":"salgados",
        "nome":"molho branco",
        "tumb":"img-molho-branco.jpg",
        "ingrediente":['2 xícaras de leite','2 colheres (sopa) de manteiga','2 colheres (sopa) de farinha de trigo','sal a gosto','noz-moscada a gosto','pimenta-do-reino branca a gosto'],
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
        "tumb":"img-feijao-tropeiro.jpg",
        "ingrediente":['150 g de bacon picadinho','250 g de linguiça calabresa picadinha','1 xícara (café) de azeite','2 cebolas picadinhas','6 dentes de alho amassados','500 g de feijão cozido e escorrido','1 cubo de caldo de bacon','4 ovos fritos inteiros e picadinhos','cheiro-verde a gosto','1 e 1/2 colher de farinha de mandioca crua','sal a gosto','pimenta a gosto'],
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