function inputBook() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookName = urlParams.get("input");

    switch(bookName) {
        case 'ODDAF': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "O diário de Anne Frank"; // coloca o nome do livro

            var bookImg =  "images/Home/home-acclaimed-anne.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "25 de junho de 1947";
            document.getElementById("book-genre").innerHTML = "Guerra";
            document.getElementById("book-author").innerHTML = "Anne Frank (biografia)";

            var firstStar =  "/images/Book/rating-set-star.png";
            var setFirstStar = document.getElementById("star-1");
            setFirstStar.setAttribute("src", firstStar);
            var secondStar =  "/images/Book/rating-set-star.png";
            var setSecondStar = document.getElementById("star-2");
            setSecondStar.setAttribute("src", secondStar);
            var thirdStar =  "/images/Book/rating-set-star.png";
            var setThirdStar = document.getElementById("star-3");
            setThirdStar.setAttribute("src", thirdStar);
            var fourthStar =  "/images/Book/rating-set-star.png";
            var setFourthStar = document.getElementById("star-4");
            setFourthStar.setAttribute("src", fourthStar);
            var fifthStar =  "/images/Book/rating-unset-star.png";
            var setFifthStar = document.getElementById("star-5");
            setFifthStar.setAttribute("src", fifthStar);

            // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
            // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
            // por exemplo: 3 (set,set,set,unset,unset)
            // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

            document.getElementById("book-text").innerHTML = "O diário de Anne Frank, o depoimento da pequena Anne, morta pelos nazistas após passar anos escondida no sótão de uma casa em Amsterdã, ainda hoje emociona leitores no mundo inteiro. Suas anotações narram os sentimentos, os medos e as pequenas alegrias de uma menina judia que, como sua família, lutou em vão para sobreviver ao Holocausto. Uma poderosa lembrança dos horrores de uma guerra, um testemunho eloquente do espírito humano. Assim podemos descrever os relatos feitos por Anne em seu diário. Isolados do mundo exterior, os Frank enfrentaram a fome, o tédio e a terrível realidade do confinamento, além da ameaça constante de serem descobertos. Nas páginas de seu diário, Anne Frank registra as impressões sobre esse longo período no esconderijo. Alternando momentos de medo e alegria, as anotações se mostram um fascinante relato sobre a coragem e a fraqueza humanas e, sobretudo, um vigoroso autorretrato de uma menina sensível e determinada. A príncipio, escreveu seu diário apenas para si.";

            var bookLinkAmazon = "https://www.amazon.com.br/di%C3%A1rio-Anne-Frank/dp/8501044458";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/o-diario-de-anne-frank--edicao-oficial---capa-dura-/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/anne-frank/o-diario-de-anne-frank/2686125746?show_suggestion=0"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "416";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "jun, 1947";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Record";
            document.getElementById("book-height").innerHTML = "20 x 12.8 x 0.8 cm";
            document.getElementById("book-kid").innerHTML = "10 - 16 a"; // idade

            document.getElementById("rese-1-name").innerHTML = "Minha vida Literária";

            var bookLinkRese1 = "https://www.minhavidaliteraria.com.br/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "O fato de ser o relato de uma adolescente fez toda a diferença, pois Anne depositou em seus escritos toda sinceridade e entrega próprias dessa fase da vida, mostrando-se como uma menina extremante inteligente e cheia de ideias bem articuladas e à frente do seu tempo. Em meio a todo o sofrido contexto histórico da época, conhecemos de perto os gostos, hábitos, qualidades e defeitos de Anne e das pessoas que ficaram isoladas com ela. Desse modo, o livro não é só um relato sobre os terríveis acontecimentos envolvendo o período da Segunda Guerra Mundial, mas também sobre a inocência roubada de uma menina que queria apenas viver sua vida e concretizar seus objetivos, de uma família que viveu o medo diário da morte, de uma história real e triste que poderia ser contada de várias formas, mas essa certamente foi uma das mais incríveis e realistas, pois saiu das mãos de quem a viveu e de quem sentiu na pele o lastro de terror que o nazismo deixou.";
            

            document.getElementById("rese-2-name").innerHTML = "Resenhas à la carte";

            var bookLinkRese2 = "https://resenhasalacarte.com.br/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "O Diário de Anne Frank foi um livro que me surpreendeu. É um clássico tão comentado e eu nem fazia ideia de que era tão bom. Nunca pensei que o diário de uma menina de 13 anos fosse mexer tanto comigo mas, ao terminar as últimas páginas, fiquei muito tempo pensando na Anne e em tudo o que ela passou. Em seu diário, escrito entre 1943 e 1945, Anne relata todo o período em que ficou refugiada com sua família e outros judeus em um esconderijo, chamado de Anexo Secreto. Lá, eles dividiam as tarefas de casa, e tentavam sobreviver em “harmonia”, tomando todas as precauções para não serem vistos e delatados para a polícia alemã. A última carta é, com certeza, a mais bonita e profunda, o que nos deixa ainda mais sensíveis e abalados, já que ela não conseguiu continuar a escrever. O posfácio me fez chorar e pensar em tudo o que aquelas pessoas tiveram que enfrentar durante a Segunda Guerra. E o mais triste ainda é saber que milhares pelo mundo ainda sofrem com guerras, pobreza, fome, doenças e todo tipo de desgraça. Não dá para ler Anne Frank sem pensar “eu nunca mais vou reclamar na minha vida“.";
            break; // ´é switch case precisa ter no final

            case 'V': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Verity"; // coloca o nome do livro

            var bookImg =  "images/Home/home-acclaimed-verity.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "9 de março de 2020";
            document.getElementById("book-genre").innerHTML = "Romance";
            document.getElementById("book-author").innerHTML = "Colleen Hoover";

            var firstStar =  "/images/Book/rating-set-star.png";
            var setFirstStar = document.getElementById("star-1");
            setFirstStar.setAttribute("src", firstStar);
            var secondStar =  "/images/Book/rating-set-star.png";
            var setSecondStar = document.getElementById("star-2");
            setSecondStar.setAttribute("src", secondStar);
            var thirdStar =  "/images/Book/rating-set-star.png";
            var setThirdStar = document.getElementById("star-3");
            setThirdStar.setAttribute("src", thirdStar);
            var fourthStar =  "/images/Book/rating-set-star.png";
            var setFourthStar = document.getElementById("star-4");
            setFourthStar.setAttribute("src", fourthStar);
            var fifthStar =  "/images/Book/rating-set-star.png";
            var setFifthStar = document.getElementById("star-5");
            setFifthStar.setAttribute("src", fifthStar);

            // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
            // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
            // por exemplo: 3 (set,set,set,unset,unset)
            // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

            document.getElementById("book-text").innerHTML = "Verity Crawford é a autora best-seller por trás de uma série de sucesso. Ela está no auge de sua carreira, aclamada pela crítica e pelo público, no entanto, um súbito e terrível acidente acaba interrompendo suas atividades, deixando-a sem condições de concluir a história... E é nessa complexa circunstância que surge Lowen Ashleigh, uma escritora à beira da falência convidada a escrever, sob um pseudônimo, os três livros restantes da já consolidadaPara que consiga entender melhor o processo criativo de Verity com relação aos livros publicados e, ainda, tentar descobrir seus possíveis planos para os próximos, Lowen decide passar alguns dias na casa dos Crawford, imersa no caótico escritório de Verity - e, lá, encontra uma espécie de autobiografia onde a escritora narra os fatos acontecidos desde o dia em que conhece Jeremy, seu marido, até os instantes imediatamente anteriores a seu acidente - incluindo sua perspectiva sobre as tragédias ocorridas às filhas do casal. Quanto mais o tempo passa, mais Lowen se percebe envolvida em uma confusa rede de mentiras e segredos, e, lentamente, adquire sua própria posição no jogo psicológico que rodeia aquela casa. Emocional e fisicamente atraída por Jeremy, ela precisa decidir: expor uma versão que nem ele conhece sobre a própria esposa ou manter o sigilo dos escritos de Verity?";

            var bookLinkAmazon = "https://www.amazon.com.br/Verity-Colleen-Hoover/dp/8501117846#detailBullets_feature_div";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/verity/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/colleen-hoover/verity/870456660"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "320";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "9 março 2020";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Galera";
            document.getElementById("book-height").innerHTML = "13.5 x 1.7 x 21 cm";
            document.getElementById("book-kid").innerHTML = "+18 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "Minha vida Literária";

            var bookLinkRese1 = "https://www.minhavidaliteraria.com.br/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "3,5 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Apesar de ter achado a leitura bastante fluida e, no geral, ter gostado dela, Verity não foi para mim tão impactante quanto para muitos outros leitores. Achei as resoluções finais com pontas abertas e explicações pouco convincentes, além de já ter imaginado parte da reviravolta final. Minha sensação foi a de que havia uma tentativa muito esforçada em fazer o leitor acreditar em uma verdade e, com isso, ela se enfraqueceu para mim. Contudo, o final aberto da história me soou positivo, justamente por possibilitar a dúvida e, em consequência, intensificar o significado de tudo o que aconteceu anteriormente.";
            

            document.getElementById("rese-2-name").innerHTML = "Gnoma Leitora";

            var bookLinkRese2 = "http://www.gnomaleitora.com.br/2022/01/resenha-verity-colleen-hoover.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "As cenas vão se desenrolando e nos deixando sem fôlego. A Lowen se questiona em vários momentos se está tendo um surto, já que ela tem episódios de sonambulismo, e inventando situações em sua cabeça. Com isso, ela se torna uma narradora não confiável. Confesso que durante a leitura fui imaginando várias coisas, mas nada me prepararia para o final arrebatador. As páginas finais são repletas de reviravoltas, e quando achamos que tudo se resolveu, a Colleen joga mais uma bomba em nosso colo. SURTOS E SURTOS!";
            break; // ´é switch case precisa ter no final

            case 'OSMDEH': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Os sete maridos de Evelyn Hugo"; // coloca o nome do livro

            var bookImg =  "images/Home/home-acclaimed-evelyn.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "21 de outubro de 2019";
            document.getElementById("book-genre").innerHTML = "LGBTQIA+";
            document.getElementById("book-author").innerHTML = "Taylor Jenkins Reid";

            var firstStar =  "/images/Book/rating-set-star.png";
            var setFirstStar = document.getElementById("star-1");
            setFirstStar.setAttribute("src", firstStar);
            var secondStar =  "/images/Book/rating-set-star.png";
            var setSecondStar = document.getElementById("star-2");
            setSecondStar.setAttribute("src", secondStar);
            var thirdStar =  "/images/Book/rating-set-star.png";
            var setThirdStar = document.getElementById("star-3");
            setThirdStar.setAttribute("src", thirdStar);
            var fourthStar =  "/images/Book/rating-set-star.png";
            var setFourthStar = document.getElementById("star-4");
            setFourthStar.setAttribute("src", fourthStar);
            var fifthStar =  "/images/Book/rating-set-star.png";
            var setFifthStar = document.getElementById("star-5");
            setFifthStar.setAttribute("src", fifthStar);

            // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
            // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
            // por exemplo: 3 (set,set,set,unset,unset)
            // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

            document.getElementById("book-text").innerHTML = "Com todo o esplendor que só a Hollywood do século passado pode oferecer, esta é uma narrativa inesquecível sobre os sacrifícios que fazemos por amor, o perigo dos segredos e o preço da fama. Lendária estrela de Hollywood, Evelyn Hugo sempre esteve sob os holofotes ― seja estrelando uma produção vencedora do Oscar, protagonizando algum escândalo ou aparecendo com um novo marido… pela sétima vez. Agora, prestes a completar oitenta anos e reclusa em seu apartamento no Upper East Side, a famigerada atriz decide contar a própria história ― ou sua “verdadeira história” ―, mas com uma condição: que Monique Grant, jornalista iniciante e até então desconhecida, seja a entrevistadora. Ao embarcar nessa misteriosa empreitada, a jovem repórter começa a se dar conta de que nada é por acaso ― e que suas trajetórias podem estar profunda e irreversivelmente conectadas.";

            var bookLinkAmazon = "https://www.amazon.com.br/Os-sete-maridos-Evelyn-Hugo/dp/8584391509";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/os-sete-maridos-de-evelyn-hugo/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/taylor-jenkins-reid/os-sete-maridos-de-evelyn-hugo/42887747"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "360";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "21 outubro 2019";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Paralela";
            document.getElementById("book-height").innerHTML = "22.8 x 15.6 x 2 cm";
            document.getElementById("book-kid").innerHTML = "+16 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "Beco Literário";

            var bookLinkRese1 = "https://becoliterario.com/resenha-os-sete-maridos-de-evelyn-hugo-taylor-jenkins-reid/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Só posso dizer que Os sete maridos de Evelyn Hugo me surpreendeu positivamente. É um livro que tem representatividade racial, sexual e nos mostra, no decorrer dos anos, o quanto cada uma dessas lutas teve que avançar para chegar no que é hoje. E, além disso, nos mostra o valor da perseverança e os custos da fama. Sim, admiro Evelyn Hugo e depois dessa leitura, sinto que sou um pouquinho mais confiante com relação aos meus sonhos. Dou todo o céu de estrelas.";
            

            document.getElementById("rese-2-name").innerHTML = "Amor por Livros";

            var bookLinkRese2 = "https://www.amorporlivros.com.br/resenha-os-sete-maridos-evelyn-hugo/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "4,5 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Depois da metade, os altos e baixos dão uma desacelerada e a história foca em uma parte específica do romance que eu, particularmente, achei um pouco enrolada demais. É um tal de vai e volta que eu gostaria que tivesse sido mais rápido, apesar da beleza do amor que Evelyn demonstra. Mesmo considerando os pontos negativos que comentei, foi uma boa leitura. A escritora faz uma construção de personagem de uma forma que me deixou admirada. Também o livro tem uma forte mensagem sobre a sexualidade e bissexualidade. Mesmo hoje sendo mais fácil falar sobre isso, na época era ainda pior, com consequências ainda mais duras, e isso fica muito explícito na história. Fora também sobre toda a relação de machismo. Enquanto Evelyn era assediada, quem sofria as consequências era sempre ela. E porque ela tinha um objetivo em mente, ela tolerou muito daquelas coisas.";
            break; // ´é switch case precisa ter no final

            case 'QNEO': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Quando ninguém está olhando"; // coloca o nome do livro

            var bookImg =  "images/Home/home-acclaimed-looking.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "19 de novembro de 2021";
            document.getElementById("book-genre").innerHTML = "Suspense";
            document.getElementById("book-author").innerHTML = "Alyssa Cole";

            var firstStar =  "/images/Book/rating-set-star.png";
            var setFirstStar = document.getElementById("star-1");
            setFirstStar.setAttribute("src", firstStar);
            var secondStar =  "/images/Book/rating-set-star.png";
            var setSecondStar = document.getElementById("star-2");
            setSecondStar.setAttribute("src", secondStar);
            var thirdStar =  "/images/Book/rating-set-star.png";
            var setThirdStar = document.getElementById("star-3");
            setThirdStar.setAttribute("src", thirdStar);
            var fourthStar =  "/images/Book/rating-set-star.png";
            var setFourthStar = document.getElementById("star-4");
            setFourthStar.setAttribute("src", fourthStar);
            var fifthStar =  "/images/Book/rating-unset-star.png";
            var setFifthStar = document.getElementById("star-5");
            setFifthStar.setAttribute("src", fifthStar);

            // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
            // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
            // por exemplo: 3 (set,set,set,unset,unset)
            // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

            document.getElementById("book-text").innerHTML = "Sydney Green nasceu e foi criada no Brooklyn, em Nova York, mas cada vez que ela pisca os olhos seu amado bairro parece mudar. Condomínios se espalham como erva daninha, placas de “vende-se” surgem da noite para o dia e os vizinhos que ela conhece a vida toda estão sumindo. Para manter de pé tanto o passado quanto o presente da comunidade, Sydney decide canalizar sua frustração planejando um passeio guiado em que pretende contar a verdadeira história do local. Só que, para tornar o projeto realidade, vai precisar aturar seu novo vizinho, Theo, como assistente. A pesquisa dos dois, entretanto, logo se transforma. O que era apenas uma distração vira uma história de paranoia e medo. No fim das contas, talvez os vizinhos não tenham se mudado para outros bairros e a revitalização do lugar seja mais mortal do que eles imaginaram. Seriam apenas coincidências ou sinais de uma grande conspiração? Sydney pode confiar em Theo, ou ela também corre o risco de desaparecer? Quando ninguém está olhando nos conduz por um enredo hipnotizante e surpreendente, que aborda com perspicácia a violência racial e as assimetrias sociais, em uma sequência de eventos instigantes que aos poucos dão forma a um cenário de completo horror.";

            var bookLinkAmazon = "https://www.amazon.com.br/Quando-Ningu%C3%A9m-Est%C3%A1-Olhando-Alyssa/dp/6555602090";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/alyssa-cole/quando-ninguem-esta-olhando/4026818029"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "400";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "19 novembro 2021";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Intrínseca";
            document.getElementById("book-height").innerHTML = "14 x 2.1 x 21 cm";
            document.getElementById("book-kid").innerHTML = "+14 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "Além do Livro";

            var bookLinkRese1 = "https://alemdolivro.com/2022/05/17/resenha-de-quando-ninguem-esta-olhando-alyssa-cole/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Meu aspecto preferido de Quando ninguém está olhando foi a crítica racial e social. A situação que acompanhamos na história apenas escancara o processo de gentrificação que atinge várias regiões na vida real. E o mais triste é saber que “melhorar um bairro” quase sempre significa gerar lucros para grandes corporações a partir do apagamento de uma comunidade e do prejuízo à população de baixa renda – o que, por sua vez, aumenta ainda mais os abismos da desigualdade social. Quando ninguém está olhando também aborda o racismo (e em especial, o estrutural) de maneira bastante atual e didática. E atrelado à questão da gentrificação, faz um paralelo à colonização, mostrando como os brancos sempre partem do pressuposto que são os donos de tudo. Não à toa, é impossível ler o livro de Cole não lembrar do filme Corra!, de Jordan Peele, e da série Eles, disponível no Prime Video.";
            

            document.getElementById("rese-2-name").innerHTML = "Papo Afro";

            var bookLinkRese2 = "https://www.papoafro.com.br/2022/05/blog-post_02.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Bom, “Quando ninguém está olhando” é um thriller que eu considero um pouco de terror psicológico. Foi impossível parar de ler uma vez que comecei, pois os acontecimentos simplesmente me deixavam curiosa para saber o que ia acontecer. Vez ou outra o leitor não sabia se a Sydney estava vendo coisas reais ou tendo alucinações provocadas pelo medo, pela paranoia. E pensando no racismo como um fenômeno social muito real, é realmente uma história completamente aterrorizante, porque quando fechamos as páginas do livro, sabemos que são coisas que acontecem e continuam acontecendo. A autora foi completamente perspicaz na condução dessa obra. Ela tem uma escrita muito envolvente e consegue fazer mistério e surpreender. Alyssa Cole não é nada óbvia e isso foi o mais interessante de ver e acompanhar nesse livro. Indico a leitura fortemente, porém recomendo que pessoas negras, em especial, se preparem psicologicamente para embarcar nessa jornada, porque é um conteúdo que pode facilmente se tornar um gatilho. Me apaixonei tanto pela autora que fiquei morrendo de vontade de ler mais obras dela. É simplesmente uma das histórias mais geniais que já li de ficção com temática sócio-racial.";
            break; // ´é switch case precisa ter no final
            
            case 'WEH': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Querido Evan Hansen"; // coloca o nome do livro

            var bookImg =  "images/Home/home-acclaimed-hansen.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "26 de abril de 2019";
            document.getElementById("book-genre").innerHTML = "Drama";
            document.getElementById("book-author").innerHTML = "Val Emmich, Steven Levenson, Justin Paul e Benj Pasek";

            var firstStar =  "/images/Book/rating-set-star.png";
            var setFirstStar = document.getElementById("star-1");
            setFirstStar.setAttribute("src", firstStar);
            var secondStar =  "/images/Book/rating-set-star.png";
            var setSecondStar = document.getElementById("star-2");
            setSecondStar.setAttribute("src", secondStar);
            var thirdStar =  "/images/Book/rating-set-star.png";
            var setThirdStar = document.getElementById("star-3");
            setThirdStar.setAttribute("src", thirdStar);
            var fourthStar =  "/images/Book/rating-set-star.png";
            var setFourthStar = document.getElementById("star-4");
            setFourthStar.setAttribute("src", fourthStar);
            var fifthStar =  "/images/Book/rating-unset-star.png";
            var setFifthStar = document.getElementById("star-5");
            setFifthStar.setAttribute("src", fifthStar);

            // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
            // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
            // por exemplo: 3 (set,set,set,unset,unset)
            // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

            document.getElementById("book-text").innerHTML = "Evan Hansen sempre teve muita dificuldade de fazer amigos. Para mudar isso, decide seguir as recomendações de seu psicólogo e escrever cartas encorajadoras para si mesmo, com esperança de que seu último ano na escola seja um pouco melhor. O que não esperava era que uma das cartas fosse parar nas mãos de Connor Murphy, o aluno mais encrenqueiro da turma. Quando Connor comete suicídio e sua família encontra a carta de Evan, todos começam a pensar que os dois eram melhores amigos. Sem conseguir explicar a situação, Evan acaba refém de uma grande mentira. Ao mesmo tempo, graças a essa (falsa) amizade, o garoto finalmente se aproxima de Zoe, a menina de seus sonhos, e passa a ser notado no colégio. No fundo, Evan sabe que não está fazendo a coisa certa, mas se está ajudando a família de Connor a superar a perda, que mal pode ter? Evan agora tem um propósito de vida. Até que a verdade ameaça vir à tona, e ele precisa enfrentar seu maior inimigo: ele mesmo.";

            var bookLinkAmazon = "https://www.amazon.com.br/Querido-Evan-Hansen-Val-Emmich/dp/8555340837";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/val-emmich/querido-evan-hansen/3857843493"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "336";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "26 abril 2019";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Seguinte";
            document.getElementById("book-height").innerHTML = " 22.8 x 14.6 x 1.8 cm";
            document.getElementById("book-kid").innerHTML = "+14 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "Idris";

            var bookLinkRese1 = "https://idris.com.br/resenhas/2019/06/21/resenha-querido-evan-hansen-val-emmich/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "4,5 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Querido Evan Hansen é um livro baseado no musical da Brodway de mesmo nome, escrito também por Steven Levenson. O livro conta a história de Mark Evan, que prefere ser chamado de Evan, um adolescente solitário cujo a vida é totalmente normal e chata, até que um de seus colegas de classe se suicida e, de repente, ele se vê muito mais envolvido na história do que gostaria, e isso muda toda a sua vida. Não vou mentir para vocês, nunca havia ouvido sequer falar desse musical ou mesmo do livro antes de fazer a leitura, mas só a arte lindinha que a Seguinte fez já chamou minha atenção. O livro trata de diversos assuntos interessantes, ainda mais para pessoas da faixa etária young adult, como depressão, suicídio, solidão, aceitação, paixões platônicas, empatia, e esse foi outros dos motivos pelo qual me conquistou.";
            

            document.getElementById("rese-2-name").innerHTML = "Mais que Livros";

            var bookLinkRese2 = "https://www.maisquelivros.com/2021/12/resenha-querido-evan-hansen-val-emmich.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "A escrita de Val Emmich é muito fluida e envolvente. Neste ano de 2019 eu não consegui ler muitos livros e precisava de histórias que me prendessem logo nas primeiras páginas. E foi o que aconteceu aqui. Comecei a leitura sem pretensão nenhuma e quando dei por mim já estava finalizando o livro, completamente apaixonado. Os personagens dessa história, desde os principais até os coadjuvantes, são a grande alma da narrativa. Evan é um protagonista incrível, mesmo com suas mentiras. Eu entendo completamente suas atitudes, pois foram tomadas pelo coração, não pela razão. Nunca foi sua intenção machucar ninguém, ele só queria trazer paz aos corações partidos. Connor também é um personagem incrível. Temos algumas passagens do livro narradas pelo 'fantasma' do garoto, que acompanha de perto todos os acontecimentos que envolvem sua família após sua morte. Achei essa jogada sensacional e só consigo imaginar como deve ser legal de assistir isso ao vivo.";
            break; // ´é switch case precisa ter no final

        case 'GE': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Garota Exemplar"; // coloca o nome do livro

            var bookImg =  "images/Home/home-acclaimed-girl.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "22 de fevereiro de 2013";
            document.getElementById("book-genre").innerHTML = "Romance";
            document.getElementById("book-author").innerHTML = "Gillian Flynn";

            var firstStar =  "/images/Book/rating-set-star.png";
            var setFirstStar = document.getElementById("star-1");
            setFirstStar.setAttribute("src", firstStar);
            var secondStar =  "/images/Book/rating-set-star.png";
            var setSecondStar = document.getElementById("star-2");
            setSecondStar.setAttribute("src", secondStar);
            var thirdStar =  "/images/Book/rating-set-star.png";
            var setThirdStar = document.getElementById("star-3");
            setThirdStar.setAttribute("src", thirdStar);
            var fourthStar =  "/images/Book/rating-set-star.png";
            var setFourthStar = document.getElementById("star-4");
            setFourthStar.setAttribute("src", fourthStar);
            var fifthStar =  "/images/Book/rating-set-star.png";
            var setFifthStar = document.getElementById("star-5");
            setFifthStar.setAttribute("src", fifthStar);

            // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
            // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
            // por exemplo: 3 (set,set,set,unset,unset)
            // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

            document.getElementById("book-text").innerHTML = "Agora, a trama sobre o casamento que sai tragicamente dos eixos chega aos cinemas, numa superprodução da Twentieth Century Fox dirigida por David Fincher (A rede social e Clube da luta) e estrelada por Ben Affleck e Rosamund Pike. O roteiro é assinado pela própria Gillian Flynn. O livro começa no dia do quinto aniversário de casamento de Nick e Amy Dunne, quando a linda e inteligente esposa de Nick desaparece da casa deles às margens do rio Mississippi. Sinais indicam que se trata de um sequestro violento e Nick rapidamente se torna o principal suspeito. Sob pressão da polícia, da mídia e dos ferozmente amorosos pais de Amy, Nick desfia uma série interminável de mentiras, meias verdades e comportamento inapropriado. Ele é evasivo e amargo ― mas seria um assassino? Ao mesmo tempo, passagensdo diário de Amy revelam um casamento tumultuado ― mas ela estaria contando toda a história? Alternando entre os pontos de vista de Nick e Amy, Flynn cria uma aura de dúvidas em que o cenário muda a cada capítulo. À medida que as revelações surgem, fica claro que, se existe alguma verdade nos discursos de Nick e Amy, ela é mais sombria, distorcida e assustadora do que podemos imaginar. Magistralmente bem construído do início ao fim, Garota exemplar é um daqueles livros impossíveis de largar e sobre o qual se quer debater assim que a leitura termina.";

            var bookLinkAmazon = "https://www.amazon.com.br/Garota-Exemplar-Gillian-Flynn/dp/8580572908";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/gillian-flynn/garota-exemplar/1370051659"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "448";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "22 fevereiro 2013";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = " Intrínseca";
            document.getElementById("book-height").innerHTML = "22.4 x 15.4 x 2.6 cm";
            document.getElementById("book-kid").innerHTML = "+14 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "Bons Livros para Ler";

            var bookLinkRese1 = "https://www.bonslivrosparaler.com.br/livros/resenhas/garota-exemplar/2581"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Se no início do romance, Nick parece nas páginas do diário de Amy como um marido bacana, ambos vivendo e compartilhando o amor puro e sincero, aos poucos, Amy vai mostrando a deterioração do amor entre eles. E deixa à mostra para que as autoridades façam uso – e contra ele. Um romance que vai adquirindo uma eletricidade a ponto da autora transformar seus protagonistas em antagonistas, manipulando tanto um como o outro, sempre unidos na dança destrutiva do casamento já morto. Gillian Flynn, jornalista, nascida em Kansas City, filha de professores da faculdade local, começou sua história literária em 2006, com o mistério “Sharp Objects”, e em 2009, lançou “Dark Places”, mas foi com a “Garota Exemplar” que essa escritora conseguiu desbancar os “50 tons de cinza”. Um livro feito por uma escritora que conhece a profissão de escrever, um livro “exemplar”, que merece um lugar em sua estante.";
            

            document.getElementById("rese-2-name").innerHTML = "Queria Estar Lendo";

            var bookLinkRese2 = "https://www.queriaestarlendo.com.br/2020/01/resenha-garota-exemplar-mlv2020.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "4,7 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Gillian trabalha bastante essa coisa de personagens erráticos e é brilhante a forma como ela desenvolve esse conceito. Se em Objetos Cortantes havia uma presença muito grande de dúvida e terror psicológico, aqui é muito mais sobre manipular a opinião dos leitores e deixar todo mundo bem confuso - assim, quando as respostas chegam, você se choca junto com os personagens. E, conforme mais delas se apresentam, a familiaridade com a inconstância deles te torna parte da história. São traços que os tornam personagens tão vivos e interessantes justamente por enchê-los de falhas, detalhes que deixam a trama mais dinâmica por não te dar a certeza do que pode estar acontecendo ali.";
        break; // ´é switch case precisa ter no final

        case 'UDNEM': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Um de nós está mentindo"; // coloca o nome do livro

            var bookImg =  "images/Home/home-acclaimed-lying.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "1 de fevereiro de 2018";
            document.getElementById("book-genre").innerHTML = "Suspense";
            document.getElementById("book-author").innerHTML = "Karen M. McManus";

            var firstStar =  "/images/Book/rating-set-star.png";
            var setFirstStar = document.getElementById("star-1");
            setFirstStar.setAttribute("src", firstStar);
            var secondStar =  "/images/Book/rating-set-star.png";
            var setSecondStar = document.getElementById("star-2");
            setSecondStar.setAttribute("src", secondStar);
            var thirdStar =  "/images/Book/rating-set-star.png";
            var setThirdStar = document.getElementById("star-3");
            setThirdStar.setAttribute("src", thirdStar);
            var fourthStar =  "/images/Book/rating-set-star.png";
            var setFourthStar = document.getElementById("star-4");
            setFourthStar.setAttribute("src", fourthStar);
            var fifthStar =  "/images/Book/rating-set-star.png";
            var setFifthStar = document.getElementById("star-5");
            setFifthStar.setAttribute("src", fifthStar);

            // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
            // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
            // por exemplo: 3 (set,set,set,unset,unset)
            // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

            document.getElementById("book-text").innerHTML = "Numa tarde de segunda-feira, cinco estudantes do colégio Bayview entram na sala de detenção: Bronwyn, a gênia, comprometida a estudar em Yale, nunca quebra as regras. Addy, a bela, a perfeita definição da princesa do baile de primavera. Nate, o criminoso, já em liberdade condicional por tráfico de drogas. Cooper, o atleta, astro do time de beisebol. E Simon, o pária, criador do mais famoso aplicativo de fofocas da escola. Só que Simon não consegue ir embora. Antes do fim da detenção, ele está morto. E, de acordo com os investigadores, a sua morte não foi acidental. Na segunda-feira, ele morreu. Mas na terça, planejava postar fofocas bem quentes sobre os companheiros de detenção. O que faz os quatro serem suspeitos do seu assassinato. Imagine todos os elementos que você pode encontrar em um livro clássico destinado a um jovem leitor: o romance, as panelinhas e as muitas lutas que o adolescente típico enfrenta. Agora imagine esse romance com uma ligeira reviravolta: assassinato!  Um de nós está mentindo se concentra em aspectos-chave de como a fase da adolescência pode ser problemática. Navegando entre uma vida escolar descontraída e uma paisagem sombria em torno da morte de Simon. A história fala ainda sobre a importância da confiança e da justiça, à medida que falsas acusações aparecem e causam sérias repercussões.";

            var bookLinkAmazon = "https://www.amazon.com.br/n%C3%B3s-est%C3%A1-mentindo-Karen-McManus/dp/8501112526";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/um-de-nos-esta-mentindo/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/karen-mcmanus/um-de-nos-esta-mentindo/3084795834"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "384";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "1 fevereiro 2018";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Galera";
            document.getElementById("book-height").innerHTML = "20.8 x 13.4 x 2.2 cm";
            document.getElementById("book-kid").innerHTML = "+13 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "Garotas Devorando Livros";

            var bookLinkRese1 = "https://www.garotasdevorandolivros.com/2021/09/resenha-um-de-nos-esta-mentindo-karen-m.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Com opiniões bem divergentes, a narrativa corre para um final suficientemente bom, com poucos picos de tensão extrema, mas muita base para a gente se deliciar. A escrita de Karen McManus é bastante fluída e é bem perceptível que a autora não perde tempo descrevendo espaços e pessoas. Isso é bastante controverso, por que muitos leitores são unânimes em afirmar que uma história sobrecarregada de detalhes e descrições se torna cansativa e fria, mas deixar de compor o espaço foi um dos pontos que me incomodaram nessa leitura. Por fim, acredito que a autora foi feliz em compor uma narrativa de um jeito meio próprio, não muito comum nesse tipo de leitura, já que talvez a narrativa em 1ª pessoa pudesse atrapalhar os aspectos investigativo dos nossos leitores, e talvez seja por isso que se trata de uma leitura um tanto controvérsia, gerando das mais variadas opiniões, mas que vale muito a pena ser lido e saboreado.";
            

            document.getElementById("rese-2-name").innerHTML = "Sem Serifa";

            var bookLinkRese2 = "https://blogsemserifa.com/2018/01/22/resenha-um-de-nos-esta-mentindo/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "3,2 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "A narrativa também tem um problema estrutural de ritmo, que acaba por deixar o romance bastante parado e sem ações. Ao que parece, a autora elegeu pontos fixos de virada na narrativa que fazem o livro andar, mas entre esses pontos a escrita ficou desgastada e pouco empolgante, o que quebra a fluidez. Isso não deveria acontecer, ainda mais se tratando de uma obra baseada em uma investigação criminal. Escritores mais experientes em tramas policiais parecem saber rechear melhor o mistério do livro a ponto de não ser necessário colocar várias cenas filler para que um ponto de virada se ligue a outro. A autora opta por não deixar pistas sobre os acontecimentos ao longo da história (ou eu fui muito tapado e não percebi que elas estavam ali), e isso também deixa o livro lento. O saldo final é de decepção. A premissa é muito boa e o pontapé inicial da autora funcionou, mas a trama se perde em acontecimentos irrelevantes e a história parece progredir a passos de tartaruga. No final eu já nem estava mais interessado em resolver o mistério central do livro: eu só queria que ele acabasse.";
        break; // ´é switch case precisa ter no final
        
        case 'AGDL': // esta no doc home.js, encontra o nome de cada  no final do case
        document.getElementById("book-title").innerHTML = "A garota do lago"; // coloca o nome do livro

        var bookImg =  "images/Home/home-acclaimed-lake.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "1 de janeiro de 2017";
        document.getElementById("book-genre").innerHTML = "Suspense";
        document.getElementById("book-author").innerHTML = "Charlie Donlea";

        var firstStar =  "/images/Book/rating-set-star.png";
        var setFirstStar = document.getElementById("star-1");
        setFirstStar.setAttribute("src", firstStar);
        var secondStar =  "/images/Book/rating-set-star.png";
        var setSecondStar = document.getElementById("star-2");
        setSecondStar.setAttribute("src", secondStar);
        var thirdStar =  "/images/Book/rating-set-star.png";
        var setThirdStar = document.getElementById("star-3");
        setThirdStar.setAttribute("src", thirdStar);
        var fourthStar =  "/images/Book/rating-set-star.png";
        var setFourthStar = document.getElementById("star-4");
        setFourthStar.setAttribute("src", fourthStar);
        var fifthStar =  "/images/Book/rating-set-star.png";
        var setFifthStar = document.getElementById("star-5");
        setFifthStar.setAttribute("src", fifthStar);

        // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
        // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
        // por exemplo: 3 (set,set,set,unset,unset)
        // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

        document.getElementById("book-text").innerHTML = "Summit Lake, uma pequena cidade entre montanhas, é esse tipo de lugar, bucólico e com encantadoras casas dispostas à beira de um longo trecho de água intocada.Duas semanas atrás, a estudante de direito Becca Eckersley foi brutalmente assassinada em uma dessas casas. Filha de um poderoso advogado, Becca estava no auge de sua vida. Atraída instintivamente pela notícia, a repórter Kelsey Castle vai até a cidade para investigar o caso. ...E LOGO SE ESTABELECE UMA CONEXÃO ÍNTIMA QUANDO UM VIVO CAMINHA NAS MESMAS PEGADAS DOS MORTOS...E enquanto descobre sobre as amizades de Becca, sua vida amorosa e os segredos que ela guardava, a repórter fica cada vez mais convencida de que a verdade sobre o que aconteceu com Becca pode ser a chave para superar as marcas sombrias de seu próprio passado.";

        var bookLinkAmazon = "https://www.amazon.com.br/Garota-do-Lago-Charlie-Donlea/dp/856240988X";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.saraiva.com.br/a-garota-do-lago/p";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/charlie-donlea/a-garota-do-lago/2338747252"; // coloca o link da pesquisa, pq é site de livro usado
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "296";  ///as caracteristicas estao todas na amazon
        document.getElementById("book-date").innerHTML = "1 janeiro 2017";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Faro Editorial";
        document.getElementById("book-height").innerHTML = "22.4 x 15.6 x 2.8 cm";
        document.getElementById("book-kid").innerHTML = "+16 anos"; // idade

        document.getElementById("rese-1-name").innerHTML = "Garotas Devorando Livros";

        var bookLinkRese1 = "https://www.garotasdevorandolivros.com/2021/07/resenha-garota-do-lago-charlie-donlea.html"; // coloca o link da pesquisa, pq é site de livro usado
        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);


        document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota

        document.getElementById("resen-1-text").innerHTML = "s montanhas de Summit Lake foram palco de um arrasador acontecimento. Cidade pacata, onde não havia sido registrado nenhum caso de assassinato ainda, foi surpreendida quando na noite de 17 de fevereiro de 2012 uma jovem é encontrada morta dentro de sua casa à beira do lago. Vinda de Miami, Kelsey Castle é jornalista de uma grande revista e está em busca de desvendar o passado de Becca Eckersley, a jovem estudante de direito assassinada. Passado esse que vem sendo obscurecido tanto pela família quanto pela polícia que está cuidando do caso. ";
        

        document.getElementById("rese-2-name").innerHTML = "Beco Literário";

        var bookLinkRese2 = "https://becoliterario.com/resenha-a-garota-do-lago-charlie-donlea/"; // coloca o link da pesquisa, pq é site de livro usado
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);


        document.getElementById("rese-2-rate").innerHTML = "4,8 / 5,0"; // se n tiver inventa com base na nota

        document.getElementById("resen-2-text").innerHTML = "Eu gostei muito do livro, foi meu primeiro contato com literatura de suspense além de Harlan Coben, e eu me surpreendi com o final. Quando chegou ao desfecho do crime, o quem matou e porque eu fiquei revoltada por ter pensado que tinha sido outra pessoa e bom, julguei mal. Atire a primeira pedra quem nunca julgou um personagem antes hahaha mas tudo bem! É chocante e te faz ficar pensando na estória por vários dias depois que o livro acaba. Porque uma pessoa faria isso? Até onde vai o desejo e a crueldade? É um livro de uma estória fictícia, mas que acontece tanto, é só assistir a qualquer jornal que todos os dias vemos histórias parecidas.";
    break; // ´é switch case precisa ter no final

    default:
        case 'MBDG': // esta no doc home.js, encontra o nome de cada  no final do case
        document.getElementById("book-title").innerHTML = "Mil beijos de garoto"; // coloca o nome do livro

        var bookImg =  "images/Home/home-acclaimed-boys.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "30 de março de 2017";
        document.getElementById("book-genre").innerHTML = "Romance";
        document.getElementById("book-author").innerHTML = "Tillie Cole";

        var firstStar =  "/images/Book/rating-set-star.png";
        var setFirstStar = document.getElementById("star-1");
        setFirstStar.setAttribute("src", firstStar);
        var secondStar =  "/images/Book/rating-set-star.png";
        var setSecondStar = document.getElementById("star-2");
        setSecondStar.setAttribute("src", secondStar);
        var thirdStar =  "/images/Book/rating-set-star.png";
        var setThirdStar = document.getElementById("star-3");
        setThirdStar.setAttribute("src", thirdStar);
        var fourthStar =  "/images/Book/rating-set-star.png";
        var setFourthStar = document.getElementById("star-4");
        setFourthStar.setAttribute("src", fourthStar);
        var fifthStar =  "/images/Book/rating-set-star.png";
        var setFifthStar = document.getElementById("star-5");
        setFifthStar.setAttribute("src", fifthStar);

        // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
        // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
        // por exemplo: 3 (set,set,set,unset,unset)
        // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

        document.getElementById("book-text").innerHTML = "Um beijo dura um instante. Mas mil beijos podem durar uma vida inteira. Um garoto. Uma garota. Um vínculo que é definido num momento e se prolonga por uma década. Um vínculo que nem o tempo nem a distância podem romper. Um vínculo que vai durar para sempre. Ao menos era o que eles imaginavam. Quando, aos dezessete anos, Rune Kristiansen retorna da Noruega para o lugar onde passou a infância, a cidade americana de Blossom Grove, na Geórgia , ele só tem uma coisa em mente: reencontrar Poppy Litchfield, a garota que era sua cara-metade e que tinha prometido esperar fielmente por seu retorno. E ele quer descobrir por que, nos dois anos em que esteve fora, ela o deletou de sua vida sem dar nenhuma explicação.";

        var bookLinkAmazon = "https://www.amazon.com.br/Mil-Beijos-Garoto-Tillie-Cole/dp/8542209826";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.saraiva.com.br/mil-beijos-de-garoto-6304/p";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/busca?q=tillie-cole%20mil-beijos-de-garoto"; // coloca o link da pesquisa, pq é site de livro usado
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "400";  ///as caracteristicas estao todas na amazon
        document.getElementById("book-date").innerHTML = "30 março 2017";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Outro Planeta";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+14 anos"; // idade

        document.getElementById("rese-1-name").innerHTML = "Livros e Fuxicos";

        var bookLinkRese1 = "http://www.livrosefuxicos.com/2017/05/resenha-mil-beijos-de-garoto-tillie-cole.html"; // coloca o link da pesquisa, pq é site de livro usado
        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);


        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

        document.getElementById("resen-1-text").innerHTML = "Outro ponto positivo é a personalidade de Poppy. A jovem é doce, forte, amorosa e do tipo que irradia amor. A cada frase sentimos o quão iluminada e abençoada essa garota é; fiquei encantada com a maneira dela enxergar o mundo e enfrentar as dificuldades que aparecem em seu caminho – sempre com a fé de que o pôr do sol trará um novo dia melhor e feliz. A personagem é jovem e, em alguns pontos, inexperiente, mas ela me trouxe ensinamentos tão valiosos! Muitas vezes reclamo sem pensar e não valorizo as graças que tenho em minha vida, e então aparece uma personagem assim – tão grata e iluminada – que me mostra a importância de agradecermos pelas pequenas alegrias de cada minuto. Além disso, não posso deixar de dizer o quanto Rune é cativante, principalmente em seus momentos de conflito e medo. Com ele também aprendi valiosas lições sobre a valorização do hoje e do amor. Ainda devo dizer que: o livro é narrado de forma intercalada (variando entre Poppy e Rune); a obra acompanha os jovens durante vários anos (talvez por isso o amor entre eles seja tão palpável); existe uma beleza poética na narrativa da autora e nas lições que ela deixa através dessa história (o que faz o leitor sentir, desde a primeira página, a emoção fluir das palavras); o romance não é sensualizado; e o final é perturbador. Chorei muito, do início ao fim. Com uma narrativa dessas, tão real e apaixonante, é impossível não mergulhar de cabeça na história de Poppy e Rune. Por isso, também é impossível não sofrer com eles, não lutar com eles e, principalmente, não chorar ao lado deles. Minha parte racional sabe que o livro tem um grande apelo dramático, mas nada disso diminuiu o impacto que essa leitura deixou em mim. Mesmo sabendo que ia sofrer, mesmo chorando com esses dois, valeu muito a pena acompanhar a jornada de Poppy e Rune e, junto com eles, aprender a valorizar cada um dos beijos – de parar o coração – que a vida me dará. Simplesmente leia. Tenho certeza que não se arrependerá.";
        

        document.getElementById("rese-2-name").innerHTML = "Estante Bibliográfica";

        var bookLinkRese2 = "https://www.estantebibliografica.com/2020/09/resenha-mil-beijos-de-garoto-tillie-cole.html"; // coloca o link da pesquisa, pq é site de livro usado
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);


        document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota

        document.getElementById("resen-2-text").innerHTML = " É uma narrativa repleta de símbolos, que vão acompanhar o leitor mesmo ao término da leitura. Não consigo mais ver flores de cerejeira ou ouvir If I Could Fly do One Direction da mesma forma que antes! E os capítulos são intercalados entre Poppy e Rune, um recurso que gosto muito em livros, como já disse anteriormente em outras resenhas. Mil Beijos de Garoto (não vou o explicar o título, vocês vão ter que ler!) te faz enxergar a vida sob um novo ponto de vista, traz inúmeras lições sobre valores muitas vezes esquecidos e acima de tudo, te emociona. Preparem os lencinhos para as lágrimas e deem uma chance para essa história! Garanto que vocês vão amar conhecer esse casal.";
    break; // ´é switch case precisa ter no final

    //default:
    }
}
document.addEventListener("DOMContentLoaded", function() {
    inputBook();
});
