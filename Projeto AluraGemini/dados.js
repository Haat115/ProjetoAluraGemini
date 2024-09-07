// Base de dados

let dados = [
    {
        numero: "1",
        titulo: "Café Expresso",
        descricao: "O expresso é mais do que apenas um café forte. É um ritual, uma arte e um sabor intenso em cada gole. Preparado sob alta pressão, a água quente extrai o melhor dos grãos de café moídos finamente, resultando em uma bebida cremosa e aromática. O espresso é a base para muitas outras bebidas como o cappuccino e o latte, e é apreciado por sua complexidade de sabores e a rapidez do preparo.",
        link: "https://pt.wikipedia.org/wiki/Café_expresso",
        ingredientes: "50g de café solúvel, 2 xícaras de açucar refinado, 1 xícara de água filtrada e leite a gosto",
        receita: "Coloque o café, o açúcar e a água em uma batedeira e bata por 7 minutos até formar um creme parecido com sorvete. Para servir, aqueça o leite, adicione 1 colher generosa do creme e mexa até dissolver.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/2/23/Captura_de_Tela_2017-08-30_às_23.42.42.png"
    },

    {
        numero: "2",
        titulo: "Pingado",
        descricao: "O café pingado é uma bebida tradicional brasileira, apreciada por sua simplicidade e sabor único. Preparado com leite quente e um pingo de café, a proporção entre os dois ingredientes varia de acordo com o gosto pessoal de cada um. O resultado é uma bebida cremosa e suave, perfeita para quem busca um café mais leve e menos intenso que o espresso. O pingado é um ícone das padarias e botecos brasileiros, sendo consumido em um tradicional copo de vidro, acompanhado de um pão na chapa.",
        link: "https://pt.wikipedia.org/wiki/Café_com_leite",
        ingredientes: "100ml de leite, 25ml de café coado e açúcar ou adoçante a gosto.",
        receita: "Em uma xícara prepare o café e adoce o a gosto. Esquente o leite até começar a formar bolhas ao redor da panela, despeje o leite em uma prensa francesa e mexa com cuidado até engrossar, quando estiver em uma textura cremosa incline o leite suavemente na xícara de café para que apenas a parte líquida caia na xícara, por último, derrame a espuma sobre o café e sirva.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Coffee_with_milk_%28563800%29.jpg/250px-Coffee_with_milk_%28563800%29.jpg"
    },

    {
        numero: "3",
        titulo: "Latte",
        descricao: "O latte é uma bebida de café italiana que conquistou o mundo por sua cremosidade e sabor equilibrado. Preparado com espresso e leite vaporizado, o latte apresenta uma camada generosa de espuma, que confere à bebida uma textura aveludada. A proporção de café e leite varia, mas geralmente o leite predomina, resultando em um sabor mais suave e cremoso em comparação com outras bebidas à base de espresso. O latte é uma escolha perfeita para quem busca um café com leite saboroso e reconfortante.",
        link: "https://pt.wikipedia.org/wiki/Latte",
        ingredientes: "5ml de xarope de baunilha, 1 xícara de leite, 40ml de café expresso, 1 colher de chá de cobertura a gosto.",
        receita: "Em um copo alto coloque o xarope de baunilha, coloque o leite em um espumador ou prensa italiana e depois coloque o no copo, prepare o café expresso diretamente no copo sobre o leite espumado e decore com a cobertura que você escolheu.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Latte.jpg/250px-Latte.jpg"
    },

    {
        numero: "4",
        titulo: "Cappuccino",
        descricao: "O cappuccino é uma bebida italiana que equilibra perfeitamente o sabor intenso do café espresso com a cremosidade do leite vaporizado e a doçura da espuma. Tradicionalmente, as proporções são iguais: um terço de café espresso, um terço de leite vaporizado e um terço de espuma de leite. Essa combinação resulta em uma bebida aveludada, aromática e com uma camada de espuma densa e persistente. O cappuccino é frequentemente decorado com um pouco de canela em pó ou chocolate ralado, que adicionam um toque especial ao sabor.",
        link: "https://pt.wikipedia.org/wiki/Cappuccino",
        ingredientes: "220g de leite em pó, 40g de café solúvel, 90g de açúcar, 40g de chocolate em pó, 1/2 colher de bicarbonato de sódio, canela em pó a gosto",
        receita: "Reúna todos os ingredientes em um liquidificador e bata até virar um pó bem fininho, despeje com cuidado em um pote bem vedado. Para servir coloque duas colheres do pó em uma xicara de leite quente ou frio.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/A_cappuccino.jpg/220px-A_cappuccino.jpg"
    },

    {
        numero: "5",
        titulo: "Mocha",
        descricao: "O mocha é uma indulgente variação do latte, que combina a riqueza do café espresso com a doçura do chocolate. Essa bebida, originária da cidade de Mocha, no Iêmen, é preparada com espresso, leite vaporizado, xarope de chocolate e, frequentemente, chantilly. O resultado é uma experiência sensorial única, com a harmonia perfeita entre o amargor do café, a cremosidade do leite e a suavidade do chocolate. O mocha é a escolha ideal para quem busca um café com um toque mais doce e indulgente.",
        link: "https://pt.wikipedia.org/wiki/Moca_(café)",
        ingredientes: "1 xícara de leite, 1/4 de uma xícara de café, 2 colheres de sopa de calda de chocolate.",
        receita: "Aqueça o leite mas não deixe o ferver, enquanto isso prepare seu café bem concentrado. Coloque a calda de chocolate no fundo de uma xícara, depeje o café quente sobre a calda de chocolate e mexa bem para combinar, depois despeje o leite sobre a mistura mexendo bem delicadamente.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Mocaccino-Coffee.jpg/200px-Mocaccino-Coffee.jpg"
    },

    {
        numero: "6",
        titulo: "Frapuccino",
        descricao: "O frappuccino é uma bebida gelada e refrescante, perfeita para os dias quentes. Originário dos Estados Unidos, o frappuccino é uma mistura cremosa de café espresso, leite, xarope de sabor, gelo e, muitas vezes, chantilly. Essa combinação resulta em uma bebida espessa e adocicada, com diversas opções de sabores, como caramelo, chocolate e frutas. O frappuccino é uma opção popular entre os jovens e aqueles que buscam um café com um toque mais divertido e moderno.",
        link: "https://pt.wikipedia.org/wiki/Frappuccino",
        ingredientes: "300ml de leite bem gelado, 2 colheres(sopa) de leite em pó, 1 colher(sopa) de café solúvel em pó, 2 colheres(sopa) de açúcar, 2 colheres(sopa) de calda de caramelo, 9 pedras de gelo e chantilly a gosto.",
        receita: "No liquidificador coloque o leite, o leite em pó, o café, o açúcar e o gelo, bata bem e coloque rapidamente no copo, finalize com chantilly e sirva.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Starbucks_frappuccino.JPG/233px-Starbucks_frappuccino.JPG"
    },

    {
        numero: "7",
        titulo: "Iced coffee",
        descricao: "O café gelado é uma bebida versátil e refrescante, perfeita para os dias quentes. Preparado com café coado ou espresso, combinado com leite, gelo e, muitas vezes, adoçantes e outros ingredientes como xaropes e cremes, o café gelado oferece uma experiência sensorial única. Sua versatilidade permite inúmeras variações, desde o clássico café com leite gelado até opções mais elaboradas com sabores exóticos e toppings diversos. O café gelado é uma ótima alternativa para quem busca um café saboroso e energizante, sem abrir mão da refrescância.",
        link: "https://pt.wikipedia.org/wiki/Café_gelado",
        ingredientes: "Leite, 4 pedras de gelo e café.",
        receita: "Coloque as 4 pedras de gelo no fundo da xícara e coloque o leite, depois venha com o café quente, adoce a gosto e sirva.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg/220px-Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg"
    },

    {
        numero: "8",
        titulo: "Espresso Tônica",
        descricao: "O espresso tônica é uma bebida que une o intenso sabor do café espresso à carbonatação da água tônica, resultando em uma experiência única e refrescante. Essa combinação surpreendente cria uma bebida leve e aromática, perfeita para quem busca uma alternativa aos cafés tradicionais. A espresso tônica é servida em camadas, com o espresso sendo adicionado por cima da água tônica gelada, criando um efeito visualmente atraente. Opcionalmente, pode ser adicionado um toque cítrico com limão ou laranja, realçando ainda mais os sabores.",
        link: "https://pt.wikipedia.org/wiki/Espresso_Tônica",
        ingredientes: "200ml de água tônica, 30ml de café, pedras de gelo, 2 fatias de limão.",
        receita: "Adicione as pedras de gelo em um copo junto com as fatias de limão, coloque 200ml de água tônica e em seguida despeje o café gelado em cima da mistura e sirva.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Espresso_and_tonic%2C_COFFEE_CITEN%2C_Akiha%2C_Niigata%2C_Niigata%2C_Japan%2C_May_2023.jpg/250px-Espresso_and_tonic%2C_COFFEE_CITEN%2C_Akiha%2C_Niigata%2C_Niigata%2C_Japan%2C_May_2023.jpg"
    },

    {
        numero: "9",
        titulo: "Café coado",
        descricao: "O café coado é um clássico atemporal, apreciado por sua simplicidade e sabor autêntico. Preparado através da passagem de água quente sobre o pó de café moído e filtrado, o café coado revela os sabores mais puros do grão. Essa metodologia permite apreciar as notas aromáticas e a complexidade de cada tipo de café, tornando-o uma escolha perfeita para os amantes de um café mais artesanal. O café coado é uma bebida versátil, que pode ser apreciada tanto puro como acompanhado de leite, açúcar ou outros complementos, de acordo com o gosto pessoal.",
        link: "https://pt.wikipedia.org/wiki/Café_coado",
        ingredientes: "3 colheres de café, 3 copos americanos de água, açúcar a gosto.",
        receita: "O clássico café, coloque a água em um recipiente e leve a fogo, depois coloque o café em um coador com filtro de papel ou pano sobre o bule, quando a água estiver na fervura sem borbulhas, desligue o fogo e despeje-a vagarosamente no coador.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Café_coado.jpg/220px-Café_coado.jpg"
    }
]


