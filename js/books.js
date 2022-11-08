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
        default:

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


            document.getElementById("rese-1-rate").innerHTML = "5,5 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Só posso dizer que Os sete maridos de Evelyn Hugo me surpreendeu positivamente. É um livro que tem representatividade racial, sexual e nos mostra, no decorrer dos anos, o quanto cada uma dessas lutas teve que avançar para chegar no que é hoje. E, além disso, nos mostra o valor da perseverança e os custos da fama. Sim, admiro Evelyn Hugo e depois dessa leitura, sinto que sou um pouquinho mais confiante com relação aos meus sonhos. Dou todo o céu de estrelas.";
            

            document.getElementById("rese-2-name").innerHTML = "Amor por Livros";

            var bookLinkRese2 = "https://www.amorporlivros.com.br/resenha-os-sete-maridos-evelyn-hugo/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "4,5 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Depois da metade, os altos e baixos dão uma desacelerada e a história foca em uma parte específica do romance que eu, particularmente, achei um pouco enrolada demais. É um tal de vai e volta que eu gostaria que tivesse sido mais rápido, apesar da beleza do amor que Evelyn demonstra. Mesmo considerando os pontos negativos que comentei, foi uma boa leitura. A escritora faz uma construção de personagem de uma forma que me deixou admirada. Também o livro tem uma forte mensagem sobre a sexualidade e bissexualidade. Mesmo hoje sendo mais fácil falar sobre isso, na época era ainda pior, com consequências ainda mais duras, e isso fica muito explícito na história. Fora também sobre toda a relação de machismo. Enquanto Evelyn era assediada, quem sofria as consequências era sempre ela. E porque ela tinha um objetivo em mente, ela tolerou muito daquelas coisas.";
            break; // ´é switch case precisa ter no final

        default:
            case '-': // esta no doc home.js, encontra o nome de cada  no final do case
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
            -+

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


            document.getElementById("rese-1-rate").innerHTML = "5,5 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Só posso dizer que Os sete maridos de Evelyn Hugo me surpreendeu positivamente. É um livro que tem representatividade racial, sexual e nos mostra, no decorrer dos anos, o quanto cada uma dessas lutas teve que avançar para chegar no que é hoje. E, além disso, nos mostra o valor da perseverança e os custos da fama. Sim, admiro Evelyn Hugo e depois dessa leitura, sinto que sou um pouquinho mais confiante com relação aos meus sonhos. Dou todo o céu de estrelas.";
            

            document.getElementById("rese-2-name").innerHTML = "Amor por Livros";

            var bookLinkRese2 = "https://www.amorporlivros.com.br/resenha-os-sete-maridos-evelyn-hugo/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "4,5 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Depois da metade, os altos e baixos dão uma desacelerada e a história foca em uma parte específica do romance que eu, particularmente, achei um pouco enrolada demais. É um tal de vai e volta que eu gostaria que tivesse sido mais rápido, apesar da beleza do amor que Evelyn demonstra. Mesmo considerando os pontos negativos que comentei, foi uma boa leitura. A escritora faz uma construção de personagem de uma forma que me deixou admirada. Também o livro tem uma forte mensagem sobre a sexualidade e bissexualidade. Mesmo hoje sendo mais fácil falar sobre isso, na época era ainda pior, com consequências ainda mais duras, e isso fica muito explícito na história. Fora também sobre toda a relação de machismo. Enquanto Evelyn era assediada, quem sofria as consequências era sempre ela. E porque ela tinha um objetivo em mente, ela tolerou muito daquelas coisas.";
            break; // ´é switch case precisa ter no final
    }

    }
}
document.addEventListener("DOMContentLoaded", function() {
    inputBook();
});
//se leu seu cu eh meu