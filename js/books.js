function inputBook() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookName = urlParams.get("input");

    switch(bookName) {
        case 'ODDAF':
            document.getElementById("book-title").innerHTML = "O diário de Anne Frank";

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

            document.getElementById("book-text").innerHTML = "O diário de Anne Frank, o depoimento da pequena Anne, morta pelos nazistas após passar anos escondida no sótão de uma casa em Amsterdã, ainda hoje emociona leitores no mundo inteiro. Suas anotações narram os sentimentos, os medos e as pequenas alegrias de uma menina judia que, como sua família, lutou em vão para sobreviver ao Holocausto. Uma poderosa lembrança dos horrores de uma guerra, um testemunho eloquente do espírito humano. Assim podemos descrever os relatos feitos por Anne em seu diário. Isolados do mundo exterior, os Frank enfrentaram a fome, o tédio e a terrível realidade do confinamento, além da ameaça constante de serem descobertos. Nas páginas de seu diário, Anne Frank registra as impressões sobre esse longo período no esconderijo. Alternando momentos de medo e alegria, as anotações se mostram um fascinante relato sobre a coragem e a fraqueza humanas e, sobretudo, um vigoroso autorretrato de uma menina sensível e determinada. A príncipio, escreveu seu diário apenas para si.";

            var bookLinkAmazon = "https://www.amazon.com.br/di%C3%A1rio-Anne-Frank/dp/8501044458";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/o-diario-de-anne-frank--edicao-oficial---capa-dura-/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/anne-frank/o-diario-de-anne-frank/2686125746?show_suggestion=0";
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "416";
            document.getElementById("book-date").innerHTML = "jun, 1947";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Record";
            document.getElementById("book-height").innerHTML = "20 x 12.8 x 0.8 cm";
            document.getElementById("book-kid").innerHTML = "10 - 16 a";

            document.getElementById("rese-1-name").innerHTML = "Minha vida Literária";

            var bookLinkRese1 = "https://www.minhavidaliteraria.com.br/";
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0";
            document.getElementById("resen-1-text").innerHTML = "O fato de ser o relato de uma adolescente fez toda a diferença, pois Anne depositou em seus escritos toda sinceridade e entrega próprias dessa fase da vida, mostrando-se como uma menina extremante inteligente e cheia de ideias bem articuladas e à frente do seu tempo. Em meio a todo o sofrido contexto histórico da época, conhecemos de perto os gostos, hábitos, qualidades e defeitos de Anne e das pessoas que ficaram isoladas com ela. Desse modo, o livro não é só um relato sobre os terríveis acontecimentos envolvendo o período da Segunda Guerra Mundial, mas também sobre a inocência roubada de uma menina que queria apenas viver sua vida e concretizar seus objetivos, de uma família que viveu o medo diário da morte, de uma história real e triste que poderia ser contada de várias formas, mas essa certamente foi uma das mais incríveis e realistas, pois saiu das mãos de quem a viveu e de quem sentiu na pele o lastro de terror que o nazismo deixou.";
            
            document.getElementById("rese-2-name").innerHTML = "Resenhas à la carte";

            var bookLinkRese2 = "https://resenhasalacarte.com.br/";
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; 
            document.getElementById("resen-2-text").innerHTML = "O Diário de Anne Frank foi um livro que me surpreendeu. É um clássico tão comentado e eu nem fazia ideia de que era tão bom. Nunca pensei que o diário de uma menina de 13 anos fosse mexer tanto comigo mas, ao terminar as últimas páginas, fiquei muito tempo pensando na Anne e em tudo o que ela passou. Em seu diário, escrito entre 1943 e 1945, Anne relata todo o período em que ficou refugiada com sua família e outros judeus em um esconderijo, chamado de Anexo Secreto. Lá, eles dividiam as tarefas de casa, e tentavam sobreviver em “harmonia”, tomando todas as precauções para não serem vistos e delatados para a polícia alemã. A última carta é, com certeza, a mais bonita e profunda, o que nos deixa ainda mais sensíveis e abalados, já que ela não conseguiu continuar a escrever. O posfácio me fez chorar e pensar em tudo o que aquelas pessoas tiveram que enfrentar durante a Segunda Guerra. E o mais triste ainda é saber que milhares pelo mundo ainda sofrem com guerras, pobreza, fome, doenças e todo tipo de desgraça. Não dá para ler Anne Frank sem pensar “eu nunca mais vou reclamar na minha vida“.";
            break;

            case 'V':
            document.getElementById("book-title").innerHTML = "Verity";

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

            document.getElementById("book-text").innerHTML = "Verity Crawford é a autora best-seller por trás de uma série de sucesso. Ela está no auge de sua carreira, aclamada pela crítica e pelo público, no entanto, um súbito e terrível acidente acaba interrompendo suas atividades, deixando-a sem condições de concluir a história... E é nessa complexa circunstância que surge Lowen Ashleigh, uma escritora à beira da falência convidada a escrever, sob um pseudônimo, os três livros restantes da já consolidadaPara que consiga entender melhor o processo criativo de Verity com relação aos livros publicados e, ainda, tentar descobrir seus possíveis planos para os próximos, Lowen decide passar alguns dias na casa dos Crawford, imersa no caótico escritório de Verity - e, lá, encontra uma espécie de autobiografia onde a escritora narra os fatos acontecidos desde o dia em que conhece Jeremy, seu marido, até os instantes imediatamente anteriores a seu acidente - incluindo sua perspectiva sobre as tragédias ocorridas às filhas do casal. Quanto mais o tempo passa, mais Lowen se percebe envolvida em uma confusa rede de mentiras e segredos, e, lentamente, adquire sua própria posição no jogo psicológico que rodeia aquela casa. Emocional e fisicamente atraída por Jeremy, ela precisa decidir: expor uma versão que nem ele conhece sobre a própria esposa ou manter o sigilo dos escritos de Verity?";

            var bookLinkAmazon = "https://www.amazon.com.br/Verity-Colleen-Hoover/dp/8501117846#detailBullets_feature_div";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/verity/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/colleen-hoover/verity/870456660";
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "320";
            document.getElementById("book-date").innerHTML = "9 março 2020";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Galera";
            document.getElementById("book-height").innerHTML = "13.5 x 1.7 x 21 cm";
            document.getElementById("book-kid").innerHTML = "+18 anos"; 

            document.getElementById("rese-1-name").innerHTML = "Minha vida Literária";

            var bookLinkRese1 = "https://www.minhavidaliteraria.com.br/";
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "3,5 / 5,0";
            document.getElementById("resen-1-text").innerHTML = "Apesar de ter achado a leitura bastante fluida e, no geral, ter gostado dela, Verity não foi para mim tão impactante quanto para muitos outros leitores. Achei as resoluções finais com pontas abertas e explicações pouco convincentes, além de já ter imaginado parte da reviravolta final. Minha sensação foi a de que havia uma tentativa muito esforçada em fazer o leitor acreditar em uma verdade e, com isso, ela se enfraqueceu para mim. Contudo, o final aberto da história me soou positivo, justamente por possibilitar a dúvida e, em consequência, intensificar o significado de tudo o que aconteceu anteriormente.";
            
            document.getElementById("rese-2-name").innerHTML = "Gnoma Leitora";

            var bookLinkRese2 = "http://www.gnomaleitora.com.br/2022/01/resenha-verity-colleen-hoover.html";
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; 
            document.getElementById("resen-2-text").innerHTML = "As cenas vão se desenrolando e nos deixando sem fôlego. A Lowen se questiona em vários momentos se está tendo um surto, já que ela tem episódios de sonambulismo, e inventando situações em sua cabeça. Com isso, ela se torna uma narradora não confiável. Confesso que durante a leitura fui imaginando várias coisas, mas nada me prepararia para o final arrebatador. As páginas finais são repletas de reviravoltas, e quando achamos que tudo se resolveu, a Colleen joga mais uma bomba em nosso colo. SURTOS E SURTOS!";
            break;

            case 'A': 
            document.getElementById("book-title").innerHTML = "Anexos"; 

            var bookImg =  "images/Home/home-autor-A.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "1 de janeiro de 2014";
            document.getElementById("book-genre").innerHTML = "Romance";
            document.getElementById("book-author").innerHTML = "Rainbow Rowell";

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

            document.getElementById("book-text").innerHTML = "“Oi, eu sou o cara que lê seus e-mails, e, sabe, eu amo você...” Beth Fremont e Jennifer Scribner-Snyder sabem que alguém está monitorando seus e-mails de trabalho. (Todo mundo na redação sabe. É política da empresa.) Mas elas não conseguem levar isso tão a sério, e continuam trocando e-mails intermináveis e infinitamente hilariantes, discutindo cada aspecto de suas vidas.Enquanto isso, Lincoln O’Neill não consegue acreditar que este é agora o seu trabalho – ler os e-mails de outras pessoas. Quando ele se candidatou para ser “agente de segurança da internet”, se imaginou construindo firewalls e desmascarando hackers – e não escrevendo um relatório toda vez que uma mensagem esportiva vinha acompanhada de uma piada suja.Quando Lincoln se depara com as mensagens de Beth e Jennifer, ele sabe que deveria denunciá-las. Mas ele não consegue deixar de se divertir e se cativar por suas histórias.No momento em que Lincoln percebe que está se apaixonado por Beth, é tarde demais para se apresentar. Afinal, o que ele diria...?";

            var bookLinkAmazon = "https://www.amazon.com.br/Anexos-Rainbow-Rowell/dp/8542804511";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/attachments-rainbow-rowell";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/rainbow-rowell/anexos/2025506185?show_suggestion=0";
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "368"; 
            document.getElementById("book-date").innerHTML = "1 janeiro 2014";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Novo Século";
            document.getElementById("book-height").innerHTML = "23 x 16 x 2.4 cm";
            document.getElementById("book-kid").innerHTML = "+12 anos";

            document.getElementById("rese-1-name").innerHTML = "Livros e Fuxicos";

            var bookLinkRese1 = "https://www.livrosefuxicos.com/2015/02/resenha-anexos-rainbow-rowe.html";
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";
            document.getElementById("resen-1-text").innerHTML = "Apesar de já ter tido contato com a escrita da Rainbow Rowell, mais especificamente com um de seus contos, a primeira obra completa que li da autora foi Anexos. Confesso que esperava uma leitura leve, romântica e divertida, entretanto encontrei uma obra emocionalmente intensa, que surpreende ao abordar temas complexos e dolorosamente reais. – Não me entendam mal, o livro não faz o estilo melodramático, entretanto ele não é tão superficial quanto como aparenta. Aos vinte oito anos espera-se que sua vida esteja perfeitamente resolvida: um relacionamento sólido, um trabalho agradável e rentável, um bom convívio familiar, uma vida confortável…contudo, como bem sabemos o passar dos anos não garante a realização de todos os nossos desejos. Intercalando a história de três personagens a autora dá vida a uma trama que, antes de qualquer coisa, aborda as dificuldades diárias da vida adulta. Mostrando-nos que viver, independente da idade, nunca é fácil. Gostei tanto que estou ansiosa para ler mais livros da Rainbow Rowell e conhecer outros lados do seu talento como escritora.";
            
            document.getElementById("rese-2-name").innerHTML = "Garotas Devorando Livros";

            var bookLinkRese2 = "https://www.garotasdevorandolivros.com/2019/08/resenha-anexos-rainbow-rowell.html";
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0"; 
            document.getElementById("resen-2-text").innerHTML = "Bom eu gostei bastante do livro, é uma história leve e divertida, principalmente com os e-mails trocados por Beth e Jennifer. Ao contrario de Eleanor e Park, essa história é construída por personagens de 30 anos pra frente, mas não deixa de ser fofinha.";
            break;

            case 'A':
            document.getElementById("book-title").innerHTML = "Anexos";

            var bookImg =  "images/Home/home-autor-A.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "1 de janeiro de 2014";
            document.getElementById("book-genre").innerHTML = "Romance";
            document.getElementById("book-author").innerHTML = "Rainbow Rowell";

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

            document.getElementById("book-text").innerHTML = "“Oi, eu sou o cara que lê seus e-mails, e, sabe, eu amo você...” Beth Fremont e Jennifer Scribner-Snyder sabem que alguém está monitorando seus e-mails de trabalho. (Todo mundo na redação sabe. É política da empresa.) Mas elas não conseguem levar isso tão a sério, e continuam trocando e-mails intermináveis e infinitamente hilariantes, discutindo cada aspecto de suas vidas.Enquanto isso, Lincoln O’Neill não consegue acreditar que este é agora o seu trabalho – ler os e-mails de outras pessoas. Quando ele se candidatou para ser “agente de segurança da internet”, se imaginou construindo firewalls e desmascarando hackers – e não escrevendo um relatório toda vez que uma mensagem esportiva vinha acompanhada de uma piada suja.Quando Lincoln se depara com as mensagens de Beth e Jennifer, ele sabe que deveria denunciá-las. Mas ele não consegue deixar de se divertir e se cativar por suas histórias.No momento em que Lincoln percebe que está se apaixonado por Beth, é tarde demais para se apresentar. Afinal, o que ele diria...?";

            var bookLinkAmazon = "https://www.amazon.com.br/Anexos-Rainbow-Rowell/dp/8542804511";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/attachments-rainbow-rowell";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/rainbow-rowell/anexos/2025506185?show_suggestion=0";
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "368"; 
            document.getElementById("book-date").innerHTML = "1 janeiro 2014";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Novo Século";
            document.getElementById("book-height").innerHTML = "23 x 16 x 2.4 cm";
            document.getElementById("book-kid").innerHTML = "+12 anos";

            document.getElementById("rese-1-name").innerHTML = "Livros e Fuxicos";

            var bookLinkRese1 = "https://www.livrosefuxicos.com/2015/02/resenha-anexos-rainbow-rowe.html";
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";
            document.getElementById("resen-1-text").innerHTML = "Apesar de já ter tido contato com a escrita da Rainbow Rowell, mais especificamente com um de seus contos, a primeira obra completa que li da autora foi Anexos. Confesso que esperava uma leitura leve, romântica e divertida, entretanto encontrei uma obra emocionalmente intensa, que surpreende ao abordar temas complexos e dolorosamente reais. – Não me entendam mal, o livro não faz o estilo melodramático, entretanto ele não é tão superficial quanto como aparenta. Aos vinte oito anos espera-se que sua vida esteja perfeitamente resolvida: um relacionamento sólido, um trabalho agradável e rentável, um bom convívio familiar, uma vida confortável…contudo, como bem sabemos o passar dos anos não garante a realização de todos os nossos desejos. Intercalando a história de três personagens a autora dá vida a uma trama que, antes de qualquer coisa, aborda as dificuldades diárias da vida adulta. Mostrando-nos que viver, independente da idade, nunca é fácil. Gostei tanto que estou ansiosa para ler mais livros da Rainbow Rowell e conhecer outros lados do seu talento como escritora.";
            
            document.getElementById("rese-2-name").innerHTML = "Garotas Devorando Livros";

            var bookLinkRese2 = "https://www.garotasdevorandolivros.com/2019/08/resenha-anexos-rainbow-rowell.html";
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0"; 
            document.getElementById("resen-2-text").innerHTML = "A Beth e a Jennifer são duas pessoas que eu gostaria  de ter como amiga, super engraçadas, gente como a gente. Beth namora desde a faculdade e está esperando o namorado a pedir em casamento, e Jennifer é casada com o Sr. Perfeito (quem me dera rs), o livro sempre fica mais divertido com elas. Bom eu gostei bastante do livro, é uma história leve e divertida, principalmente com os e-mails trocados por Beth e Jennifer. Ao contrario de Eleanor e Park, essa história é construída por personagens de 30 anos pra frente, mas não deixa de ser fofinha.";
            break;

            case 'MCPSN': 
            document.getElementById("book-title").innerHTML = "Me Chame Pelo Seu Nome"; 

            var bookImg =  "images/Home/home-adptation-callme.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "5 de janeiro de 2018";
            document.getElementById("book-genre").innerHTML = "Romance";
            document.getElementById("book-author").innerHTML = "André Aciman";

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

            document.getElementById("book-text").innerHTML = "A casa onde Elio passa os verões é um verdadeiro paraíso na costa italiana, parada certa de amigos, vizinhos, artistas e intelectuais de todos os lugares. Filho de um importante professor universitário, o jovem está bastante acostumado à rotina de, a cada verão, hospedar por seis semanas na villa da família um novo escritor que, em troca da boa acolhida, ajuda seu pai com correspondências e papeladas. Uma cobiçada residência literária que já atraiu muitos nomes, mas nenhum deles como Oliver. Elio imediatamente, e sem perceber, se encanta pelo americano de vinte e quatro anos, espontâneo e atraente, que aproveita a temporada para trabalhar em seu manuscrito sobre Heráclito e, sobretudo, desfrutar do verão mediterrâneo. Da antipatia impaciente que parece atravessar o convívio inicial dos dois surge uma paixão que só aumenta à medida que o instável e desconhecido terreno que os separa vai sendo vencido. Uma experiência inesquecível, que os marcará para o resto da vida. Com rara sensibilidade, André Aciman constrói uma viva e sincera elegia à paixão, em um romance no qual se reconhecem as mais delicadas e brutais emoções da juventude. Uma narrativa magnética, inquieta e profundamente tocante.";

            var bookLinkAmazon = "https://www.amazon.com.br/Me-Chame-Pelo-Seu-Nome/dp/8551002732";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/me-chame-pelo-seu-nome";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://busca.saraiva.com.br/q/me-chame-pelo-seu-nome";
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "288"; 
            document.getElementById("book-date").innerHTML = "5 de janeiro de 2018";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Intrínseca";
            document.getElementById("book-height").innerHTML = "21 x 14 x 2 cm";
            document.getElementById("book-kid").innerHTML = "+14 anos"; 

            document.getElementById("rese-1-name").innerHTML = "Resenha dos Sonhos";

            var bookLinkRese1 = "https://resenhandosonhos.com/me-chame-pelo-seu-nome-andre-aciman/";
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "3,5 / 5,0"; 
            document.getElementById("resen-1-text").innerHTML = "Me Chame Pelo Seu Nome não foi um livro excepcional pra mim, mas certamente suscitou uma série de debates internos que eu me confrontei e aceitei durante a leitura. E, com relação ao formato do livro, pode até soar um sacrilégio para alguns, mas dadas as devidas proporções e contexto, a forma como a narrativa é apresentada me lembrou bastante O Apanhador no Campo de Centeio, livro que também marcou a sua época por apresentar um jovem com atitudes e pensamentos pouco controlados pelas normas sociais, gerando uma expressão mais fiel dessa idade. Eu ainda não assisti ao filme, mas pretendo fazer isso em breve para ter o total contato com a obra e descobrir se vou repetir algumas reações com a adaptação. Acho que é uma leitura que, por despertar tantas questões e gerar identificação com uns e a indignação de outros, vale a tentativa pela experiência e pra descobrir como ela vai funcionar pra você. Só tenha em mente todos os aspectos e vá para aproveitar a jonada.";
            
            document.getElementById("rese-2-name").innerHTML = "Janela Literária";

            var bookLinkRese2 = "https://www.janelaliteraria.com.br/2020/06/me-chame-pelo-seu-nome.html"; 
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0"; 
            document.getElementById("resen-2-text").innerHTML = "O livro trata do descobrimento da homossexualidade em uma época em que o mundo ainda andava em passos curtos em direcao a aceitação. No romance o autor trata esse assunto de maneira bem leve, e discreta, e de certa maneira, fácil para o protagonista. Pois ele não tem grandes barreiras na família para enfrentar. Contudo, o tema é tratado com Oliver, que abidica de seus desejos para seguir um padrão mais seguro. A grande sacada do romance são as dúvidas e angústias da descoberta da sexualidade, das angústias de um amor diferente ao imposto pela sociedade. Quem já passou por algo parecido fica surpreso como o autor consegue nos remeter a nossas vidas, dúvidas e medos. O livro é um marco para a luta GLBT por simplesmente levar milhões de pessoas a encarar o tema! Queria no cinema ou através do livro.";
            break;

            case 'OEP':
            document.getElementById("book-title").innerHTML = "Orgulho e Preconceito";

            var bookImg =  "images/Home/home-adptation-orgulho.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "12 abril 2018";
            document.getElementById("book-genre").innerHTML = "Romance";
            document.getElementById("book-author").innerHTML = "Jane Austen";

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

            document.getElementById("book-text").innerHTML = "Orgulho e preconceito é o livro mais famoso de Jane Austen e possui uma série de personagens inesquecíveis e um enredo memorável. Austen nos apresenta Elizabeth Bennet como heroína irresistível e seu pretendente aristocrático, o sr. Darcy. Nesse livro, aspectos diferentes são abordados: orgulho encontra preconceito, ascendência social confronta desprezo social, equívocos e julgamentos antecipados conduzem alguns personagens ao sofrimento e ao escândalo. O livro pode ser considerado a obra-prima da escritora, que equilibra comédia com seriedade, observação meticulosa das atitudes humanas e sua ironia refinada. A nova coleção possui capa dura e estilo inspirado nos bullet journals.";

            var bookLinkAmazon = "https://www.amazon.com.br/Orgulho-Preconceito-Jane-Austen/dp/8544001823";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/orgulho-e-preconceito-9038925/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/jane-austen/orgulho-e-preconceito/3125909548"; 
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "424";  
            document.getElementById("book-date").innerHTML = "12 abril de 2018";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Martin Claret";
            document.getElementById("book-height").innerHTML = "21.4 x 13.6 x 2.8 cm";
            document.getElementById("book-kid").innerHTML = "+13 anos"; 

            document.getElementById("rese-1-name").innerHTML = "Livros e Fuxicos";

            var bookLinkRese1 = "https://www.livrosefuxicos.com/2012/02/resenha-orgulho-e-preconceito-jane.html";
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; 
            document.getElementById("resen-1-text").innerHTML = "O amadurecimento dos personagens, os encontros e desencontros, os diálogos engraçados e as leves críticas sociais feitas a época dão a narrativa de Jane Austen um caráter único, envolvente, delicioso. O Sr. Darcy nos mostra a força do amor, tudo isso de uma forma viva e real. Por ele continuamos a ter esperança no amor, nas mudanças que esse sentimento é capaz de fazer. Mesmo sendo um clássico a trama é atual, abordando o preconceito de uma forma que perdura até hoje. Com boas doses de emoção, divertimento e inteligência, “Orgulho e Preconceito” é uma obra completa e envolvente, que além de descrever a grandiosidade do amor, demonstra com destreza as surpresas que a vida tende a nos reservar.";
            
            document.getElementById("rese-2-name").innerHTML = "Literatura";

            var bookLinkRese2 = "https://www.literaturablog.com/resenha-orgulho-e-preconceito-de-jane-austen/";
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0"; 
            document.getElementById("resen-2-text").innerHTML = "Orgulho e Preconceito é aquele livro que me faz sorrir logo nas primeiras páginas. Eu sempre releio um trecho ou outro, mas só recentemente, com a publicação da edição (incrivelmente maravilhosa) da Antofágica, decidi relê-lo inteiramente, sem pular nenhuma partezinha. Fiquei surpresa com trechos que havia esquecido ou que guardava apenas o diálogo conforme o filme de 2005, que altera algumas coisas em comparação ao livro. Vieram até algumas memórias da série da BBC (1995), que eu não revejo faz algum tempo. E vontade de assistir versões de outros anos, versões recontadas (minha favorita é Bride and Prejudice, que resenhei aqui) e até alguns filmes que fazem referência ao clássico de Austen. Vocês já entenderam que eu não queria deixar Longbourn por nada nessa vida, certo? A menos que fosse para um baile em Netherfield ou uma visitinha a Pemberley.";
            break; 

            case 'D': 
            document.getElementById("book-title").innerHTML = "Duna"; 

            var bookImg =  "images/Home/home-adptation-duna.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "28 abril 2017";
            document.getElementById("book-genre").innerHTML = "Guerra";
            document.getElementById("book-author").innerHTML = "Frank Herbert";

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

            document.getElementById("book-text").innerHTML = "Uma estonteante mistura de aventura e misticismo, ecologia e política, este romance ganhador dos prêmios Hugo e Nebula deu início a uma das mais épicas histórias de toda a ficção científica. Duna é um triunfo da imaginação, que influenciará a literatura para sempre.Esta edição inédita, com introdução de Neil Gaiman, apresenta ao leitor o universo fantástico criado por Herbert e que será adaptado ao cinema por Denis Villeneuve, diretor de A chegada e de Blade Runner 2049.";

            var bookLinkAmazon = "https://www.amazon.com.br/Duna-Frank-Herbert/dp/857657313X";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/livro-duna-frank-herbert";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://busca.saraiva.com.br/q/livro-duna-frank-herbert"; 
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "680";
            document.getElementById("book-date").innerHTML = "28 abril de 2017";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Editora Aleph";
            document.getElementById("book-height").innerHTML = "23.4 x 16.4 x 4.2 cm";
            document.getElementById("book-kid").innerHTML = "+15 anos";

            document.getElementById("rese-1-name").innerHTML = "Poltrona Nerd";

            var bookLinkRese1 = "https://poltronanerd.com.br/livros/resenha-duna-de-frank-herbert-72635"; 
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "4,5 / 5,0";
            document.getElementById("resen-1-text").innerHTML = "Pode parecer muita informação, e é mesmo. Herbert segue a escola de Tolkien (autor de O Senhor dos Anéis), explicando muito pouco e deixando a ambientação e a imaginação do leitor tomar conta. No final existem apêndices e um glosário, mas não são tão necessários para uma compreensão da história. O importante é deixar a ambientação e a história levar você. São grandes personagens e um cenário muito rico e criativo, com elementos de fantasia medieval e ficção científica. Pensem numa mistura de O Senhor dos Anéis, com Game of Thrones, Star Wars e As Mil e Uma Noites. Se existe algum problema nesse livro é que parece que a história demora para engrenar. O Herbert não tem medo de primeiro apresentar seu cenários e personagens, antes de começar com os conflitos. Isso torna o início do livro um pouco arrastado. Mas quando engrena.";
            
            document.getElementById("rese-2-name").innerHTML = "Queria Estar Lendo";

            var bookLinkRese2 = "https://www.queriaestarlendo.com.br/2021/10/resenha-duna-frank-herbert.html"; 
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0";
            document.getElementById("resen-2-text").innerHTML = "Tem tanta coisa em Duna que é difícil resenhar sem falar demais sobre a história; uma coisa que achei interessante é que o autor não faz segredo do que vai acontecer. Se tem uma traição para rolar, ele fala para que a gente esteja ciente dela vários capítulos antes do acontecimento. Se tem uma morte, ela acontece e pronto. Se tem uma reviravolta, você sabe que ela está vindo pelo tom da narrativa. Gostei porque, apesar de não ter o elemento da surpresa, tem a tensão. E ela é muito bem trabalhada. O que não ajudou esse livro a se tornar um dos meus favoritos foi o quanto ele era truncado em algumas partes. Vários capítulos passavam sem que eu visse as páginas andando, outros demoravam horas para acabar e eu não aguentava mais lê-los. Esse vai e volta de ritmo narrativo acabou enroscando demais, principalmente no final da leitura - que deveria ter sido a mais descarga de adrenalina, com tudo que estava acontecendo.";
            break;

            case 'CDP':
            document.getElementById("book-title").innerHTML = "Caixa de Pássaros";

            var bookImg =  "images/Home/home-adptation-bird.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "26 janeiro 2015";
            document.getElementById("book-genre").innerHTML = "Suspense";
            document.getElementById("book-author").innerHTML = "Josh Malerman ";

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

            document.getElementById("book-text").innerHTML = "Romance de estreia de Josh Malerman, Caixa de pássaros é um thriller psicológico tenso e aterrorizante, que explora a essência do medo. Uma história que vai deixar o leitor completamente sem fôlego mesmo depois de terminar de ler.Basta uma olhadela para desencadear um impulso violento e incontrolável que acabará em suicídio. Ninguém é imune e ninguém sabe o que provoca essa reação nas pessoas. Cinco anos depois do surto ter começado, restaram poucos sobreviventes, entre eles Malorie e dois filhos pequenos. Ela sonha em fugir para um local onde a família possa ficar em segurança, mas a viagem que tem pela frente é assustadora: uma decisão errada e eles morrerão.“Malerman usa a narrativa alusiva para criar um thriller fascinante que os fãs de Stephen King vão adorar.”Publishers Weekly“Deve ser lido de uma só vez. Ninguém ainda havia escrito uma história de terror como essa.";

            var bookLinkAmazon = "https://www.amazon.com.br/Caixa-Pássaros-Josh-Malerman/dp/8580576520";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/livro-caixa-passaros";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://busca.saraiva.com.br/q/livro-caixa-passaros"; 
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "272"; 
            document.getElementById("book-date").innerHTML = "26 janeiro de 2015 ";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Intrínseca";
            document.getElementById("book-height").innerHTML = "23.4 x 16.4 x 4.2 cm";
            document.getElementById("book-kid").innerHTML = "+15 anos"; 

            document.getElementById("rese-1-name").innerHTML = "Sobre Livros";

            var bookLinkRese1 = "https://www.sobrelivros.com.br/resenha-caixa-de-passaros-josh-malerman/"; 
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";
            document.getElementById("resen-1-text").innerHTML = "Duvido que exista alguma pessoa que leu a sinopse desse livro e que não ficou tremendamente curioso. Quando peguei o livro para ler pensei que das duas, uma: Ou o livro seria incrível ou o autor se atrapalharia ao revelar o grande mistério. A saída que Malerman escolheu para finalizar o livro foi brilhante – não vou comentar mais para não soltar spoiler, mas quem quiser conversar comigo sobre esses pontos, vamos conversar aqui nos comentários (mas coloque um aviso de spoiler, ok?). A edição da Intrínseca está arrepiante! A capa incorpora a atmosfera do livro, todo início de capítulo tem a página decorada. As páginas são amareladas e a fonte confortável. São 268 páginas de muita adrenalina.";
            
            document.getElementById("rese-2-name").innerHTML = "Ficções Humanas";

            var bookLinkRese2 = "https://www.ficcoeshumanas.com.br/post/resenha-caixa-de-pássaros-de-josh-malerman";
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0";
            document.getElementById("resen-2-text").innerHTML = "Caixa de Pássaros é uma excelente estréia e mostra um autor preocupado em estabelecer a sua identidade diante dos leitores. Uma narrativa marcada por uma claustrofobia extrema (em vários momentos nos sentimos amarrados e presos) em um mundo onde as pessoas não podem ver, caso contrário podem acabar sendo mortas. Temos uma mãe lutando por sua sobrevivência e a de seus filhos e tenta encontrar algum lugar que possa servir de abrigo e quem sabe fornecer alguma lembrança de uma vida melhor. ";
            break;

            case 'ACPDV':
            document.getElementById("book-title").innerHTML = "A Cinco Passos de Você";

            var bookImg =  "images/Home/home-adptation-cinco.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "26 janeiro 2015";
            document.getElementById("book-genre").innerHTML = "Drama";
            document.getElementById("book-author").innerHTML = "Rachael Lippincott";

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

            document.getElementById("book-text").innerHTML = "Stella Grant gosta de estar no controle. Ela parece ser uma adolescente típica, mas em sua rotina há listas de tarefas e inúmeros remédios que ela deve tomar para controlar a fibrose cística, uma doença crônica que impede que seus pulmões funcionem como deveriam. Suas prioridades são manter seus pais felizes e conseguir um transplante – e uma coisa não existe sem a outra. Mas para ganhar pulmões novos, Stella precisa seguir seu tratamento à risca e eliminar qualquer chance de infecção, o que significa que ela não pode ficar a menos que dois metros de distância – ou seis passos – de outros pacientes com a doença. O primeiro item é fácil para ela, mas o segundo pode se provar mais difícil do que ela esperava. O único controle que Will Newman deseja é o de sua própria vida. Ele não dá a mínima para o novo tratamento experimental para o qual foi selecionado e não aguenta mais a pressão de sua mãe para que melhore. Prestes a completar dezoito anos, ele mal pode esperar para finalmente se livrar das máquinas e hospitais, usando o pouco de vida que ainda lhe resta para conhecer o mundo. Stella e Will são muito diferentes. Ao mesmo tempo, a doença que os une não é a única coisa que têm em comum. Eles têm que ficar a cinco passos um do outro, mas, conforme a conexão entre os dois aumenta, a vontade de burlar a distância física parece insuportável. Um grande amor vale um passo roubado?";

            var bookLinkAmazon = "https://www.amazon.com.br/cinco-passos-você-Rachael-Lippincott/dp/8525067423";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/5-passos-voce";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/rachael-lippincott/a-cinco-passos-de-voce/1348609223"; 
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "288";
            document.getElementById("book-date").innerHTML = "25 fevereiro de 2019";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "ALT";
            document.getElementById("book-height").innerHTML = "23.4 x 16.4 x 4.2 cm";
            document.getElementById("book-kid").innerHTML = "+10 anos"; 

            document.getElementById("rese-1-name").innerHTML = "Voando com Livros";

            var bookLinkRese1 = "https://www.voandocomlivros.com/post/a-cinco-passos-de-voce-resenha";
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";
            document.getElementById("resen-1-text").innerHTML = "Os personagens são super fofinhos, a leitura é bem fácil. Além de aumentar a conscientização da FC, a história também aborda problemas familiares, homossexualidade, valoriza a amizade e a importância do amor. A cinco passos de você não carrega uma bela narrativa e também peca no desfecho, mesmo assim é emocionante. Algumas partes mexeram bastante comigo e as lágrimas rolaram sim, haha... quem nunca neh?";
            
            document.getElementById("rese-2-name").innerHTML = "Berço Literário";

            var bookLinkRese2 = "https://bercoliterario.wordpress.com/2021/01/20/resenha-a-cinco-passos-de-voce-rachael-lippincott-mikki-daughtry-e-tobias-iaconis/";
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0";
            document.getElementById("resen-2-text").innerHTML = "Por mais que seja um sick-lit, confesso que esse foi mas levinho. Foi uma leitura que me trouxe mais reflexões, que aqueceu o meu coração. É uma história que fala sobre a importância da família, amigos, da esperança e de acreditar que mesmo estando em uma situação muito difícil, tudo pode melhorar. Adorei fazer essa leitura e sem dúvidas recomendo muito o livro, agora não vejo a hora de assistir ao filme e também de ler o novo livro dos autores.";
            break;

            case 'IAC':
            document.getElementById("book-title").innerHTML = "It: A Coisa";

            var bookImg =  "images/Home/home-adptation-it.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "26 janeiro 2015";
            document.getElementById("book-genre").innerHTML = "Suspense";
            document.getElementById("book-author").innerHTML = "Stephen King";

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

            document.getElementById("book-text").innerHTML = "Durante as férias de 1958, em uma pacata cidadezinha chamada Derry, um grupo de sete amigos começa a ver coisas estranhas. Um conta que viu um palhaço, outro que viu uma múmia. Finalmente, acabam descobrindo que estavam todos vendo a mesma coisa: um ser sobrenatural e maligno que pode assumir várias formas. É assim que Bill, Beverly, Eddie, Ben, Richie, Mike e Stan enfrentam a Coisa pela primeira vez. Quase trinta anos depois, o grupo volta a se encontrar. Mike, o único que permaneceu em Derry, dá o sinal ― uma nova onda de terror tomou a pequena cidade. É preciso unir forças novamente. Só eles têm a chave do enigma. Só eles sabem o que se esconde nas entranhas de Derry. Só eles podem vencer a Coisa. Mesmo depois de tantos anos, o público continua obcecado por IT. Ficamos obcecados porque todos temos medos. Todos temos algo que nos assusta, sejam palhaços e aranhas ou coisas que se escondem em um lugar muito mais profundo de nossa mente. Este livro fala com todo mundo. É o romance mais assustador de King, e duvido que isso vá mudar” ― The Guardian";

            var bookLinkAmazon = "https://www.amazon.com.br/coisa-Stephen-King/dp/8560280944";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/livro-it-stephen-king";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/stephen-king/it-a-coisa/3213447477";
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "1104";
            document.getElementById("book-date").innerHTML = "24 julho 2014";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Suma";
            document.getElementById("book-height").innerHTML = "23.4 x 16.4 x 4.2 cm";
            document.getElementById("book-kid").innerHTML = "+16 anos"; 

            document.getElementById("rese-1-name").innerHTML = "Idris";

            var bookLinkRese1 = "https://idris.com.br/blog/2019/09/15/resenha-it-a-coisa-stephen-king/";
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "4,5 / 5,0";
            document.getElementById("resen-1-text").innerHTML = "Em tempo: Já vi todas as adaptações, tanto o seriado antigo (que foi meu primeiro contato com a história) quanto as duas partes da versão cinematográfica atual. A 2º parte do filme atual divergiu bastante do livro, principalmente na parte final – mas a parte 1 foi bastante fiel aos personagens, apesar de obviamente haver sim, mudanças em comparação ao livro. Indico a todos irem no cinema conferir “It: parte 2” também, foi um filme que valeu a pena ir conferir no conferir – mas ah: leiam o livro, sempre!";
            
            document.getElementById("rese-2-name").innerHTML = "Estação Nerd";

            var bookLinkRese2 = "https://estacaonerd.com/resenha-it-a-coisa-de-stephen-king/"; 
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0"; 
            document.getElementById("resen-2-text").innerHTML = "Se o autor focasse só na história da coisa, teria sido bem fraco, mas ao mostrar o impacto disso na vida das pessoas, cria um universo repulsivo e nos deixa muito curiosos pra saber o que vai acontecer. Gostei de ter lido, mas é cansativo, devo admitir. E essa história foi retomada recentemente nos cinemas, a história foi dividida em duas partes, e a segunda já está para sair. Quem aí já leu/assistiu It – A Coisa? Contem as suas impressões aí nos comentários!";
            break;

            case 'CTDC': 
            document.getElementById("book-title").innerHTML = "Cinquenta Tons de Cinza"; 

            var bookImg =  "images/Home/home-adptation-50.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "26 janeiro 2015";
            document.getElementById("book-genre").innerHTML = "Romance";
            document.getElementById("book-author").innerHTML = "E. L. James";

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

            document.getElementById("book-text").innerHTML = "Ingênua e inocente, Ana se surpreende ao perceber que, a despeito da enigmática reserva de Grey, está desesperadamente atraída por ele. Incapaz de resistir à beleza discreta, à timidez e ao espírito independente de Ana, Grey admite que também a deseja ― mas em seus próprios termos. Chocada e ao mesmo tempo seduzida pelas estranhas preferências de Grey, Ana hesita. Por trás da fachada de sucesso ― os negócios multinacionais, a vasta fortuna, a amada família ―, Grey é um homem atormentado por demônios do passado e consumido pela necessidade de controle. Quando eles embarcam num apaixonado e sensual caso de amor, Ana não só descobre mais sobre seus próprios desejos, como também sobre os segredos obscuros que Grey tenta manter escondidos.";

            var bookLinkAmazon = "https://www.amazon.com.br/Cinquenta-Tons-Cinza-L-James/dp/8580572185";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/cinquenta-tons-de-cinza--serie-cinquenta-tons-de-cinza-vol--1-/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjIo5-s4J37AhVanpUCHdhoD74QFnoECAsQAQ&url=https%3A%2F%2Fwww.estantevirtual.com.br%2Flivros%2Fe-l-james%2Fcinquenta-tons-de-cinza%2F2951338698&usg=AOvVaw26A6-PMmkI84YpUIzy_rLv";
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "480"; 
            document.getElementById("book-date").innerHTML = "18 julho 2012";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Intrínseca";
            document.getElementById("book-height").innerHTML = "23.4 x 16.4 x 4.2 cm";
            document.getElementById("book-kid").innerHTML = "+18 anos";

            document.getElementById("rese-1-name").innerHTML = "Minha Contra Capa";

            var bookLinkRese1 = "http://minhacontracapa.com.br/2014/04/resenha-50-tons-de-cinza-de-e-l-james/";
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "3,5 / 5,0"; 
            document.getElementById("resen-1-text").innerHTML = "O assunto polêmico que faz com quem muitas pessoas odeiem, ou simplesmente tenham preconceito literário, está no quesito “cenas de sexo explícito”. Sim, o livro está repleto delas e a editora não suavizou em nada essas cenas. A edição está impecável. Sinceramente, acho que estou procurando pelo em ovo porque não vi nada de outro mundo descrito no livro. Pelo contrário, achei até que as cenas eram muito superficiais. Tem todo um erotismo envolvendo o casal e Christina,- ah o Christian… – é um sonho de consumo e sabe muito bem o que faz. Tirando os pontos negativos apontados, eu recomendo sim o livro para quem gosta desse estilo literário. Apesar do livro estar classificado para o público adulto, ele é bem juvenil no quesito romance. Acredito que seja por isso que o público adulto critique tanto a narrativa de E L James.";
            
            document.getElementById("rese-2-name").innerHTML = "Interrupted Dreamer";

            var bookLinkRese2 = "https://www.interruptedreamer.com/2016/09/resenha-cinquenta-tons-de-cinza.html"; 
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "3,0 / 5,0"; 
            document.getElementById("resen-2-text").innerHTML = "A ideia dela ser “acordada” para ideias como beijar, por exemplo, ok, eu até entendo – sempre tem alguém que vai fazer nosso mundo virar de cabeça pra baixo, quase que literalmente – mas é algo que seja a ser muito superficial, entende?  Essa parte de ser acordada me lembra Amante Sombrio, que tem toda uma história por trás, mas ainda assim, não chega a ser essa superficialidade que eu senti ao ler. Na leitura, o início nem tanto, mas depois do primeiro encontro até sessenta por cento do livro foi muito difícil pra ler - eu não queria que Ana gostasse do Christian, ela revirar os olhos me enchia a paciência assim como morder o lábio (que saco!). Eu não gostava do Christian (e ainda não gosto, ponto). Mas devo dizer que em certo ponto da narrativa as coisas até que melhoraram, apesar dele ser do tipo controlador, ciumento e muito possessivo (meu Deus, sai daqui Grey! rs) e ter seus (TODOS) demônios pessoais, que pra variar, só começaram a ser mostrados no final da leitura (um dos motivos de ter ficado mais interessante e que vai ser desenvolvido nos volumes posteriores, provavelmente). Ana: eu gostei só em alguns momentos, na maior parte, por mim, ela podia trocar de alma e parar de revirar os olhos e morder os lábios para o Grey ficar repetindo isso - ela tem um gosto por literatura bem inusitado, não ? Mas acho que possa ter sido coisa de primeiro livro e também, sabe, uma jogada da autora.";
            break;

            case 'JN1': 
            document.getElementById("book-title").innerHTML = "Jogador Número 1"; // coloca o nome do livro

            var bookImg =  "images/Home/home-adptation-1.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "26 janeiro 2015";
            document.getElementById("book-genre").innerHTML = "Guerra";
            document.getElementById("book-author").innerHTML = "Ernest Cline";

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

            document.getElementById("book-text").innerHTML = "Um mundo em jogo, a busca pelo grande prêmio. Você está preparado, Jogador número 1? O ano é 2044 e a Terra não é mais a mesma. Fome, guerras e desemprego empurraram a humanidade para um estado de apatia nunca antes visto.Wade Watts é mais um dos que escapa da desanimadora realidade passando horas e horas conectado ao OASIS ? uma utopia virtual global que permite aos usuários ser o que quiserem, um lugar onde se pode viver e se apaixonar em qualquer um dos mundos inspirados nos filmes, videogames e cultura pop dos anos 1980.Mas a possibilidade de existir em outra realidade não é o único atrativo do OASIS, o falecido James Halliday, bilionário e criador do jogo, escondeu em algum lugar desse imenso playground uma série de easter-eggs que premiará com sua enorme fortuna ? e poder ? aquele que conseguir desvendá-los. E Wade acabou de encontrar o primeiro deles.Um novo Matrix.? USA Today ?O fenômeno do ano.? New York Times ?Cline é capaz de incorporar seus brinquedos e jogos favoritos em uma narrativa perfeita.? The New York Times ?Jogador número 1 é um bilhete sorteado da loteria.? New York Daily News ?Um desafio cibernético completo, emocionante e simpático... A saga criativa e inovadoramente nerd de Cline tem toda a cara de um grande sucesso.? Booklist ?Fascinante... Willy Wonka se encontra com Matrix. Seus personagens nerds são nerdmente demais. A ação do livro é imaginativa, sempre cinematográfica. E Cline ainda consegue tecer um romance neste conto de herói e vilão.? USA Today ?Para os Harry Potters crescidos... Mistério e fantasia neste romance se complementam da maneira mais prazerosa, e os detalhes que transformam o mundo do sr. Cline são simplesmente incríveis. Jogador número 1 tem tudo.? Huffington Post ?Um thriller inteligente, divertido que celebra e critica a cultura on-line... Feito com brincadeiras do meio e referências ardilosas.? San Francisco Chronicle ?";

            var bookLinkAmazon = "https://www.amazon.com.br/Jogador-Número-1-Ernest-Cline/dp/8544103162";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/jogador%20n1?_q=jogador%20n1&map=ft&page=2";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.saraiva.com.br/jogador%20n1?_q=jogador%20n1&map=ft&page=2"; 
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "464";
            document.getElementById("book-date").innerHTML = "10 outubro 2019";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Leya";
            document.getElementById("book-height").innerHTML = "23.4 x 16.4 x 4.2 cm";
            document.getElementById("book-kid").innerHTML = "+13 anos";

            document.getElementById("rese-1-name").innerHTML = "O Capacitor";

            var bookLinkRese1 = "https://ocapacitor.com/resenha-jogador-no-1/"; 
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "4,5 / 5,0";
            document.getElementById("resen-1-text").innerHTML = "Com uma mistura de referências e sentimentos, Jogador Nº 1 transporta o leitor para um universo novo e ao mesmo tempo familiar. É bem interessante a forma como revisitamos coisas que amamos dentro de um novo contexto enquanto tentamos desvendar enigmas. Apesar de um vilão esquecível e um desenvolvimento de personagens pouco competente, o livro consegue ser uma aventura marcante e com todo sabor da nostalgia. Vale ressaltar que apesar de carecer de profundidade, Jogador Nº 1 é um livro extremamente divertido e absolutamente viciante. A busca pelo tesouro prende o leitor enquanto as referências arrancam risos. A experiência é extremamente gratificante. Se você é fã de cultura pop, especialmente a dos anos 80, e de histórias de caça ao tesouro, Jogador Nº 1 é uma escolhe extremamente acertada. Aquele livro com cara de “Sessão da Tarde”.";
            
            document.getElementById("rese-2-name").innerHTML = "Imersão Literária";

            var bookLinkRese2 = "https://www.imersaoliteraria.com.br/2021/09/resenha-jogador-numero-um-livro-1.html"; 
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "3,0 / 5,0";
            document.getElementById("resen-2-text").innerHTML = "O livro tem uma história boa, e mesmo tendo muitas descrições e diálogos esparsos, tem uma boa dinâmica e consequentemente uma linguagem fluida. Assim, a leitura se torna interessante, podendo ser lida rapidamente. Minhas ressalvas com o livro me impediram de gostar dele totalmente e os únicos pontos que realmente gostei foram a história e referências citadas. Essa era uma leitura que tentei ler sem expectativas, e me cativou até certo ponto, porém eu não estava preparada para o que iria encontrar. Pode ser um livro que agrade também fãs da cultura dos anos 1980, principalmente jogos em geral. A adaptação do livro é bem comentada e pode ser uma opção para ler depois de concluir a leitura, ou como um complemento a mais para quem gostou da história.";
            break;

            case 'F':
            document.getElementById("book-title").innerHTML = "Fallen";

            var bookImg =  "images/Home/home-adptation-fallen.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "26 janeiro 2015";
            document.getElementById("book-genre").innerHTML = "Romance";
            document.getElementById("book-author").innerHTML = "Lauren Kate";

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

            document.getElementById("book-text").innerHTML = "Excitante, sombrio e romântico Fallen é, ao mesmo tempo, um thriller vigoroso e uma inesquecível história de amor. Lauren aposta no amor impossível entre os protagonistas para tecer o início de uma saga com todos os ingredientes de um cult do gênero. Em Fallen, acompanhamos a adolescente Luce, mandada para um reformatório ― apropriadamente batizado de Sword & Cross ― após a morte do namorado em um incêndio misterioso. Ela suspeita que estranhas sombras negras, que a atormentam desde a infância, são as verdadeiras responsáveis. Mas quem acreditaria nela?Na escola, ela encontra o etereamente belo Daniel Grigori, que desperta uma estranha sensação de reconhecimento: único ponto luminoso num lugar onde celulares são proibidos e há câmeras de vigilância por todos os cantos. Mas tanta luz hipnotiza a menina, atraída pelo rapaz como uma mariposa pela chama. Ele tenta se manter afastado de Luce, mas também não consegue. E a verdade promete separá-los como tantas outras vezes ― com a morte de Luce. Amantes destinados a se encontrar e se perder vida após vida, século após século.";

            var bookLinkAmazon = "https://www.amazon.com.br/Fallen-Vol-1-Lauren-Kate/dp/8501089621";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/livro-fallen";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/lauren-kate/fallen/3840128096";
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "406"; 
            document.getElementById("book-date").innerHTML = "30 julho 2010";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Galera";
            document.getElementById("book-height").innerHTML = "23.4 x 16.4 x 4.2 cm";
            document.getElementById("book-kid").innerHTML = "+15 anos";

            document.getElementById("rese-1-name").innerHTML = "Resenha dos Sonhos";

            var bookLinkRese1 = "https://resenhandosonhos.com/fallen-lauren-kate/"; 
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0"; 
            document.getElementById("resen-1-text").innerHTML = "Talvez o timing dos romances sobrenaturais possa ter passado e o filme tenha chegado no momento errado. Adaptação esta que trabalhou duro na descaracterização do enredo, somado a interpretações estereotipadas demais. Toda esta tentativa de fazer com que Fallen se assemelhasse a Crepúsculo, contribui que o mesmo venha sofrendo as consequências de uma abordagem equivocada daquilo que realmente é. Uma pena para os fãs da série, mas também nada inesperado entre as adaptações literárias. Porém, esta é apenas a minha opinião, entretanto, é verdade que entre erros e acertos, Fallen carrega um enredo único e original na literatura jovem e marcou parte de uma geração que ganha novamente a oportunidade de ver Fallen em destaque nas prateleiras. Se você deseja ter a experiência completa com Fallen, vou dar duas dicas de fã. Se possível não vejam o trailer do filme, infelizmente ele entrega demais sobre a trama. Também deixem para ler o prólogo apenas no final da leitura, iniciem o livro pelo capítulo um. ";
            
            document.getElementById("rese-2-name").innerHTML = "ThunderWave";

            var bookLinkRese2 = "https://www.thunderwave.com.br/resenha-fallen-lauren-kate/?amp";
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0";
            document.getElementById("resen-2-text").innerHTML = "A premissa de Fallen é muito boa, a autora abrange uma temática interessante, porém, demoramos quase o livro todo para chegar na parte empolgante. Enquanto tentamos desvendar o mistério acerca de Luce e Daniel, ficamos presos em um triangulo amoroso adolescente um tanto desinteressante. O grande problema da obra é demorar quase toda a leitura para apresentar uma questão que provavelmente todos já sabiam: a questão dos caídos. Lauren escreve sobre amor, sobre como esse sentimento pode superar tudo e isso torna a saga Fallen boa – do segundo volume em diante. Não é raro a leitura desse primeiro volume desempolgar com seu ritmo adolescente sobrenatural e o interesse voltar apenas nas continuações, já que quando chega na parte boa, o livro acaba para começar exatamente de onde parou no volume dois. Fallen é uma leitura indicada para quem gosta de sobrenatural com bastante romance, quer se aventurar por uma série razoavelmente grande e tem paciência para ignorar o começo lento.";
            break;

            case 'OCDV':
            document.getElementById("book-title").innerHTML = "O Código da Vinci"; 

            var bookImg =  "images/Home/home-adptation-vinci.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "01 janeiro 2004";
            document.getElementById("book-genre").innerHTML = "Suspense";
            document.getElementById("book-author").innerHTML = "Dan Brown";

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

            document.getElementById("book-text").innerHTML = "Um assassinato dentro do Museu do Louvre, em Paris, traz à tona uma sinistra conspiração para revelar um segredo que foi protegido por uma sociedade secreta desde os tempos de Jesus Cristo. A vítima é o respeitado curador do museu, Jacques Saunière, um dos líderes dessa antiga fraternidade, o Priorado de Sião, que já teve como membros Leonardo da Vinci, Victor Hugo e Isaac Newton. Momentos antes de morrer, Saunière deixa uma mensagem cifrada que apenas a criptógrafa Sophie Neveu e Robert Langdon, um simbologista, podem desvendar. Eles viram suspeitos e detetives enquanto tentam decifrar um intricado quebra-cabeças que pode lhes revelar um segredo milenar que envolve a Igreja Católica. Apenas alguns passos à frente das autoridades e do perigoso assassino, Sophie e Robert vão à procura de pistas ocultas nas obras de Da Vinci e se debruçam sobre alguns dos maiores mistérios da cultura ocidental - da natureza do sorriso da Mona Lisa ao significado do Santo Graal. Mesclando os ingredientes de um envolvente suspense com informações sobre obras de arte, documentos e rituais secretos, Dan Brown consagrou-se como um dos autores mais brilhantes da atualidade.";

            var bookLinkAmazon = "https://www.amazon.com.br/Código-Vinci-Dan-Brown/dp/8575421131";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/livro-o-codigo-vinci";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/dan-brown/o-codigo-da-vinci/3976013343"; 
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "432";
            document.getElementById("book-date").innerHTML = "1 janeiro 2004";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Editora Arqueiro";
            document.getElementById("book-height").innerHTML = "23.4 x 16.4 x 4.2 cm";
            document.getElementById("book-kid").innerHTML = "+13 anos";

            document.getElementById("rese-1-name").innerHTML = "Meu Ctáloggo de Livros";

            var bookLinkRese1 = "https://www.meucatalogodelivros.com.br/o-codigo-da-vinci-resenha/"; 
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; 
            document.getElementById("resen-1-text").innerHTML = "Toda a trama é baseada na simbologia religiosa e fala respeito do mistério da maior conspiração dos últimos dois mil anos, sobre a lenda do Santo Graal. Porém, o que o autor Dan Brown faz é indagar o leitor e fazer com que pense sobre o que realmente pode ter acontecido na época de Cristo, sem fazer nenhuma satirização com a Igreja. O livro mistura a vida real com ficção, o que faz com que o leitor realmente se pergunte se esses fatos realmente aconteceram decorrente à existência dessas organizações secretas. A leitura é imensamente válida, visto que aborda importantes assuntos na sociais e da história da arte. ";
            
            document.getElementById("rese-2-name").innerHTML = "O Clube da Meia Noite";

            var bookLinkRese2 = "http://www.oclubedameianoite.com/2017/07/resenha-o-codigo-da-vinci-dan-brown.html"; 
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; 
            document.getElementById("resen-2-text").innerHTML = "A história consegue criar uma “nova interpretação” dos fatos reais que conhecemos e devido a isso, muitos leitores admiram de tal forma o escritor e suas obras, que acabam confundindo sua história fictícia com a realidade. Já outros acabam definindo como “literatura comercial barata” e acham horrível as ideias apresentadas pelo autor, como se ele “moldasse” ou influenciasse leitores desprevenidos. De fato, para pessoas que acreditam nas mais diversas teorias de conspiração, o livro pode ser facilmente tragado e interpretado como uma verdade absoluta. Não observa-se no entanto, que livros de ficção científica muitas vezes utilizam-se de fatos científicos para criar uma mitologia em torno daquilo que é apresentado. Nesse gênero literário, é facilmente observável pelo leitor o que é ou não real. Assim como a ficção científica, Dan Brown utiliza elementos verídicos e os misturam com sua fantasia, tornando-se uma história atraente que nas entrelinhas pode parecer ter a intenção de afirmar alguma 'verdade'";
            break;

            case 'OSMDEH': 
            document.getElementById("book-title").innerHTML = "Os Sete Maridos de Evelyn Hugo"; 

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

            document.getElementById("book-text").innerHTML = "Com todo o esplendor que só a Hollywood do século passado pode oferecer, esta é uma narrativa inesquecível sobre os sacrifícios que fazemos por amor, o perigo dos segredos e o preço da fama. Lendária estrela de Hollywood, Evelyn Hugo sempre esteve sob os holofotes ― seja estrelando uma produção vencedora do Oscar, protagonizando algum escândalo ou aparecendo com um novo marido… pela sétima vez. Agora, prestes a completar oitenta anos e reclusa em seu apartamento no Upper East Side, a famigerada atriz decide contar a própria história ― ou sua “verdadeira história” ―, mas com uma condição: que Monique Grant, jornalista iniciante e até então desconhecida, seja a entrevistadora. Ao embarcar nessa misteriosa empreitada, a jovem repórter começa a se dar conta de que nada é por acaso ― e que suas trajetórias podem estar profunda e irreversivelmente conectadas.";

            var bookLinkAmazon = "https://www.amazon.com.br/Os-sete-maridos-Evelyn-Hugo/dp/8584391509";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/os-sete-maridos-de-evelyn-hugo/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/taylor-jenkins-reid/os-sete-maridos-de-evelyn-hugo/42887747";
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "360";
            document.getElementById("book-date").innerHTML = "21 outubro 2019";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Paralela";
            document.getElementById("book-height").innerHTML = "22.8 x 15.6 x 2 cm";
            document.getElementById("book-kid").innerHTML = "+16 anos";

            document.getElementById("rese-1-name").innerHTML = "Beco Literário";

            var bookLinkRese1 = "https://becoliterario.com/resenha-os-sete-maridos-de-evelyn-hugo-taylor-jenkins-reid/";
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "5,5 / 5,0"; 

            document.getElementById("resen-1-text").innerHTML = "Só posso dizer que Os sete maridos de Evelyn Hugo me surpreendeu positivamente. É um livro que tem representatividade racial, sexual e nos mostra, no decorrer dos anos, o quanto cada uma dessas lutas teve que avançar para chegar no que é hoje. E, além disso, nos mostra o valor da perseverança e os custos da fama. Sim, admiro Evelyn Hugo e depois dessa leitura, sinto que sou um pouquinho mais confiante com relação aos meus sonhos. Dou todo o céu de estrelas.";
            
            document.getElementById("rese-2-name").innerHTML = "Amor por Livros";

            var bookLinkRese2 = "https://www.amorporlivros.com.br/resenha-os-sete-maridos-evelyn-hugo/";
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,5 / 5,0"; 
            document.getElementById("resen-2-text").innerHTML = "Depois da metade, os altos e baixos dão uma desacelerada e a história foca em uma parte específica do romance que eu, particularmente, achei um pouco enrolada demais. É um tal de vai e volta que eu gostaria que tivesse sido mais rápido, apesar da beleza do amor que Evelyn demonstra. Mesmo considerando os pontos negativos que comentei, foi uma boa leitura. A escritora faz uma construção de personagem de uma forma que me deixou admirada. Também o livro tem uma forte mensagem sobre a sexualidade e bissexualidade. Mesmo hoje sendo mais fácil falar sobre isso, na época era ainda pior, com consequências ainda mais duras, e isso fica muito explícito na história. Fora também sobre toda a relação de machismo. Enquanto Evelyn era assediada, quem sofria as consequências era sempre ela. E porque ela tinha um objetivo em mente, ela tolerou muito daquelas coisas.";
            break;

            case 'QNEO':
            document.getElementById("book-title").innerHTML = "Quando Ninguém Está Olhando";

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

            document.getElementById("book-text").innerHTML = "Sydney Green nasceu e foi criada no Brooklyn, em Nova York, mas cada vez que ela pisca os olhos seu amado bairro parece mudar. Condomínios se espalham como erva daninha, placas de “vende-se” surgem da noite para o dia e os vizinhos que ela conhece a vida toda estão sumindo. Para manter de pé tanto o passado quanto o presente da comunidade, Sydney decide canalizar sua frustração planejando um passeio guiado em que pretende contar a verdadeira história do local. Só que, para tornar o projeto realidade, vai precisar aturar seu novo vizinho, Theo, como assistente. A pesquisa dos dois, entretanto, logo se transforma. O que era apenas uma distração vira uma história de paranoia e medo. No fim das contas, talvez os vizinhos não tenham se mudado para outros bairros e a revitalização do lugar seja mais mortal do que eles imaginaram. Seriam apenas coincidências ou sinais de uma grande conspiração? Sydney pode confiar em Theo, ou ela também corre o risco de desaparecer? Quando ninguém está olhando nos conduz por um enredo hipnotizante e surpreendente, que aborda com perspicácia a violência racial e as assimetrias sociais, em uma sequência de eventos instigantes que aos poucos dão forma a um cenário de completo horror.";

            var bookLinkAmazon = "https://www.amazon.com.br/Quando-Ningu%C3%A9m-Est%C3%A1-Olhando-Alyssa/dp/6555602090";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/alyssa-cole/quando-ninguem-esta-olhando/4026818029"; 
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "400"; 
            document.getElementById("book-date").innerHTML = "19 novembro 2021";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Intrínseca";
            document.getElementById("book-height").innerHTML = "14 x 2.1 x 21 cm";
            document.getElementById("book-kid").innerHTML = "+14 anos"; 
            document.getElementById("rese-1-name").innerHTML = "Além do Livro";

            var bookLinkRese1 = "https://alemdolivro.com/2022/05/17/resenha-de-quando-ninguem-esta-olhando-alyssa-cole/";
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0"; 

            document.getElementById("resen-1-text").innerHTML = "Meu aspecto preferido de Quando ninguém está olhando foi a crítica racial e social. A situação que acompanhamos na história apenas escancara o processo de gentrificação que atinge várias regiões na vida real. E o mais triste é saber que “melhorar um bairro” quase sempre significa gerar lucros para grandes corporações a partir do apagamento de uma comunidade e do prejuízo à população de baixa renda – o que, por sua vez, aumenta ainda mais os abismos da desigualdade social. Quando ninguém está olhando também aborda o racismo (e em especial, o estrutural) de maneira bastante atual e didática. E atrelado à questão da gentrificação, faz um paralelo à colonização, mostrando como os brancos sempre partem do pressuposto que são os donos de tudo. Não à toa, é impossível ler o livro de Cole não lembrar do filme Corra!, de Jordan Peele, e da série Eles, disponível no Prime Video.";
            
            document.getElementById("rese-2-name").innerHTML = "Papo Afro";

            var bookLinkRese2 = "https://www.papoafro.com.br/2022/05/blog-post_02.html"; 
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; 

            document.getElementById("resen-2-text").innerHTML = "Bom, “Quando ninguém está olhando” é um thriller que eu considero um pouco de terror psicológico. Foi impossível parar de ler uma vez que comecei, pois os acontecimentos simplesmente me deixavam curiosa para saber o que ia acontecer. Vez ou outra o leitor não sabia se a Sydney estava vendo coisas reais ou tendo alucinações provocadas pelo medo, pela paranoia. E pensando no racismo como um fenômeno social muito real, é realmente uma história completamente aterrorizante, porque quando fechamos as páginas do livro, sabemos que são coisas que acontecem e continuam acontecendo. A autora foi completamente perspicaz na condução dessa obra. Ela tem uma escrita muito envolvente e consegue fazer mistério e surpreender. Alyssa Cole não é nada óbvia e isso foi o mais interessante de ver e acompanhar nesse livro. Indico a leitura fortemente, porém recomendo que pessoas negras, em especial, se preparem psicologicamente para embarcar nessa jornada, porque é um conteúdo que pode facilmente se tornar um gatilho. Me apaixonei tanto pela autora que fiquei morrendo de vontade de ler mais obras dela. É simplesmente uma das histórias mais geniais que já li de ficção com temática sócio-racial.";
            break; 
            
            case 'WEH': 
            document.getElementById("book-title").innerHTML = "Querido Evan Hansen";

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

            document.getElementById("book-text").innerHTML = "Evan Hansen sempre teve muita dificuldade de fazer amigos. Para mudar isso, decide seguir as recomendações de seu psicólogo e escrever cartas encorajadoras para si mesmo, com esperança de que seu último ano na escola seja um pouco melhor. O que não esperava era que uma das cartas fosse parar nas mãos de Connor Murphy, o aluno mais encrenqueiro da turma. Quando Connor comete suicídio e sua família encontra a carta de Evan, todos começam a pensar que os dois eram melhores amigos. Sem conseguir explicar a situação, Evan acaba refém de uma grande mentira. Ao mesmo tempo, graças a essa (falsa) amizade, o garoto finalmente se aproxima de Zoe, a menina de seus sonhos, e passa a ser notado no colégio. No fundo, Evan sabe que não está fazendo a coisa certa, mas se está ajudando a família de Connor a superar a perda, que mal pode ter? Evan agora tem um propósito de vida. Até que a verdade ameaça vir à tona, e ele precisa enfrentar seu maior inimigo: ele mesmo.";

            var bookLinkAmazon = "https://www.amazon.com.br/Querido-Evan-Hansen-Val-Emmich/dp/8555340837";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/val-emmich/querido-evan-hansen/3857843493"; 
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "336";
            document.getElementById("book-date").innerHTML = "26 abril 2019";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Seguinte";
            document.getElementById("book-height").innerHTML = " 22.8 x 14.6 x 1.8 cm";
            document.getElementById("book-kid").innerHTML = "+14 anos";

            document.getElementById("rese-1-name").innerHTML = "Idris";

            var bookLinkRese1 = "https://idris.com.br/resenhas/2019/06/21/resenha-querido-evan-hansen-val-emmich/"; 
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "4,5 / 5,0";

            document.getElementById("resen-1-text").innerHTML = "Querido Evan Hansen é um livro baseado no musical da Brodway de mesmo nome, escrito também por Steven Levenson. O livro conta a história de Mark Evan, que prefere ser chamado de Evan, um adolescente solitário cujo a vida é totalmente normal e chata, até que um de seus colegas de classe se suicida e, de repente, ele se vê muito mais envolvido na história do que gostaria, e isso muda toda a sua vida. Não vou mentir para vocês, nunca havia ouvido sequer falar desse musical ou mesmo do livro antes de fazer a leitura, mas só a arte lindinha que a Seguinte fez já chamou minha atenção. O livro trata de diversos assuntos interessantes, ainda mais para pessoas da faixa etária young adult, como depressão, suicídio, solidão, aceitação, paixões platônicas, empatia, e esse foi outros dos motivos pelo qual me conquistou.";
            
            document.getElementById("rese-2-name").innerHTML = "Mais que Livros";

            var bookLinkRese2 = "https://www.maisquelivros.com/2021/12/resenha-querido-evan-hansen-val-emmich.html"; 
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; 

            document.getElementById("resen-2-text").innerHTML = "A escrita de Val Emmich é muito fluida e envolvente. Neste ano de 2019 eu não consegui ler muitos livros e precisava de histórias que me prendessem logo nas primeiras páginas. E foi o que aconteceu aqui. Comecei a leitura sem pretensão nenhuma e quando dei por mim já estava finalizando o livro, completamente apaixonado. Os personagens dessa história, desde os principais até os coadjuvantes, são a grande alma da narrativa. Evan é um protagonista incrível, mesmo com suas mentiras. Eu entendo completamente suas atitudes, pois foram tomadas pelo coração, não pela razão. Nunca foi sua intenção machucar ninguém, ele só queria trazer paz aos corações partidos. Connor também é um personagem incrível. Temos algumas passagens do livro narradas pelo 'fantasma' do garoto, que acompanha de perto todos os acontecimentos que envolvem sua família após sua morte. Achei essa jogada sensacional e só consigo imaginar como deve ser legal de assistir isso ao vivo.";
            break; 

        case 'GE': 
            document.getElementById("book-title").innerHTML = "Garota Exemplar"; 

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

            document.getElementById("book-text").innerHTML = "Agora, a trama sobre o casamento que sai tragicamente dos eixos chega aos cinemas, numa superprodução da Twentieth Century Fox dirigida por David Fincher (A rede social e Clube da luta) e estrelada por Ben Affleck e Rosamund Pike. O roteiro é assinado pela própria Gillian Flynn. O livro começa no dia do quinto aniversário de casamento de Nick e Amy Dunne, quando a linda e inteligente esposa de Nick desaparece da casa deles às margens do rio Mississippi. Sinais indicam que se trata de um sequestro violento e Nick rapidamente se torna o principal suspeito. Sob pressão da polícia, da mídia e dos ferozmente amorosos pais de Amy, Nick desfia uma série interminável de mentiras, meias verdades e comportamento inapropriado. Ele é evasivo e amargo ― mas seria um assassino? Ao mesmo tempo, passagensdo diário de Amy revelam um casamento tumultuado ― mas ela estaria contando toda a história? Alternando entre os pontos de vista de Nick e Amy, Flynn cria uma aura de dúvidas em que o cenário muda a cada capítulo. À medida que as revelações surgem, fica claro que, se existe alguma verdade nos discursos de Nick e Amy, ela é mais sombria, distorcida e assustadora do que podemos imaginar. Magistralmente bem construído do início ao fim, Garota exemplar é um daqueles livros impossíveis de largar e sobre o qual se quer debater assim que a leitura termina.";

            var bookLinkAmazon = "https://www.amazon.com.br/Garota-Exemplar-Gillian-Flynn/dp/8580572908";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/gillian-flynn/garota-exemplar/1370051659"; 
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "448";
            document.getElementById("book-date").innerHTML = "22 fevereiro 2013";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = " Intrínseca";
            document.getElementById("book-height").innerHTML = "22.4 x 15.4 x 2.6 cm";
            document.getElementById("book-kid").innerHTML = "+14 anos"; 

            document.getElementById("rese-1-name").innerHTML = "Bons Livros para Ler";

            var bookLinkRese1 = "https://www.bonslivrosparaler.com.br/livros/resenhas/garota-exemplar/2581"; 
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; 

            document.getElementById("resen-1-text").innerHTML = "Só posso dizer que Os sete maridos de Evelyn Hugo me surpreendeu positivamente. É um livro que tem representatividade racial, sexual e nos mostra, no decorrer dos anos, o quanto cada uma dessas lutas teve que avançar para chegar no que é hoje. E, além disso, nos mostra o valor da perseverança e os custos da fama. Sim, admiro Evelyn Hugo e depois dessa leitura, sinto que sou um pouquinho mais confiante com relação aos meus sonhos. Dou todo o céu de estrelas.";

            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

            document.getElementById("resen-1-text").innerHTML = "Se no início do romance, Nick parece nas páginas do diário de Amy como um marido bacana, ambos vivendo e compartilhando o amor puro e sincero, aos poucos, Amy vai mostrando a deterioração do amor entre eles. E deixa à mostra para que as autoridades façam uso – e contra ele. Um romance que vai adquirindo uma eletricidade a ponto da autora transformar seus protagonistas em antagonistas, manipulando tanto um como o outro, sempre unidos na dança destrutiva do casamento já morto. Gillian Flynn, jornalista, nascida em Kansas City, filha de professores da faculdade local, começou sua história literária em 2006, com o mistério “Sharp Objects”, e em 2009, lançou “Dark Places”, mas foi com a “Garota Exemplar” que essa escritora conseguiu desbancar os “50 tons de cinza”. Um livro feito por uma escritora que conhece a profissão de escrever, um livro “exemplar”, que merece um lugar em sua estante.";
            
            document.getElementById("rese-2-name").innerHTML = "Queria Estar Lendo";

            var bookLinkRese2 = "https://www.queriaestarlendo.com.br/2020/01/resenha-garota-exemplar-mlv2020.html"; 
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,5 / 5,0"; 

            document.getElementById("resen-2-text").innerHTML = "Depois da metade, os altos e baixos dão uma desacelerada e a história foca em uma parte específica do romance que eu, particularmente, achei um pouco enrolada demais. É um tal de vai e volta que eu gostaria que tivesse sido mais rápido, apesar da beleza do amor que Evelyn demonstra. Mesmo considerando os pontos negativos que comentei, foi uma boa leitura. A escritora faz uma construção de personagem de uma forma que me deixou admirada. Também o livro tem uma forte mensagem sobre a sexualidade e bissexualidade. Mesmo hoje sendo mais fácil falar sobre isso, na época era ainda pior, com consequências ainda mais duras, e isso fica muito explícito na história. Fora também sobre toda a relação de machismo. Enquanto Evelyn era assediada, quem sofria as consequências era sempre ela. E porque ela tinha um objetivo em mente, ela tolerou muito daquelas coisas.";
            break; 
        
            case 'ACEDE': 
            document.getElementById("book-title").innerHTML = "A Culpa é Das Estrelas";

            var bookImg =  "images/Home/home-adptation-stars.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "27 de outubro de 2014";
            document.getElementById("book-genre").innerHTML = "Romance";
            document.getElementById("book-author").innerHTML = "John Green";

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

            document.getElementById("book-text").innerHTML = "Hazel é uma paciente terminal. Ainda que, por um milagre da medicina, seu tumor tenha encolhido bastante ― o que lhe dá a promessa de viver mais alguns anos ―, o último capítulo de sua história foi escrito no momento do diagnóstico. Mas em todo bom enredo há uma reviravolta, e a de Hazel se chama Augustus Waters, um garoto bonito que certo dia aparece no Grupo de Apoio a Crianças com Câncer. Juntos, os dois vão preencher o pequeno infinito das páginas em branco de suas vidas. Inspirador, corajoso, irreverente e brutal, A culpa é das estrelas é a obra mais ambiciosa e emocionante de John Green, sobre a alegria e a tragédia que é viver e amar.";

            var bookLinkAmazon = "https://www.amazon.com.br/Culpa-É-das-Estrelas/dp/8580572266";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/culpa-e-das-estrelas-a-10519/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/john-green/a-culpa-e-das-estrelas/1542645645"; 
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "288";  
            document.getElementById("book-date").innerHTML = "27 outubro 2014";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Intrínseca";
            document.getElementById("book-height").innerHTML = "21 x 13.8 x 1.6 cm";
            document.getElementById("book-kid").innerHTML = "+13 anos";

            document.getElementById("rese-1-name").innerHTML = "Amor por Livros";

            var bookLinkRese1 = "https://www.amorporlivros.com.br/a-culpa-e-das-estrelas/"; 
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0"; 

            document.getElementById("resen-1-text").innerHTML = "achei que o romance aconteceu um pouco rápido demais em alguns momentos. Augustus parece se apaixonar muito rapidamente. Como o livro é narrado pela própria Hazel, eu senti falta da versão do Gus sobre os fatos. Mas, enfim, esse não é um romance com final feliz. Não me fez chorar (até hoje nenhum livro fez), mas me deixou bastante chocada. A narrativa é muito boa e não te cansa em nenhum momento. Quando você vê, o livro acaba com aquele sentimento de “tá, e agora? o que eu faço da minha vida?” Recomendo para quem gosta de histórias românticas, mas não se importa de ler sobre doenças ou tristeza. Algumas coisas desse livro são difíceis de serem engolidas.";
            
            document.getElementById("rese-2-name").innerHTML = "Valeu Guten Berg";

            var bookLinkRese2 = "https://valeugutenberg.com/2017/11/24/resenha-a-culpa-e-das-estrelas/"; 
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; 

            document.getElementById("resen-2-text").innerHTML = "Best-seller merecido. Também é preciso dizer o quanto o desfecho é inesperado. Durante a leitura, você imagina que já sabe qual será o final, mas o autor consegue surpreender. Então, se você ainda não leu A culpa é das estrelas por má vontade, preconceito ou qualquer outro motivo, confie em mim e leia (inclusive se você já viu o filme, que é bem fiel ao texto original). Ele não foi um best-seller por acaso. Aliás, seria ótimo se todos os best-sellers tivessem a mesma qualidade dele.";
            break;

            case 'AEG': 
            document.getElementById("book-title").innerHTML = "Amor & Gelato";

            var bookImg =  "images/Home/home-popullar-gelato.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "21 de julho de 2017";
            document.getElementById("book-genre").innerHTML = "Romance";
            document.getElementById("book-author").innerHTML = "Jenna Evans Welch";

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

            document.getElementById("book-text").innerHTML = "Um verão na Itália, uma antiga história de amor e um segredo de família. Depois da morte da mãe, Lina fica com a missão de realizar um último pedido: ir até a Itália para conhecer o pai. Do dia para a noite, ela se vê na famosa paisagem da Toscana, morando em uma casa localizada no mesmo terreno de um cemitério memorial de soldados americanos da Segunda Guerra Mundial, com um homem que nunca tinha ouvido falar. Apesar das belezas arquitetônicas, da história da cidade e das comidas maravilhosas, o que Lina mais quer é ir embora correndo dali. Mas as coisas começam a mudar quando ela recebe um antigo diário da mãe. Nele, a menina embarca em uma misteriosa história de amor, que pode explicar suas próprias origens. No meio desse turbilhão de emoções, Lina ainda conhece Ren e Thomas, dois meninos lindos que vão mexer ainda mais com seu coração. Uma trajetória que fará Lina descobrir o amor, a si mesma e também aprender a lidar com a perda. Amor & gelato é uma deliciosa viagem pelos mais românticos pontos turísticos italianos, com direito a tudo de mais intenso que o lugar tem a oferecer: desde paixões até corações partidos.";

            var bookLinkAmazon = "https://www.amazon.com.br/Amor-Gelato-Jenna-Evans-Welch/dp/8551002341";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/amor-gelato";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/jenna-evans-welch/amor-gelato/360465515";
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "320";  
            document.getElementById("book-date").innerHTML = "26 junho 2022";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Intrínseca";
            document.getElementById("book-height").innerHTML = "20.8 x 13.6 x 1.8 cm";
            document.getElementById("book-kid").innerHTML = "+15 anos"; 

            document.getElementById("rese-1-name").innerHTML = "Livros e Fuxicos";

            var bookLinkRese1 = "http://www.livrosefuxicos.com/2017/10/resenha-amor-gelato-jenna-evans-welc.html";
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; 

            document.getElementById("resen-1-text").innerHTML = "Além de uma narrativa bem construída e de uma variedade de emoções, a obra também traz um romance incrível. Ren é o tipo de mocinho que realmente é um mocinho. Ele apoia, ajuda, escuta ao mesmo tempo em que compartilha suas histórias, e faz de tudo para ver Lina feliz. O romance nasce mais rápido do que estou acostumada a encontrar em livros assim, mas a proposta da autora foi demais: venha para a Itália e se apaixone (por garotos educados e charmosos, pelas construções e galerias de arte ou, quem sabe, por nossos deliciosos gelatos). No fim gostei de praticamente tudo no livro: os segredos relacionados à paternidade, a relação de amizade que nasce entre Lina e Ren (que é um FOFO LINDO e já disso FOFO?), o clima gostoso de viagem e diversão (sério, as paisagens e a típica atmosfera italiana me deixaram com uma vontade gigante de conhecer esse país), e a mensagem final que o livro deixa no leitor.";
            
            document.getElementById("rese-2-name").innerHTML = "De Livro em Livro";

            var bookLinkRese2 = "http://www.delivroemlivro.com.br/2022/10/amor-e-gelato-jenna-evans-welch-resenha.html";
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0";

            document.getElementById("resen-2-text").innerHTML = "Embora tenhamos esse detalhe evidente em AMOR E GELATO que pode desagradar muitos leitores pela falta de coerência, informo que tal trivialidade não prejudica a narrativa de modo a deixá-la maçante ou chata, o volume continua sendo uma delícia de ler e flui com muita naturalidade! Para concluir, AMOR E GELATO, é um livro adolescente que aborda dilemas jovens, sobretudo levando em conta as vivências da personagem. O volume também se trata de um clichê super gostoso de ler e apesar de ser evidente que o público alvo são os adolescentes românticos e que querem viajar pela Itália, nada impede que alguém mais maduro leia e se delicie com o volume. ";
            break;

            case 'AHDA': 
            document.getElementById("book-title").innerHTML = "A Hipótese do Amor"; 

            var bookImg =  "images/Home/home-popullar-hipotese.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "26 de junho de 2022";
            document.getElementById("book-genre").innerHTML = "Romance";
            document.getElementById("book-author").innerHTML = "Ali HazelWood";

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

            document.getElementById("book-text").innerHTML = "Quando um namoro de mentira entre cientistas encontra a irresistível força da atração, todas as teorias cuidadosamente calculadas sobre o amor são postas à prova. Com personagens cativantes e diálogos afiados, este livro engraçado, sexy e inteligente se tornou uma das grandes sensações do TikTok. Olive Smith, aluna do doutorado em Biologia da Universidade Stanford, acredita na ciência – não em algo incontrolável como o amor. Depois de sair algumas vezes com Jeremy, ela percebe que sua melhor amiga gosta dele e decide juntá-los. Para mostrar que está feliz com essa escolha, Olive precisa ser convincente: afinal, cientistas exigem provas. Sem muitas opções, ela resolve inventar um namoro de mentira e, num momento de pânico, beija o primeiro homem que vê pela frente. O problema é que esse homem é Adam Carlsen, um jovem professor de prestígio – conhecido por levar os alunos às lágrimas. Por isso, Olive fica chocada quando o tirano dos laboratórios concorda em levar adiante a farsa e fingir ser seu namorado. De repente, seu pequeno experimento parece perigosamente próximo da combustão e aquela pequena possibilidade científica, que era apenas uma hipótese sobre o amor, transforma-se em algo totalmente inesperado.";

            var bookLinkAmazon = "https://www.amazon.com.br/hipótese-amor-Sucesso-TikTok-ebook/dp/B09ZBKHN7P";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/a-hipotese-do-amor--sucesso-do-tiktok-/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/ali-hazelwood/a-hipotese-do-amor-sucesso-do-tiktok-/683616425?show_suggestion=0"; 
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "453";
            document.getElementById("book-date").innerHTML = "26 junho 2022";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Editora Arqueiro";
            document.getElementById("book-height").innerHTML = "21 x 13.8 x 1.6 cm";
            document.getElementById("book-kid").innerHTML = "+13 anos";

            document.getElementById("rese-1-name").innerHTML = "Queria Estar Lendo";

            var bookLinkRese1 = "https://www.queriaestarlendo.com.br/2022/07/resenha-hipotese-do-amor-ali-hazelwood.html"; 
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

            document.getElementById("resen-1-text").innerHTML = "A Hipótese do Amor explora muito bem o universo da ciência, as dificuldades acadêmicas de estudantes universitários, o privilégio mascarado de ajuda. Eu gostei de como a autora usou o espaço dessa história para falar sobre misoginia e racismo dentro de ambientes acadêmicos. A edição da Arqueiro ficou muito bonita, com diagramação confortável, páginas de gramatura ótima. A tradução de Thaís Britto tá ótima, hilária como imagino que seja no original. De novo: a Olive foi uma das melhores protagonistas que já li nesse gênero!";
            
            document.getElementById("rese-2-name").innerHTML = "Os Melhores Livros";

            var bookLinkRese2 = "https://osmelhoreslivros.com.br/a-hipotese-do-amor-resenha/";
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; 

            document.getElementById("resen-2-text").innerHTML = "Concluindo nossa resenha de A hipótese do amor, da escritora Ali Hazelwood, podemos dizer que a obra merece todo o seu reconhecimento. Mesmo muitos achando ser mais uma história clichê, toda a trama da história mostra vidas reais e debates atuais. O livro trás essa proximidade com os jovens adultos pela identificação imediata com os conflitos que os personagens passam. Por ser uma história New Adult (novo adulto), os personagens estão passando por amadurecimentos fortes e característicos dessa fase. Sem dúvidas esse é um dos livros mais cativantes, chamativos do ano, e vale todo o apreço dos leitores apaixonados por romances sinceros e divertidos. A hipótese do amor é uma das minhas leituras favoritas do ano. ";
            break;

        case 'UDNEM': 
            document.getElementById("book-title").innerHTML = "Um de nós está mentindo"; 

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

            document.getElementById("book-page").innerHTML = "288"; 
            document.getElementById("book-date").innerHTML = "27 outubro 2014";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Intrínseca";
            document.getElementById("book-height").innerHTML = "21 x 13.8 x 1.6 cm";
            document.getElementById("book-kid").innerHTML = "+13 anos";

            document.getElementById("rese-1-name").innerHTML = "Valeu, Gutenberg!";

            var bookLinkRese1 = "https://valeugutenberg.com/2017/11/24/resenha-a-culpa-e-das-estrelas/";
            document.getElementById("book-text").innerHTML = "Numa tarde de segunda-feira, cinco estudantes do colégio Bayview entram na sala de detenção: Bronwyn, a gênia, comprometida a estudar em Yale, nunca quebra as regras. Addy, a bela, a perfeita definição da princesa do baile de primavera. Nate, o criminoso, já em liberdade condicional por tráfico de drogas. Cooper, o atleta, astro do time de beisebol. E Simon, o pária, criador do mais famoso aplicativo de fofocas da escola. Só que Simon não consegue ir embora. Antes do fim da detenção, ele está morto. E, de acordo com os investigadores, a sua morte não foi acidental. Na segunda-feira, ele morreu. Mas na terça, planejava postar fofocas bem quentes sobre os companheiros de detenção. O que faz os quatro serem suspeitos do seu assassinato. Imagine todos os elementos que você pode encontrar em um livro clássico destinado a um jovem leitor: o romance, as panelinhas e as muitas lutas que o adolescente típico enfrenta. Agora imagine esse romance com uma ligeira reviravolta: assassinato!  Um de nós está mentindo se concentra em aspectos-chave de como a fase da adolescência pode ser problemática. Navegando entre uma vida escolar descontraída e uma paisagem sombria em torno da morte de Simon. A história fala ainda sobre a importância da confiança e da justiça, à medida que falsas acusações aparecem e causam sérias repercussões.";

            var bookLinkAmazon = "https://www.amazon.com.br/n%C3%B3s-est%C3%A1-mentindo-Karen-McManus/dp/8501112526";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/um-de-nos-esta-mentindo/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/karen-mcmanus/um-de-nos-esta-mentindo/3084795834"; 
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "384";
            document.getElementById("book-date").innerHTML = "1 fevereiro 2018";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Galera";
            document.getElementById("book-height").innerHTML = "20.8 x 13.4 x 2.2 cm";
            document.getElementById("book-kid").innerHTML = "+13 anos";

            document.getElementById("rese-1-name").innerHTML = "Garotas Devorando Livros";

            var bookLinkRese1 = "https://www.garotasdevorandolivros.com/2021/09/resenha-um-de-nos-esta-mentindo-karen-m.html";
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; 

            document.getElementById("resen-1-text").innerHTML = "É preciso dizer o quanto o desfecho é inesperado. Durante a leitura, você imagina que já sabe qual será o final, mas o autor consegue surpreender. Então, se você ainda não leu A culpa é das estrelas por má vontade, preconceito ou qualquer outro motivo, confie em mim e leia (inclusive se você já viu o filme, que é bem fiel ao texto original). Ele não foi um best-seller por acaso. Aliás, seria ótimo se todos os best-sellers tivessem a mesma qualidade dele.";
        
            document.getElementById("rese-2-name").innerHTML = "Resenhas à la Carte";

            var bookLinkRese2 = "https://resenhasalacarte.com.br/resenhas/a-culpa-e-das-estrelas-john-green/"; 
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "3,0 / 5,0"; 

            document.getElementById("resen-2-text").innerHTML = "Dá muita vontade de fazer parte da turma de amigos deles. O Gus é um personagem pra lá de inspirador e a força que ele carrega é indescritível. O mesmo para Hazel: uma jovem solitária que aprende cada vez mais a lidar com sua doença e a conhecer um pouco mais do mundo. A jornada para conhecer seu autor favorito é uma das cenas mais legais do livro – o jantar romântico em Amsterdam  – mesmo que o resultado desse encontro não seja aquilo que ela estava esperando. Claro que com uma temática dessas seria impossível não ter um grande drama na história, né? Prepare os lencinhos, porque o choro é fortíssimo! Depois, quando fui assistir ao filme de A Culpa é das Estrelas (muito bem adaptado, por sinal), chorei e solucei tudo de novo. Se você procura um romance com bastante humor e drama, A Culpa é das Estrelas é uma boa opção. Eu que não sou fã de livros românticos ou Young Adult achei uma leitura bem prazerosa.Claro que com uma temática dessas seria impossível não ter um grande drama na história, né? Prepare os lencinhos, porque o choro é fortíssimo! Depois, quando fui assistir ao filme de A Culpa é das Estrelas (muito bem adaptado, por sinal), chorei e solucei tudo de novo. Se você procura um romance com bastante humor e drama, A Culpa é das Estrelas é uma boa opção. Eu que não sou fã de livros românticos ou Young Adult achei uma leitura bem prazerosa.";

            document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0";

            document.getElementById("resen-1-text").innerHTML = "Com opiniões bem divergentes, a narrativa corre para um final suficientemente bom, com poucos picos de tensão extrema, mas muita base para a gente se deliciar. A escrita de Karen McManus é bastante fluída e é bem perceptível que a autora não perde tempo descrevendo espaços e pessoas. Isso é bastante controverso, por que muitos leitores são unânimes em afirmar que uma história sobrecarregada de detalhes e descrições se torna cansativa e fria, mas deixar de compor o espaço foi um dos pontos que me incomodaram nessa leitura. Por fim, acredito que a autora foi feliz em compor uma narrativa de um jeito meio próprio, não muito comum nesse tipo de leitura, já que talvez a narrativa em 1ª pessoa pudesse atrapalhar os aspectos investigativo dos nossos leitores, e talvez seja por isso que se trata de uma leitura um tanto controvérsia, gerando das mais variadas opiniões, mas que vale muito a pena ser lido e saboreado.";
            
            document.getElementById("rese-2-name").innerHTML = "Sem Serifa";

            var bookLinkRese2 = "https://blogsemserifa.com/2018/01/22/resenha-um-de-nos-esta-mentindo/";
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "3,2 / 5,0";

            document.getElementById("resen-2-text").innerHTML = "A narrativa também tem um problema estrutural de ritmo, que acaba por deixar o romance bastante parado e sem ações. Ao que parece, a autora elegeu pontos fixos de virada na narrativa que fazem o livro andar, mas entre esses pontos a escrita ficou desgastada e pouco empolgante, o que quebra a fluidez. Isso não deveria acontecer, ainda mais se tratando de uma obra baseada em uma investigação criminal. Escritores mais experientes em tramas policiais parecem saber rechear melhor o mistério do livro a ponto de não ser necessário colocar várias cenas filler para que um ponto de virada se ligue a outro. A autora opta por não deixar pistas sobre os acontecimentos ao longo da história (ou eu fui muito tapado e não percebi que elas estavam ali), e isso também deixa o livro lento. O saldo final é de decepção. A premissa é muito boa e o pontapé inicial da autora funcionou, mas a trama se perde em acontecimentos irrelevantes e a história parece progredir a passos de tartaruga. No final eu já nem estava mais interessado em resolver o mistério central do livro: eu só queria que ele acabasse.";
        break;
        
        case 'AGDL':
        document.getElementById("book-title").innerHTML = "A garota do lago"; 

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

        document.getElementById("book-text").innerHTML = "Summit Lake, uma pequena cidade entre montanhas, é esse tipo de lugar, bucólico e com encantadoras casas dispostas à beira de um longo trecho de água intocada.Duas semanas atrás, a estudante de direito Becca Eckersley foi brutalmente assassinada em uma dessas casas. Filha de um poderoso advogado, Becca estava no auge de sua vida. Atraída instintivamente pela notícia, a repórter Kelsey Castle vai até a cidade para investigar o caso. ...E LOGO SE ESTABELECE UMA CONEXÃO ÍNTIMA QUANDO UM VIVO CAMINHA NAS MESMAS PEGADAS DOS MORTOS...E enquanto descobre sobre as amizades de Becca, sua vida amorosa e os segredos que ela guardava, a repórter fica cada vez mais convencida de que a verdade sobre o que aconteceu com Becca pode ser a chave para superar as marcas sombrias de seu próprio passado.";

        var bookLinkAmazon = "https://www.amazon.com.br/Garota-do-Lago-Charlie-Donlea/dp/856240988X";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.saraiva.com.br/a-garota-do-lago/p";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/charlie-donlea/a-garota-do-lago/2338747252";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "296";
        document.getElementById("book-date").innerHTML = "1 janeiro 2017";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Faro Editorial";
        document.getElementById("book-height").innerHTML = "22.4 x 15.6 x 2.8 cm";
        document.getElementById("book-kid").innerHTML = "+16 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Garotas Devorando Livros";

        var bookLinkRese1 = "https://www.garotasdevorandolivros.com/2021/07/resenha-garota-do-lago-charlie-donlea.html"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "As montanhas de Summit Lake foram palco de um arrasador acontecimento. Cidade pacata, onde não havia sido registrado nenhum caso de assassinato ainda, foi surpreendida quando na noite de 17 de fevereiro de 2012 uma jovem é encontrada morta dentro de sua casa à beira do lago. Vinda de Miami, Kelsey Castle é jornalista de uma grande revista e está em busca de desvendar o passado de Becca Eckersley, a jovem estudante de direito assassinada. Passado esse que vem sendo obscurecido tanto pela família quanto pela polícia que está cuidando do caso. ";
        
        document.getElementById("rese-2-name").innerHTML = "Beco Literário";

        var bookLinkRese2 = "https://becoliterario.com/resenha-a-garota-do-lago-charlie-donlea/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "4,8 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Eu gostei muito do livro, foi meu primeiro contato com literatura de suspense além de Harlan Coben, e eu me surpreendi com o final. Quando chegou ao desfecho do crime, o quem matou e porque eu fiquei revoltada por ter pensado que tinha sido outra pessoa e bom, julguei mal. Atire a primeira pedra quem nunca julgou um personagem antes hahaha mas tudo bem! É chocante e te faz ficar pensando na estória por vários dias depois que o livro acaba. Porque uma pessoa faria isso? Até onde vai o desejo e a crueldade? É um livro de uma estória fictícia, mas que acontece tanto, é só assistir a qualquer jornal que todos os dias vemos histórias parecidas.";
    break;

    case 'AMPDMC':
        document.getElementById("book-title").innerHTML = "A Mil Partes do Meu Coração"; 

        var bookImg =  "images/Home/home-autor-mil.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "5 de novembro de 2018";
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

        document.getElementById("book-text").innerHTML = "Merit Voss está cansada de guardar os segredos de sua família e decide que chegou a hora de desaparecer. Mas antes de sumir do mapa, ela vai revelar um por um, tudo que a família vem guardando por anos. A cerca branca ao redor da sua casa é a única coisa normal na vida de Merit. Parte de uma família peculiar e cheia de segredos, ela mora em uma antiga igreja, batizada de Dólar Voss. A mãe, curada de um câncer, mora no porão, e o pai e o restante da família, no andar de cima. Isso inclui sua nova esposa, a ex-enfermeira da ex-mulher, o pequeno Moby, fruto desse relacionamento, o irmão mais velho, Utah, e a gêmea idêntica de Merit, Honor. E, como se a casa não tivesse cheia o bastante, ainda chegam o excêntrico Luck e o misterioso Sagan. Mas Merit sente que é o oposto de todos ali. Mas seu plano de revelar a verdade não sai como o esperado e ela deve decidir se pode dar uma segunda chance não apenas à sua família, mas também a si mesma. As mil partes do meu coração mostra que nunca é tarde para perdoar e que não existe família perfeita, por mais branca que seja a cerca.";

        var bookLinkAmazon = "https://www.amazon.com.br/As-mil-partes-meu-coração/dp/8501115746/ref=sr_1_1?keywords=as+mil+partes+do+meu+coração&qid=1669479921&qu=eyJxc2MiOiIyLjA2IiwicXNhIjoiMS40MSIsInFzcCI6IjAuODgifQ%3D%3D&s=books&sprefix=as+mil+p%2Cstripbooks%2C350&sr=1-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.saraiva.com.br/as-mil-partes-do-meu-coracao/p";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/colleen-hoover/as-mil-partes-do-meu-coracao/2617745617?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "336";
        document.getElementById("book-date").innerHTML = "5 novembro 2018";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Galera";
        document.getElementById("book-height").innerHTML = "22.4 x 15.6 x 2.8 cm";
        document.getElementById("book-kid").innerHTML = "+15 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Minha Garota Literária";

        var bookLinkRese1 = "https://www.minhavidaliteraria.com.br/2019/01/08/resenha-as-mil-partes-do-meu-coracao-colleen-hoover/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "As Mil Partes do Meu Coração me conquistou não apenas pela maneira sensível de como Colleen Hoover abordou as temáticas da história, mas também por sua habilidade narrativa tão característica. Há passagens mais leves e dotadas de seu peculiar humor, ao mesmo tempo em que há outras mais melancólicas e intensas. No geral, foi mais um livro apaixonante, que tanto entretém quanto desperta importantes reflexões.";
        
        document.getElementById("rese-2-name").innerHTML = "A Bookaholic Girl";

        var bookLinkRese2 = "https://abookaholicgirl.wordpress.com/2020/04/24/resenha-as-mil-partes-do-meu-coracao-de-colleen-hoover/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Acho que este foi o livro que conseguiu falar de forma cuidadosa sobre transtornos mentais: depressão, ansiedade e agorafobia. Ressalta a importância de se reconhecer os sinais, da força do diálogo, do perdão e principalmente a necessidade de se buscar ajuda, independente da idade. Por mais que o livro ao final traga um quentinho no coração e um sentimento de esperança algumas cenas podem servir de gatilho. Mesmo com a bagagem pesada que ele traz consigo, e mais uma vez toca na tecla das diferentes perspectivas e como cada pessoa reage a uma situação, o que não significa que os problemas de uns são maiores que o de outros. Por fim peço: apenas leiam As mil partes do meu coração.";
    break;

    case '1984':
        document.getElementById("book-title").innerHTML = "1984";

        var bookImg =  "images/Genre/genre-ficcao-1984.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "21 de julho de 2009";
        document.getElementById("book-genre").innerHTML = "Ficção";
        document.getElementById("book-author").innerHTML = "George Orwell";

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

        document.getElementById("book-text").innerHTML = "Winston, herói de 1984, último romance de George Orwell, vive aprisionado na engrenagem totalitária de uma sociedade completamente dominada pelo Estado, onde tudo é feito coletivamente, mas cada qual vive sozinho. Ninguém escapa à vigilância do Grande Irmão, a mais famosa personificação literária de um poder cínico e cruel ao infinito, além de vazio de sentido histórico. De fato, a ideologia do Partido dominante em Oceânia não visa nada de coisa alguma para ninguém, no presente ou no futuro. O'Brien, hierarca do Partido, é quem explica a Winston que só nos interessa o poder em si. Nem riqueza, nem luxo, nem vida longa, nem felicidade: só o poder pelo poder, poder puro. Quando foi publicada em 1949, essa assustadora distopia datada de forma arbitrária num futuro perigosamente próximo logo experimentaria um imenso sucesso de público. Seus principais ingredientes - um homem sozinho desafiando uma tremenda ditadura; sexo furtivo e libertador; horrores letais - atraíram leitores de todas as idades, à esquerda e à direita do espectro político, com maior ou menor grau de instrução.";

        var bookLinkAmazon = "https://www.amazon.com.br/1984-George-Orwell/dp/8535914846/ref=sr_1_2_sspa?__mk_pt_BR=ÅMÅŽÕÑ&crid=3A5S8KOHCOE0S&keywords=1984&qid=1669480455&qu=eyJxc2MiOiI0LjQ4IiwicXNhIjoiMy43OCIsInFzcCI6IjMuNjkifQ%3D%3D&s=books&sprefix=198%2Cstripbooks%2C402&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTk83R1NUVTNMNTlMJmVuY3J5cHRlZElkPUEwMjU0ODk4MUcyS1RCWko3NE5WNyZlbmNyeXB0ZWRBZElkPUEwNjg1NTIwVTVTUlNBUjYyQTY1JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.estantevirtual.com.br/livros/george-orwell/1984/3544357823?show_suggestion=0";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.saraiva.com.br/1984-219542/p";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "336";
        document.getElementById("book-date").innerHTML = "21 julho de 2009";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Companhia das Letras";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+14 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Janela Literária";

        var bookLinkRese1 = "https://www.janelaliteraria.com.br/2021/05/resenha-1984-george-orwell.html"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Li este livro pela primeira vez a quase 10 anos atrás, e foi a primeira das distopias clássicas que tive contato após ter me encantado pelo gênero com a trilogia Jogos Vorazes. Com o lançamento desta nova edição publicada pela Antofágica, decidi que havia chegado o momento ideal para uma releitura. A experiência foi completamente diferente, tanto por eu estar em outra fase da minha vida e em um contexto histórico diferente daquele da minha primeira leitura, quanto pelo fato de esta edição proporcionar novas percepções, com uma tradução diferente e ilustrações magníficas. Sempre recomendei este livro e após esta releitura recomendarei ainda mais, pois a construção feita por Orwell é brilhante. É um livro para se ler grifando, refletindo e sobretudo lembrando que não devemos tolerar nenhuma forma de totalitarismo - independente do espectro político. ";
        
        document.getElementById("rese-2-name").innerHTML = "Bons Livros Para Ler";

        var bookLinkRese2 = "https://www.bonslivrosparaler.com.br/livros/resenhas/1984/5332"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Vou ser muito franco: quando acabei de ler “1984”, de George Orwell, não tive dúvidas de que o questionamento filosófico que ele faz cabe muito nos dias de hoje. O livro precisa ser entendido como uma fábula sobre o poder totalitário na época em que George Orwell viveu. Vou logo adiantando o seguinte: você não será o mesmo depois de ler “1984”, de George Orwel, uma fábula distópica simplesmente genial. Um livro que merece um lugar de HONRA na sua estante.";
    break;

    case 'EENTE':
        document.getElementById("book-title").innerHTML = "Enquanto eu não te encontro";

        var bookImg =  "images/Home/home-brazil-encontro.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "5 julho 2021";
        document.getElementById("book-genre").innerHTML = "LGBTQIA+";
        document.getElementById("book-author").innerHTML = "Pedro Rhuas";

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

        document.getElementById("book-text").innerHTML = "A vida tem sido boa para Lucas. Ele passou no Enem para estudar publicidade; se mudou com Eric, seu melhor amigo, do interior do Rio Grande do Norte para a capital; e conseguiu sua tão aguardada liberdade. Mas, no amor, Lucas é um desastre. O maior fã de Katy Perry no Nordeste tem certeza de que nem toda a sorte do mundo poderia fazer com que ele finalmente se apaixonasse pela primeira vez. Até que, em uma despretensiosa noite de sábado em 2015, tudo muda. Quando Lucas e Eric vão na inauguração do Titanic, a mais nova balada da cidade, Lucas esbarra (literalmente!) em Pierre, um lindo garoto francês que parece ter saído dos seus sonhos. Em meio a drinques, segredos e sonhos partilhados, Lucas e Pierre se conectam instantaneamente. Eles vivem o encontro mais especial de suas vidas, mas o Universo tem outros planos para o futuro… Até a noite acabar, o que será que vai acontecer com eles? Com uma voz original e divertida, repleta de referências pop e à cultura do Rio Grande do Norte, o livro de estreia de Pedro Rhuas vai te fazer rir alto e se apaixonar.";

        var bookLinkAmazon = "https://www.amazon.com.br/Enquanto-eu-não-te-encontro/dp/855534154X";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.saraiva.com.br/enquanto-eu-nao-te-encontro/p";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/pedro-rhuas/enquanto-nao-te-encontro/3240893376";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "272";
        document.getElementById("book-date").innerHTML = "5 julho 2021";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Seguinte";
        document.getElementById("book-height").innerHTML = "22.8 x 15.6 x 1.2 cm";
        document.getElementById("book-kid").innerHTML = "+14 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Idris";

        var bookLinkRese1 = "https://idris.com.br/blog/2021/07/05/resenha-enquanto-eu-nao-te-encontro-pedro-rhuas/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Há momentos altos para todos personagens, como há momentos com os quais queremos dar uns tapas neles, exatamente como acontece com nossos amigos – e como eles devem se sentir em relação a gente também –, tudo com naturalidade. Só posso dar todos os parabéns do mundo para o Pedro Rhuas que em seu 1º livro mostrou que comédias românticas são para todos, basta simplesmente ter a sensibilidade necessária para escrever personagens que nos importemos com eles. E, também, sendo sincera, por fazer meu coração de pedra derreter um pouquinho e shippar bastante os personagens juntos. Vá ler “Enquanto eu não te encontro” o quanto antes porque você precisa conhecer Lucas, Pierre, Eric, Thamy e Ana – e entender que vai ter comédia romântica com a representatividade necessária que a gente sempre mereceu.";
        
        document.getElementById("rese-2-name").innerHTML = "De livro em livro";

        var bookLinkRese2 = "http://www.delivroemlivro.com.br/2021/11/enquanto-eu-nao-te-encontro-pedro-rhuas.html"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Pedro Rhuas realmente tentou ser o mais responsável com tudo o que expôs em Enquanto Eu não Te Encontro, principalmente para quebrar os tabus dos mais conservadores sobre a comunidade LGBTQIAP+ e os motivos da importância de livros com representatividade e todos os estigmas e dores que gays, lésbicas, trans... passam cotidianamente apenas por serem quem são. É impossível não se sensibilizar e entender mais essas vivências.";
    break;

    case 'GMO':
        document.getElementById("book-title").innerHTML = "Garota, mulher, outras";

        var bookImg =  "images/genre/genre-lgbt-garota.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "13 outubro 2020";
        document.getElementById("book-genre").innerHTML = "LGBTQIA+";
        document.getElementById("book-author").innerHTML = "Bernardine Evaristo";

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

        document.getElementById("book-text").innerHTML = "Garota, mulher, outras é um verdadeiro marco da ficção britânica. O romance causou furor quando publicado: venceu o Booker Prize em 2019, foi aclamado por nomes como Barack Obama, Roxane Gay, Ali Smith e Tom Stoppard e incluído nas listas de melhores livros do ano por veículos como The Guardian, Time, The Washington Post e The New Yorker. A forma, por si só, não é nada convencional: trata-se de um gênero híbrido, composto de versos livres e sem pontos-finais. O resultado é uma dicção singular e envolvente, que prende o leitor da primeira à última página. O pano de fundo dessas histórias é uma Londres dividida e hostil, logo após a votação do Brexit: um lugar onde as pessoas lutam para sobreviver, muitas vezes sem esperança, sem que as suas necessidades sejam atendidas e sem que sejam ouvidas. Nesse ambiente opressor, as vozes de Garota, mulher, outras formam um coro e levantam reflexões poderosas sobre o machismo, o racismo e a estrutura da sociedade.";

        var bookLinkAmazon = "https://www.amazon.com.br/Garota-mulher-outras-Bernardine-Evaristo/dp/8535933816/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=2UUTA6RKO73VM&keywords=Garota%2C+Mulher%2C+Outras&qid=1669602598&qu=eyJxc2MiOiIwLjUwIiwicXNhIjoiMC40NyIsInFzcCI6IjAuNzcifQ%3D%3D&s=books&sprefix=garota+mulher+outras+%2Cstripbooks%2C470&sr=1-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.estantevirtual.com.br/livros/bernardine-evaristo/garota-mulher-outras/2199757261?show_suggestion=0";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.saraiva.com.br/garota%20mulher%20outra?_q=GAROTA%20MULHER%20OUTRA&map=ft";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "496 ";
        document.getElementById("book-date").innerHTML = "13 outubro 2020";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Companhia das Letras";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+12 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Idris";

        var bookLinkRese1 = "https://idris.com.br/blog/2022/06/29/resenha-garota-mulher-outras-bernardine-evaristo/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Não resta dúvidas de que é uma leitura sobre mulheres feita por uma mulher que tenta mesclar vivências e respostas para situações que muitas mulheres em todo mundo passam diariamente. Relacionamentos entre mães e filhas e como o tempo é capaz de agir em cada uma de nós, trazendo a tona reações diferentes em situações que se semelham. Um livro imperdível que eu não poderia perder a chance de indicar para vocês porque dentro de cada uma de nós há sim, uma garota, uma mulher e outras também.";
        
        document.getElementById("rese-2-name").innerHTML = "Delirium nerd";

        var bookLinkRese2 = "https://deliriumnerd.com/2020/12/10/garota-mulher-outras-bernardine-evaristo-resenha/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Garota, Mulher, Outras é um livro envolvente do início ao fim. Com uma narrativa única, simples, direta e acessível você se pega torcendo para que as personagens tenham seus próprios capítulos para conhecê-las melhor. A obra se torna referência em como fazer livros políticos de maneira inventiva e que fogem da forma panfletária (em que não há nada de errado, porém é mais comum de se presenciar). É uma verdadeira inspiração para uma nova geração de escritoras e de leitores.";
    break;

    case 'ODMNF':
        document.getElementById("book-title").innerHTML = "Os Dois Morrem No Final";

        var bookImg =  "images/Home/home-acclaimed-two.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "4 outubro 2021";
        document.getElementById("book-genre").innerHTML = "LGBTQIA+";
        document.getElementById("book-author").innerHTML = "Adam Silvera";

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

        document.getElementById("book-text").innerHTML = "No dia 5 de setembro, pouco depois da meia-noite, Mateo Torrez e Rufus Emeterio recebem uma ligação da Central da Morte. A notícia é devastadora: eles vão morrer naquele mesmo dia. Os dois não se conhecem, mas, por motivos diferentes, estão à procura de um amigo com quem compartilhar os últimos momentos, uma conexão verdadeira que ajude a diminuir um pouco a angústia e a solidão que sentem. Por sorte, existe um aplicativo para isso, e é graças a ele que Rufus e Mateo vão se encontrar para uma última grande aventura: viver uma vida inteira em um único dia. Uma história sensível e emocionante, Os dois morrem no final nos lembra o que significa estar vivo. Com seu olhar único, Adam Silvera mostra que cada segundo importa, e mesmo que não haja vida sem morte, nem amor sem perda, tudo pode mudar em 24 horas.";

        var bookLinkAmazon = "https://www.amazon.com.br/Os-Dois-Morrem-No-Final/dp/655560302X/ref=sr_1_2?__mk_pt_BR=ÅMÅŽÕÑ&crid=GS7FOMLBPICN&keywords=Os+Dois+Morrem+No+Final&qid=1669603464&qu=eyJxc2MiOiIyLjE2IiwicXNhIjoiMS40NCIsInFzcCI6IjAuOTIifQ%3D%3D&s=books&sprefix=gostaria+que+você+estivesse+aqui%2Cstripbooks%2C687&sr=1-2";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.estantevirtual.com.br/livros/adam-silvera/os-dois-morrem-no-final/567012221?show_suggestion=0";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://busca.saraiva.com.br/busca?q=OS%20DOIS%20MORREM%20NO%20FINAL";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "416";
        document.getElementById("book-date").innerHTML = "4 outubro 2021";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Intrínseca";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+15 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Além do livro";

        var bookLinkRese1 = "https://alemdolivro.com/2021/09/12/resenha-de-os-dois-morrem-no-final-adam-silvera/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Como não poderia ser diferente, Os dois morrem no final traz muitas reflexões e questionamentos sobre a forma como vivemos as nossas vidas. Além disso, me fez pensar muito sobre o que tanto tememos sobre a morte: o ato de morrer em si ou o desconhecido? Sua inevitabilidade e irreversibilidade? Ou ainda o fato de não sabermos se existe “o outro lado” e, caso exista, como é? Bom, talvez seja a junção de tudo isso que tanto nos assuste. Em meio às questões existenciais, Silvera ainda encontrou espaço para abordar temas necessários, ainda que de maneira sutil. Adorei ver tantos personagens de origem latina, assim como Silvera, que é filho de mãe porto-riquenha. Não é um ponto citado explicitamente ou muito explorado, mas é o tipo de representatividade que faz a diferença para quem se enxerga ali.";
        
        document.getElementById("rese-2-name").innerHTML = "Mais que livros";

        var bookLinkRese2 = "https://www.maisquelivros.com/2021/10/resenha-os-dois-morrem-no-final-adam.html"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Os Dois Morrem no Final é um livro emocionante, envolvente e apaixonante, daqueles que te pegam desde a primeira página e você só consegue largar depois que acaba de ler. Finalizei a leitura em prantos. Fazia tempo que eu não sofria tanto com um livro, ao mesmo tempo em que refletia tanto sobre vida e morte. Que livro doloroso e incrível. Com certeza entrou para a lista de favoritos da vida.";
    break;

    case 'AMNJ':
        document.getElementById("book-title").innerHTML = "A mulher na janela";

        var bookImg =  "images/genre/genre-suspense-janela.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "14 maio 2021";
        document.getElementById("book-genre").innerHTML = "Suspense";
        document.getElementById("book-author").innerHTML = "A. J. Finn";

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

        document.getElementById("book-text").innerHTML = "Anna Fox mora sozinha na bela casa que um dia abrigou sua família feliz. Separada do marido e da filha e sofrendo de uma fobia que a mantém reclusa, ela passa os dias bebendo (muito) vinho, assistindo a filmes antigos, conversando com estranhos na internet e... espionando os vizinhos. Quando os Russells – pai, mãe e o filho adolescente – se mudam para a casa do outro lado do parque, Anna fica obcecada por aquela família perfeita. Certa noite, ela vê na casa deles algo que a deixa aterrorizada e faz seu mundo – e seus segredos chocantes – começar a ruir. Mas aquilo aconteceu mesmo? O que é realidade? Existe realmente alguém em perigo? E quem está no controle? Neste thriller diabolicamente viciante, ninguém – e nada – é o que parece.";

        var bookLinkAmazon = "https://www.amazon.com.br/mulher-janela-Livro-está-Netflix/dp/853060170X/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=3E98KC0I9FSHR&keywords=A+Mulher+na+Janela&qid=1669603866&qu=eyJxc2MiOiIxLjQxIiwicXNhIjoiMS4yOSIsInFzcCI6IjEuMTkifQ%3D%3D&s=books&sprefix=a+mulher+na+janela%2Cstripbooks%2C494&sr=1-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.estantevirtual.com.br/livros/a-j-finn/a-mulher-na-janela/3440659651?show_suggestion=0";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://busca.saraiva.com.br/q/a-mulher-na-janela";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "400 ";
        document.getElementById("book-date").innerHTML = "14 maio 2021";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Editora Arqueiro";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+14 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Minha vida literária";

        var bookLinkRese1 = "https://www.minhavidaliteraria.com.br/2018/03/16/resenha-a-mulher-na-janela-a-j-finn/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "O que mais se destacou em A mulher na janela para mim foi a atenção de A.J. Finn aos detalhes: a trama é extremamente bem construída. Nada do que é colocado no enredo ou na narrativa aparece por acaso, tudo tem um propósito — seja para conectar acontecimentos entre si, seja para atribuir camadas interpretativas à leitura. O trabalho feito aqui pelo autor é nitidamente o de alguém que conhece com profundidade a estrutura de uma obra, conhecimento esse muito provavelmente advindo de sua função de crítico; ao analisar leituras, passa-se a compreendê-las em todos seus níveis.";
        
        document.getElementById("rese-2-name").innerHTML = "Idris";

        var bookLinkRese2 = "https://idris.com.br/blog/2018/04/06/resenha-a-mulher-na-janela-a-j-finn/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Uma das coisas que eu mais gosto em livros em primeira pessoa, é algo que acontece nesse livro: apesar de já ter uma noção mesmo do que aconteceu, a confirmação só veio quando a própria Anna teve certeza de tudo sobre aquela noite, e também sobre o passado dela, porque ela guarda segredos até dela mesma, então nós como leitores, só conseguimos ver e ter a mais absoluta certeza daquilo que ela nos mostra: as conversas que ela tem com os pacientes do site, com a fisioterapeuta e o psicólogo, as coisas que ela vê os vizinhos fazendo, os filmes que ela assiste e as falas que ela sabe decoradas já, tudo são pequenos fragmentos de tudo que ela guarda mesmo dentro de si. E, considerando que ela muitas vezes está dopada por causa da mistura de remédios com bebida, todas as vezes que ela duvida dela mesma, também acabam criando certa duvida em quem está lendo. Será que isso aconteceu de verdade? Será que a Anna não criou tudo na cabeça dela levada pela bebida que tinha ingerido e pelos filmes que estava assistindo? Tudo, tudo mesmo, só se tem confirmação no momento em que a própria Anna tem a confirmação.";
    break;

    case 'CS':
        document.getElementById("book-title").innerHTML = "Com sangue";

        var bookImg =  "images/Home/home-acclaimed-blood.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "4 setembro 2020";
        document.getElementById("book-genre").innerHTML = "Suspense";
        document.getElementById("book-author").innerHTML = "Stephen King";

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

        document.getElementById("book-text").innerHTML = "Brilhante em narrativas curtas, King já escreveu alguns contos que viraram sucesso em todo o mundo, como as histórias que inspiraram os filmes Conta comigo e Um sonho de liberdade. Neste livro, assim como em Quatro estações e Escuridão total sem estrelas, ele cria uma coleção única e emocionante, demonstrando mais uma vez por que é considerado um dos maiores contadores de histórias de todos os tempos. Este é um livro sobre amor, amizade, talento e justiça… em suas formas mais deturpadas. Em Com sangue, Stephen King reúne quatro contos com protagonistas inteligentes e complexos, que têm sua vida comum transformada por algum elemento inexplicável.";

        var bookLinkAmazon = "https://www.amazon.com.br/Com-sangue-Stephen-King/dp/8556510973/ref=sr_1_3?__mk_pt_BR=ÅMÅŽÕÑ&crid=1SYZTP1IDGD5X&keywords=Com+Sangue&qid=1669604517&qu=eyJxc2MiOiIwLjM1IiwicXNhIjoiMC4xNyIsInFzcCI6IjAuMDYifQ%3D%3D&s=books&sprefix=a+mulher+na+janela%2Cstripbooks%2C704&sr=1-3";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.saraiva.com.br/com-sangue/p";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/stephen-king/com-sangue/3728318981?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "400 ";
        document.getElementById("book-date").innerHTML = "4 setembro 2020";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Suma";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+15 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Leitor cabuloso";

        var bookLinkRese1 = "https://leitorcabuloso.com.br/2020/09/resenha-com-sangue-stephen-king/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Este é o conto mais longo e também a história mais elaborada. King aborda questões como a maldade humana e o modo como consumimos notícias de catástrofes. Além disso, o autor também aborda, mesmo que de forma secundária, os problemas raciais em seu país. Ele faz isso através de outro personagem da trilogia Bill Hodges: Jerome Robinson. A investigação tratada neste conto é bastante intrigante e os acontecimentos que levam à resolução do conflito me deixaram grudada nas páginas.";
        
        document.getElementById("rese-2-name").innerHTML = "Minha vida literária";

        var bookLinkRese2 = "https://www.minhavidaliteraria.com.br/2020/12/08/resenha-com-sangue-stephen-king/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Quando penso em qual mais gostei, acabo ficando em uma dúvida cruel. São personagens diferentes um do outro e isso em questão de idade e vivência, então é difícil compará-los e escolher apenas um. Cada narrativa traz o desespero da morte revirando a vida dos protagonistas, seja um parente ou amigo, sendo possível inferir que somos muito mais influenciados ao longo de nossa existência pelo que perdemos e não pelo que ganhamos.";
    break;

    case 'OC':
        document.getElementById("book-title").innerHTML = "O colecionador";

        var bookImg =  "images/Home/home-acclaimed-collector.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "12 abril 2018";
        document.getElementById("book-genre").innerHTML = "Suspense";
        document.getElementById("book-author").innerHTML = "John Fowles";

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

        document.getElementById("book-text").innerHTML = "O colecionador é a história de Frederick Clegg, um homem solitário, de origem humilde, menosprezado por uma sociedade esnobe, que encontra o grande amor de sua vida. Tudo o que ele deseja é passar um tempo a sós com ela, demonstrar seus nobres sentimentos e deixar claro que eles nasceram um para o outro.O colecionador também é a história de Miranda Gray, uma jovem estudante de artes sequestrada por um maníaco que acha que pode obrigá-la a se apaixonar por ele. Tudo o que ela deseja é escapar do cativeiro, e vai usar de toda sua inteligência para sobreviver ao inferno em que sua vida se transformou. O romance é narrado por dois personagens antagônicos: o sequestrador e sua vítima. Frederick e Miranda.";

        var bookLinkAmazon = "https://www.amazon.com.br/Colecionador-John-Fowles/dp/8594541082/ref=sr_1_5?keywords=o+colecionador&qid=1669604977&qu=eyJxc2MiOiIxLjQ1IiwicXNhIjoiMC44NSIsInFzcCI6IjAuNzMifQ%3D%3D&sr=8-5";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://busca.saraiva.com.br/q/o-colecionador";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/john-fowles/o-colecionador/3411415939?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "256";
        document.getElementById("book-date").innerHTML = "12 abril 2018";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Darkside";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+15 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Minha vida literária";

        var bookLinkRese1 = "https://www.minhavidaliteraria.com.br/2019/02/12/resenha-o-colecionador-john-fowles/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "O que posso dizer é que, após finalizar a leitura, compreendi tudo que já havia ouvido sobre ela. O Colecionador me proporcionou uma experiência tanto frenética quanto perturbadora, e não apenas pela história propriamente dita, mas sobretudo pelo que ela revela: é perverso estarmos na situação de quem se delicia com o horror narrado. A Darkside merece também destaque pela edição produzida, demonstrando o quão enriquecedor é o ato de se incluir textos de apoio a uma leitura. Muito do que absorvi do livro foi graças a sua introdução e ao seu posfácio, que também me deixaram com a sensação de que, um dia, seria ótimo reler a obra para explorar suas muitas camadas, algo impossível de se fazer em uma primeira leitura.";
        
        document.getElementById("rese-2-name").innerHTML = "Literalmente uai";

        var bookLinkRese2 = "https://www.literalmenteuai.com.br/resenha-o-colecionador-john-fowles/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "2,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "O Colecionador certamente vai frustrar as expectativas de quem espera uma história cheia de ação ou de quem confundiu a obra como sendo de terror. Há horror assim, mas daquele que mexe com nossa mente, que dispensa recursos sobrenaturais porque tem nas atitudes humanas sua pior parte, e é assim que o autor nos surpreende. A obra se torna angustiante por ser o relato de um sequestro, e também por toda habilidade com que o autor construiu cada detalhe do livro, nos permitindo penetrar no mais íntimo de cada protagonista.";
    break;

    case 'OJDB':
        document.getElementById("book-title").innerHTML = "O jardim das borboletas";

        var bookImg =  "images/genre/genre-suspense-borboletas.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "9 maio 2022";
        document.getElementById("book-genre").innerHTML = "Suspense";
        document.getElementById("book-author").innerHTML = "Dot Hutchison";

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

        document.getElementById("book-text").innerHTML = "Perto de uma mansão isolada, existia um maravilhoso jardim. Nele, cresciam flores exuberantes, árvores frondosas... e uma coleção de preciosas 'borboletas': jovens mulheres, sequestradas e mantidas em cativeiro por um homem brutal e obsessivo, conhecido apenas como Jardineiro. Cada uma delas passa a ser identificada pelo nome de uma espécie de borboleta, tendo, então, a pele marcada com um complexo desenho correspondente. Quando o jardim é finalmente descoberto, uma das sobreviventes é levada às autoridades, a fim de prestar seu depoimento. A tarefa de juntar as peças desse complexo quebra-cabeça cabe aos agentes do fbi Victor Hanoverian e Brandon Eddinson, nesse que se tornará o mais chocante e perturbador caso de suas vidas. Mas Maya, a enigmática garota responsável por contar essa história, não parece disposta a esclarecer todos os sórdidos detalhes de sua experiência. Em meio a velhos ressentimentos, novos traumas e o terrível relato sobre um homem obcecado pela beleza, os agentes ficam com a sensação de que ela esconde algum grande segredo.";

        var bookLinkAmazon = "https://www.amazon.com.br/jardim-das-borboletas-beleza-capturada/dp/6555357215/ref=sr_1_1_sspa?__mk_pt_BR=ÅMÅŽÕÑ&crid=6T7KR0VBPS0Z&keywords=O+jardim+das+borboletas&qid=1669605407&qu=eyJxc2MiOiIyLjMwIiwicXNhIjoiMi4wMSIsInFzcCI6IjEuNTcifQ%3D%3D&sprefix=o+jardim+das+borboletas%2Caps%2C478&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExNjE1NElJRUNQUTk3JmVuY3J5cHRlZElkPUEwNjM4MDQ4M0RWMjVHQkdDSUY3TyZlbmNyeXB0ZWRBZElkPUEwNDYxMjg4MVM3NTVOSzRVSDJKUyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://busca.saraiva.com.br/busca?q=O%20jardim%20das%20borboletas";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/hutchinson-dot/o-jardim-das-borboletas/481846978?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "304";
        document.getElementById("book-date").innerHTML = "9 maio 2022";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Planeta";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+16 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Leitor compulsivo";

        var bookLinkRese1 = "http://leitorcompulsivo.com.br/2018/05/07/resenha-o-jardim-das-borboletas-dot-hutchison/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Narrado através do interrogatório de uma das vítimas, com passado e presente se alternando, O Jardim das Borboletas consegue prender o leitor. Não há um mistério principal para fisgar nossa curiosidade. Somente o conhecimento dos fatos e da rotina do cativeiro já são suficientes para segurar nossa atenção e caminhar para um desfecho esperado, mas com altos e baixos que decepcionam um pouco. Nada estraga o conjunto horripilante da obra. Dot Hutchison mostra que para um bom thriller nem sempre é preciso ter um mistério como fio condutor. Basta saber trabalhar com o psicológico. E isso o livro faz com maestria.";
        
        document.getElementById("rese-2-name").innerHTML = "Minha vida literária";

        var bookLinkRese2 = "https://www.minhavidaliteraria.com.br/2020/09/22/resenha-o-jardim-das-borboletas-dot-hutchinson/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Importante dizer que Jardim das Borboletas é um livro pesado. Temas como pedofilia e violência sexual perduram toda narrativa e criam desconforto pelos horrores retradados, então fica também o aviso para possíveis gatilhos. Contudo, em minha leitura, tais aspectos aparecem bem colocados na narrativa, como parte dela, e não em uma simples tentativa de causar choque pelo choque. Por fim, O Jardim das Borboletas é um livro que o tempo todo contrapõe maldade e bondade, propondo um debate a respeito da relatividade moral, que pode variar de acordo com diferentes perspectivas. Uma leitura ao mesmo tempo chocante, mas frenética, e que me emocionou, em suas últimas páginas, pelo fim guardado à protagonista. Sem dúvida, um thriller memorável.";
    break;

    case 'ACP':
        document.getElementById("book-title").innerHTML = "A cor púrpura";

        var bookImg =  "images/genre/genre-drama-purpura.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "29 junho 2009";
        document.getElementById("book-genre").innerHTML = "Drama";
        document.getElementById("book-author").innerHTML = "Alice Walker";

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

        document.getElementById("book-text").innerHTML = "A cor púrpura é a história de Celie – por volta do período de 1900 a 1940 -, pobre, negra e praticamente analfabeta, no Sul dos Estados Unidos. Brutalizada desde a infância, a jovem foi estuprada pelo padrasto e depois forçada a se casar com Albert, um viúvo violento, pai de quatro filhos, que enxergava a esposa como empregada e lhe impunha sofrimentos físicos e morais rotineiramente. Celie escreve cartas para Deus e para a irmã, missionária na África, com uma linguagem peculiar que assume ritmo e cadência próprios e líricos, à medida que a adolescente cresce e começa a arregimentar experiências e amigos. Entre eles, a inesquecível Shug Avery, cantora, amante de Albert e responsável por uma sensível melhora na rotina de Celie. Apesar da dramaticidade de seu enredo, A cor púrpura não se resume às lágrimas derramadas pelo leitor diante das perversidades aqui relatadas – e longe de serem apenas fruto da imaginação de Alice Walker. Por trás de triste história de Celie, há uma crítica à relação entre homens e mulheres, ao poder dado ao homem em uma sociedade que ainda hoje luta por igualdade entre gêneros, etnias e classes sociais. Um livro que retrata um pedaço do mundo no início do século XX, mas que nos mostra a atualidade de determinadas questões.";

        var bookLinkAmazon = "https://www.amazon.com.br/cor-púrpura-Alice-Walker/dp/8503010313/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=WARVP8ZHOT22&keywords=A+Cor+Púrpura&qid=1669605740&qu=eyJxc2MiOiIxLjYwIiwicXNhIjoiMS4yNyIsInFzcCI6IjEuMzkifQ%3D%3D&sprefix=a+cor+púrpura%2Caps%2C205&sr=8-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.estantevirtual.com.br/livros/walker-alice/a-cor-purpura-edicao-especial-/1298127608?show_suggestion=0";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://busca.saraiva.com.br/busca?q=A%20Cor%20Púrpura";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "336";
        document.getElementById("book-date").innerHTML = "29 junho 2009";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "José Olympio";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+16 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Queria estar lendo";

        var bookLinkRese1 = "https://www.queriaestarlendo.com.br/2019/03/resenha-cor-purpura.html"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "A Cor Púrpura fala de uma realidade distante e, ao mesmo tempo, muito próxima. Ela não marca, exatamente, o tempo em que foi escrita. Não cita propriamente datas ou grandes acontecimentos para que possamos nos localizar, mas não é apenas isso que o torna atemporal. Infelizmente, muitas das mazelas vividas por Celie - e pelas mulheres a sua volta - ainda são bastante atuais. No fim de tudo, A Cor Purpura chegou ao topo dos meus favoritos. Celie agora anda de mãos dadas com Mariam, a protagonista de A Cidade do Sol, no meu ranking de protagonistas preferidas, e se tornou uma leitura que eu indico para todo mundo. Uma leitura rápida, direta, o retrato de uma sociedade que ainda, infelizmente, existe, cheia de reflexões tão extraordinárias quanto suas personagens.";
        
        document.getElementById("rese-2-name").innerHTML = "Nostalgia cinza";

        var bookLinkRese2 = "https://www.nostalgiacinza.com.br/2019/03/ressenha-cor-purpura.html?m=0"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Ao final do livro somos apresentados a uma informação sutil, mas poderosa dependendo de quem a lê e a absorve. Alice Walker é médium e agradece às pessoas “por terem vindo” para que essa história pudesse nascer. Essa característica sobrenatural dá um toque ainda maior de realismo para a narrativa porque demonstra, caso você acredite, que o que está sendo contado veio de alguém que realmente viveu tudo aquilo. Essa pequena, mas extremamente importante revelação, pode explicar a própria forma que Alice Walker escolheu para narrar os acontecimentos do livro. A falta de explicações detalhadas, sutilezas ao longo de todo o livro, linguagem e narrativa confusa, representam um relato oral de outra pessoa que não tinha a intenção de exemplificar e enfeitar o texto. As palavras são o que são, da forma que são.";
    break;

    case 'E':
        document.getElementById("book-title").innerHTML = "Extraordinário";

        var bookImg =  "images/genre/genre-drama-extraodinário.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "31 janeiro 2013";
        document.getElementById("book-genre").innerHTML = "Drama";
        document.getElementById("book-author").innerHTML = "R.J Palacio";

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

        document.getElementById("book-text").innerHTML = "Todo mundo sabe que é difícil ser um aluno novo, mais ainda quando se tem um rosto tão diferente. Prestes a começar o quinto ano em um colégio particular em Nova York, Auggie tem uma missão nada fácil pela frente: convencer os colegas de que, apenas da aparência incomum, ele é um menino igual a todos os outros. R.J.Palacio criou uma história edificante, repleta de amor e esperança, em que um grupo de pessoas luta para espalhar compaixão, aceitação e gentileza. Narrado da perspectiva de Auggie e também de seus familiares e amigos, com momentos comoventes e outros descontraídos, Extraordinário consegue captar o impacto que um menino pode causar na vida e no comportamento de todos, família, amigos e comunidade – um impacto forte, comovente e , sem dúvida nenhuma, extraordinariamente positivo, que vai tocar todo tipo de leitor. Para espalhar a mensagem de Extraordinário, Palacio iniciou uma campanha antibullying, da qual milhares de crianças já participaram.";

        var bookLinkAmazon = "https://www.amazon.com.br/Extraordinário-R-J-Palacio/dp/8580573017/ref=sr_1_5?__mk_pt_BR=ÅMÅŽÕÑ&crid=3AZ97T6U0Q13F&keywords=extraordinário&qid=1669606124&qu=eyJxc2MiOiIxLjU4IiwicXNhIjoiMS4wNyIsInFzcCI6IjAuODQifQ%3D%3D&sprefix=a+cor+púrpura%2Caps%2C690&sr=8-5";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.estantevirtual.com.br/livros/r-j-palacio/extraordinario/2398396897?show_suggestion=0";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.saraiva.com.br/extraordinario/p";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "320";
        document.getElementById("book-date").innerHTML = "31 janeiro 2013";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Intrínseca";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+12 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Unicentro";

        var bookLinkRese1 = "https://www3.unicentro.br/petfisica/2019/10/23/resenha-de-extraordinario/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Desde o início ele mostra que ele é um garoto comum e é isso que ele quer mostrar para as outras pessoas. Diversos comentários narrados por ele mexeu comigo e acredito que mexerão contigo também, como este: “É como aquelas pessoas que às vezes você vê e não consegue imaginar como seria estar no lugar delas, seja alguém em uma cadeira de rodas, ou alguém que não pode falar. Eu sei que sou essa pessoa para os outros. Para mim, porém, sou apenas eu. Um garoto comum.” Toda essa história é contada como uma escrita simples, mas acredito que todos irão se identificar com o texto, por terem vivido ou vivenciado algo parecido. Por ser “diferente” das outras pessoas, seja por sua aparência física, gostos; por querer ser aceito por aquilo que é… Este livro quer mostrar, também, que precisamos ser gentis, tolerante… humanos!";
        
        document.getElementById("rese-2-name").innerHTML = "Portal Sorocaba";

        var bookLinkRese2 = "https://escolaportalsorocaba.com.br/blog/resenha-extraordinario/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Esta incrível obra fala sobre respeito, aceitação, amizade, superação, a maldade presente no mundo nos tempos atuais e enfatiza a forma das pessoas se relacionarem com outras que são diferentes delas. Nosso protagonista ensina que mesmo com uma aparência incomum é um garoto normal, como todos os outros, além de ser muito gentil. Amei o livro! É uma narrativa envolvente, emocionante, com personagens bem desenvolvidos e histórias únicas.";
    break;

    case 'HR':
        document.getElementById("book-title").innerHTML = "Hibisco Roxo";

        var bookImg =  "images/genre/genre-drama-hibisco.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "1 janeiro 2011";
        document.getElementById("book-genre").innerHTML = "Drama";
        document.getElementById("book-author").innerHTML = "Chimamanda Ngozi Adichie";

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

        document.getElementById("book-text").innerHTML = "Protagonista e narradora de Hibisco roxo, a adolescente Kambili mostra como a religiosidade extremamente “branca” e católica de seu pai, Eugene, famoso industrial nigeriano, inferniza e destrói lentamente a vida de toda a família. O pavor de Eugene às tradições primitivas do povo nigeriano é tamanho que ele chega a rejeitar o pai, contador de histórias encantador, e a irmã, professora universitária esclarecida, temendo o inferno. Mas, apesar de sua clara violência e opressão, Eugene é benfeitor dos pobres e, estranhamente, apoia o jornal mais progressista do país. Durante uma temporada na casa de sua tia, Kambili acaba se apaixonando por um padre que é obrigado a deixar a Nigéria, por falta de segurança e de perspectiva de futuro. Enquanto narra as aventuras e desventuras de Kambili e de sua família, o romance também apresenta um retrato contundente e original da Nigéria atual, mostrando os remanescentes invasivos da colonização tanto no próprio país, como, certamente, também no resto do continente.";

        var bookLinkAmazon = "https://www.amazon.com.br/Hibisco-roxo-Chimamanda-Ngozi-Adichie/dp/8535918507/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=2IYQX63DZ4PX1&keywords=Hibisco+Roxo&qid=1669606467&qu=eyJxc2MiOiIxLjM1IiwicXNhIjoiMC44OCIsInFzcCI6IjAuNzEifQ%3D%3D&sprefix=extraordinário%2Caps%2C719&sr=8-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.estantevirtual.com.br/italivros/adichie-chimamanda-ngozi-hibisco-roxo-3464809347?show_suggestion=0";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.saraiva.com.br/hibisco-roxo/p";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "328 ";
        document.getElementById("book-date").innerHTML = "1 janeiro 2011";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Companhia das Letras";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+12 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Além do livro";

        var bookLinkRese1 = "https://alemdolivro.com/2020/08/13/resenha-de-hibisco-roxo-chimamanda-ngozi-adichie/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "As questões de raça não são abordadas de maneira tão objetiva em Hibisco Roxo quanto em Americanah. Mas aparecem sob a perspectiva do pós-colonialismo. Ou seja, na forma das “heranças” deixadas pelos países colonizadores, especialmente em relação à religiosidade branca – o que nos dá muito o que pensar também enquanto brasileiros. Acredito que tenha ficado claro o quanto esta leitura foi rica – tanto em relação aos temas abordados, quanto à história em si. Um livro completo, Hibisco Roxo nos ensina sobre a cultura nigeriana, faz críticas, provoca reflexões e surpreende com um desfecho de tirar o fôlego";
        
        document.getElementById("rese-2-name").innerHTML = "Voando com livros";

        var bookLinkRese2 = "https://www.voandocomlivros.com/post/hibisco-roxo-resenha"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "A violência que a mãe de Kambili sofre diariamente é intensa, horrível e triste de acompanhar. Tudo é passado para nós, leitores, pelos olhos e percepções da protagonista. Ela absorve toda a tensão e sofrimento que está a sua volta, e se apega a frágeis fios de esperança de que seu pai está certo e é uma boa pessoa. Para Kambili, Eugene ainda é seu pai herói. Mas por quanto tempo? Eu como leitora, torcia a todo momento para que a máscara social do Eugene caísse, que Kambili trangredisse e se libertasse das garras desse que, para mim,  é um grande monstro. O desfecho não é fácil de aceitar, mas é compreensível. Hibisco Roxo é mais uma obra que ensina muito. Além de trazer elementos históricos, sociais e políticos da Nigéria, o livro nos faz pensar sobre diferentes religiões e culturas, nos faz observar o íntimo e o indivíduo com mais cuidado. O ser humano é único, cada um tem uma vivência, uma história, e é preciso aprender a aceitar e a respeitar a decisão do outro.";
    break;

    case 'AADG':
        document.getElementById("book-title").innerHTML = "A Arte da Guerra";

        var bookImg =  "images/genre/genre-guerra-arte.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "20 maio 2015";
        document.getElementById("book-genre").innerHTML = "Guerra";
        document.getElementById("book-author").innerHTML = "Sun Tzu";

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

        document.getElementById("book-text").innerHTML = "O que faz de um tratado militar, escrito por volta de 500 a.C., manter-se atual a ponto de ser publicado praticamente no mundo todo até os dias de hoje? Você verá que, em A arte da guerra, as estratégias transmitidas pelo general chinês Sun Tzu carregam um profundo conhecimento da natureza humana. Elas transcendem os limites dos campos de batalha e alcançam o contexto das pequenas ou grandes lutas cotidianas, sejam em ambientes competitivos – como os do mundo corporativo – sejam nos desafios internos, em que temos de encarar nossas próprias dificuldades. Se você não conhece a si mesmo nem o inimigo, sucumbirá a todas as batalhas.";

        var bookLinkAmazon = "https://www.amazon.com.br/Arte-Guerra-Sun-Tzu/dp/8542805097/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=2SBWXSFAQ0N20&keywords=A+Arte+da+Guerra&qid=1669606937&qu=eyJxc2MiOiIzLjMzIiwicXNhIjoiMi44MCIsInFzcCI6IjIuODUifQ%3D%3D&sprefix=a+arte+da+guerra%2Caps%2C462&sr=8-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.estantevirtual.com.br/livros/sun-tzu/a-arte-da-guerra/336810164?show_suggestion=0";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.saraiva.com.br/a-arte-da-guerra----os-treze-capitulos-originais/p";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "158";
        document.getElementById("book-date").innerHTML = "20 maio 2015";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Novo Século";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+14 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Unicentro";

        var bookLinkRese1 = "https://www3.unicentro.br/petfisica/2021/12/09/resenha-ansiedade-historias-reais-sobre-como-conviver-com-o-transtorno/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "O livro, apesar de ter um aspecto militar, é muito mais sobre liderança que um manual de como ser um bom general. Longe de ser um manual, pois o autor e os comentaristas conseguem fazer o leitor questionar sobre coisas do dia a dia. Apesar da época em que foi escrito, penso ser um livro muito atual para qualquer um que queira entender sobre lideranças. O começo não é uma leitura fácil, devido aos vocabulários militares e metáforas, mas os comentaristas exemplificam bem o significado das metáforas. É um livro que merece uma leitura reflexiva, além de ser um clássico da literatura. ";
        
        document.getElementById("rese-2-name").innerHTML = "Recanto das letras";

        var bookLinkRese2 = "https://www.recantodasletras.com.br/resenhasdelivros/7485899"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Em suma, o livro mostra que tudo tem o foco no ser humano. Nas emoções e na razão com que se encara cada etapa da vida. Cada desafio. Que é preciso apostar a vida no conhecimento. Conhecer a si, à sua equipe, mas também ao adversário, ao outro, para saber que tipo de estratégia será usada. O autor acredita, com base na sua experiência militar, que uma guerra é vencida ou perdida, antes de começar. Na estratégia, no planejamento das ações. É, 2500 anos depois, o que dizem sobre as batalhas da vida profissional, os melhores gurus e mentores. Tudo confirma o tratado de “A Arte da Guerra”. Uma bíblia, um livro de cabeceira para quem quer ser um vencedor nas guerras que travamos todos os dias no mundo atual.";
    break;

    case 'C':
        document.getElementById("book-title").innerHTML = "Crimeia";

        var bookImg =  "images/genre/genre-guerra-crimeia.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "18 fevereiro 2019";
        document.getElementById("book-genre").innerHTML = "Guerra";
        document.getElementById("book-author").innerHTML = "Orlando Figes";

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

        document.getElementById("book-text").innerHTML = "A Guerra da Crimeia, anterior à Primeira Guerra Mundial, foi o maior conflito do século XIX. No entanto, há poucas obras que se dediquem a detalhar essa história, eclipsada pelas duas guerras mundiais que ocorreram em seguida. Em Crimeia, o renomado historiador Orlando Figes se baseia em fontes russas, francesas, otomanas e britânicas para fornecer um relato completo e preencher essa lacuna. O autor narra os detalhes de uma guerra trágica, motivada pela crença fervorosa e populista, por parte do tsar Nicolau I e de seus ministros, de que era dever da Rússia governar todos os cristãos ortodoxos e controlar a Terra Santa. Após uma contenda com líderes religiosos otomanos em 1853, tropas russas invadiram uma área disputada na atual Romênia, fazendo com que a desavença da Grã-Bretanha e da Turquia com a Rússia atingisse o ponto de ebulição. A opinião francesa era menos apaixonada, mas os anseios de Napoleão III pela glória militar eram fortes o bastante para incentivar sua participação no confronto.";

        var bookLinkAmazon = "https://www.amazon.com.br/Crimeia-Orlando-Figes/dp/8501097365/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=3NQ98JGZB3RKO&keywords=Crimeia&qid=1669607590&qu=eyJxc2MiOiIyLjE2IiwicXNhIjoiMS4xOSIsInFzcCI6IjAuNzYifQ%3D%3D&sprefix=crimeia+%2Caps%2C434&sr=8-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.estantevirtual.com.br/livros/orlando-figes/crimeia/3597021103?show_suggestion=0";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://busca.saraiva.com.br/q/livros-orlando-figes";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "602";
        document.getElementById("book-date").innerHTML = "18 fevereiro 2019";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Record";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+15 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Record";

        var bookLinkRese1 = "https://www.record.com.br/produto/crimeia/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "O extraordinário conflito inflamou a rivalidade entre a Rússia e o Império Otomano em relação aos Bálcãs, desestabilizou as relações entre as potências europeias e acendeu uma fagulha para a Primeira Guerra Mundial. Tendo praticamente redesenhado o mapa da Europa e causado a morte de incontáveis militares e civis, a Guerra da Crimeia foi travada com tecnologia industrial e marcada por soldados entrincheirados na neve, cirurgiões atuando no campo de batalha, cobertura da imprensa por intermédio de repórteres correspondentes e a fanática e assombrada figura do tsar Nicolau I. Por meio de um relato lúcido, vívido e sensível, em Crimeia, Orlando Figes lança luz sobre os fatores geopolíticos, culturais e religiosos que moldaram o envolvimento de cada potência nessa contenda.";
        
        document.getElementById("rese-2-name").innerHTML = "Aventuras na história";

        var bookLinkRese2 = "https://aventurasnahistoria.uol.com.br/noticias/historia-hoje/resenha-livro-historia-guerra-crimeia-seculo-19.phtml"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Com base em uma variedade de fontes, Figes oferece uma experiência vivida da guerra - desde a do soldado britânico comum em sua trincheira até a figura sombria do próprio Nicolau I, em sua busca pela salvação religiosa. Segundo o autor, 'Crimeia é a historia de uma guerra trágica, motivada pela crença fervorosa e populista, por parte do tsar Nicolau I e de seus ministros, de que era dever da Rússia governar todos os cristão ortodoxos e controlar a Terra Santa'.";
    break;

    case 'GEP':
        document.getElementById("book-title").innerHTML = "Guerra e paz";

        var bookImg =  "images/genre/genre-guerra-paz.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "24 novembro 2022";
        document.getElementById("book-genre").innerHTML = "Guerra";
        document.getElementById("book-author").innerHTML = "Lev Tolstoi";

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

        document.getElementById("book-text").innerHTML = "Escrito entre 1865 e 1869, 'Guerra e Paz' é provavelmente a obra-prima de Tolstoi e uma das maiores criações literárias de sempre. Tendo como pano de fundo um cenário de guerra, com a invasão da Rússia por parte das tropas napoleónicas, esta novela épica surge como uma reflexão sobre a vida humana e a sua frágil existência. Nesta obra grandiosa, as personagens amam, odeiam e lutam, mas acima de tudo anseiam por encontrar o sentido da vida.";

        var bookLinkAmazon = "https://www.amazon.com.br/Guerra-Paz-Lev-Tolstoi-ebook/dp/B07QGNJD5L/ref=sr_1_2?__mk_pt_BR=ÅMÅŽÕÑ&crid=1QL7P0V89Y0US&keywords=Guerra+e+Paz&qid=1669607967&qu=eyJxc2MiOiIzLjE5IiwicXNhIjoiMi4yNyIsInFzcCI6IjIuMzgifQ%3D%3D&sprefix=guerra+e+paz%2Caps%2C555&sr=8-2";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://busca.saraiva.com.br/busca?q=Guerra%20e%20Paz";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/leon-tolstoi/guerra-e-paz/3790195668?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "1419";
        document.getElementById("book-date").innerHTML = "24 novembro 2022";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Mimética";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+15 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Blog da companhia";

        var bookLinkRese1 = "https://www.blogdacompanhia.com.br/conteudos/visualizar/A-guerra-e-a-paz"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Com seu talento incomparável, Tolstói pinta o íntimo entrelaçamento do homem e da paisagem, tanto a física como a emocional, muitas vezes contrastando a majestade da natureza com a loucura humana, com a mecânica da violência da guerra. Revelar a verdade sobre a guerra é muito difícil, conclui Tolstói, e ele aborda o tema através de outro contraste - com a sua concepção de paz. A “guerra” não é apenas a ação militar dos exércitos em luta, mas também a animosidade e a desunião das pessoas em tempos de paz, separadas por barreiras sociais e morais, pela alienação e isolamento e pelo seu egoísmo. Igualmente, a “paz” aparece no romance se desdobrando nos seus vários significados. A paz nega a guerra porque sua essência está no trabalho e na felicidade, na manifestação livre e natural da personalidade.";
        
        document.getElementById("rese-2-name").innerHTML = "Voando com livros";

        var bookLinkRese2 = "https://www.voandocomlivros.com/post/guerra-e-paz-resenha"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Eu gosto muito da técnica de escrita que o autor usa para transitar entre as passagens, ele conseguia aguçar minha curiosidade para os próximos acontecimentos e quebrar uma possível monotonia que uma cena muito longa poderia me causar. Enquanto estava lendo, eu falava para alguns amigos que tinha muita paz no primeiro volume da obra. Cadê a guerra?, perguntava para quem já tinha lido haha... uma brincadeira que expressava o meu deleite ao ler os trechos geniais das batalhas.Mas é claro que essa obra-prima não se resume a lutas. A busca espiritual é um dos fios que tecem essa colcha de tempestades e angústias que permeiam todo o enredo até seus momentos finais, onde a sensação de paz paira no ar.Eu ainda não superei o desfecho e talvez nunca supere. A vida é dura demais e quando encontro recortes fidedignos dela em minhas leituras, principalmente com personagens que estou tão envolvida, é difícil aceitar. Sofri, chorei e amei. Valeu cada minuto dedicado a essa leitura grandiosa em tamanho e qualidade. Se você também tem vontade de ler esse clássico, deixo aqui meu conselho: só se joga, deguste com calma, não tenha pressa em terminar. Vai valer a pena!";
    break;

    case 'OUDDH':
        document.getElementById("book-title").innerHTML = "O último dia de Hitler";

        var bookImg =  "images/genre/genre-guerra-dia.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "3 agosto 2016";
        document.getElementById("book-genre").innerHTML = "Guerra";
        document.getElementById("book-author").innerHTML = "Jonathan Mayo";

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

        document.getElementById("book-text").innerHTML = "30 de abril de 1945, a Alemanha está imersa em caos…As tropas russas marcham por Berlim. Em todo o país, as pessoas estão em polvorosa – sobreviventes de campos de concentração, prisioneiros das tropas Aliadas, nazistas fugitivos –, e a população civil está ficando sem comida numa rapidez desoladora. O homem que orquestrou esse pesadelo está em seu bunker no subsolo da capital alemã, ocupando-se de suas despedidas. Esta é a história fascinante das horas finais de Hitler, contadas pelo prisma daqueles que estavam com ele na fortificação, dos que lutaram nas ruas da Alemanha e daqueles que transitavam pelos corredores do poder em Washington, Londres e Moscou. 30 de abril de 1945 foi um dia com o qual milhões de pessoas sonharam, e pelo qual milhões de pessoas morreram.";

        var bookLinkAmazon = "https://www.amazon.com.br/último-dia-Hitler-Minuto-minuto/dp/8582863136/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=3OWKB9IID107M&keywords=O+Último+Dia+de+Hitler&qid=1669608479&qu=eyJxc2MiOiIwLjY1IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=guerra+e+paz%2Caps%2C745&sr=8-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://busca.saraiva.com.br/busca?q=O%20Último%20Dia%20de%20Hitler";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/jonathan-mayo-emma-craigie/o-ultimo-dia-de-hitler-minuto-a-minuto/1012628356?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "419";
        document.getElementById("book-date").innerHTML = "3 agosto 2016";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Mimética";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+15 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Minuto a minuto";

        var bookLinkRese1 = "https://12min.com/br/o-ultimo-dia-de-hitler-minuto-a-minuto-resumo"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Muito bom! Me interesso bastante por coisas relacionadas a segunda Guerra mundial, então minha professora me emprestou esse livro para que eu lesse. Pelo título, achei que seria focado somente em hitler, mas mostra e fala de várias outras pessoas e lugares. É uma leitura interessante de se fazer, gostei bastante. O livro detalha passo a passo o que acontecia não só com Hitler, mas ao redor dele, em seu último dia de vida. As últimas horas de Hitler contadas por pessoas que estavam dos dois lados da guerra. Gostei bastante dos detalhes narrados. Recomendo muito!";
        
        document.getElementById("rese-2-name").innerHTML = "Resenha crítica";

        var bookLinkRese2 = "https://www.resenhacritica.com.br/tag/adolf-hitler/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Meio cansativo! Embora Ohler tenha se valido de fontes documentais inéditas e valiosas, ao não adotar um procedimento teórico-metodológico mínimo, acaba por fazer afirmativas sem respaldo empírico. A polêmica obra descreve em tons fortes e com linguagem jornalística a necessidade crescente da utilização de estimulantes sintéticos pela sociedade alemã em geral e pela cúpula do Terceiro Reich em particular no período de 1933 a 1945. Além disso, o autor apresenta um amplo panorama no qual aborda historiograficamente a grande importância do segmento industrial químico-farmacêutico alemão na síntese de anfetaminas e “narcóticos que marcaram os acontecimentos no Estado nazista e nos campos de batalha da Segunda Guerra Mundial”";
    break;

    case 'QEH':
        document.getElementById("book-title").innerHTML = "Querido Evan Hansen";

        var bookImg =  "images/Home/home-acclaimed-hansen.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "26 abril 2019";
        document.getElementById("book-genre").innerHTML = "Ficção";
        document.getElementById("book-author").innerHTML = "Val Emmich";

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

        document.getElementById("book-text").innerHTML = "Evan Hansen sempre teve muita dificuldade de fazer amigos. Para mudar isso, decide seguir as recomendações de seu psicólogo e escrever cartas encorajadoras para si mesmo, com esperança de que seu último ano na escola seja um pouco melhor. O que não esperava era que uma das cartas fosse parar nas mãos de Connor Murphy, o aluno mais encrenqueiro da turma. Quando Connor comete suicídio e sua família encontra a carta de Evan, todos começam a pensar que os dois eram melhores amigos. Sem conseguir explicar a situação, Evan acaba refém de uma grande mentira. Ao mesmo tempo, graças a essa (falsa) amizade, o garoto finalmente se aproxima de Zoe, a menina de seus sonhos, e passa a ser notado no colégio. No fundo, Evan sabe que não está fazendo a coisa certa, mas se está ajudando a família de Connor a superar a perda, que mal pode ter? Evan agora tem um propósito de vida. Até que a verdade ameaça vir à tona, e ele precisa enfrentar seu maior inimigo: ele mesmo.";

        var bookLinkAmazon = "https://www.amazon.com.br/Querido-Evan-Hansen-Val-Emmich/dp/8555340837/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=32XKMATWYMVXM&keywords=Querido+Evan+Hansen&qid=1669609153&qu=eyJxc2MiOiIxLjAwIiwicXNhIjoiMC41MyIsInFzcCI6IjAuNDkifQ%3D%3D&sprefix=o+último+dia+de+hitler%2Caps%2C679&sr=8-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://busca.saraiva.com.br/busca?q=Querido%20Evan%20Hansen";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/val-emmich/querido-evan-hansen/3857843493?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "319";
        document.getElementById("book-date").innerHTML = "26 abril 2019";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Mimética";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+12 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Idris";

        var bookLinkRese1 = "https://idris.com.br/resenhas/2019/06/21/resenha-querido-evan-hansen-val-emmich/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "A sinopse não diz, e eu achei uma ótima surpresa: Temos um ponto de vista de Connor também. Meio que “pós morte”, que explica tudo que o levou até o suicídio e deixa evidente que se algumas coisas tivessem acontecido de maneira diferente, talvez ele não fizesse o que fez. Gostei muito de todos os personagens do livro, Evan, Connor, Zoe, e principalmente de Jared, um amigo de Evan. Adorei a surpresa do ponto de vista de Connor, e adorei as mensagens que o livro passa, e como ele é cheio de frases de efeito desde o começo até o final. ";
        
        document.getElementById("rese-2-name").innerHTML = "Mais que livros";

        var bookLinkRese2 = "https://www.maisquelivros.com/2021/12/resenha-querido-evan-hansen-val-emmich.html"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Connor também é um personagem incrível. Temos algumas passagens do livro narradas pelo 'fantasma' do garoto, que acompanha de perto todos os acontecimentos que envolvem sua família após sua morte. Achei essa jogada sensacional e só consigo imaginar como deve ser legal de assistir isso ao vivo. O suicídio é um tema muito importante, que é abordado em inúmeros livros voltados para o público mais jovem. Contudo, são poucos os livros que eu, como leitor, realmente consegui sentir a mensagem sendo passada da forma correta e aqui foi assim. Terminei o livro com água nos olhos e inúmeros questionamentos e certezas na mente. Querido Evan Hansen é um livro lindo, poético e importante, que com certeza vale a pena a leitura. Quero muito que o musical também seja adaptado para as telonas, para ter ainda mais divulgação e acesso na mídia. Mas, por enquanto, se joguem nessa leitura e se apaixonem por essa lição de vida assim como eu.";
    break;

    case 'AGNTRDM':
        document.getElementById("book-title").innerHTML = "A Guerra Não Tem Rosto de Mulher";

        var bookImg =  "images/genre/genre-guerra-mulher.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "17 junho 2016";
        document.getElementById("book-genre").innerHTML = "Guerra";
        document.getElementById("book-author").innerHTML = "Svetlana Aleksiévitch";

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

        document.getElementById("book-text").innerHTML = "A história das guerras costuma ser contada sob o ponto de vista masculino: soldados e generais, algozes e libertadores. Trata-se, porém, de um equívoco e de uma injustiça. Se em muitos conflitos as mulheres ficaram na retaguarda, em outros estiveram na linha de frente. É esse capítulo de bravura feminina que Svetlana Aleksiévitch reconstrói neste livro absolutamente apaixonante e forte. Quase um milhão de mulheres lutaram no Exército Vermelho durante a Segunda Guerra Mundial, mas a sua história nunca foi contada. Svetlana Aleksiévitch deixa que as vozes dessas mulheres ressoem de forma angustiante e arrebatadora, em memórias que evocam frio, fome, violência sexual e a sombra onipresente da morte.";

        var bookLinkAmazon = "https://www.amazon.com.br/guerra-não-tem-rosto-mulher/dp/8535927433/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&keywords=A+Guerra+Não+Tem+Rosto+de+Mulher&qid=1669607239&qu=eyJxc2MiOiIxLjM4IiwicXNhIjoiMC45NSIsInFzcCI6IjAuNjUifQ%3D%3D&sr=8-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.estantevirtual.com.br/livros/svetlana-aleksievitch/a-guerra-nao-tem-rosto-de-mulher/365032899?show_suggestion=0";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://busca.saraiva.com.br/q/svetlana-alexievitch";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "392";
        document.getElementById("book-date").innerHTML = "17 junho 2016";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Companhia das Letras";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+14 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Queria estar lendo";

        var bookLinkRese1 = "https://www.queriaestarlendo.com.br/2020/04/resenha-guerra-nao-tem-rosto-de-mulher_21.html"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "As histórias contadas trazem uma visão real da guerra. Elas falam não só sobre vitórias e derrotas, falam também sobre o amor e a importância dele para que fossem capazes de suportar tudo o que se passava. Nenhuma delas fala sobre armamentos, não da maneira como estamos acostumadas, e em todo o livro um tema permeia os capítulos: a morte. A morte neste livro é a coisa mais verdadeira que eu já li. O retrato da pequenez a qual nos resumimos. Outras coisas que jamais imaginaríamos também são postas às claras, como as vestimentas. Esse foi inclusive o motivo que sugiro ali em cima que a palavra soldada deva ser relativamente nova, porque simplesmente não haviam roupas para mulheres no exército. Elas eram obrigadas a usar roupas masculinas e jamais pude imaginar o quanto isso pode ser devastador para a autoestima de uma mulher.";
        
        document.getElementById("rese-2-name").innerHTML = "Mafua";

        var bookLinkRese2 = "https://mafua.ufsc.br/2020/a-guerra-no-feminino-por-svetlana-aleksievitch-uma-leitura-de-a-guerra-nao-tem-rosto-de-mulher/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Apesar dessa impossibilidade, o testemunho ainda possui uma “finalidade de liberação anterior”, nas palavras de Levi (1988, p.8). Nesse contexto, Aleksiévitch designa-se não apenas como ouvinte, mas também como testemunha dos relatos da Segunda Guerra Mundial, a partir da visão feminina. Como reporta Seligmann-Silva (2008), o ouvinte se faz necessário pois o testemunho apenas vive se composto de um dialogismo, em que se deve existir a vontade de escutar e o desejo de portar aquele testemunho que se escuta. Escutando essas histórias, a escritora compartilha a companhia do narrador, exercendo um papel denominado por Shoshana Felman (1992, p. 213) como o de “testemunha de segundo grau” ou “testemunha dos testemunhos”. Ainda, para Benjamin (2012, p. 230), “mesmo quem a[s] lê partilha dessa companhia”. Como testemunha, Aleksiévitch transforma a história da guerra em uma vivência. Em suas próprias palavras:";
    break;

    case 'GQVEA':
        document.getElementById("book-title").innerHTML = "Gostaria que você estivesse aqui";

        var bookImg =  "images/genre/genre-lgbt-gostaria.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = " 31 agosto 2021";
        document.getElementById("book-genre").innerHTML = "LGBTQIA+";
        document.getElementById("book-author").innerHTML = "Fernando Scheller";

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

        document.getElementById("book-text").innerHTML = "Quando a década de 1980 começa a dar as caras no Rio de Janeiro, o tempo é de contradições. À efervescência musical e a uma febril vontadede viver, unem-se a instabilidade política, a aterrorizadora epidemia de aids e o aumento do tráfico nas favelas. E cinco personagens, de idades diferentes, aspirações diferentes, mundos diferentes, veem a vida mudar completamente. Inácio, apaixonado por Baby, larga a faculdade de engenharia quando conhece César, produtor musical gay que, como Baby, busca encontrar o próprio lugar no mundo. Selma, mãe de César, lida com o abandono do marido e o medo de perder o filho. Em seu prédio, trabalha Rosalvo, paraibano recém-chegado à Rocinha em busca do assassino de sua filha trans.Gostaria que você estivesse aqui é um romance sobre perder a inocência e entregar-se ao mundo por inteiro.";

        var bookLinkAmazon = "https://www.amazon.com.br/Gostaria-que-você-estivesse-aqui/dp/6555111917/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&keywords=Gostaria+que+Você+Estivesse+Aqui&qid=1669602938&qu=eyJxc2MiOiIwLjUwIiwicXNhIjoiMC4xNCIsInFzcCI6IjAuMDAifQ%3D%3D&s=books&sr=1-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.estantevirtual.com.br/livros/fernando-scheller/gostaria-que-voce-estivesse-aqui/3520552453?show_suggestion=0";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://busca.saraiva.com.br/q/livro-queria-que-voce-estivesse-aqui-francesc-miralles";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "320";
        document.getElementById("book-date").innerHTML = "31 agosto 2021";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "HarperCollins";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+14 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Resenha dos sonhos";

        var bookLinkRese1 = "https://resenhandosonhos.com/gostaria-que-voce-estivesse-aqui-fernando-scheller/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "2,5 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Em minha concepção, já que o autor escreveu em terceira pessoa, não havia necessidade de ter narrado através de pontos de vista, e sim priorizar os principais assuntos do livro, e todo o restante em segundo plano, como uma forma de complementar e aprofundar o enredo. Acredito que por não ter interesse na maioria dos personagens e mais no que envolvia César e Inácio, o livro não funcionou para mim, assim como alguns outros motivos que apontei, mas sem dúvidas pode funcionar para outras pessoas.";
        
        document.getElementById("rese-2-name").innerHTML = "Ler pra quê?";

        var bookLinkRese2 = "https://lerpraque.com.br/gostaria-que-voce-estivesse-aqui-┃resenha/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Achei incrível a forma que o autor consegue nos transportar para o Rio de Janeiro da década de 80. O enredo mostra bastante os conflitos que fazemos todos os dias sobre as escolhas cotidianas. Mesmo que eu tenha gostado da leitura senti falta de uma amarração que instiga entre os capítulos. O final de quase todos os personagens era meio previsível. Um livro lindo, profundo, muito bem escrito e de uma delicadeza única. A literatura nacional agradece por essa obra prima. Os espaços vazios fazem parte das nossas vidas. A montanha-russa diária dos envolvidos, de mais descidas que subidas, nos envolve demais, desde o começo do livro. Pausei a leitura por um tempo, pois alguns assuntos ativaram gatilhos, mas pude saborear cada pedacinho da história com todo amor que ela merece.";
    break;

    case 'HT1':
        document.getElementById("book-title").innerHTML = "Heartstopper: Dois garotos, um encontro";

        var bookImg =  "images/Home/home-saga-H1.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "14 setembro 2021";
        document.getElementById("book-genre").innerHTML = "LGBTQIA+";
        document.getElementById("book-author").innerHTML = "Alice Oseman";

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

        document.getElementById("book-text").innerHTML = "Charlie Spring e Nick Nelson não têm quase nada em comum. Charlie é um aluno dedicado e bastante inseguro por conta do bullying que sofre no colégio desde que se assumiu gay. Já Nick é superpopular, especialmente querido por ser um ótimo jogador de rúgbi. Quando os dois passam a sentar um ao lado do outro toda manhã, uma amizade intensa se desenvolve, e eles ficam cada vez mais próximos. Charlie logo começa a se sentir diferente a respeito do novo amigo, apesar de saber que se apaixonar por um garoto hétero só vai gerar frustrações. Mas o próprio Nick está em dúvida sobre o que sente ― e talvez os garotos estejam prestes a descobrir que, quando menos se espera, o amor pode funcionar das formas mais incríveis e surpreendentes.";

        var bookLinkAmazon = "https://www.amazon.com.br/Heartstopper-Dois-garotos-encontro-vol/dp/8555341612/ref=sr_1_3_sspa?__mk_pt_BR=ÅMÅŽÕÑ&crid=129KWPBSZIAN9&keywords=heartstopper&qid=1669609581&qu=eyJxc2MiOiIzLjgwIiwicXNhIjoiMi44OCIsInFzcCI6IjIuNTIifQ%3D%3D&sprefix=heartstopper+%2Caps%2C436&sr=8-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyS0ZBWVBCTkYxRlpGJmVuY3J5cHRlZElkPUEwODA3MTU1MjBZTDFEQTVZRlNVVCZlbmNyeXB0ZWRBZElkPUEwNDM3MzUyMjU1SlRFWkxDVEtIMCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.estantevirtual.com.br/livros/alice-oseman/heartstopper-dois-garotos-um-encontro-vol-1/2436393153?show_suggestion=0";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://busca.saraiva.com.br/q/heartstopper";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "320";
        document.getElementById("book-date").innerHTML = "14 setembro 2021";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Seguinte";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "De livro em livro";

        var bookLinkRese1 = "http://www.delivroemlivro.com.br/2020/08/resenha-heartstopper-vol-1-alice-oseman.html"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Li Heartstopper (vol. 1) em inglês (no tapas), pois infelizmente, ainda não tem tradução brasileira, porém, acredito que qualquer pessoa que saiba o básico de inglês consegue desenrolar essa leitura, primeiro porque é uma linguagem super jovem e segundo porque é uma História em Quadrinhos, então, por favor, não deixem a oportunidade passar! Heartstopper (vol. 1) é o primeiro contato que tenho com livros da escritora britânica Alice Oseman, famosa por escrever ficção para jovens, e embora Heartstopper não tenha sido traduzido no Brasil (ainda) a autora tem outros livros já traduzidos, como Um Ano Solitário e Rádio Silêncio. É interessante observar que é em Um Ano Solitário que temos a primeira aparição dos protagonistas dessa HQSó consegui amar Heartstopper (vol. 1) e acho que é uma HQ maravilhosa tanto no quesito gráfico como nas mensagens que passou. Já até li o segundo volume,então aguardem que trago o veredito da continuação logo mais.";
        
        document.getElementById("rese-2-name").innerHTML = "Idris";

        var bookLinkRese2 = "https://idris.com.br/blog/2021/11/02/resenha-heartstopper-1-dois-garotos-um-encontro-alice-oseman/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Confesso que quando eu peguei os livros para ler, eu não imaginava que ia ficar tão cativada pela história dos dois. Tá, eu imaginava que seria fofinho, mas nunca pensei que seria uma história sobre dois adolescentes escrita de uma forma tão sensível assim, que me faria ficar com um sorriso bobo nos lábios enquanto via o desenrolar do que estava acontecendo ali e que estava bem claro pra mim – e imagino que para as outras pessoas que leram o livro também. Nós vamos seguindo com eles por todas as páginas, vendo as coisas mais do ponto de vista de Charlie do que de Nick nesse primeiro volume e eu imagino que foi essa mesma a ideia da autora, que nós pudéssemos ver e ter uma pequena duvida sobre onde aquilo levaria (apesar de não deixar tanta margem para duvida assim) e foi tudo acontecendo de uma forma tão natural que é impossivel não se apaixonar pelos dois perdidamente.";
    break;

    case 'HT2':
        document.getElementById("book-title").innerHTML = "Heartstopper: Minha pessoa favorita";

        var bookImg =  "images/Home/home-saga-H2.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "14 setembro 2021";
        document.getElementById("book-genre").innerHTML = "LGBTQIA+";
        document.getElementById("book-author").innerHTML = "Alice Oseman";

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

        document.getElementById("book-text").innerHTML = "No segundo volume da série Heartstopper, Charlie e Nick precisam entender o que um beijo significa para a relação dos dois — e, principalmente, para eles mesmos. Charlie e Nick são melhores amigos, mas tudo muda depois que eles se beijam em uma festa. Charlie acredita que cometeu um grande erro e arruinou a amizade dos dois para sempre, e Nick está mais confuso do que nunca. Mas aos poucos Nick começa a enxergar o mundo sob uma nova perspectiva e, com a ajuda de Charlie, descobre muitas coisas sobre o mundo que o cerca, sobre seus amigos — e, principalmente, sobre ele mesmo.";

        var bookLinkAmazon = "https://www.amazon.com.br/Heartstopper-Dois-garotos-encontro-vol/dp/8555341612/ref=sr_1_3_sspa?__mk_pt_BR=ÅMÅŽÕÑ&crid=129KWPBSZIAN9&keywords=heartstopper&qid=1669609581&qu=eyJxc2MiOiIzLjgwIiwicXNhIjoiMi44OCIsInFzcCI6IjIuNTIifQ%3D%3D&sprefix=heartstopper+%2Caps%2C436&sr=8-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyS0ZBWVBCTkYxRlpGJmVuY3J5cHRlZElkPUEwODA3MTU1MjBZTDFEQTVZRlNVVCZlbmNyeXB0ZWRBZElkPUEwNDM3MzUyMjU1SlRFWkxDVEtIMCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.estantevirtual.com.br/livros/alice-oseman/heartstopper-dois-garotos-um-encontro-vol-1/2436393153?show_suggestion=0";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://busca.saraiva.com.br/q/heartstopper";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "320";
        document.getElementById("book-date").innerHTML = "14 setembro 2021";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Seguinte";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "De livro em livro";

        var bookLinkRese1 = "http://www.delivroemlivro.com.br/2020/08/resenha-heartstopper-vol-2-alice-oseman.html"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "De fato, não tem como ler Heartstopper (vol. 2) e não se ver nostálgico com o inícios de várias primeiras vezes: primeiro beijo, primeiro encontro, primeiro namorado, primeira vez em que precisa dizer que está saindo com alguém, primeiras vezes que sentimos ciúmes e nos preocupa mais com o outro do que nós mesmos. Heartstopper (vol. 2) é simplesmente uma HQ tão fabulosa e tão inclusiva que nos faz criar uma conexão com os personagens e nos coloca diante de tudo o que eles estão passando tanto como casal, quanto em suas relações familiares e circulo de amizades, então, obviamente, a gente sente dor quando eles são magoados e sente um quentinho no coração quando eles estão felizes.";
        
        document.getElementById("rese-2-name").innerHTML = "Idris";

        var bookLinkRese2 = "https://idris.com.br/blog/2021/11/02/resenha-heartstopper-2-minha-pessoa-favorita-alice-oseman/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Eu senti meu coração repleto de amor por todos os dois volumes da HQ, senti conforme Nick e Charlie se apaixonavam um pelo outro, que eu estava aqui do outro lado me apaixonando pelos dois (e pela Nellie!!!) e torcendo pra eles, querendo ver o relacionamento deles se desenvolver ainda mais, assim como as outras pessoas – as que importam pra Nick – reagiriam ao saber sobre a sua verdade e confesso que não me decepcionei. Alice Oseman escreveu uma história tão bonitinha e cativante, capaz de transformar o mais duro dos corações em uma gelatina de tão mole e que nos deixa tristes por acabar, por ser tão pouco e por querer bem mais. E enquanto isso só nos resta ficar aqui, esperando a continuação dessa história maravilhosa – e relendo de novo e de novo e de novo, até se apaixonar ainda mais por Charlie e Nick.";
    break;

    case 'HT3':
        document.getElementById("book-title").innerHTML = "Heartstopper: Um passo adiante";

        var bookImg =  "images/Home/home-saga-H3.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "31 março 2022";
        document.getElementById("book-genre").innerHTML = "LGBTQIA+";
        document.getElementById("book-author").innerHTML = "Alice Oseman";

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

        document.getElementById("book-text").innerHTML = "No terceiro volume da série Heartstopper, acompanhamos os primeiros desafios do namoro de Charlie e Nick enquanto os garotos viajam a Paris. A HQ que inspirou a série original da Netflix! Depois de entenderem o que sentiam um pelo outro, Charlie e Nick se tornaram oficialmente namorados, e cada dia é uma nova oportunidade para se conhecerem um pouco mais. Mas nem tudo é fácil, principalmente quando se trata de se assumir enquanto casal para o mundo. Mesmo com medo da reação das pessoas, os garotos sabem que em breve terão de contar a verdade, pelo menos para os amigos mais próximos ― ainda mais quando a turma toda viaja a Paris. Enquanto decidem como dar este próximo passo, os dois vão descobrir que, não importa qual seja o desafio, eles podem sempre contar um com o outro.";

        var bookLinkAmazon = "https://www.amazon.com.br/Heartstopper-passo-adiante-Inspiração-Netflix/dp/8555341922/ref=pd_bxgy_img_sccl_2/145-4395661-2408356?pd_rd_w=HD4ed&content-id=amzn1.sym.57f5b0c5-8f2e-45a4-8595-2eb0fcbe85cd&pf_rd_p=57f5b0c5-8f2e-45a4-8595-2eb0fcbe85cd&pf_rd_r=ZDJB7R3VYDCXTEPM5XC1&pd_rd_wg=w3HnY&pd_rd_r=edb4caf3-86c4-44e9-a0ce-89279b8e8ce3&pd_rd_i=8555341922&psc=1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.estantevirtual.com.br/oleitorlivraria/alice-oseman-heartstopper-um-passo-radiante-v-3-capa-dura--3504028502?show_suggestion=0";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://busca.saraiva.com.br/busca?q=heartstopper%203";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "320";
        document.getElementById("book-date").innerHTML = "14 setembro 2021";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Seguinte";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "De livro em livro";

        var bookLinkRese1 = "http://www.delivroemlivro.com.br/2020/09/resenha-heartstopper-vol-3-alice-oseman.html"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Após a leitura de Heartstopper, vol. 1 e Heartstopper, vol. 2 e amar essa HQ da escritora britânica Alice Oseman, não havia algo mais natural do que embarcar em Heartstopper (vol. 3) e OMG, essa HQ só consegue ficar melhor a cada volume! E quando falo isso quero dizer que continua SUPER FOFA e que traz ainda mais temas e reflexões arrebatadoras de uma forma delicada para não tornar a história de Charlie e Nick pesada. Sem dúvida alguma Heartstopper (vol. 3) foi um volume muito intenso e arrebatador, sem contar que amei algumas situações, como a viagem escolar para Paris e as expectativas e anseios em relação a trip, foi tudo muito, muito incrível e estou ainda mais encantada por essa HQ, inclusive já estou acompanhando o volume 4 no tapas e depois venho conversar com vocês a respeito (mas deve demorar um pouco, pois agora tenho que acompanhar na medida que Alice Oseman vai postando os quadros.";
        
        document.getElementById("rese-2-name").innerHTML = "Idris";

        var bookLinkRese2 = "https://idris.com.br/blog/2022/05/20/resenha-heartstopper-3-um-passo-adiante-alice-oseman/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Para nossa sorte, a Editora Seguinte já anunciou o quarto volume, então logo mais chega aí para nos deixar sempre nessa bolha de amor proporcionada por Heartstopper. Eu não posso deixar de comentar aqui uma coisa importante que eu notei, que é: o quanto a Alice aborda assuntos importantes. Nos primeiros dois volumes, eu já tinha percebido isso, mas no terceiro volume fica ainda mais evidente pra mim o quanto ela aborda com cuidado e de uma forma tão leve assuntos que deviam ser mais debatidos. Não vou dar muitos detalhes porque isso pode acabar estragando a experiência de leitura e também porque não vou encher de spoilers aqui.";
    break;

    case 'HT4':
        document.getElementById("book-title").innerHTML = "Heartstopper: De mãos dadas";

        var bookImg =  "images/Home/home-saga-H4.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "27 junho 2022";
        document.getElementById("book-genre").innerHTML = "LGBTQIA+";
        document.getElementById("book-author").innerHTML = "Alice Oseman";

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

        document.getElementById("book-text").innerHTML = "Charlie e Nick já não precisam esconder de ninguém no colégio que estão namorando, e agora, mais do que nunca, Charlie quer finalmente dizer “Eu te amo”. O que parece um gesto simples se torna bem complicado quando sua ansiedade o faz questionar se Nick se sente da mesma forma. Nick, por sua vez, está com a cabeça cheia. Afinal, ele ainda não teve a oportunidade de se assumir para o pai, e se preocupa constantemente com Charlie, que dá sinais claros de ter um transtorno alimentar. Conforme o relacionamento dos dois amadurece, os desafios que vêm pela frente ficam cada vez mais difíceis ― mas os garotos logo vão aprender que amar alguém nada mais é do que estar ao seu lado, juntos, de mãos dadas.";

        var bookLinkAmazon = "https://www.amazon.com.br/Heartstopper-dadas-Inspiração-série-Netflix/dp/8555342066/ref=pd_bxgy_img_sccl_2/145-4395661-2408356?pd_rd_w=Ohgqi&content-id=amzn1.sym.57f5b0c5-8f2e-45a4-8595-2eb0fcbe85cd&pf_rd_p=57f5b0c5-8f2e-45a4-8595-2eb0fcbe85cd&pf_rd_r=HRZC3WK83S0E1KWQ5AX4&pd_rd_wg=zOgGf&pd_rd_r=84fc0ed6-7e6f-47e7-b89d-ea062bdb74eb&pd_rd_i=8555342066&psc=1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.estantevirtual.com.br/livros/alice-oseman/heartstopper-de-maos-dadas-vol-04-/2398172838?show_suggestion=0";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://busca.saraiva.com.br/busca?q=Heartstopper%204";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "320";
        document.getElementById("book-date").innerHTML = "14 julho 2021";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Seguinte";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "De livro em livro";

        var bookLinkRese1 = "http://www.delivroemlivro.com.br/2021/12/heartstopper-vol-4-alice-oseman-resenha.html"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "HEARTSTOPPER vol. 4 foi um dos volumes mais sensíveis e ao mesmo tempo tristes da série, mas que me encantou por diversos motivos, porque mostra que uma GN não é apenas uma leitura fluída e 'fraquinha' como muita gente pode pensar, mas que pode e deve trazer temas complexos, contemporâneos e envolventes. Se tem uma série de GN que estou apaixonada é a de HEARTSTOPPER e super recomendo, porém, pesquisem os gatilhos, porque tem vários e agora que a série está sendo publicado no Brasil é mais um motivo para que todos os interessados tenham acesso a ela.";
        
        document.getElementById("rese-2-name").innerHTML = "Idris";

        var bookLinkRese2 = "https://idris.com.br/blog/2022/09/02/resenha-heartstopper-4-de-maos-dadas-alice-oseman/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Alice consegue, com maestria, não trazer esse assunto de forma leviana, ao mesmo tempo que o trata com cuidado como já mencionei acima, mas também deixar ele resolvido e mostrar que é sim, tudo um dia depois do outro, uma coisa de cada vez e que está tudo bem ser assim. Saber que não está sozinho é muito importante. E você não está sozinho. Se sentir que precisa de alguém para desabafar, que precisa conversar com alguém e não tem coragem de falar com alguém próximo, sempre tem o contato do CVV. Basta ligar 188 ou acessar o site e entrar em contato no chat, que terá alguém lá disposto a te ouvir e te ajudar da melhor forma que puder.";
    break;

    case 'CO1':
        document.getElementById("book-title").innerHTML = "Sempre em frente: Carry On";

        var bookImg =  "images/Home/home-autor-CO1.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "9 novembro 2020";
        document.getElementById("book-genre").innerHTML = "LGBTQIA+";
        document.getElementById("book-author").innerHTML = "Rainbow Rowell";

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

        document.getElementById("book-text").innerHTML = "Simon Snow é o Escolhido. Segundo as lendas, ele é o feiticeiro que garantirá a paz no Mundo dos Magos. Isso seria extraordinário se Simon não fosse desastrado, esquecido e um feiticeiro pouco habilidoso, incapaz de controlar seus poderes. Ele está no penúltimo ano da Escola de Magia de Watford, e, ao lado de sua melhor amiga Penelope e sua namorada Agatha, já se meteu nas mais variadas aventuras e confusões ― algumas causadas por Baz, seu arqui-inimigo e colega de quarto, outras pelo Oco, um ser maligno que há tempos tenta acabar com Simon. Quando chega o novo ano letivo e Baz não aparece na escola, Simon suspeita que o garoto esteja tramando alguma coisa contra ele. As coisas começam a tomar um rumo ainda mais estranho quando o espírito da mãe de Baz, antiga diretora de Watford, aparece para Simon afirmando que quem a matou continua à solta. Quando Baz finalmente chega a Watford sob circunstâncias misteriosas, Simon não vê alternativa a não ser ajudá-lo a vingar a morte da mãe ― o que pode ser o primeiro passo para que verdades avassaladoras sobre o Mundo dos Magos sejam reveladas. E para que tudo mude entre os dois garotos.";

        var bookLinkAmazon = "https://www.amazon.com.br/Sempre-em-frente-Carry-1/dp/8555341167/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=1G3EALLTPHSK4&keywords=Carry+On&qid=1669610894&qu=eyJxc2MiOiIyLjg3IiwicXNhIjoiMi4yMCIsInFzcCI6IjEuOTUifQ%3D%3D&s=books&sprefix=%2Cstripbooks%2C182&sr=1-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.estantevirtual.com.br/livros/rainbow-rowell/sempre-em-frente/54501375?show_suggestion=0";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://busca.saraiva.com.br/busca?q=Carry%20On";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "504";
        document.getElementById("book-date").innerHTML = "9 novembro 2020";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Seguinte";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Queria estar lendo";

        var bookLinkRese1 = "https://www.queriaestarlendo.com.br/2016/07/resenha-carry-on.html"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Sempre em Frente é o quinto livro da escritora Rainbow Rowell, e o primeiro a se passar em um universo fantástico. Quem já leu Fangirl, outro livro da autora, sabe que Carry On (Sempre em Frente) é o nome da fanfic que Cath escrevia sobre uma série de livros chamada Simon Snow - o queria o equivalente a Harry Potter para nós. Sempre em Frente me fez sorrir, chorar e ficar absolutamente sem saber o que fazer com tantos sentimentos. Queria poder apaga-lo da minha mente só para poder ler de novo, como se fosse a primeira vez. Este é o nível de quão bom o livro é!";
        
        document.getElementById("rese-2-name").innerHTML = "Rapoisisses";

        var bookLinkRese2 = "https://raposisses.wordpress.com/2015/10/18/carry-on-de-rainbow-rowell/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "A minha opinião é a de que Carry On é bem-sucedido em ser apenas um livro, mas têm seus pontos fracos: entre eles, seu início, o que é preocupante. Carry On é dividido em quatro Livros e um Epílogo, e o Livro Um é onde as semelhanças com Harry Potter são mais óbvias. Como é o ínicio do livro, e começamos a acompanhar Simon quando ele já está no último ano de Watford, há bastante explicações sobre seu passado, a história do mundo mágico, e os personagens do livro. Enquanto Watford e o Mundo Mágico de Carry On não são cópias de Hogwarts e o Mundo Mágico de Harry Potter – a escola não é dividida em casas, o mundo mágico não é realmente um “mundo” com governo centralizado, até a mágica funciona de um jeito diferente (mas genial) -, mesmo assim a influência de Harry Potter é facilmente notada.";
    break;

    case 'CO2':
        document.getElementById("book-title").innerHTML = "O filho rebelde: Wayward Son";

        var bookImg =  "images/Home/home-autor-CO2.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "9 novembro 2020";
        document.getElementById("book-genre").innerHTML = "LGBTQIA+";
        document.getElementById("book-author").innerHTML = "Rainbow Rowell";

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

        document.getElementById("book-text").innerHTML = "Simon Snow venceu. Ele pôs fim às forças do mal que ameaçavam destruir o Mundo dos Magos. Tudo deu certo. Ou quase. Porque, agora, Simon perdeu toda a sua magia. Ele não passa de um normal… Bom, tirando o fato de ter asas e um rabo de dragão. Vendo o melhor amigo mergulhar em um desânimo cada vez maior, Penelope decide levar Simon e Baz em uma viagem de carro para visitarem Agatha, que agora mora na Califórnia. O que era para ser um passeio divertido se mostra muito mais desafiador do que imaginavam. Afinal, os Estados Unidos abrigam todo tipo de criatura mágica mal-intencionada e disposta a causar problemas. Em meio a uma confusão enorme com uma legião de vampiros e outros seres malignos, talvez Simon finalmente seja capaz de reunir a força necessária para seguir em frente ― e deixar algumas pessoas para trás.";

        var bookLinkAmazon = "https://www.amazon.com.br/filho-rebelde-Wayward-Son/dp/8555341175/ref=pd_bxgy_img_sccl_1/145-4395661-2408356?pd_rd_w=tSb52&content-id=amzn1.sym.57f5b0c5-8f2e-45a4-8595-2eb0fcbe85cd&pf_rd_p=57f5b0c5-8f2e-45a4-8595-2eb0fcbe85cd&pf_rd_r=DDVTBVX0DRGZK01R7ZT7&pd_rd_wg=yKlMc&pd_rd_r=d8d9c3c0-1618-4286-86a2-17ee3b155a41&pd_rd_i=8555341175&psc=1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.estantevirtual.com.br/aquarios-books/rainbow-rowell-filho-rebelde-wayward-son-2-3473732181?show_suggestion=0";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://busca.saraiva.com.br/busca?q=O%20filho%20rebelde%3A%20Wayward%20Son";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "504";
        document.getElementById("book-date").innerHTML = "9 novembro 2020";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Seguinte";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Queria estar lendo";

        var bookLinkRese1 = "https://www.queriaestarlendo.com.br/2021/02/resenha-o-filho-rebelde-rainbow-rowell.html"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "O Filho Rebelde explora bastante o mundo mágico além das fronteiras da escola e da Inglaterra, e gostei de como aqui na América é tudo uma bagunça, mas uma bagunça organizada. Tem regras, mas também tem caos. A questão com os vampiros, principalmente, até levantou umas discussões bacanas. Eu gostei de como os ingleses receberam uns tapões verbais sobre como a Inglaterra não é o centro do universo e seu mundo mágico não passa de uma bolha; que eles preferem ignorar o resto do mundo do que lidar com esse. A diagramação tá muito boa. Eu ainda não gosto muito das adaptações dos feitiços, ainda que nesse volume tenha usado mais referências a cantigas e ditados conhecidos da nossa língua. A magia só funciona assim, no fim das contas.";
        
        document.getElementById("rese-2-name").innerHTML = "Moonlight books";

        var bookLinkRese2 = "http://www.moonlightbooks.net/2021/01/resenha-o-filho-rebelde-wayward-son.html"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Tinha vontade de reler esse livro desde o momento em que o terminei de ler pela primeira vez, há um ano. Senti que não tinha entendido muita coisa e que deixei passar alguns acontecimentos importantes com os personagens. E eu estava certa. Como uma releitura, sabendo para onde a história está indo e o seu final, foi mais fácil me focar em outras coisas. Principalmente nas que aconteciam nas entrelinhas, como o relacionamento do casal principal e até mesmo a própria luta interna dos personagens, separadamente. Todos estão procurando se encontrar e caminhando em uma longa estrada de aceitação e descobrimento. Os personagens são muito mais desenvolvidos nesse livro, muito mais aprofundados. Ainda é um livro que eu acho um pouco arrastado até boa parte da história, e as cenas de luta, principalmente no final, são um pouco confusas, porém nada de ruim tenho a falar sobre os vários pontos de vista em primeira pessoa dos personagens que é a minha coisa preferida desses livros. E nesse é muito mais esclarecedor. Eu aprendi a ter mais paciência com livros de transição, da qual é o segundo de uma trilogia, e me apegar mais nas pistas que são deixadas ao longo da leitura... mas, é claro, isso não me impede de sofrer. E muito.";
    break;

    case 'CO3':
        document.getElementById("book-title").innerHTML = "Venha o que vier: Any Way the Wind Blows";

        var bookImg =  "images/Home/home-autor-CO3.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "19 julho 2021";
        document.getElementById("book-genre").innerHTML = "LGBTQIA+";
        document.getElementById("book-author").innerHTML = "Rainbow Rowell";

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

        document.getElementById("book-text").innerHTML = "Em Venha o que vier, Simon, Baz, Penelope e Agatha procuram um jeito de seguir em frente. Para Simon, isso significa decidir se ainda quer fazer parte do Mundo dos Magos ― e, se não quiser, o que isso representa para seu relacionamento com Baz? Enquanto isso, Baz está dividido entre duas crises familiares e sem tempo algum para compartilhar com alguém seus novos conhecimentos sobre vampiros. Penelope adoraria ajudar, mas trouxe um americano normal para Londres e não tem ideia do que fazer com ele. E Agatha? Bom, Agatha Wellbelove já está farta de aventuras. Venha o que vier leva os quatro amigos de volta à Inglaterra e à Watford e às suas famílias. Cada um a seu modo, todos estão prestes a viver a aventura mais longa e emocionalmente dolorosa de todos os tempos. A conclusão dessa saga, que começou como uma história sobre o Escolhido, chega revelando segredos, dando as respostas que faltavam e resolvendo todos os mistérios. Venha o que vier é um livro sobre colocar um ponto-final nos lugares certos, sobre catarse e conclusão, sobre escolher seguir em frente apesar dos traumas e dos triunfos que tentam nos definir.";

        var bookLinkAmazon = "https://www.amazon.com.br/Venha-que-vier-Wind-Blows/dp/8555341604/ref=pd_bxgy_img_sccl_1/145-4395661-2408356?pd_rd_w=QgsNX&content-id=amzn1.sym.57f5b0c5-8f2e-45a4-8595-2eb0fcbe85cd&pf_rd_p=57f5b0c5-8f2e-45a4-8595-2eb0fcbe85cd&pf_rd_r=M5BHHKW7P2G5VV8JB8JA&pd_rd_wg=ItPw6&pd_rd_r=c561c3b1-3387-458e-9ee3-e9ff7eb8b9c9&pd_rd_i=8555341604&psc=1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://busca.saraiva.com.br/busca?q=venha%20o%20que%20vier";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/rainbow-rowell/venha-o-que-vier/2239079813?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "504";
        document.getElementById("book-date").innerHTML = "19 julho 2021";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Seguinte";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Queria estar lendo";

        var bookLinkRese1 = "https://www.queriaestarlendo.com.br/2021/07/resenha-venha-o-que-vier-rainbow-rowell.html"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "3,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Venha o que vier poderia ter sido um desfecho interessante, mas acabou se agarrando a plots novos e vazios de carisma e deixando para trás coisas que teriam sido relevantes e ótimas para a história. As reviravoltas, por exemplo, por causa de todo esse núcleo novo, não causaram o devido efeito na narrativa. E nem nos personagens. O final foi tão corrido para a revelação bombástica que entrega que eu fiquei procurando mais páginas porque não era possível ela terminar daquele jeito.";
        
        document.getElementById("rese-2-name").innerHTML = "Ler para divertir";

        var bookLinkRese2 = "http://www.lerparadivertir.com/2022/03/venha-o-que-vier-any-way-wind-blows-vol.html"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "3,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Entremeado a uma narrativa cheia ação, mistério e magia, encontramos os romances homossexual e birracial que são tratados de uma maneira leve e lindíssima, sem discriminação. Só não favoritei este livro porque achei o final, onde a principal revelação, já realizada no primeiro livro para os leitores, mas ainda um segredo para o Simon, foi muito rápida. Sabe quando uma trilogia acaba, mas algum tempo depois o autor lança mais um livro? Pois bem, gostaria que Simon Snow fosse uma série, onde poderíamos acompanhar um pouco mais dos personagens e suas aventuras. Quem sabe né, sonhar é de graça.";
    break;

    case 'EP':
        document.getElementById("book-title").innerHTML = "Eleanor & Park";

        var bookImg =  "images/Home/home-autor-EP.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "29 junho 2020";
        document.getElementById("book-genre").innerHTML = "Romance";
        document.getElementById("book-author").innerHTML = "Rainbow Rowell";

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

        document.getElementById("book-text").innerHTML = "Eleanor é nova na cidade. Com roupas inusitadas, cachos ruivos indomáveis e uma família problemática, ela sente que nunca vai conseguir se encaixar. Park senta sozinho no ônibus da escola. Sempre de camiseta preta, fones de ouvido e a cabeça enfiada num livro, acha que consegue passar despercebido. Mas não para Eleanor. Aos poucos, entre fitas cassetes gravadas, pilhas de histórias em quadrinhos e conversas até tarde da noite, Eleanor e Park se apaixonam. Narrada durante o ano letivo de 1986, essa é a história de dois jovens de dezesseis anos que, mesmo sabendo que o primeiro amor quase nunca é para sempre, têm coragem e esperança suficientes para tentar.";

        var bookLinkAmazon = "https://www.amazon.com.br/Eleanor-Park-Rainbow-Rowell/dp/8555341000/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=FNZSLW9S534V&keywords=Eleanor+%26+Park&qid=1669611847&qu=eyJxc2MiOiIxLjcyIiwicXNhIjoiMC42MCIsInFzcCI6IjAuODIifQ%3D%3D&s=books&sprefix=%2Cstripbooks%2C205&sr=1-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://busca.saraiva.com.br/busca?q=Eleanor+%26+Park";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/rainbow-rowell/eleanor-park/2005066393?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "360 ";
        document.getElementById("book-date").innerHTML = "29 junho 2020";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Seguinte";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Queria estar lendo";

        var bookLinkRese1 = "https://www.queriaestarlendo.com.br/2020/08/resenha-eleanor-park_10.html"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "2,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = " Eleanor & Park tem uma construção boa e por isso consegue mascarar o abismo discutível de esteriótipos e fetichização a respeito do Park. Eu acho uma pena, porque a história da Eleanor é muito bem feita e traz mensagens importantes a respeito de abuso familiar, abandono e gordofobia. Três temáticas pesadas, mas que são sensíveis e equilibradas na narrativa. Mas não acho que seja um livro a se louvar e nem indicar. Tem muitos outros títulos sobre gordofobia a serem lidos, histórias que são impecáveis dentro de suas narrativas. Queria muito que a autora tivesse ouvido a comunidade que foi atingida por essas problemáticas e tivesse se retratado e melhorado, mas nunca fez isso - é só olhar comentários nos posts dela, qualquer crítica é completamente ignorada.";
        
        document.getElementById("rese-2-name").innerHTML = "Guia do estudante";

        var bookLinkRese2 = "https://guiadoestudante.abril.com.br/coluna/estante/resenha-do-leitor-eleanor-amp-park/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Difícil definir o que eu senti lendo esse livro. Foi um misto de emoções tão grande… Sabe quando você quer entrar na história e interferir, dar um empurrãozinho ou mudar alguma coisa? Acho que me sentti basicamente assim! O jeito com que a autora escreveu o livro é simplesmente perfeito. Ela soube apresentar os sentimentos e os anseios de cada personagem tão bem, que muitas vezes me sentia parte da história, sentia vontade de chorar e rir junto com eles. Em terceira pessoa, ele é composto por capítulos curtos, com o foco da narrativa alternada entres os dois, ou seja, facilita muito a leitura.";
    break;

    case 'FG':
        document.getElementById("book-title").innerHTML = "Fan girl ";

        var bookImg =  "images/Home/home-autor-FG.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "30 novembro 2020";
        document.getElementById("book-genre").innerHTML = "Romance";
        document.getElementById("book-author").innerHTML = "Rainbow Rowell";

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

        document.getElementById("book-text").innerHTML = "Cath é fã de Simon Snow, uma série de livros que faz sucesso no mundo todo sobre um garoto feiticeiro. Mergulhar nessas histórias foi a única maneira que ela encontrou de lidar, junto com sua irmã gêmea, Wren, com a partida da mãe quando eram crianças. Desde então, a vida da garota se resume a ler, participar de fóruns sobre Simon Snow na internet, escrever fanfics, fazer cosplay dos personagens… Sempre ao lado da irmã. Mas agora Wren parece pronta para se distanciar do fandom de Simon Snow ― e da própria Cath. Afinal, ela deixou bem claro que é hora de cada uma trilhar seu próprio caminho quando avisou que não queria dividir o mesmo quarto na faculdade. Pela primeira vez, Cath se vê sozinha ― e totalmente fora de sua zona de conforto ―, e com uma colega de quarto mal-humorada que tem um namorado (bem fofo) que não sai do dormitório das duas. Para completar, ela também precisa se preocupar com o pai solitário e com sua professora de escrita literária, que abomina fanfics. Será que ela vai conseguir sobreviver a tantas mudanças e começar a viver a própria vida? E será que seguir em frente significa deixar Simon Snow para trás?";

        var bookLinkAmazon = "https://www.amazon.com.br/Fangirl-Rainbow-Rowell/dp/8555341159/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=21KP54RUOEAIS&keywords=fangirl&qid=1669612169&qu=eyJxc2MiOiIyLjA1IiwicXNhIjoiMS40MSIsInFzcCI6IjEuMjkifQ%3D%3D&s=books&sprefix=eleanor+%26+park%2Cstripbooks%2C698&sr=1-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://busca.saraiva.com.br/busca?q=fan%20girl";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/rainbow-rowell/fangirl/1423439055?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "464";
        document.getElementById("book-date").innerHTML = "30 novembro 2020";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Seguinte";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Queria estar lendo";

        var bookLinkRese1 = "https://www.queriaestarlendo.com.br/2014/07/resenha-fangirl.html?showComment=1614797477338"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "A escrita de Rainbow flui muito bem, do tipo que fisga e te prende desde o começo. É uma narrativa sensível, tocante e que você mal vê passar. A edição nova da Seguinte está linda como sempre. Eu amei que mantiveram a capa e, de quebra, ainda vem um marcador com ilustrações de todo mundo na orelha, caso você queira recortar. A tradução e diagramação, tá tudo muito agradável de ler. É meu YA mais queridinho do mundo e o que eu mais indico para todo mundo ler. Uma história sobre família, sobre independência e sobre encontrar coragem para tentar coisas novas.";
        
        document.getElementById("rese-2-name").innerHTML = "Idris";

        var bookLinkRese2 = "https://idris.com.br/blog/2020/12/22/resenha-fangirl-rainbow-rowell/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Agora que já li os outros livros da Rainbow Rowell publicados aqui no Brasil, posso garantir sem sombra de dúvidas que “Fangirl” ainda é meu favorito. É uma história que fala sobre crescer, acima de tudo, que fala sobre a família, sobre amor e amizade e também fala sobre como a saúde mental é importante. Se você está querendo ler um romance levezinho e bonitinho com uma personagem muito identificável (certeza que muitos leitores se identificam com Cath também), dê uma chance para esse livro e venha amar ele junto comigo.";
    break;

    case '9N':
        document.getElementById("book-title").innerHTML = "Novembro, 9";

        var bookImg =  "images/Home/home-autor-9.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "6 setembro 2016";
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

        document.getElementById("book-text").innerHTML = "Apesar de ter apenas 18 anos, Fallon já passou por muita coisa. Sobreviveu a um incêndio que a deixou desfigurada, e viu a carreira de atriz desmoronar por conta das cicatrizes. Agora, no aniversário do fatídico acidente, ela finalmente se sente pronta para sair de Los Angeles e recomeçar a vida em Nova York. No almoço de despedida com o pai, bem na véspera da mudança, Fallon conhece Ben, um aspirante a escritor. A atração entre os dois faz com que passem o dia inteiro juntos, mas a partida iminente de Fallon os impede de viver esse amor. Decididos a vencer o destino, fazem uma promessa: se encontrar todo ano nessa mesma data. Ao longo do tempo, muitas coisas mudam na vida dos dois, mas o ritual dos encontros e sua história de amor viram enredo do livro de Ben. E, quando parece que o destino finalmente conspira para que fiquem juntos, Fallon descobre algo que a faz questionar as motivações do homem por quem está apaixonada. Será que ela não passa de mais uma personagem na trama de Ben?";

        var bookLinkAmazon = "https://www.amazon.com.br/Novembro-9-Colleen-Hoover/dp/8501076252/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=1N4E4VUJZL6IF&keywords=Novembro%2C+9&qid=1669612505&qu=eyJxc2MiOiIwLjY0IiwicXNhIjoiMC41OSIsInFzcCI6IjAuNTEifQ%3D%3D&s=books&sprefix=fangirl%2Cstripbooks%2C199&sr=1-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://busca.saraiva.com.br/busca?q=Novembro%2C%209";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/colleen-hoover/novembro-9/540331775?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "352";
        document.getElementById("book-date").innerHTML = "6 setembro 2016";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Galera";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Queria estar lendo";

        var bookLinkRese1 = "https://www.queriaestarlendo.com.br/2018/06/resenha-novembro-9.html"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "0,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "'Eu preciso lembrar que há mais de uma maneira de as pessoas demonstrarem amor. E mesmo que seu caminho e o meu caminho são completamente opostos, ainda é amor.' NÃO, FALLON, NÃO É. ÀS VEZES A PESSOA É SÓ UMA ABUSADORA. Às vezes a pessoa só se aproveita de você. Às vezes ela só está destruindo seu psicológico e emocional e fazendo você acreditar que o amor perdoa tudo, o amor salva todos.  PARA DE USAR ESSA DROGA DE DISCURSO DE QUE O AMOR CURA TUDO. O AMOR NÃO É SOLUÇÃO MÁGICA PARA NADA. É por isso que tem tanto relacionamento abusivo sendo minimizado, porque existem discursos como esse, que dizem que é ok ficar com uma pessoa violenta e opressora e controladora e ciumenta, afinal, 'ela ama você'. 'O amor vai salvar ela em algum momento, certo?' NÃO. NÃO ESTÁ CERTO. PARA DE ROMANTIZAR ESSA P*&%#$. Eu realmente não tenho palavras para expressar meu descontentamento com essa atrocidade. Se você tirar o romance, esse livro é basicamente um thriller/terror psicológico. E o Ben é um maldito stalker bizarro que precisava ir pra cadeia.";
        
        document.getElementById("rese-2-name").innerHTML = "Minha vida literária";

        var bookLinkRese2 = "https://www.minhavidaliteraria.com.br/2016/11/09/resenha-novembro-9-colleen-hoover/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Novembro, 9 se tornou um dos meus livros favoritos de Colleen Hoover pela maneira intensa com que me envolveu. Adorei as personagens e o impacto que exercem uma na outra, e adorei a força dos sentimentos despertados entre elas. Mesmo que tudo aconteça, cronologicamente, em um curto espaço de tempo, meu envolvimento foi tamanho que tudo me soou verossímil. Aos que procuram romances arrebatadores, Hoover não decepciona, e Novembro, 9 é mais uma prova disso.";
    break;

    case 'AOVT':
        document.getElementById("book-title").innerHTML = "Até o verão terminar";

        var bookImg =  "images/Home/home-autor-verao.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "30 agosto 2021";
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

        document.getElementById("book-text").innerHTML = "Filha de uma mãe problemática e um pai ausente, Beyah precisou aprender a se virar sozinha desde pequena. Sua vida foi trilhada com muitas decepeções. Mas ela está prestes a mudar a sua sorte graças a si mesma, e a mais ninguém, por conta da bolsa de estudos que ganhou para estudar em uma boa universidade. Apenas dois curtos meses separam o tão sonhado futuro do passado que tanto deseja deixar para trás. Mas uma reviravolta faz Beyah perder até mesmo a casa em que mora. Sem opção, ela recorre ao último recurso que tem e precisará passar o resto do verão na casa de praia do pai que mal conhece, da nova esposa e da filha dela que nem ao menos ouvira falar. O plano de Beyah é se manter quase invisível até poder ir para a faculdade. Mas o vizinho da casa ao lado torna tudo muito mais complicado. Afinal, é difícil ignorar o rico, bonito e misterioso Samson. Os dois parecem não ter nada em comum. Ela viveu uma vida sem dinheiro ou amor enquanto ele tem uma família rica e privilegiada. Mas no olhar dele vive uma tristeza que apenas quem também a carrega dentro de si consegue reconhecer. E isso os torna irresístiveis um para o outro. Sem terem como fugir da atração que sentem, Beyah e Samson resolvem se dar uma chance, mas apenas até o verão terminar.";

        var bookLinkAmazon = "https://www.amazon.com.br/Até-verão-terminar-Colleen-Hoover/dp/6559810372/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=2ZQFLH79L6WZ1&keywords=Até+o+verão+terminar&qid=1669612871&qu=eyJxc2MiOiIyLjIzIiwicXNhIjoiMS4xNyIsInFzcCI6IjAuNjAifQ%3D%3D&s=books&sprefix=novembro+9%2Cstripbooks%2C659&sr=1-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://busca.saraiva.com.br/busca?q=Até%20o%20verão%20terminar";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/colleen-hoover/ate-o-verao-terminar/1421234511?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "352";
        document.getElementById("book-date").innerHTML = "30 agosto 2021";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Galera";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Resenha dos sonhos";

        var bookLinkRese1 = "https://resenhandosonhos.com/ate-o-verao-terminar-colleen-hoover/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "O ponto alto do livro para mim foi a relação entre a Beyah e a Sara. Vi na Sarah tudo que a Beyah precisava, e vice-versa também: uma amizade honesta, com bastante sororidade, madureza e muitoa cumplicidade. Em várias vezes fiquei esperando que a Beyah entendesse como era incrível a segunda chance na vida que ela estava recebendo ao encontrar uma nova família para chamar de lar. Gostei muito do final, de como com alguma ajuda a Beyah se colocou em primeira plano na própria vida pela primeira vez e não ficou estagnada esperando por outros. E de modo geral, esse livro não é um dos melhores da autora, mas é uma boa pedida para quem curte personagens quebrados e uma boa dose de drama familiar.";
        
        document.getElementById("rese-2-name").innerHTML = "Dicas de Malu";

        var bookLinkRese2 = "http://www.dicasdemalu.com.br/2021/10/resenha-ate-o-verao-terminar.html"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Mas não pensem que não tem drama nesse livro. Afinal, estamos falando da Colleen Hoover e ela tem o dom de pisar nos nossos sentimentos. Então, quando eu menos esperava, ela atacou novamente e deixou meu coração pequenininho, sofrendo muito por esses personagens. Confesso que não esperava ficar tão apegada a eles, mas quando dei por mim, já estava com os olhos cheios de lágrimas e querendo proteger Beyah e Samson do mundo. Eu posso ter começado Até o verão terminar de forma despretensiosa, mas ele se tornou um dos meus favoritos da autora. Apesar de ter sentido falta de um final mais detalhado, esse livro me trouxe uma montanha-russa de emoções que eu não esperava. Ele fala sobre perda, abandono e abuso, mas também sobre recomeços, família, amizade, amor e, principalmente, esperança. É um livro que mostra a capacidade da Colleen de partir o coração do leitor, mas também de juntar os pedaços e deixá-lo cheio de amor.";
    break;

    case 'HP1':
        document.getElementById("book-title").innerHTML = "Harry Potter: A pedra filosofal";

        var bookImg =  "images/Home/home-saga-HP1.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "19 agosto 2017";
        document.getElementById("book-genre").innerHTML = "Ficção";
        document.getElementById("book-author").innerHTML = "J.K. Rowling";

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

        document.getElementById("book-text").innerHTML = "Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo. No dia de seu aniversário de 11 anos, entretanto, ele parece deslizar por um buraco sem fundo, como o de Alice no país das maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira história e seu destino: ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do mal, o homem que assassinou seus pais. O menino de olhos verde, magricela e desengonçado, tão habituado à rejeição, descobre, também, que é um herói no universo dos magos. Potter fica sabendo que é a única pessoa a ter sobrevivido a um ataque do tal bruxo do mal e essa é a causa da marca em forma de raio que ele carrega na testa. Ele não é um garoto qualquer, ele sequer é um feiticeiro qualquer ele é Harry Potter, símbolo de poder, resistência e um líder natural entre os sobrenaturais. A fábula, recheada de fantasmas, paredes que falam, caldeirões, sapos, unicórnios, dragões e gigantes, não é, entretanto, apenas um passatempo.";

        var bookLinkAmazon = "https://www.amazon.com.br/Harry-Potter-Pedra-Filosofal-Rowling/dp/8532530788/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=RI4XHG1L93Q0&keywords=Harry+Potter%3A+A+pedra+filosofal&qid=1669613182&qu=eyJxc2MiOiIxLjU1IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&s=books&sprefix=até+o+verão+terminar%2Cstripbooks%2C193&sr=1-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://busca.saraiva.com.br/busca?q=Harry%20Potter%3A%20A%20pedra%20filosofal";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/busca?q=Harry%20Potter%3A%20A%20pedra%20filosofal";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "208 ";
        document.getElementById("book-date").innerHTML = "19 agosto 2017";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Rocco";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Livro bingo";

        var bookLinkRese1 = "https://www.livrobingo.com.br/resenha-harry-potter-e-a-pedra-filosofal"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Independente qual for a sua idade, este livro vale à pena. E muito. Harry Potter é um marco na cultura pop e os livros são apenas uma parte de toda essa transformação que houve nos últimos 20 anos no ramo do entretenimento. Se você nunca leu, leia. E se você leu na época do lançamento, assim como eu, leia novamente. Certamente a sua experiência será gratificante. O último capítulo é dedicado a essa aventura em busca da Pedra filosofal. É emocionante e com uma reviravolta incrível. Não era Snape o interessado nela. Era Quirell, um professor de pouca importância, que nunca tivera sido cogitado como possível interessado nela. Voldemort, ainda muito fraco, apossou do corpo do professor e tenta roubar a Pedra, que estranhamente caiu no bolso de Harry. O vilão não consegue e, novamente, perde uma batalha para Harry Potter.";
        
        document.getElementById("rese-2-name").innerHTML = "Leitor compulsivo";

        var bookLinkRese2 = "http://leitorcompulsivo.com.br/2019/01/08/resenha-harry-potter-e-a-pedra-filosofal-vol-01-j-k-rowling/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = " ‘Harry Potter e a Pedra Filosofal’ foi um lar para mim. Eu gostei de muitas coisas, para não dizer todas, desse livro. Primeiramente, a simplicidade. Obviamente estamos falando de um livro voltado, a princípio, para crianças, portanto a linguagem precisa se adequar ao seu público-alvo, sendo bem direta e simples, sem muitas descrições e devaneios. Mas, sabe aquela sensação de que existe algo a mais? Gostei também da ambientação e de cada detalhe deste mundo criado pela J.K. Rowling – e quem não gostaria de ir até Hogwarts jogar um pouco de quadribol ou ir à procura de unicórnios ao lado de Hagrid à noite na Floresta Proibida, mesmo que dê arrepios na espinha, ou até mesmo jogar uma partida de xadrez de bruxo? Volto a repetir, este livro é mágico. A imersão é tão poderosa que faz você desejar que tudo seja verdadeiro, além dos limites da ficção. Faz você voltar a ser criança, a sonhar com um lugar em que voar em vassouras é legal e que existe uma aula de poções. Somado a tudo isso, a amizade que eu vi crescer, aos poucos, entre os personagens aqueceu meu coração e, talvez, seja o ápice de tudo. Porque é isso que a autora quis passar, ao meu ver. Que não importa onde você esteja ou o quanto de dinheiro você tenha ou qual nome/legado você carrega. Se não tiver a quem confiar, ou a quem dividir, então não terá nada.";
    break;

    case 'HP2':
        document.getElementById("book-title").innerHTML = "Harry Potter: A câmara secreta";

        var bookImg =  "images/Home/home-saga-HP2.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "19 agosto 2017";
        document.getElementById("book-genre").innerHTML = "Ficção";
        document.getElementById("book-author").innerHTML = "J.K. Rowling";

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

        document.getElementById("book-text").innerHTML = "Depois de férias aborrecidas na casa dos tios trouxas, está na hora de Harry Potter voltar a estudar. Coisas acontecem, no entanto, para dificultar o regresso de Harry. Persistente e astuto, o herói não se deixa intimidar pelos obstáculos e, com a ajuda dos fiéis amigos Weasley, começa o ano letivo na Escola de Magia e Bruxaria de Hogwarts. As novidades não são poucas. Novos colegas, novos professores, muitas e boas descobertas e um grande e perigosos desafio. Alguém ou alguma coisa ameaça a segurança e a tranquilidade dos membros de Hogwarts.";

        var bookLinkAmazon = "https://www.amazon.com.br/Harry-Potter-Câmara-Secreta-Rowling/dp/8532530796/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=UWXNZTLR0X8C&keywords=Harry+Potter%3A+A+câmara+secreta&qid=1669613531&qu=eyJxc2MiOiIxLjM4IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&s=books&sprefix=harry+potter+a+pedra+filosofal%2Cstripbooks%2C329&sr=1-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://busca.saraiva.com.br/busca?q=Harry%20Potter%3A%20A%20câmara%20secreta";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/j-k-rowling/harry-potter-e-a-camara-secreta/2467774582?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "208 ";
        document.getElementById("book-date").innerHTML = "19 agosto 2017";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Rocco";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Resenhando";

        var bookLinkRese1 = "https://resenhandopormarina.com/harry-potter-e-a-camara-secreta/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Sobre a diagramação do livro, mantenho o que disse na resenha do primeiro livro… Como disse lá em cima, eu estou lendo os livros que são do Box com a lombada de Hogwarts. Ele é bem bonito, a capa é soft touch, com uma ilustração linda da capa, o título é mais brilhante e em relevo. Por dentro, que eu já achei um problema. O livro não tem orelha, o que acaba fazendo com que ele fique um pouco mole, com mais facilidade para dar aqueles amassadinhos, sabe? Minha impressão é que é um livro frágil. As folhas são amareladas, mas um pouco finas demais, e dependendo da luz, a gente enxerga do outro lado. Mas, cada abertura de capítulo tem uma ilustração condizente e fica muito fofo! Não comentei ainda, mas a narrativa do livro é em terceira pessoa.";
        
        document.getElementById("rese-2-name").innerHTML = "Plano crítico";

        var bookLinkRese2 = "https://www.planocritico.com/critica-harry-potter-e-a-camara-secreta-de-j-k-rowling/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Felizmente, apesar de seus deslizes, Harry Potter e a Câmara Secreta nos deixa com uma percepção bastante positiva sobre esse mundo de magia e bruxaria. Temos aqui um romance que se aprofunda não somente no universo criado por J.K. Rowling, como nos seus personagens (ainda que haja o problema das falas). Goste ou não, é inegável que a autora sabia o que fazia desde cedo e seu temor inicial acerca das expectativas criadas pelo primeiro livro certamente foram infundadas, visto que ela conseguiu nos trazer uma história tão boa quanto a primeira.";
    break;

    case 'HP3':
        document.getElementById("book-title").innerHTML = "Harry Potter: O prisoneiro Azkban";

        var bookImg =  "images/Home/home-saga-HP3.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "19 agosto 2017";
        document.getElementById("book-genre").innerHTML = "Ficção";
        document.getElementById("book-author").innerHTML = "J.K. Rowling";

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

        document.getElementById("book-text").innerHTML = "As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no expresso a vapor que o levará de volta à escola de bruxaria. Mais uma vez suas férias na rua dos Alfeneiros foi triste e solitária. Com muita ação, humor e magia, 'Harry Potter e o prisioneiro de Azkaban' traz de volta o gigante atrapalhado Rúbeo Hagrid, o sábio diretor Alvo Dumbledore, a exigente professora de transformação Minerva MacGonagall e o novo mestre Lupin, que guarda grandes surpresas para Harry.";

        var bookLinkAmazon = "https://www.amazon.com.br/Harry-Potter-Prisioneiro-Azkaban-Rowling/dp/853253080X/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=22JV9913EB2OB&keywords=o+prisioneiro+azkaban&qid=1669614119&qu=eyJxc2MiOiIxLjA3IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&s=books&sprefix=harry+potter+e+a+câmara+secreta%2Cstripbooks%2C215&sr=1-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://busca.saraiva.com.br/busca?q=O%20prisoneiro%20Azkban";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/j-k-rowling/harry-potter-e-o-prisioneiro-de-azkaban/2788130786?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "208 ";
        document.getElementById("book-date").innerHTML = "19 agosto 2017";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Rocco";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Resenhando";

        var bookLinkRese1 = "https://resenhandopormarina.com/harry-potter-e-o-prisioneiro-de-azkaban/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Confesso que esse terceiro livro é um dos meus preferidos. A gente descobre bastante coisa sobre o passado dos pais de Harry e seus amigos. A história do Mundo Bruxo também vai se tornando mais sombria, séria e mais adulta. Podemos sentir que a volta de Voldemort está perto. Lembrando que a narrativa dos livros é feita em terceira pessoa.";
        
        document.getElementById("rese-2-name").innerHTML = "Balaio de babados";

        var bookLinkRese2 = "https://www.balaiodebabados.com.br/2018/12/resenha-338-harry-potter-e-o-prisioneiro-de-azkaban.html"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Agora um detalhe que me deixou bem revoltada nesse livro é o modo que Rony trata Hermione. Desde o primeiro livro, vemos que ela sofre um bullying bem velado entre seus companheiros de escola (Harry e Rony incluídos) por ser uma garota inteligente e bastante dedicada aos estudos. Nos outros livros não foram muitas situações em que o Rony maltratou a garota com palavras, mas nesse livro a situação chegou num limite que deu vontade de chegar e dar um murro na cara dele.";
    break;

    case 'HP4':
        document.getElementById("book-title").innerHTML = "Harry Potter: O cálice de fogo";

        var bookImg =  "images/Home/home-saga-HP4.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "19 agosto 2017";
        document.getElementById("book-genre").innerHTML = "Ficção";
        document.getElementById("book-author").innerHTML = "J.K. Rowling";

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

        document.getElementById("book-text").innerHTML = "Depois de férias aborrecidas na casa dos tios trouxas, está na hora de Harry Potter voltar a estudar. Coisas acontecem, no entanto, para dificultar o regresso de Harry. Persistente e astuto, o herói não se deixa intimidar pelos obstáculos e, com a ajuda dos fiéis amigos Weasley, começa o ano letivo na Escola de Magia e Bruxaria de Hogwarts. As novidades não são poucas. Novos colegas, novos professores, muitas e boas descobertas e um grande e perigosos desafio. Alguém ou alguma coisa ameaça a segurança e a tranquilidade dos membros de Hogwarts.";

        var bookLinkAmazon = "https://www.amazon.com.br/Harry-Potter-Câmara-Secreta-Rowling/dp/8532530796/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=UWXNZTLR0X8C&keywords=Harry+Potter%3A+A+câmara+secreta&qid=1669613531&qu=eyJxc2MiOiIxLjM4IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&s=books&sprefix=harry+potter+a+pedra+filosofal%2Cstripbooks%2C329&sr=1-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://busca.saraiva.com.br/busca?q=Harry%20Potter%3A%20A%20câmara%20secreta";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/j-k-rowling/harry-potter-e-a-camara-secreta/2467774582?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "208 ";
        document.getElementById("book-date").innerHTML = "19 agosto 2017";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Rocco";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Resenhando";

        var bookLinkRese1 = "https://resenhandopormarina.com/harry-potter-e-a-camara-secreta/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Sobre a diagramação do livro, mantenho o que disse na resenha do primeiro livro… Como disse lá em cima, eu estou lendo os livros que são do Box com a lombada de Hogwarts. Ele é bem bonito, a capa é soft touch, com uma ilustração linda da capa, o título é mais brilhante e em relevo. Por dentro, que eu já achei um problema. O livro não tem orelha, o que acaba fazendo com que ele fique um pouco mole, com mais facilidade para dar aqueles amassadinhos, sabe? Minha impressão é que é um livro frágil. As folhas são amareladas, mas um pouco finas demais, e dependendo da luz, a gente enxerga do outro lado. Mas, cada abertura de capítulo tem uma ilustração condizente e fica muito fofo! Não comentei ainda, mas a narrativa do livro é em terceira pessoa.";
        
        document.getElementById("rese-2-name").innerHTML = "Plano crítico";

        var bookLinkRese2 = "https://www.planocritico.com/critica-harry-potter-e-a-camara-secreta-de-j-k-rowling/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Felizmente, apesar de seus deslizes, Harry Potter e a Câmara Secreta nos deixa com uma percepção bastante positiva sobre esse mundo de magia e bruxaria. Temos aqui um romance que se aprofunda não somente no universo criado por J.K. Rowling, como nos seus personagens (ainda que haja o problema das falas). Goste ou não, é inegável que a autora sabia o que fazia desde cedo e seu temor inicial acerca das expectativas criadas pelo primeiro livro certamente foram infundadas, visto que ela conseguiu nos trazer uma história tão boa quanto a primeira.";
    break;

    case 'HP5':
        document.getElementById("book-title").innerHTML = "Harry Potter: A ordem da fênix";

        var bookImg =  "images/Home/home-saga-HP5.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "19 agosto 2017";
        document.getElementById("book-genre").innerHTML = "Ficção";
        document.getElementById("book-author").innerHTML = "J.K. Rowling";

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

        document.getElementById("book-text").innerHTML = "Harry não é mais um garoto. Aos 15 anos, continua sofrendo a rejeição dos Dursdley, sua estranha família no mundo dos 'trouxas'. Também continua contando com Rony Weasley e Hermione Granger, seus melhores amigos em Hogwarts, para levar adiante suas investigações e aventuras. Mas o bruxinho começa a sentir e descobrir coisas novas, como o primeiro amor e a sexualidade. Nos volumes anteriores, J. K. Rowling mostrou como Harry foi transformado em celebridade no mundo da magia por ter derrotado, ainda bebê, Voldemort, o todopoderoso bruxo das trevas que assassinou seus pais. Neste quinto livro da saga, o protagonista, numa crise típica da adolescência, tem ataques de mau humor com a perseguição da imprensa, que o segue por todos os lugares e chega a inventar declarações que nunca deu. Harry vai enfrentar as investidas de Voldemort sem a proteção de Dumbledore, já que o diretor de Hogwarts é afastado da escola. E vai ser sem a ajuda de seu protetor que o jovem herói enfrentará descobertas sobre a personalidade controversa de seu pai, Tiago Potter, e a morte de alguém muito próximo.";

        var bookLinkAmazon = "https://www.amazon.com.br/Harry-Potter-Ordem-Fênix-Rowling/dp/8532530826/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=19XKXOV60IAGT&keywords=A+ordem+da+fênix&qid=1669614350&qu=eyJxc2MiOiIwLjYxIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&s=books&sprefix=o+prisioneiro+azkaban%2Cstripbooks%2C261&sr=1-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://busca.saraiva.com.br/busca?q=A%20ordem%20da%20fênix";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/j-k-rowling/harry-potter-e-a-ordem-da-fenix/3917209032?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "208 ";
        document.getElementById("book-date").innerHTML = "19 agosto 2017";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Rocco";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Resenhando";

        var bookLinkRese1 = "https://resenhandopormarina.com/harry-potter-e-a-ordem-da-fenix/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Harry, definitivamente, não é uma pessoa perfeita. E este seja talvez um dos motivos de seu sucesso. Crescer é algo que não acontece só com ele, e os leitores podem esperar mudanças dramáticas também na família Weasley, com Neville e, como era de se esperar, uma Hermione bem mais crescida que seus dois amigos. Pelo menos no que diz respeito a entender o que se passa na cabeça de Cho Chang e Harry. Como sempre, a história começa durante as férias, quando Harry está na casa dos tios. Reler os últimos capítulos de O Cálice de Fogo antes de começar pode ser uma boa idéia para compreender seu estado de espírito. A vida suburbana, no entanto, logo é abandonada com o primeiro atentado à vida de Harry, o que faz com que ele seja escoltado para longe da casa dos tios por Lupin, Olho Tonto Moody e uns novos personagens.";
        
        document.getElementById("rese-2-name").innerHTML = "Balaio de babados";

        var bookLinkRese2 = "https://www.balaiodebabados.com.br/2019/03/resenha-368-harry-potter-e-ordem-da-fenix.html"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "A Ordem da Fênix é o maior livro da série, com suas setecentas e tantas páginas, porém há algumas situações ali que poderiam ter sido retiradas que nem iriam fazer falta, como toda a faxina e a preparação natalina na casa dos Black. Felizmente a autora compensa em outros detalhes, como o capítulo dedicado somente aos Níveis Ordinários de Magia (N.O.M.s), que juro pra vocês que achava que tomava uma grande parte do livro. Gostei muito das organizações apresentadas - Ordem da Fênix e Armada de Dumbledore - apesar de achar que deveriam ter tido um pouco mais de foco. A reta final, como as dos outros livros, também é de tirar o fôlego. Confesso que não achei a morte de tal personagem tãão impactante assim. Primeiro porque eu fiquei bem confusa da primeira vez que li e segundo, eu achava que era realmente mais impactante pelo jeito que todos comentam. No caso, é uma opinião particular já que nunca fui muito partidária do personagem..";
    break;

    case 'HP6':
        document.getElementById("book-title").innerHTML = "Harry Potter: O enigma do príncipe";

        var bookImg =  "images/Home/home-saga-HP6.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "19 agosto 2017";
        document.getElementById("book-genre").innerHTML = "Ficção";
        document.getElementById("book-author").innerHTML = "J.K. Rowling";

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

        document.getElementById("book-text").innerHTML = "Harry Potter e o enigma do príncipe' dá continuidade à saga do jovem bruxo Harry Potter a partir do ponto em que o livro anterior parou o momento em que fica provado que o poder de Voldemort e dos Comensais da Morte, seus seguidores, cresce mais a cada dia, em meio à batalha entre o bem e o mal. A onda de terror provocada pelo Lorde das Trevas estaria afetando, até mesmo, o mundo dos trouxas (nãobruxos), e sendo agravada pela ação dos dementadores, criaturas mágicas aterrorizantes que 'sugam' a esperança e a felicidade das pessoas. Harry, que acabou de completar 16 anos, parte rumo ao sexto ano na Escola de Magia e Bruxaria de Hogwarts, animado e ao mesmo tempo apreensivo com a perspectiva de ter aulas particulares com o professor Dumbledore, o diretor da escola e o bruxo mais respeitado em toda comunidade mágica. Harry, longe de ser aquele menino magricela que vivia no quarto debaixo da escada na casa dos tios trouxas, é um dos principais nomes entre aqueles que lutam contra Voldemort, e se vê cada vez mais isolado à medida que os rumores de que ele é O Eleito o único capaz de derrotar o Lorde das Trevas, se espalham pelo mundo dos bruxos. Dois atentados contra a vida de estudantes, a certeza de Harry quanto ao envolvimento de Draco Malfoy com os Comensais da Morte e o comportamento de Snape, suspeito como sempre, adicionam ainda mais tensão ao já inquietante período. Apesar de tudo isso, Harry e os amigos são adolescentes típicos dividem tarefas escolares e dormitórios bagunçados, correm das aulas para os treinos de quadribol, e namoram.";

        var bookLinkAmazon = "https://www.amazon.com.br/Harry-Potter-Enigma-do-Príncipe/dp/8532530834/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=2159XR5HLCH7Y&keywords=O+enigma+do+príncipe&qid=1669614614&qu=eyJxc2MiOiIwLjg5IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&s=books&sprefix=a+ordem+da+fênix%2Cstripbooks%2C359&sr=1-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://busca.saraiva.com.br/busca?q=O%20enigma%20do%20príncipe";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/j-k-rowling/harry-potter-e-o-enigma-do-principe/1568524959?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "208 ";
        document.getElementById("book-date").innerHTML = "19 agosto 2017";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Rocco";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Minha vida literaria";

        var bookLinkRese1 = "https://www.minhavidaliteraria.com.br/2020/06/11/video-harry-potter-e-o-enigma-do-principe-redescobrindo-hogwarts/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Harry, longe de ser aquele menino magricela que vivia no quarto debaixo da escada na casa dos tios trouxas, é um dos principais nomes entre aqueles que lutam contra Voldemort, e se vê cada vez mais isolado à medida que os rumores de que ele é O Eleito, o único capaz de derrotar o Lorde das Trevas, se espalham pelo mundo dos bruxos. Dois atentados contra a vida de estudantes, a certeza de Harry quanto ao envolvimento de Draco Malfoy com os Comensais da Morte e o comportamento de Snape, suspeito como sempre, adicionam ainda mais tensão ao já inquietante período.  Apesar de tudo isso, Harry e os amigos são adolescentes típicos: dividem tarefas escolares e dormitórios bagunçados, correm das aulas para os treinos de quadribol, e namoram. Rony e Hermione os melhores amigos de Harry, se dão conta (finalmente!) da atração que sentem um pelo outro; Harry e Gina, a irmã mais nova de Rony, também.";
        
        document.getElementById("rese-2-name").innerHTML = "Balaio de babados";

        var bookLinkRese2 = "https://www.balaiodebabados.com.br/2019/04/resenha-381-harry-potter-e-o-enigma-do-principe.html"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "De resto, tudo continua o mesmo dos outros livros. JK narrando o dia-a-dia e a vida escolar de Harry, ao mesmo tempo que vai destrinchando as informações sobre Voldemort e as sombrias horcruxes. Não sei se foi por conta da experiência com OdF, mas achei que nesse aqui JK foi mais direto ao ponto em algumas situações. Nesse livro também temos hormônios à flor da pele nos personagens. Confesso que essas picuinhas de ciúmes meio que quebraram o clima da história, mas levei em consideração quando a história foi escrita e que ali são tudo um bando de adolescente. Com o final de quebrar corações, Harry se encontra cada mais próximo de enfrentar Voldemort, criando todo o clímax para o desfecho da série em As Relíquias da Morte.";
    break;

    case 'HP7':
        document.getElementById("book-title").innerHTML = "Harry Potter: As relíquias da morte";

        var bookImg =  "images/Home/home-saga-HP7.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "19 agosto 2017";
        document.getElementById("book-genre").innerHTML = "Ficção";
        document.getElementById("book-author").innerHTML = "J.K. Rowling";

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

        document.getElementById("book-text").innerHTML = "Harry Potter e as relíquias da morte', de J.K. Rowling, é o sétimo e último livro da série. Voldemorte está cada vez mais forte e Harry Potter precisa encontrar e aniquilar as Horcruxes para enfraquecer o lorde e poder enfrentálo. Nessa busca desenfreada, contando apenas com os amigos Rony e Hermione, Harry descobre as Relíquias da Morte, que serão úteis na batalha do bem contra o mal. Dois atentados contra a vida de estudantes, a certeza de Harry quanto ao envolvimento de Draco Malfoy com os Comensais da Morte e o comportamento de Snape, suspeito como sempre, adicionam ainda mais tensão ao já inquietante período. Apesar de tudo isso, Harry e os amigos são adolescentes típicos dividem tarefas escolares e dormitórios bagunçados, correm das aulas para os treinos de quadribol, e namoram.";

        var bookLinkAmazon = "https://www.amazon.com.br/Harry-Potter-as-Relíquias-Morte/dp/8532530842/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=26KCATD8CL9SA&keywords=As+relíquias+da+morte&qid=1669614821&qu=eyJxc2MiOiIxLjM5IiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&s=books&sprefix=as+relíquias+da+morte%2Cstripbooks%2C213&sr=1-1";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://busca.saraiva.com.br/busca?q=As%20relíquias%20da%20morte";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/j-k-rowling/harry-potter-e-as-reliquias-da-morte/4008097210?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "208 ";
        document.getElementById("book-date").innerHTML = "19 agosto 2017";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Rocco";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "De livro em livro";

        var bookLinkRese1 = "http://www.delivroemlivro.com.br/2012/01/resenha-36-harry-potter-e-as-reliquias.html"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "3,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Cheguei ao fim da leitura da série Harry Potter, e agora percebo que sete livros se tornaram pouco para quem realmente se deixou cativar pelo bruxinho. É com alegria que vejo o desenrolar da história, mas foi com pesar que li a última frase do livro, porque vou ficar morrendo de saudades já não há outro em seguida. Espero poder reler a série novamente e assistir aos filmes (nunca assisti nenhum). Bem, estou aqui tentando escrever uma resenha sobre esse livro e percebo o quanto é dificil por tamanha complexidade e inumeras informações contidas nele e, tenho convicção, de que nenhuma resenha, feita por mim ou por qualquer outra pessoa será suficientemente fiel ao desejo de poder expor todo o prazer que o resenhista sentiu ao realizar a leitura da série. Não obstante, vou tentar ser objetiva, mas tenho certeza que poderia passar o dia todo falado do livro que não me cansaria. Acho que a resenha será não só de uma fã, mas de garota que se deixou cativar e apaixonar por Harry Potter. ";
        
        document.getElementById("rese-2-name").innerHTML = "Balaio de babados";

        var bookLinkRese2 = "https://www.balaiodebabados.com.br/2019/06/resenha-399-harry-potter-e-as-reliquias-da-morte.html"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Um dos pontos fortes do livro são as informações reveladas sobre o passado de Dumbledore. O ex-diretor de Hogwarts sempre pareceu ser um personagem com bastante segredos e nesse livro contamos com a versão bruxa de Sônia Abraão para explorar a morte do diretor, vendendo sua biografia. Um lado positivo dessa releitura foi justamente lembrar desses detalhes e ver como algumas coisas em Animais Fantásticos e Onde Eles Habitam contradizem. Vida que segue…";
    break;

    case 'HP8':
        document.getElementById("book-title").innerHTML = "Harry Potter: As relíquias da morte";

        var bookImg =  "images/Home/home-saga-HP8.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "19 agosto 2017";
        document.getElementById("book-genre").innerHTML = "Ficção";
        document.getElementById("book-author").innerHTML = "J.K. Rowling";

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

        document.getElementById("book-text").innerHTML = "Faz dezenove anos desde que Harry Potter, Ron Weasley e Hermione Granger salvaram o mundo bruxo e agora eles estão de volta em uma aventura extraordinária, acompanhados de uma nova e corajosa geração que acabou de chegar à Escola de Magia e Bruxaria de Hogwarts. Enquanto Harry lida com um passado que se recusa a ficar onde pertence, seu filho mais novo, Alvo Potter, sofre com o peso de um legado de família que ele nunca desejou. À medida que passado e presente colidem, pai e filho se veem presos em uma corrida contra o tempo, tendo que enfrentar forças misteriosas enquanto o futuro está em jogo.";

        var bookLinkAmazon = "https://www.amazon.com.br/Potter-Criança-Amaldiçoada-Especial-Roteiro-ebook/dp/B01LQM9768/ref=sr_1_2?__mk_pt_BR=ÅMÅŽÕÑ&crid=2NPOG1RDSS8RE&keywords=A+criança+amaldiçoada&qid=1669615020&qu=eyJxc2MiOiIyLjA3IiwicXNhIjoiMS4wOCIsInFzcCI6IjAuODkifQ%3D%3D&s=books&sprefix=a+criança+amaldiçoada%2Cstripbooks%2C199&sr=1-2";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://busca.saraiva.com.br/busca?q=A%20criança%20amaldiçoada";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/j-k-rowling/harry-potter-e-a-crianca-amaldicoada/1411039179?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "208 ";
        document.getElementById("book-date").innerHTML = "19 agosto 2017";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Rocco";
        document.getElementById("book-height").innerHTML = "13.5 x 1.6 x 20.8 cm";
        document.getElementById("book-kid").innerHTML = "+13 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Minha vida literaria";

        var bookLinkRese1 = "https://www.minhavidaliteraria.com.br/2016/12/08/resenha-harry-potter-e-crianca-amaldicoada-j-k-rowling/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Falar de Harry Potter e a Criança Amaldiçoada sem falar em nostalgia, para mim, é certamente impossível. Não tenho como descrever a emoção que senti ao abrir a primeira página e compreender que eu finalmente estava de volta, algo que jamais imaginei que aconteceria de maneira inédita. Assim, essa foi uma experiência completamente única e particular, além de intensamente emocional, de forma que teria sido praticamente impossível me desagradar. Senti que esse foi uma homenagem de J.K. Rowling à série, e um presente a ela. E como potterhead da Geração Harry Potter, fiquei mais do que agradecida por ele.";
        
        document.getElementById("rese-2-name").innerHTML = "Além do livro";

        var bookLinkRese2 = "https://alemdolivro.com/2017/10/11/resenha-de-harry-potter-e-a-crianca-amaldicoada-harry-potter-8-j-k-rowling-jack-thorne-e-john-tiffany/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Em Criança Amaldiçoada, conhecemos uma nova história do universo HP, mas também revisitamos o passado por meio da viagem no tempo. O recurso já costuma render boas tramas (olá, Teoria do Caos!) e, neste caso, é uma maneira genial de nos reconectar a Harry Potter e cia. – principalmente para quem terminou de ler a série há mais tempo. Apesar de ser muito mais leve do que os outros livros da saga – especialmente os últimos -, Criança Amaldiçoada conta com boas revelações e plot twists. No final, por mais que “não seja a mesma coisa”, é inevitável aquele gostinho de quero mais!";
    break;

    case 'AMN':
        document.getElementById("book-title").innerHTML = "Admirável Novo Mundo"; 

        var bookImg =  "images/Home/home-popullar-mundo.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "1 de janeiro de 2014";
        document.getElementById("book-genre").innerHTML = "Ficção";
        document.getElementById("book-author").innerHTML = "Aldous Leonard Huxley";

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

        document.getElementById("book-text").innerHTML = "Em uma sociedade organizada segundo princípios estritamente científicos, Bernard Marx, um psicólogo, sente-se inadequado quando se compara aos outros seres de sua casta. Ao descobrir uma “reserva histórica” que preserva costumes de uma sociedade anterior – muito semelhante à do leitor – Bernard vai perceber as diferenças entre esta civilização e a sua – e a partir de um sentimento de inconformismo ele desafiará o mundo. A história de Bernard se passa em um ambiente em que a literatura, a música e o cinema só têm a função de solidificar a alienação; um universo que louva o avanço da técnica, a produção em série, a uniformidade contra a diversidade.";

        var bookLinkAmazon = "https://www.amazon.com.br/Admirável-mundo-Aldous-Leonard-Huxley/dp/8525056006/ref=sr_1_2?__mk_pt_BR=ÅMÅŽÕÑ&keywords=Admirável+Novo+Mundo&qid=1669482247&qu=eyJxc2MiOiIxLjc5IiwicXNhIjoiMS4xNSIsInFzcCI6IjEuMzcifQ%3D%3D&s=books&sr=1-2";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.saraiva.com.br/admiravel-mundo-novo/p";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/aldous-huxley/admiravel-mundo-novo/1710802787?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "312";
        document.getElementById("book-date").innerHTML = "1 janeiro 2014";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Biblioteca Azul";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+15 anos"; 

        document.getElementById("rese-1-name").innerHTML = "Bons Livros Para Ler";

        var bookLinkRese1 = "https://www.bonslivrosparaler.com.br/livros/resenhas/admiravel-mundo-novo/5202"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Li “Admirável Mundo Novo”, de Aldous Huxley quando era garoto, tinha uns 17 anos na época. E hoje estou com 60 anos e, quer queira, quer não, já faz um longo tempo que fiz essa leitura pela primeira vez. Seja qual for a interpretação que daremos a esse livro, uma coisa é certa: existem muitas coincidências entre o ano de 2540 e os dias de hoje. E não é à toa que esse livro está voltando a ser lido por aqueles mais sensíveis aos movimentos autoritários que vemos surgindo na Europa e agora nos Estados Unidos. Por isso, indico “Admirável Mundo Novo”, de Aldous Huxley, como um livro que merece um lugar de destaque na sua estante.";
        
        document.getElementById("rese-2-name").innerHTML = "Estação Nerd";

        var bookLinkRese2 = "https://estacaonerd.com/resenha-admiravel-mundo-novo-de-aldous-huxley/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "3,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "Não vou desmerecer totalmente, nem dizer que não vale a leitura. Como disse lá no início do texto, é claro que os clássicos são importantes e o “Admirável mundo novo” é essencial para quem gosta de ficção científica. A crítica negativa é mais por eu ter lido ele fora de ordem, fora do seu tempo, o que pra mim é mais um problema. Tem histórias incríveis e atemporais, como Star Wars, como Matrix, coisa que o “Admirável mundo novo” não conseguiu – minha opinião!";
    break;

    case 'ARDB':
        document.getElementById("book-title").innerHTML = "A Revolução dos Bichos"; 

        var bookImg =  "images/genre/genre-ficcao-revolucao.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "10 janeiro 2007";
        document.getElementById("book-genre").innerHTML = "Ficção";
        document.getElementById("book-author").innerHTML = " George Orwell ";

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

        document.getElementById("book-text").innerHTML = "Escrita em plena Segunda Guerra Mundial e publicada em 1945 depois de ter sido rejeitada por várias editoras, essa pequena narrativa causou desconforto ao satirizar ferozmente a ditadura stalinista numa época em que os soviéticos ainda eram aliados do Ocidente na luta contra o eixo nazifascista. De fato, são claras as referências: o despótico Napoleão seria Stálin, o banido Bola-de-Neve seria Trotsky, e os eventos políticos - expurgos, instituição de um estado policial, deturpação tendenciosa da História - mimetizam os que estavam em curso na União Soviética.";

        var bookLinkAmazon = "https://www.amazon.com.br/revolução-dos-bichos-conto-fadas/dp/8535909559/ref=sr_1_3?__mk_pt_BR=ÅMÅŽÕÑ&crid=1IU1FTGEP5WHR&keywords=A+Revolução+dos+Bichos&qid=1669485230&qu=eyJxc2MiOiIzLjY2IiwicXNhIjoiMi44MSIsInFzcCI6IjIuNjAifQ%3D%3D&s=books&sprefix=a+revolução+dos+bichos%2Cstripbooks%2C452&sr=1-3";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.saraiva.com.br/a-revolucao-dos-bichos-219728/p";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/george-orwell/a-revolucao-dos-bichos/214801230?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "152";
        document.getElementById("book-date").innerHTML = "10 janeiro 2007";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Companhia das Letras";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "Livre para todos os públicos"; 

        document.getElementById("rese-1-name").innerHTML = "Histórias em mim";

        var bookLinkRese1 = "https://www.historiasemmim.com.br/2022/02/03/resenha-a-revolucao-dos-bichos/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Embora o livro trate de temas sérios, a leitura é prazerosa e pode ser feita em pouco tempo. Provavelmente porque personifica animais, possui um enredo próximo da nossa realidade e tem personagens bem construídos. No meu caso, a leitura evocou também uma mistura de sensações: pena, revolta, tristeza e outras que não sei descrever. Essa é, sem dúvida, uma daquelas obras que todo mundo deveria ter a oportunidade de conhecer e ler.";
        
        document.getElementById("rese-2-name").innerHTML = "Unicentro";

        var bookLinkRese2 = "https://www3.unicentro.br/petfisica/2015/07/22/resenha-de-a-revolucao-dos-bichos/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "A história tem em seu desenrolar, como ponto forte, a marcante personalidade de cada animal que retrata muito bem o que se encontra numa sociedade real (apesar de ser um livro razoavelmente antigo, é possível visualizar e interligar esse contexto com as sociedades atuais) e o texto recheado de ironias que descrevem um sistema que tem como base a igualdade e o bem estar de todos (e o seu fracasso). No decorrer da leitura se aprende muito sobre política e poder (tendo alguns personagens e situações semelhantes a revolução russa). É um livro de leitura rápida e que abre brechas para muitas interpretações, reflexões e ligações externas com outros fatores reais e da literatura.";
    break;

    case 'AA':
        document.getElementById("book-title").innerHTML = "Aurora Ascende"; 

        var bookImg =  "images/Home/home-popullar-aurora.jpg";
        var setImg = document.getElementById("book-cover");
        setImg.setAttribute("src", bookImg);

        document.getElementById("book-data").innerHTML = "30 julho 2021";
        document.getElementById("book-genre").innerHTML = "Ficção";
        document.getElementById("book-author").innerHTML = "Amie Kaufman e Jay Kristoff";

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

        document.getElementById("book-text").innerHTML = "Eles não são os heróis que gostaríamos.São apenas os que conseguimos encontrar. O ano é 2380, a humanidade deixou seu ninho para se espalhar pela galáxia: não apenas a Via Láctea, mas dezenas de outras e os recém-formados cadetes da Academia Aurora estão sendo enviados em suas primeiras missões. Tyler Jones, o garoto prodígio, está pronto para recrutar o esquadrão dos sonhos, mas seu próprio heroísmo idiota faz com que ele fique com o que mais ninguém da academia quis... • Uma diplomata convencida e faixa preta em sarcasmo. • Uma cientista sociopata com fama de atirar em seus colegas de quarto. • Um gênio da tecnologia que carrega o peso da galáxia nos ombros. • Um guerreiro alienígena com sérios problemas para administrar sua raiva. • Uma piloto que, é óbvio, não sente nada por Ty, caso você esteja se perguntando. Todos são conhecidos como problemáticos, exceto pelo garoto prodígio. E todos precisarão trabalhar juntos se quiserem sobreviver à primeira missão. E esse esquadrão nem é o maior problema de Tyler ― ele se chama Aurora Jie-Lin O’Malley, uma garota que foi resgatada no meio do espaço interdimensional. Presa em um sono criogênico por dois séculos, Auri é uma garota fora de seu tempo que pode ser o estopim de uma guerra que vem se formando há milhões de anos. Mas a chegada dela não é uma coincidência, e sim o prenúncio de uma grande batalha vindoura. Uma que decidirá o destino de todas as espécies. E o esquadrão de desajustados de Tyler é a última esperança de toda a galáxia. Muito romance, busca por identidade e aceitação, assim como aprender a trabalhar em equipe, tudo com espaçonaves e no futuro!";

        var bookLinkAmazon = "https://www.amazon.com.br/revolução-dos-bichos-conto-fadas/dp/8535909559/ref=sr_1_3?__mk_pt_BR=ÅMÅŽÕÑ&crid=1IU1FTGEP5WHR&keywords=A+Revolução+dos+Bichos&qid=1669485230&qu=eyJxc2MiOiIzLjY2IiwicXNhIjoiMi44MSIsInFzcCI6IjIuNjAifQ%3D%3D&s=books&sprefix=a+revolução+dos+bichos%2Cstripbooks%2C452&sr=1-3";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.saraiva.com.br/a-revolucao-dos-bichos-219728/p";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/livros/george-orwell/a-revolucao-dos-bichos/214801230?show_suggestion=0";
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "152";
        document.getElementById("book-date").innerHTML = "10 janeiro 2007";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Companhia das Letras";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "Livre para todos os públicos"; 

        document.getElementById("rese-1-name").innerHTML = "Histórias em mim";

        var bookLinkRese1 = "https://www.historiasemmim.com.br/2022/02/03/resenha-a-revolucao-dos-bichos/"; 

        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Embora o livro trate de temas sérios, a leitura é prazerosa e pode ser feita em pouco tempo. Provavelmente porque personifica animais, possui um enredo próximo da nossa realidade e tem personagens bem construídos. No meu caso, a leitura evocou também uma mistura de sensações: pena, revolta, tristeza e outras que não sei descrever. Essa é, sem dúvida, uma daquelas obras que todo mundo deveria ter a oportunidade de conhecer e ler.";
        
        document.getElementById("rese-2-name").innerHTML = "Unicentro";

        var bookLinkRese2 = "https://www3.unicentro.br/petfisica/2015/07/22/resenha-de-a-revolucao-dos-bichos/"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-2-text").innerHTML = "A história tem em seu desenrolar, como ponto forte, a marcante personalidade de cada animal que retrata muito bem o que se encontra numa sociedade real (apesar de ser um livro razoavelmente antigo, é possível visualizar e interligar esse contexto com as sociedades atuais) e o texto recheado de ironias que descrevem um sistema que tem como base a igualdade e o bem estar de todos (e o seu fracasso). No decorrer da leitura se aprende muito sobre política e poder (tendo alguns personagens e situações semelhantes a revolução russa). É um livro de leitura rápida e que abre brechas para muitas interpretações, reflexões e ligações externas com outros fatores reais e da literatura.";
    break;

    case 'MBDG':
        case 'MBDG':
        document.getElementById("book-title").innerHTML = "Mil beijos de garoto";
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

        document.getElementById("book-text").innerHTML = "Um beijo dura um instante. Mas mil beijos podem durar uma vida inteira. Um garoto. Uma garota. Um vínculo que é definido num momento e se prolonga por uma década. Um vínculo que nem o tempo nem a distância podem romper. Um vínculo que vai durar para sempre. Ao menos era o que eles imaginavam. Quando, aos dezessete anos, Rune Kristiansen retorna da Noruega para o lugar onde passou a infância, a cidade americana de Blossom Grove, na Geórgia , ele só tem uma coisa em mente: reencontrar Poppy Litchfield, a garota que era sua cara-metade e que tinha prometido esperar fielmente por seu retorno. E ele quer descobrir por que, nos dois anos em que esteve fora, ela o deletou de sua vida sem dar nenhuma explicação.";

        var bookLinkAmazon = "https://www.amazon.com.br/Mil-Beijos-Garoto-Tillie-Cole/dp/8542209826";
        var setLinkAmazon = document.getElementById("amazon-btn");
        setLinkAmazon.setAttribute("href", bookLinkAmazon);

        var bookLinkSaraiva = "https://www.saraiva.com.br/mil-beijos-de-garoto-6304/p";
        var setLinkSaraiva = document.getElementById("saraiva-btn");
        setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

        var bookLinkEstante = "https://www.estantevirtual.com.br/busca?q=tillie-cole%20mil-beijos-de-garoto"; 
        var setLinkEstante = document.getElementById("estante-btn");
        setLinkEstante.setAttribute("href", bookLinkEstante);

        document.getElementById("book-page").innerHTML = "400";
        document.getElementById("book-date").innerHTML = "30 março 2017";
        document.getElementById("book-lang").innerHTML = "Português";
        document.getElementById("book-edit").innerHTML = "Outro Planeta";
        document.getElementById("book-height").innerHTML = "21 x 13.6 x 2.2 cm";
        document.getElementById("book-kid").innerHTML = "+14 anos";

        document.getElementById("rese-1-name").innerHTML = "Livros e Fuxicos";

        var bookLinkRese1 = "http://www.livrosefuxicos.com/2017/05/resenha-mil-beijos-de-garoto-tillie-cole.html";
        var setLinkRese1 = document.getElementById("rese-1-a");
        setLinkRese1.setAttribute("href", bookLinkRese1);

        document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0";

        document.getElementById("resen-1-text").innerHTML = "Outro ponto positivo é a personalidade de Poppy. A jovem é doce, forte, amorosa e do tipo que irradia amor. A cada frase sentimos o quão iluminada e abençoada essa garota é; fiquei encantada com a maneira dela enxergar o mundo e enfrentar as dificuldades que aparecem em seu caminho – sempre com a fé de que o pôr do sol trará um novo dia melhor e feliz. A personagem é jovem e, em alguns pontos, inexperiente, mas ela me trouxe ensinamentos tão valiosos! Muitas vezes reclamo sem pensar e não valorizo as graças que tenho em minha vida, e então aparece uma personagem assim – tão grata e iluminada – que me mostra a importância de agradecermos pelas pequenas alegrias de cada minuto. Além disso, não posso deixar de dizer o quanto Rune é cativante, principalmente em seus momentos de conflito e medo. Com ele também aprendi valiosas lições sobre a valorização do hoje e do amor. Ainda devo dizer que: o livro é narrado de forma intercalada (variando entre Poppy e Rune); a obra acompanha os jovens durante vários anos (talvez por isso o amor entre eles seja tão palpável); existe uma beleza poética na narrativa da autora e nas lições que ela deixa através dessa história (o que faz o leitor sentir, desde a primeira página, a emoção fluir das palavras); o romance não é sensualizado; e o final é perturbador. Chorei muito, do início ao fim. Com uma narrativa dessas, tão real e apaixonante, é impossível não mergulhar de cabeça na história de Poppy e Rune. Por isso, também é impossível não sofrer com eles, não lutar com eles e, principalmente, não chorar ao lado deles. Minha parte racional sabe que o livro tem um grande apelo dramático, mas nada disso diminuiu o impacto que essa leitura deixou em mim. Mesmo sabendo que ia sofrer, mesmo chorando com esses dois, valeu muito a pena acompanhar a jornada de Poppy e Rune e, junto com eles, aprender a valorizar cada um dos beijos – de parar o coração – que a vida me dará. Simplesmente leia. Tenho certeza que não se arrependerá.";
        
        document.getElementById("rese-2-name").innerHTML = "Estante Bibliográfica";

        var bookLinkRese2 = "https://www.estantebibliografica.com/2020/09/resenha-mil-beijos-de-garoto-tillie-cole.html"; 
        var setLinkRese2 = document.getElementById("rese-2-a");
        setLinkRese2.setAttribute("href", bookLinkRese2);

        document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0"; 

        document.getElementById("resen-2-text").innerHTML = " É uma narrativa repleta de símbolos, que vão acompanhar o leitor mesmo ao término da leitura. Não consigo mais ver flores de cerejeira ou ouvir If I Could Fly do One Direction da mesma forma que antes! E os capítulos são intercalados entre Poppy e Rune, um recurso que gosto muito em livros, como já disse anteriormente em outras resenhas. Mil Beijos de Garoto (não vou o explicar o título, vocês vão ter que ler!) te faz enxergar a vida sob um novo ponto de vista, traz inúmeras lições sobre valores muitas vezes esquecidos e acima de tudo, te emociona. Preparem os lencinhos para as lágrimas e deem uma chance para essa história! Garanto que vocês vão amar conhecer esse casal.";
        break; 

        case 'MPDBC': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Memórias póstumas de Brás Cubas"; // coloca o nome do livro

            var bookImg =  "images/Home/home-brazil-memories.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "16 de setembro de 2014";
            document.getElementById("book-genre").innerHTML = "Drama";
            document.getElementById("book-author").innerHTML = "Machado de Assis";

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

            document.getElementById("book-text").innerHTML = "Em 1881, Machado de Assis lançou aquele que seria um divisor de águas não só em sua obra, mas na literatura brasileira: Memórias póstumas de Brás Cubas. Ao mesmo tempo em que marca a fase mais madura do autor, o livro é considerado a transição do romantismo para o realismo. Num primeiro momento, a prosa fragmentária e livre de Memórias póstumas, misturando elegância e abuso, refinamento e humor negro, causou estranheza, inclusive entre a crítica. Com o tempo, no entanto, o defunto autor que dedica sua obra ao verme que primeiro roeu as frias carnes de seu cadáver tornou-se um dos personagens mais populares da nossa literatura. Sua história, uma celebração do nada que foi sua vida, foi transformada em filmes, peças e HQs, e teve incontáveis edições no Brasil e no mundo, conquistando admiradores que vão de Susan Sontag a Woody Allen. Esta edição reproduz o prólogo do próprio autor à terceira edição do livro, em que ele responde às dúvidas dos primeiros leitores.";

            var bookLinkAmazon = "https://www.amazon.com.br/Mem%C3%B3rias-p%C3%B3stumas-Cubas-Machado-Assis/dp/8582850018";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/memorias-postumas-bras-cubas-scipione";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/machado-de-assis/memorias-postumas-de-bras-cubas/1137098976"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "368";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "16 setembro 2014";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Penguin-Companhia";
            document.getElementById("book-height").innerHTML = "19.81 x 12.95 x 1.78 cm";
            document.getElementById("book-kid").innerHTML = "+14 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "Saga Literária";

            var bookLinkRese1 = "sagaliteraria.com.br/2021/08/resenha-842-memorias-postumas-de-bras.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Memórias Póstumas de Brás Cubas é uma leitura divertida, pois o próprio protagonista retrata as suas memórias de forma ácida e debochada. Em certos momentos ele tenta empregar uma postura mais séria ao relembrar os momentos do passado por meio de digressões filosóficos, mas isso não dura muito tempo.  É interessante que ao narrar a sua história na condição de morto, Brás acaba por transcender a vida terrena e dessa forma é capaz de posicionar-se além de qualquer crítica ou julgamento feito pelas pessoas vivas. Além disso, por estar morto ele transita de forma livre por sua história, sem se preocupar com qualquer formalismo ou regra. Você pode estar pensando que Memórias póstumas de Brás Cubas é então um livro de memórias, tendo em vista que um defunto narra o seu passado, mas não é. Aqui acompanhamos os usos e costumes ou a sociedade carioca no final do século XIX, período esse que marcado pela presença ainda massiva de portugueses no Brasil, mas também pela forte influência europeia em nosso território, pois Machado de Assis aborda toda a influência dos portugueses e europeus em nossos costumes, principalmente no aspecto cultural.";
            

            document.getElementById("rese-2-name").innerHTML = "Bons livros para ler";

            var bookLinkRese2 = "https://www.bonslivrosparaler.com.br/livros/resenhas/memorias-postumas-de-bras-cubas/5408"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "4,5 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "A característica mais marcante do estilo machadiano é a digressão. A narrativa de Machado de Assis é constantemente interrompida por comentários metalinguísticos, intertextualidades, histórias paralelas e, principalmente, análises filosóficas da sociedade e do indivíduo. Isso faz com que seus enredos fiquem sempre fragmentados e embaralhados. Essa dificuldade de leitura, no entanto, é compensada pelo humor inteligente e pela estrutura dinâmica e moderna de seus livros. Os primeiros nove capítulos do livro, apresenta ao leitor a morte e o motivo da morte, os instantes que antecederam, as pessoas presentes em seus últimos momentos, a genealogia do personagem e o delírio vivido por ele na passagem para o outro lado (morte). Brás Cubas morreu em decorrência de uma pneumonia, quando se empenhava na invenção do Emplasto Brás Cubas, que curaria a melancolia humana e lhe daria a glória eterna. À beira da morte, destaca a presença de três mulheres de sua vida, sua irmã Sabina e a filha, e Vigília, a mulher da vida de Brás Cubas. O protagonista não é um herói, pelo contrário. Sua família construiu uma história de grandes feitos para encobrir a origem vulgar ou, para dar o melhor tom, poderemos dizer de uma procedência controversamente nobre, pois sua família, na verdade, é descendente de tal Damião Cubas, “tanoeiro de ofício”, que fabricava cubas, e lavrador, mas o avô Luís Cubas recontou os fatos, tornando seu antepassado herói das guerras contra os mouros. O pai de de Brás deu-lhe o nome atribuindo a si a descendência da família que fundou São Vicente. Como os Cubas paulistas contestaram, a família voltou ao passado de lutas na África.";
        break; // ´é switch case precisa ter no final

        case 'OS': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Os sertões"; // coloca o nome do livro

            var bookImg =  "images/Home/home-brazil-sertoes.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "9 de março de 2017";
            document.getElementById("book-genre").innerHTML = "Drama";
            document.getElementById("book-author").innerHTML = "Euclides da Cunha";

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

            document.getElementById("book-text").innerHTML = "Publicado pela primeira vez em 1902, Os Sertões de Euclides da Cunha é um retrato do Brasil da época. A obra trata da Guerra de Canudos que aconteceu no interior da Bahia. O autor, que era correspondente do jornal O Estado de São Paulo, presenciou parte dos acontecimentos na região e os descreveu de forma fiel. Além de desenvolver um romance histórico que mistura uma narrativa literária, sociológica e geográfica. Euclides da Cunha nos deixa uma obra que se baseia em três pilares: a terra, o homem e a luta. Um livro telúrico.";

            var bookLinkAmazon = "https://www.amazon.com.br/Os-Sert%C3%B5es-Euclides-Cunha/dp/8544001297";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/livro-os-sertoes-euclides-cunha";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/euclides-da-cunha/os-sertoes/3308225772"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "664";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "9 março 2017";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Martin Claret";
            document.getElementById("book-height").innerHTML = "23.2 x 16.2 x 3.4 cm";
            document.getElementById("book-kid").innerHTML = "+13 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "O clube da meia noite";

            var bookLinkRese1 = "http://www.oclubedameianoite.com/2020/01/resenha-os-sertoes-euclides-da-cunha.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "O ritmo do livro é lento, devendo o leitor se ater as minuciosas palavras que o escritor escolhe com cuidado. No soprar do vento Nordeste que levanta o primeiro grão de poeira do dia a última dose da consciência brasileira, Euclides da Cunha, dentro dos seus referenciais usa os tópicos necessários para adentrarmos no universo cultural de uma região geográfica até então pouco estudada, e sobre com preposições inovadoras que se opõe ao determinismo cientifico da época, pondo o próprio escritor para questionar seus pensamentos anteriores a experiência vivida nessa rica região do Nordeste. Com estilo descritivo intenso, cientifico, revelando como um retratista as singularidades dos sertões e ao mesmo tempo a genialidade de sua escrita. Uma edição memorável, muito bem organizada com preâmbulos e apêndices bem assinados, mapas e gravuras tornam a leitura mais dinâmica, mas não menos detalhista, transformando esse livro em um completo dossiê sobre a história de Canudos e sobre o sertanejo, e tudo isso com as notas do Euclides da Cunha que diz ser uma obra escrita as pressas em seus pequenos e raros intervalos de oficio.";
            

            document.getElementById("rese-2-name").innerHTML = "Revelando sentimentos";

            var bookLinkRese2 = "http://www.revelandosentimentos.com.br/2019/08/resenha-os-sertoes.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "4,7 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Dono de um vocabulário sem igual, o grande número de páginas do trabalho deve-se em parte à incrível competência do autor em escrever minuciosamente (excessivamente, às vezes) todos os pormenores daquilo que viu. Dividindo o trabalho em três vertentes, ele conduz o leitor, como se o pegasse pela mão e dissesse “vem comigo”, para o interior, e o que representou, da Guerra de Canudos. A primeira e menor parte, A terra, talvez seja a parte de mais difícil leitura. Euclides da Cunha parece íntimo do local, parece que viveu a vida toda no sertão da Bahia e não no sudeste brasileiro; evidência de que acertaram em mandá-lo para lá. Demonstrando um domínio extremamente competente, ele descreve absolutamente tudo o que pôde perceber daquelas paragens. O clima, o solo, a fauna, a flora e, principalmente, as mazelas consequentes de uma biologia morta. No mais, acredito que a transcendência dessa obra fala por si só. É uma pena, verdadeiramente digno de pena, que as pessoas tenham a capacidade de encher a boca para dizer que não gostam de Literatura Brasileira.";
        break; // ´é switch case precisa ter no final

        case 'DFQR': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "De folhas que resistem"; // coloca o nome do livro

            var bookImg =  "images/Home/home-brazil-folhas.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "20 de outubro de 2021";
            document.getElementById("book-genre").innerHTML = "Drama e Suspense";
            document.getElementById("book-author").innerHTML = "Raïssa Lettiére";

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

            document.getElementById("book-text").innerHTML = "Um enigma na curva de uma estrada e os quatro braços de uma cruz. Um homem que vê a mãe perder a sanidade aos poucos. Outro que confere o obituário de jornais em busca de um nome conhecido. Uma refeição que evoca todas as últimas ceias. Uma amizade de infância, em meio a empurrões e quedas, leva a uma decisão irreversível.";

            var bookLinkAmazon = "https://www.amazon.com.br/folhas-que-resistem-Ra%C3%AFssa-Letti%C3%A9re-ebook/dp/B09H27G4FY";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/lettiere-raissa/de-folhas-que-resistem"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "116";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "20 outubro 2021";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Biblioteca Azul";
            document.getElementById("book-height").innerHTML = "23.2 x 16.2 x 3.4 cm";
            document.getElementById("book-kid").innerHTML = "+12 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Mais que Livros";

            var bookLinkRese1 = "https://www.maisquelivros.com/2021/12/resenha-de-folhas-que-resistem-raissa.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "4,8 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Passeando por temas como esquecimento, abuso psicológico, conflitos familiares, relacionamento abusivo/ tóxico, mágoa, pedofilia e culpa, cada conto possui uma atmosfera única e envolvente, fugindo da previsibilidade do gênero e entregando ao leitor uma experiência única e deliciosamente viciante. Apesar de não consumir o gênero com frequência, confesso que aqui me vi envolvida desde a primeira página, não apenas pelo suspense que a autora cria em cada uma de suas histórias, mas pela forma enigmática e surpreendentemente inteligente com as quais são escritas. E em se tratando de enigmas, aqui temos uma coletânea de contos para ler e reler, pois muito mais do que uma história poética, a autora tece em seus textos metáforas profundas, nos fazendo sair da zona de conforto reflexiva, ao mesmo tempo em que nos permite ponderar o peso de cada um de acordo com nossa percepção e bagagem de vida.";
            

            document.getElementById("rese-2-name").innerHTML = "Resenhando";

            var bookLinkRese2 = "https://www.resenhando.com/2021/11/de-folhas-que-resistem-obra-inedita-de.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "4,7 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Um enigma na curva de uma estrada e os quatro braços de uma cruz. Um homem que vê a mãe perder a sanidade aos poucos. Outro que confere o obituário de jornais em busca de um nome conhecido. Uma refeição que evoca todas as últimas ceias. Uma amizade de infância, em meio a empurrões e quedas, leva a uma decisão irreversível. São narrativas que operam como fotografias instantâneas - e muito nítidas - de paisagens internas diversas. Traz contos com aroma e cor, para que os leitores possam experimentá-los com todos os sentidos de que puderem lançar mão e misturá-los de forma sinestésica no embate com o texto. Ao privilegiar as dimensões subjetivas das personagens, bem como seus achados epifânicos e existenciais, Raïssa compõe uma proposta literária potente, em harmonia com o que há de melhor na produção literária contemporânea.";
        break; // ´é switch case precisa ter no final

        case 'AM': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "A muralha"; // coloca o nome do livro

            var bookImg =  "images/Home/home-brazil-muralha.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "6 abril 2020";
            document.getElementById("book-genre").innerHTML = "Drama e Romance";
            document.getElementById("book-author").innerHTML = "Dinah Silveira de Queiroz";

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

            document.getElementById("book-text").innerHTML = "Cristina é a jovem romântica que vem de Portugal para casar-se com Tiago. Decepciona-se logo ao desembarcar do navio: seu prometido não a aguarda. E, para chegar a Lagoa Serena, a propriedade da família do noivo, precisa enfrentar dificuldades a fim de transpor a muralha da Serra do Mar, que separa o litoral da vila de São Paulo de Piratininga. Mas Cristina terá de lidar com muito mais do que as vicissitudes de uma terra selvagem: a indiferença de Tiago, que parece só querer bem às estrelas, e os hábitos tão distintos daqueles do Reino. A paisagem e os costumes do tempo colonial são reconstituídos por Dinah Silveira de Queiroz ― ela própria descendente do bandeirante Carlos Pedroso da Silveira ―, com destaque para as enérgicas personagens femininas: afinal, eram as mulheres que administravam e defendiam a casa enquanto os homens partiam nas bandeiras.";

            var bookLinkAmazon = "https://www.amazon.com.br/Muralha-Dinah-Silveira-Queiroz/dp/8552994232";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/dinah-silveira-de-queiroz/a-muralha/3124623011"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "400";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "6 abril 2020";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Instante";
            document.getElementById("book-height").innerHTML = "20.4 x 13.4 x 2.4 cm";
            document.getElementById("book-kid").innerHTML = "+14 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Skoob";

            var bookLinkRese1 = "https://www.skoob.com.br/livro/resenhas/7190/mais-gostaram"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "A autora tem um ótimo senso de humor e sabe o momento certo para usá-lo e como tirar melhor proveito dele para fazer com que sua protagonista amadureça perante as adversidades que vai enfrentar. Conforme o livro avança, os homens saem para desbravar as terras, buscar ouro e as mulheres precisam cuidar da casa, plantações, defender suas terras. Aqui a autora entra com dureza, sem piedade, as mulheres são fortes, capazes e auto suficientes. A leitura acelera ao mesmo tempo em que a profundidade dos personagens aumenta e o enredo desenvolve suas camadas que vão além do romance Cristina/Tiago. Ela também consegue falar sobre a colonização sem romantizá-la, não omite a violência, brutalidade, escravidão e assassinatos. A riqueza de detalhes históricos apresentados pela autora é algo impressionante e feito na medida certa, é capaz de transportar o leitor sem o perdê-lo nas descrições de ambiente ou dos costumes. Gostei demais da leitura e espero ter a oportunidade de ler outras obras da autora.⁣";
            

            document.getElementById("rese-2-name").innerHTML = "Skoob";

            var bookLinkRese2 = "https://www.skoob.com.br/livro/resenhas/7190/recentes/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "4,5 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "A leitura foi muito prazerosa. Foi interessante ler este livro, após tanto tempo depois de ter assistido parte da séria “A Muralha” do início dos anos 2000. Lembrava vagamente, mas ao pesquisar sobre a série vi que houve mudanças de nomes de personagens e inclusão de outros que nem existem no livro. José Lins do Rêgo se manifestou sobre A Muralha: “As figuras humanas crescem de vulto e assumem a importância de absorventes estados de alma. Aí o livro vence e se expande como força de criação autêntica. A figura de Cristina, já no fim do livro, se confunde com a terra que ela leva no ventre. O cheiro do pântano que lhe penetra na carne se transforma numa espécie de feitiço que a prende ao solo para sempre.";
        break; // ´é switch case precisa ter no final

        case 'USPOA': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Um salto para o amor"; // coloca o nome do livro

            var bookImg =  "images/Home/home-brazil-salto.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "11 outubro 2021";
            document.getElementById("book-genre").innerHTML = "Romance";
            document.getElementById("book-author").innerHTML = "Aione Simões";

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

            document.getElementById("book-text").innerHTML = "Um salto para o amor é o primeiro romance de Aione Simões, criadora do blog Minha Vida Literária, na Harlequin. Numa comédia romântica com pontos importantes sobre representatividade, acompanhamos a trajetória de Lily, uma jovem determinada a fazer qualquer coisa para evitar a falência de seu negócio – inclusive virar influencer — e que carrega grandes traumas de seu passado. O propósito da vida de Lily é desafiar as leis de Newton. Quanto mais forças tentam colocá-la para baixo, menos ela se deixa abater. Ao menos tem sido assim nos últimos anos, desde que enfrentou a desestruturação de sua família e optou por mudar sua vida por completo. Lily pediu demissão de seu trabalho para aventurar-se como mulher empreendedora e abrir uma loja de roupa — a Frida —, decidida a transformá-la num espaço para todos os tipos de mulheres. Depois de um ano da abertura da loja, ela sente que realmente superou o passado. Ou, pelo menos, era o que achava.";

            var bookLinkAmazon = "https://www.amazon.com.br/Um-Salto-para-Amor-Aut%C3%B3grafo/dp/0000186732";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/simoes-aione/um-salto-para-o-amor"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "384";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "11 outubro 2021";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "HarperCollins";
            document.getElementById("book-height").innerHTML = " 20.8 x 13.5 x 1.9 cm";
            document.getElementById("book-kid").innerHTML = "+14 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Skoob";

            var bookLinkRese1 = "https://www.skoob.com.br/um-salto-para-o-amor-12002231ed11992173.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Um salto para o amor virou uma das minhas leituras favoritas — não do ano; da vida. A começar por Lily, uma protagonista tão apaixonante que a gente se vê instigado a continuar a leitura para ter mais tempo com ela, ver como ela vai reagir as situações da vida e qual será seu próximo passo. A Lily é forte, mas nunca deixa de ser humana. Tem problemas, inseguranças, limitações e partes feias, assim como todo muno — é isso que a torna tão interessante. Por falar em personagens, isso é algo que a Aione domina com mastreia. A quantidade de pessoas com quem Lily se envolve, e de subplots que se entrelaçam a trama principal é surpreendente. Mais que isso: nada parece jogado ou sem propósito. Tudo se encaixa com leveza e naturalidade, dando essa cara de vida real e de que a história poderia ser de uma amiga nossa de muito tempo. Outra coisa que me surpreendeu positivamente foi a quantidade de assuntos tratados, mas sem parecer panfletagem. Fazia parte da história, dos personagens. Estava ali por compor quem eles eram. A pluralidade é uma das coisas mais legais do livro: personagens gordos, negros, lgbtqiap+, todos misturados e vivendo suas vidas normalmente, como é na vida real e como deveria ser na ficção.";
            

            document.getElementById("rese-2-name").innerHTML = "Skoob";

            var bookLinkRese2 = "https://www.skoob.com.br/um-salto-para-o-amor-12002231ed11992173.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Um salto para o amor e o meu primeiro contato com a escrita da Aione. Que leitura incrível! Em cada página que lia eu mergulhava para dentro de mim. Lily tentando lidar com tanta coisa luto, auto cobrança, algumas inseguranças, medos ... É impossível em algum momento da leitura  de não se identificar com a Lily.O livro tem um empoderamento muito grande e forte, quando terminei a leitura me sentia mais forte do que antes da leitura. Confesso que rir , chorei e dei altas gargalhadas com a Lily e também fiquei apaixonada pelo Marcos. hahaha... Uma leitura que foi transformadora na minha vida. ione você ganhou mais uma  leitora e fã do seu trabalho!";
        break; // ´é switch case precisa ter no final

        case 'ENTE': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Enquanto eu não te encontro"; // coloca o nome do livro

            var bookImg =  "images/Home/home-brazil-encontro.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "5 julho 2021";
            document.getElementById("book-genre").innerHTML = "Romance e LGBTQIA+";
            document.getElementById("book-author").innerHTML = "Pedro Rhuas";

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

            document.getElementById("book-text").innerHTML = "A vida tem sido boa para Lucas. Ele passou no Enem para estudar publicidade; se mudou com Eric, seu melhor amigo, do interior do Rio Grande do Norte para a capital; e conseguiu sua tão aguardada liberdade. Mas, no amor, Lucas é um desastre. O maior fã de Katy Perry no Nordeste tem certeza de que nem toda a sorte do mundo poderia fazer com que ele finalmente se apaixonasse pela primeira vez. Até que, em uma despretensiosa noite de sábado em 2015, tudo muda. Quando Lucas e Eric vão na inauguração do Titanic, a mais nova balada da cidade, Lucas esbarra (literalmente!) em Pierre, um lindo garoto francês que parece ter saído dos seus sonhos. Em meio a drinques, segredos e sonhos partilhados, Lucas e Pierre se conectam instantaneamente. Eles vivem o encontro mais especial de suas vidas, mas o Universo tem outros planos para o futuro… Até a noite acabar, o que será que vai acontecer com eles?";

            var bookLinkAmazon = "https://www.amazon.com.br/Enquanto-eu-n%C3%A3o-te-encontro/dp/855534154X";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/enquanto-eu-nao-te-encontro-20076405/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/pedro-rhuas/enquanto-nao-te-encontro/3240893376"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "272";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "11 outubro 2021";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Seguinte";
            document.getElementById("book-height").innerHTML = "22.8 x 15.6 x 1.2 cm";
            document.getElementById("book-kid").innerHTML = "+14 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Gnoma Leitora";

            var bookLinkRese1 = "http://www.gnomaleitora.com.br/2021/09/resenha-enquanto-eu-nao-te-encontro.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Uma das coisas que mais gostei nessa narrativa, é o fato dos personagens resolverem tudo com diálogo. A importância de sentar e conversar com alguém sobre as coisas é fundamental, e esses personagens nos ensinam isso. A questão da responsabilidade afetiva também é outro ponto citado na história. Em alguns momentos fiquei com o coração apertado, querendo que tudo se resolvesse o quanto antes, porque esses personagens merecem. Enquanto eu não te encontro é aquele livro para ser panfletado para todo mundo. Cheio de representatividade, essa história tem personagens LGBTQIAP+, negro, gordo e nordestino, ou seja, um combo sensacional. Venha conhecer o maior fã da Katy Perry e embarcar nesse romance que pode dar muito certo ou muito errado. Enquanto isso, siga esperando encontrar seu amor, pois ele chegará!";
            

            document.getElementById("rese-2-name").innerHTML = "O clube da meia noite";

            var bookLinkRese2 = "http://www.oclubedameianoite.com/2022/01/resenha-enquanto-eu-nao-te-encontro.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Foi meu primeiro contato com a escrita do autor e o que posso dizer? Virei totalmente fã e preciso de uma continuação para ONTEM! Temos vários assuntos importantes sendo abordados no livro como: Insegurança, Relacionamento abusivo e a representatividade LGBTQI+. Se você, querido leitor, gosta de um romance clichê bem doce, com cenas engraçadas, que irá te emocionar, e por fim sentir um quentinho no coração, indico demais a leitura de Enquanto Eu Não Te Encontro.            ";
        break; // ´é switch case precisa ter no final

        case 'OANEO': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "O amor não é óbvio"; // coloca o nome do livro

            var bookImg =  "images/Home/home-brazil-obvio.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "5 novembro 2019";
            document.getElementById("book-genre").innerHTML = "Romance";
            document.getElementById("book-author").innerHTML = "Elayne Baeta";

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

            document.getElementById("book-text").innerHTML = "O amor não é óbvio. Ele está presente quando você se senta com a sua vizinha idosa para assistir a um novo capítulo da sua novela favorita. Ele é posto à prova quando você escuta as histórias mirabolantes da sua melhor amiga, ainda que nenhuma delas lhe interesse. E, às vezes, ele aparece quando você menos espera e te leva a fazer experimentos científicos munida de binóculos e uma bicicleta amarela. Íris tem 17 anos e está viciada na novela Amor em atos. Ela e sua vizinha, Dona Símia, de 68 anos, não perdem um episódio. Na escola, parece que todo mundo só pensa em duas coisas: na festa de formatura e em perder a virgindade. Só que a vida de Íris está prestes a mudar: Cadu Sena, sua paixão platônica desde a oitava série, está solteiro. Essa é a chance de Íris. Mas antes ela precisa entender o que levou a namorada de Cadu a deixá-lo por uma garota, Édra Norr. Montada em sua bicicleta, Íris vai cruzar São Patrique para descobrir tudo sobre Édra, e não vai demorar para se enredar também nos encantos da garota. A gente pode achar que sabe por quem vai se apaixonar, mas o amor não é óbvio.";

            var bookLinkAmazon = "https://www.amazon.com.br/amor-n%C3%A3o-%C3%A9-%C3%B3bvio/dp/8501118265";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/o-amor-nao-e-obvio/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/elayne-baeta/o-amor-nao-e-obvio/1117765862"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "392";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "5 novembro 2019";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Galera";
            document.getElementById("book-height").innerHTML = "22.8 x 15.4 x 2.6 cm";
            document.getElementById("book-kid").innerHTML = "+16 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Leitor Cabuloso";

            var bookLinkRese1 = "https://leitorcabuloso.com.br/2020/02/resenha-o-amor-nao-e-obvio-elayne-baeta/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "4,5 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Como alguém que passou pela adolescência exatamente nessa época, a identificação foi imensa. O computador que a Íris usava, a comunicação com os amigos e vários outros elementos me fizeram recordar daquela época. Além disso, há a questão dos aspectos culturais típicos de uma cidade do interior que são importantes para a trama e que acrescentaram ainda mais pontos de identificação para mim. Por fim, eu confesso que gostaria que o livro fosse um pouco menor, pois chegou um momento que eu estava aflita para que o beijo das duas acontecesse e nada. Mas é uma leitura tranquila e o tempo voava quando eu estava lendo. A narração da Íris é irônica e bem humorada, o que torna O Amor Não É Óbvio uma obra bem gostosa de ler.";
            

            document.getElementById("rese-2-name").innerHTML = "Skoob";

            var bookLinkRese2 = "https://www.skoob.com.br/livro/resenhas/999711/mais-gostaram"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Este livro é de longe o meu favorito, superou todas as minhas expectativas (e olha que no momento que eu comprei, as expectativas já eram altas). Tem uma leitura super rápida, o jeito que eu me prendi às páginas dele é algo diferenciado, nunca li nada que fizesse eu me sentir do jeito que esse livro fez. Com certeza, ainda esse ano, vou ler ele novamente, o típico livro que eu nunca vou enjoar hahaha. O final me fez querer mais, o dia que tiver o vol. 2 eu posso dizer que venci na vida. As últimas páginas me fizeram surtar, quando vi para quem realmente era aquela carta eu fui a delírio. Eu sinto que devo acrescentar a minha paixão por Édra Norr, que mulher meus amigos, que mulher. Não desmerecendo Íris, que passou por momentos delicados de descoberta. Até mesmo porquê eu me identifico com ela, mas me apaixonei por Édra haha. Irei indicar ele para todo mundo, sinto que todos devem conhecer o trabalho esplêndido de Elayne Baeta.";
        break; // ´é switch case precisa ter no final

        case 'VDDE': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Verdades difíceis de engolir"; // coloca o nome do livro

            var bookImg =  "images/Home/home-brazil-engolir.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "30 outubro 2020";
            document.getElementById("book-genre").innerHTML = "Romance";
            document.getElementById("book-author").innerHTML = "Samantha Silvany";

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

            document.getElementById("book-text").innerHTML = " O escritor Dan pensava estar vivendo um verdadeiro romance clichê com seu amor de infância, pelo menos até conhecer Sofia, uma mulher que o faz sentir coisas que nunca sentiu antes. Sofia, uma mulher empoderada e decidida, mas azarada no amor, achava ter encontrado seu par perfeito, até descobrir que seu príncipe encantado era o mesmo de outra pessoa. Já Alicia está convencida de que encontrou o grande amor e que nada e ninguém irão impedi-la de seguir ao altar e ter seu tão sonhado “felizes para sempre”. Mesmo que precise passar por cima de si mesma para isso. Mesmo que tenha que esmagar seu amor-próprio para provar para si e para os outros que aquele homem é a metade que lhe falta. Mas será que as pessoas realmente são incompletas e precisam de outra metade para encontrar a felicidade? O preço para viver um grande amor pode ser a própria dignidade? A sororidade existe mesmo ou é só uma palavra bonita que decidiram acrescentar no dicionário? Sofia tem algumas respostas para essas perguntas, mas Alicia tem outras bem diferentes...";

            var bookLinkAmazon = "https://www.amazon.com.br/Verdades-dif%C3%ADceis-engolir-Um-romance/dp/6555351721";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/samantha-silvany/verdades-dificeis-de-engolir/2284284453"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "256";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "30 outubro 2020";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Outro Planeta";
            document.getElementById("book-height").innerHTML = "20.8 x 13.6 x 1.4 cm";
            document.getElementById("book-kid").innerHTML = "+18 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Mãe Literatura";

            var bookLinkRese1 = "https://www.maeliteratura.com/2020/11/resenha-verdades-dificeis-de-engolir.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "A personagem que mais gostei e tive empatia foi a Sofia. No início, Alícia me incomodou um pouco. Agora, vou ser bem franca com vocês, eu detestei o Dan! Imagino que a autora tenha carregado nas suas características estereotipadas para refletir sobre relacionamentos tóxicos, por vezes abusivos, além das questões de traição. Dan é o cara que acha que pode se dar bem mantendo dois relacionamentos e fica reclamando que não consegue entender as mulheres. Um personagem antipático e por vezes patético, que você torce para não se dar bem na vida... Gostei muito da capa e adorei a edição da Planeta. Uma diagramação bonita e diferente, que valoriza a leitura, trazendo um conceito mais descolado para o leitor. Cada capítulo começa com uma frase destacada numa página preta e na seguinte, como num balão de conversa, temos uma nova marcação, direcionada ao personagem 'ele' ou 'ela' que narram aquele capítulo, em primeira pessoa.";
            

            document.getElementById("rese-2-name").innerHTML = "Skoob";

            var bookLinkRese2 = "https://www.skoob.com.br/livro/resenhas/11651694/mais-gostaram"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Quando eu vi um exemplar na livraria, a sinopse me chamou a atenção, eu acabei despretensiosamente achando que se tratava de um livro de autoajuda e comprei por isso, mas não é bem assim. É uma história de amor, mas tb não é um conto clichê que costumamos ler. No começo eu achei uma baboseira e fiquei com muita raiva de ter comprado, porém, só ao longo da leitura eu fui me atentando que esse livro é sim autoajuda só que disfarçado. As lições estão nas entrelinhas dos pensamentos dos personagens e bom, são realmente verdades difíceis de engolir. A autora joga uns pensamentos verdadeiros e doloridos na sua cara que doem bem no âmago da gente.";
        break; // ´é switch case precisa ter no final

        case 'OCMCB': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Os cem melhores contos brasileiros do século"; // coloca o nome do livro

            var bookImg =  "images/Home/home-brazil-contos.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "16 dezembro 2009";
            document.getElementById("book-genre").innerHTML = "Drama e Ficção";
            document.getElementById("book-author").innerHTML = "Italo Moriconi";

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

            document.getElementById("book-text").innerHTML = "Para Júlio Cortazar, conto é aquele texto que corre em poucas linhas e em alta velocidade narrativa, capaz de nocautear o leitor com seu impacto dramático concentrado. Coube ao professor Italo Moriconi o desafio lançado pela Objetiva de garimpar os cem melhores textos do gênero produzidos no Brasil ao longo do século XX. Um trabalho que deixasse de lado os rígidos critérios acadêmicos e fosse pautado somente pela qualidade e sabor dessas pequenas obras-primas. O resultado é a coletânea Os Cem Melhores Contos Brasileiros do Século, um passeio pela mais deliciosa e contundente ficção curta produzida no Brasil entre 1900 e o fim dos anos 90. Uma antologia capaz de traduzir as mudanças do país e as inquietações de várias gerações de brasileiros, em cem anos de produção literária. A prova de que a arte do gênero não cessa de melhorar em nossa literatura.";

            var bookLinkAmazon = "https://www.amazon.com.br/cem-melhores-contos-brasileiros-s%C3%A9culo/dp/8539000369";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/italo-moriconi/os-cem-melhores-contos-brasileiros-do-seculo/3049501881"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "615";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "16 dezembro 2009";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Objetiva";
            document.getElementById("book-height").innerHTML = "23.6 x 15.6 x 3.2 cm";
            document.getElementById("book-kid").innerHTML = "+14 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Hosperia de Palavras";

            var bookLinkRese1 = "https://hospedariadepalavras.blogspot.com/2014/09/os-100-melhores-contos-brasileiros-do.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Separado por décadas, com exceção do primeiro bloco que abrangeu 30 anos, a coleção de contos passeia por uma transformação histórica - cultural - social visível e palpável. Desde a forma de se escrever até o conteúdo abordado nas histórias relatadas, podemos ter uma visão panorâmica do século XX. Para mim, uma desvantagem que me levou a demorar meses para terminar este livro é que não é uma história contínua, mas uma série de contos, o que quebra um pouco o ritmo de leitura, mata a curiosidade de saber mais. Porém, são histórias interessantíssimas e vale a pena conhecer.";
            

            document.getElementById("rese-2-name").innerHTML = "Skoob";

            var bookLinkRese2 = "https://www.skoob.com.br/livro/resenhas/3511/edicao:4461"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Adoro coletâneas, antologias e livros com listas. É uma forma de conhecer um pouco da literatura de um certo escritor antes de procurar a obra completa, é por o dedo na água antes de pular na piscina. Mas existem livros, como esse, que dão um excelente panorama literário. E que panorama! Ao longo desses quase 3 anos que estive acompanhada por este livro - às vezes, lia mais, outras menos -, a qualidade foi o guia (salvo uma exceção). A única coisa que me fez falta foi uma maior diversidade de vozes, característica marcante da nossa cultura. Dos 100 contos, no entanto, substituiria somente 1. O que me faz pensar que 100 é um número bastante ingrato para tentar abarcar a quantidade de Brasis que cabem dentro desse território de dimensões continentais. Seria necessário muitos contos a mais.";
        break; // ´é switch case precisa ter no final

        case 'NQSCV': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Não quero ser como você"; // coloca o nome do livro

            var bookImg =  "images/Home/home-brazil-quero.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "5 setembro 2022";
            document.getElementById("book-genre").innerHTML = "Romance e LGBTQIA+";
            document.getElementById("book-author").innerHTML = "Vinicius Fernandes";

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

            document.getElementById("book-text").innerHTML = "Lucas há tempos se fechou para o amor. Na rotina agitada do psicólogo gato e bem-sucedido, só há espaço para encontros casuais, desde que não durem mais de uma noite. Já Gabriel é o romantismo em pessoa. Mesmo já tendo quebrado a cara algumas vezes, ele sonha em encontrar um grande amor, daquele tipo que faz os olhos revirarem. É claro que as histórias dos dois vão se encontrar... Mas até que ponto duas pessoas tão diferentes podem ser felizes? Uma hora você percebe que a vida não é um conto de fadas (nem perto disso!), e é preciso amadurecer. Mas, também, chega um momento em que você tem que abrir a porta e deixar alguém entrar. Será que ambos estão dispostos a isso?";

            var bookLinkAmazon = "https://www.amazon.com.br/N%C3%A3o-quero-ser-como-voc%C3%AA/dp/6555662603";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "224";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "5 setembro 2022";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Astral Cultural";
            document.getElementById("book-height").innerHTML = "16 x 1.6 x 23 cm";
            document.getElementById("book-kid").innerHTML = "+16 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Hosperia de Palavras";

            var bookLinkRese1 = "https://hospedariadepalavras.blogspot.com/2014/09/os-100-melhores-contos-brasileiros-do.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "4,7 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Separado por décadas, com exceção do primeiro bloco que abrangeu 30 anos, a coleção de contos passeia por uma transformação histórica - cultural - social visível e palpável. Desde a forma de se escrever até o conteúdo abordado nas histórias relatadas, podemos ter uma visão panorâmica do século XX. Para mim, uma desvantagem que me levou a demorar meses para terminar este livro é que não é uma história contínua, mas uma série de contos, o que quebra um pouco o ritmo de leitura, mata a curiosidade de saber mais. Porém, são histórias interessantíssimas e vale a pena conhecer.";
            

            document.getElementById("rese-2-name").innerHTML = "Skoob";

            var bookLinkRese2 = "https://www.skoob.com.br/livro/resenhas/3511/edicao:4461"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "4,1 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Adoro coletâneas, antologias e livros com listas. É uma forma de conhecer um pouco da literatura de um certo escritor antes de procurar a obra completa, é por o dedo na água antes de pular na piscina. Mas existem livros, como esse, que dão um excelente panorama literário. E que panorama! Ao longo desses quase 3 anos que estive acompanhada por este livro - às vezes, lia mais, outras menos -, a qualidade foi o guia (salvo uma exceção). A única coisa que me fez falta foi uma maior diversidade de vozes, característica marcante da nossa cultura. Dos 100 contos, no entanto, substituiria somente 1. O que me faz pensar que 100 é um número bastante ingrato para tentar abarcar a quantidade de Brasis que cabem dentro desse território de dimensões continentais. Seria necessário muitos contos a mais.";
        break; // ´é switch case precisa ter no final

        case 'QE': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Querido ex"; // coloca o nome do livro

            var bookImg =  "images/Home/home-brazil-ex.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "28 setembro 2020";
            document.getElementById("book-genre").innerHTML = "Romance e LGBTQIA+";
            document.getElementById("book-author").innerHTML = "Juan Jullian";

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

            document.getElementById("book-text").innerHTML = "A única coisa pior e mais desastrosa do que levar um pé na bunda, é levar um pé na bunda e ver seu ex se tornar a maior subcelebridade do Brasil. Não só isso, mas assistir em tempo real enquanto ele se apaixona por outro cara em TV nacional. Poucas palavras conseguem expressar esse nível de decepção amorosa. Nem mesmo Taylor Swift seria capaz de entender. Mas é justamente a tentativa de colocar a dor em palavras, reunidas em cartas para o maldito ex, que faz com que nosso protagonista repense algumas coisas. Entre crises de luto e saudades, existem festas anuais do dia dos ex-namorados com todas as suas amigas que o seu ex detestava. Existe a vida que você deixou para trás enquanto amava alguém que agora é somente um estranho com milhões de seguidores. E talvez por trás daquele amor existisse também um tanto de controle, de gaslighting, de codependência. Além de abordar de forma crua as diferentes nuances de um relacionamento abusivo, Querido ex também traz questionamentos sobre os preconceitos sociais que jovens negros e gays estão sujeitos em nossa sociedade.";

            var bookLinkAmazon = "https://www.amazon.com.br/Querido-ex-Juan-Jullian/dp/8501118907";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/juan-jullian/querido-ex/2477403127"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "176";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "28 setembro 2020";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Galera";
            document.getElementById("book-height").innerHTML = "20.2 x 13.6 x 1.2 cm";
            document.getElementById("book-kid").innerHTML = "+16 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Queria estar lendo";

            var bookLinkRese1 = "https://www.queriaestarlendo.com.br/2019/09/resenha-querido-ex_18.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "3,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "As cartas contam não só sobre como o protagonista se sentia em relação ao querido ex, mas falam também sobre o dia-a-dia do personagem, sobre como ele se sente em relação às outras pessoas que estão ao seu redor. Ele inclusive começa a relatar como tem sido conhecer outra pessoa. Essa parte eu me identifiquei muito, porque depois de uma relação falida, você começa mesmo a traçar comparativos para ver se não está caindo no mesmo erro, rs. O fim do livro é uma reviravolta total, vários fatos antes não ditos são colocados à mesa e no último capítulo o meu ar sumiu. Em resumo, Querido Ex, é daqueles livros que começam meio mornos e vão embalando com o passar dos capítulos e por conta da linguagem fácil, nem pensei em desistir. Juan conseguiu encerrar a história com um final surpreendente, o que pra mim foi o que salvou o livro de não ser uma decepção completa.";
            

            document.getElementById("rese-2-name").innerHTML = "Imersão Literária";

            var bookLinkRese2 = "https://www.imersaoliteraria.com.br/2020/12/resenha-querido-ex.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Querendo ou não o livro representa muitos relacionamentos que já aconteceram e ainda existem. O remetente expõe seu ex namoro onde era exigido um padrão no relacionamento mesmo quando parecia haver diversidade. O autor é negro e gay, assim como o protagonista da história, e há uma cobrança no relacionamento mencionado, como por exemplo: se portar conforme a sociedade exige. Uma verdade difícil de ser digerida, ainda vivemos em um mundo que tem tais exigências. A leitura ensina, diverte e trás uma faceta de um relacionamento fracassado que pouco vemos, mas que existe por aí. Não vemos só o fracasso, aprendemos também sobre amor-próprio e o luto, apesar das dificuldades. Nos inícios de capítulo há alguns trechos de músicas que combinam com os relatos. Eu adoro quando há menções musicais, referências e afins. Tantos nessas menções quanto dentro das cartas, podemos encontrar outras referências pops que complementam a leitura.";
        break; // ´é switch case precisa ter no final

        case 'UMDFF': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Um milhão de finais felizes"; // coloca o nome do livro

            var bookImg =  "images/Home/home-brazil-finais.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "16 julho 2018";
            document.getElementById("book-genre").innerHTML = "Romance e LGBTQIA+";
            document.getElementById("book-author").innerHTML = "Vitor Martins";

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

            document.getElementById("book-text").innerHTML = "Jonas não sabe muito bem o que fazer da vida. Entre suas leituras e ideias para livros anotadas em um caderninho de bolso, ele precisa dar conta de seus turnos no Rocket Café e ainda lidar com o conservadorismo de seus pais. Sua mãe alimenta a esperança de que ele volte a frequentar a igreja, e seu pai não faz muito por ele além de trazer problemas. Mas é quando conhece Arthur, um belo garoto de barba ruiva, que Jonas passa a questionar por quanto tempo conseguirá viver sob as expectativas de seus pais, fingindo ser uma pessoa diferente de quem é de verdade. Buscando conforto em seus amigos (e na sua história sobre dois piratas bonitões que se parecem muito com ele e Arthur), Jonas entenderá o verdadeiro significado de família e amizade, e descobrirá o poder de uma boa história.";

            var bookLinkAmazon = "https://www.amazon.com.br/milh%C3%A3o-finais-felizes-Vitor-Martins/dp/8525065374";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/vitor-martins/um-milhao-de-finais-felizes/1517681488"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "176";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "16 julho 2018";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Alt";
            document.getElementById("book-height").innerHTML = "13.97 x 2.01 x 20.96 cm";
            document.getElementById("book-kid").innerHTML = "+16 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Queria estar lendo";

            var bookLinkRese1 = "https://www.queriaestarlendo.com.br/2018/09/resenha-um-milhao-de-finais-felizes.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "No quadro de coadjuvantes, as histórias paralelas que permeiam a do Jonas são complementos bem-vindos que enriquecem o livro. Karina, sua colega de trabalho, foi minha favorita em disparada. Cheia de personalidade e atitude, é uma atriz recém-formada com o sonho de seguir carreira e a determinação para fazer isso acontecer. Eu amei a amizade estabelecida entre os dois e como ela cresceu até uma irmandade e companheirismo lindos de ler. Danilo e Isadora, outros dois amigos do Jonas, também têm momentos importantes. Danilo principalmente, já que ele está lá pelo Jonas o tempo todo - com seus dramas individuais e problemas românticos; vou falar que o Danilo foi uma das POC mais adoráveis que já li e queria poder abraçar esse menino pra sempre. Isadora, por outro lado... Por boa parte da história, eu só queria dar um empurrão. Depois de entender algumas atitudes dela, a simpatia voltou. Toda a questão do significado de 'família' e 'lar' permeiam os questionamentos e as situações vividas pelo Jonas. Conforme a sua jornada avança, conforme coisas boas e ruins acontecem em sua rotina, seus pensamentos começam a se ordenar para entender o que significa quando seu coração pertence a um lugar ou a um grupo de pessoas; qual o real significado de família em tudo o que ele viveu, vive e ainda vai viver.";
            

            document.getElementById("rese-2-name").innerHTML = "Blog sem Serifa";

            var bookLinkRese2 = "https://blogsemserifa.com/2018/07/20/um-milhao-de-finais-felizes/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "O resto do livro é narrado em primeira pessoa, com o mesmo estilo coloquial e bem-humorado do livro anterior do autor, embora este lide com alguns temas mais pesados e consequentemente também tenha momentos de reflexão interior muito bonitos. Há muitas referências de cultura pop, também, o que deixa a obra bem contemporânea (e dá aquela sensação de que Jonas e cia. realmente existem). Minha maior crítica ao livro é o fato de abordar a temática PIRATAS GAYS e não haver uma única menção a BLACK SAILS, a melhor série sobre piratas LGBT da HISTÓRIA DA TELEVISÃO. Mas vou relevar, já que curti tanto o resto da obra.";
        break; // ´é switch case precisa ter no final

        case 'EAQA': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "É assim que acaba"; // coloca o nome do livro

            var bookImg =  "images/Home/home-popullar-acaba.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "18 janeiro 2018";
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

            document.getElementById("book-text").innerHTML = "Em É assim que acaba, Colleen Hoover nos apresenta Lily, uma jovem que se mudou de uma cidadezinha do Maine para Boston, se formou em marketing e abriu a própria floricultura. E é em um dos terraços de Boston que ela conhece Ryle, um neurocirurgião confiante, teimoso e talvez até um pouco arrogante, com uma grande aversão a relacionamentos, mas que se sente muito atraído por ela. Quando os dois se apaixonam, Lily se vê no meio de um relacionamento turbulento que não é o que ela esperava. Mas será que ela conseguirá enxergar isso, por mais doloroso que seja? É assim que acaba é uma narrativa poderosa sobre a força necessária para fazer as escolhas certas nas situações mais difíceis. Considerada a obra mais pessoal de Hoover, o livro aborda sem medo alguns tabus da sociedade para explorar a complexidade das relações tóxicas, e como o amor e o abuso muitas vezes coexistem em uma confusão de sentimentos.";

            var bookLinkAmazon = "https://www.amazon.com.br/Assim-que-Acaba-Colleen-Hoover/dp/8501112518";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/hoover-colleen/e-assim-que-acaba/3070764009"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "368";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "18 janeiro 2018";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Galera";
            document.getElementById("book-height").innerHTML = "20.6 x 13.4 x 2.2 cm";
            document.getElementById("book-kid").innerHTML = "+13 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Minha vida literária";

            var bookLinkRese1 = "https://www.minhavidaliteraria.com.br/2018/11/30/resenha-e-assim-que-acaba-colleen-hoover/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "4,9 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Acredito que o trunfo de Colleen Hoover foi o fato de ter vivido muito do que foi narrado. Essa é uma história extremamente pessoal para a autora, que a forçou a se colocar no centro dos fatos, alterando sua perspectiva até então. Assim, É Assim Que Acaba traz, acima de tudo, verdade no que é contado, o que faz do livro tão verdadeiro e impactante. Por algum motivo, É Assim Que Acaba não figurou entre meus favoritos da autora, mesmo que eu tenha adorado a leitura. Ao mesmo passo em que me envolvi e li praticamente sem interrupções, também não sofri abalos emocionais com a leitura, salvo determinadas passagens. Dessa maneira, adorei o livro, mas não fui impactada como outras obras de Hoover me impactaram. Ainda assim, aplaudi a autora por ter tocado em uma temática tão relevante de maneira tão sensível e empática. E se praticamente não derrubei lágrimas ao longo da leitura, sua nota final me tocou profundamente e aí sim destruiu minhas comportas. Sentir seu relato e partilhar de suas ponderações foi essencial para enxergar o quanto ele baseia a estrutura de É Assim Que Acaba e admirei Colleen Hoover ainda mais por sua coragem em se permitir desenvolver algo tão intimamente doloroso.";
            

            document.getElementById("rese-2-name").innerHTML = "Hospício Nerd";

            var bookLinkRese2 = "https://hospicionerd.com.br/e-assim-que-acaba-colleen-hoover-resenha-literaria/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Esse foi o primeiro livro que li da autora, me apaixonei assim que vi a capa rosa com flores. Ganhei de presente do meu namorado e comecei a ler na hora, em menos de uma semana já tinha terminado e dei 5 estrelas sem pensar duas vezes, e com certeza leria tudo de novo mais mil vezes. Confesso que alguns capítulos foram meio difíceis de ler por conta das cenas de violência, mas a forma como a Colleen escreve de uma maneira que faz você entender como a personagem se sentiu deixa tudo mais tranquilo. O livro ajuda na prática de empatia que faz você enxergar que nem sempre o agressor é o vilão, obviamente ele esta errado mas tem toda uma história por tras, e saber disso é muito interessante. Chorei nos últimos capítulos e chorei o dobro no final. E que final… Indico esse livro para qualquer tipo de pessoa, tanto os viciados em romance quanto os amantes por terror, é muito gostosa a leitura e muito emocionante cada palavra. Indico muito!! Se vocês lerem e gostarem me contem em.";
        break; // ´é switch case precisa ter no final
        
        case 'ANM': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Admirável mundo novo"; // coloca o nome do livro

            var bookImg =  "images/Home/home-popullar-mundo.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "1 janeiro 2014";
            document.getElementById("book-genre").innerHTML = "Romance e Ficção";
            document.getElementById("book-author").innerHTML = "Aldous Leonard Huxley";

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

            document.getElementById("book-text").innerHTML = "Em uma sociedade organizada segundo princípios estritamente científicos, Bernard Marx, um psicólogo, sente-se inadequado quando se compara aos outros seres de sua casta. Ao descobrir uma “reserva histórica” que preserva costumes de uma sociedade anterior – muito semelhante à do leitor – Bernard vai perceber as diferenças entre esta civilização e a sua – e a partir de um sentimento de inconformismo ele desafiará o mundo. A história de Bernard se passa em um ambiente em que a literatura, a música e o cinema só têm a função de solidificar a alienação; um universo que louva o avanço da técnica, a produção em série, a uniformidade contra a diversidade. Muitas das previsões de Huxley vieram a ser confirmadas anos mais tarde, como a tecnologia reprodutiva, as supostas técnicas de aprendizado durante o sono e a manipulação pelo condicionamento psicológico.";

            var bookLinkAmazon = "https://www.amazon.com.br/Admir%C3%A1vel-mundo-Aldous-Leonard-Huxley/dp/8525056006";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/admiravel-mundo-novo/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/aldous-huxley/admiravel-mundo-novo/1710802787"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "312";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "1 janeiro 2014";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Biblioteca Azul";
            document.getElementById("book-height").innerHTML = "13.97 x 1.75 x 21.59 cm";
            document.getElementById("book-kid").innerHTML = "+18 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Bons livros para ler";

            var bookLinkRese1 = "https://www.bonslivrosparaler.com.br/livros/resenhas/admiravel-mundo-novo/5202"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "4,9 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Um dos princípios mais profundos nos quais se baseia a Utopia é o conceito de história. As pessoas têm um conhecimento do passado, de modo que elas não serão capazes de comparar o presente com qualquer coisa que possa mudar o presente. Outro princípio é que as pessoas não devem ter emoções. A felicidade cega é necessária para a estabilidade. E para alcançar a felicidade, é dever abrir mão da ciência, da arte, da religião e de outras coisas que valorizamos no mundo real. Uma das coisas que garantem essa felicidade é uma droga chamada soma, que acalma o indivíduo alterando a sua sensibilidade, mas sem deixá-lo de ressaca.";
            

            document.getElementById("rese-2-name").innerHTML = "Leitora viciada";

            var bookLinkRese2 = "https://www.leitoraviciada.com/2018/05/admiravel-mundo-novo.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Por fim, acredito que o que Huxley mais quis enfatizar foi: até onde a ciência e a tecnologia, nas mãos dos governantes, podem ter a palavra final sobre a vida dos homens? O condicionamento psicológico e biológico, no ápice da sua precisão, entretanto, falha diversas vezes – como é atestado no livro. E quando falha, uma vez que esses destoantes (por seus motivos pessoais) escapam desses condicionamentos, conseguindo ver por trás de toda essa maquiagem, indo em direção contrária à do rebanho começam questionar tudo e todos. O que nos indica que Huxley, pelo menos àquela altura, acreditava que por trás de tudo aquilo (e tudo isso) existia (e existe), à parte, uma natureza humana. Talvez até indomável.";
        break; // ´é switch case precisa ter no final

        case 'VBSA': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Vermelho, branco e sangue azul"; // coloca o nome do livro

            var bookImg =  "images/Home/home-popullar-royal.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "1 janeiro 2014";
            document.getElementById("book-genre").innerHTML = "Romance e LGBTQIA+";
            document.getElementById("book-author").innerHTML = "Casey McQuiston";

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

            document.getElementById("book-text").innerHTML = "Quando sua mãe foi eleita presidenta dos Estados Unidos, Alex Claremont-Diaz se tornou o novo queridinho da mídia norte-americana. Bonito, carismático e com personalidade forte, Alex tem tudo para seguir os passos de seus pais e conquistar uma carreira na política, como tanto deseja. Mas quando sua família é convidada para o casamento real do príncipe britânico Philip, Alex tem que encarar o seu primeiro desafio diplomático: lidar com Henry, irmão mais novo de Philip, o príncipe mais adorado do mundo, com quem ele é constantemente comparado ― e que ele não suporta. O encontro entre os dois sai pior do que o esperado, e no dia seguinte todos os jornais do mundo estampam fotos de Alex e Henry caídos em cima do bolo real, insinuando uma briga séria entre os dois. Para evitar um desastre diplomático, eles passam um fim de semana fingindo ser melhores amigos e não demora para que essa relação evolua para algo que nenhum dos dois poderia imaginar ― e que não tem nenhuma chance de dar certo. Ou tem?";

            var bookLinkAmazon = "https://www.amazon.com.br/Vermelho-branco-sangue-Casey-McQuiston/dp/8555340942";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/vermelho--branco-e-sangue-azul/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/casey-mcquiston/vermelho-branco-e-sangue-azul/3602728505"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "392";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "4 novembro 2019";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Seguinte";
            document.getElementById("book-height").innerHTML = "22.8 x 16 x 2.2 cm";
            document.getElementById("book-kid").innerHTML = "+18 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Queria estar lendo";

            var bookLinkRese1 = "https://www.queriaestarlendo.com.br/2019/11/resenha-vermelho-branco-e-sangue-azul.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

document.getElementById("resen-1-text").innerHTML = "Se eu tenho uma crítica a fazer pra história é um pouco sobre o tamanho dela. Apesar de a fluir muito bem e de dar gosto de acompanhar esses personagens e seu romance - bem caliente, diga-se de passagem - muitas passagens soaram um pouquinho cansativas. Os capítulos eram longos DEMAIS quando não engrenavam. Portanto, dava uma sensação de que nunca teria fim. Mas isso não tira o mérito da história e definitivamente não tira o meu amor por ela, muito pelo contrário. Apesar de demorar, eu me acostumei com o ritmo e com as descrições extensas e me apaixonei tanto pelo Alex e pelo Henry que queria que nunca tivesse fim. Sabe aquele tipo de narrativa com o tom de humor certo e as provocações e flertes na melhor medida? É o que você vai encontrar nesse livro.";
            

            document.getElementById("rese-2-name").innerHTML = "Os melhores livros";

            var bookLinkRese2 = "https://osmelhoreslivros.com.br/vermelho-branco-e-sangue-azul-resenha/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "O filho da presidenta dos Estados Unidos e o príncipe da Inglaterra juntos, é possível? No mundo de Casey McQuiston foi super possível, e muito maravilhoso de acompanhar, não apenas o romance, mas toda a narrativa que se desenvolve em torno dele. Como foi dito no início dessa resenha de Vermelho, Branco e Sangue Azul esse livro é muito importante para a comunidade LGBTQIA+ se sentir representada por um romance clichê com príncipes e um final feliz, é necessário existir essa inclusão para que essas pessoas sintam que têm um lugar no mundo e saber que é possível viver um romance clichê ao ler algo leve e divertido, que é possível fazer história e ter o seu final feliz. ";
        break; // ´é switch case precisa ter no final

        case 'APS': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "A paciente silenciosa"; // coloca o nome do livro

            var bookImg =  "images/Home/home-popullar-silenciosa.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "20 maio 2019";
            document.getElementById("book-genre").innerHTML = "Suspense";
            document.getElementById("book-author").innerHTML = "Alex Michaelides";

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

            document.getElementById("book-text").innerHTML = "Alicia Berenson tinha uma vida perfeita. Ela era uma pintora famosa casada com um fotógrafo bem-sucedido e morava numa área nobre de Londres que dá para o parque de Hampstead Heath. Certa noite, Gabriel, seu marido, voltou tarde para casa depois de um ensaio para a Vogue, e de repente a vida de Alicia mudou completamente... Alicia tinha 33 anos quando deu cinco tiros no rosto do marido, e ela nunca mais disse uma palavra. A recusa de Alicia a falar ou a dar qualquer explicação transforma essa tragédia doméstica em algo muito maior - um mistério que atrai a atenção do público e aumenta ainda mais a fama da pintora. Entretanto, enquanto seus quadros passam a ser mais valorizados que nunca, ela é levada para o Grove, um hospital psiquiátrico judiciário na zona norte de Londres. Enquanto isso, Theo Faber é um psicoterapeuta forense que espera há muito tempo por uma oportunidade de trabalhar com Alicia. Ele tem certeza de que é a pessoa certa para lidar com o caso. ";

            var bookLinkAmazon = "https://www.amazon.com.br/paciente-silenciosa-Alex-Michaelides/dp/8501116432";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/a-paciente-silenciosa-10511410/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/alex-michaelides/a-paciente-silenciosa/2704258175"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "364";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "20 maio 2019";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Record";
            document.getElementById("book-height").innerHTML = "22.8 x 15.6 x 1.8 cm";
            document.getElementById("book-kid").innerHTML = "+16 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Leitor compulsivo";

            var bookLinkRese1 = "http://leitorcompulsivo.com.br/2019/07/22/resenha-a-paciente-silenciosa-alex-michaelides/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Chama a atenção, e destaco isso como uma qualidade interessante de A Paciente Silenciosa, o fato do autor ter se debruçado sobre teses e teorias de renomados psicanalistas, psicólogos e terapeutas da área e utilizar muito bem citações e contextualizações para embasar a construção da história. O livro vai além da simples ficção ao trata-la com doses de realidade bem assentadas na bibliografia médica. Em outro lado, sua pós-graduação em roteiro de cinema fica bem explícita ao pensarmos que a construção do livro foi bem pesada para ser adaptada para os cinemas. A Paciente Silenciosa entra facilmente para aquele rol de livros escritos de forma cuidadosamente pesada para se tornarem filmes.";
            

            document.getElementById("rese-2-name").innerHTML = "Sobre leitura";

            var bookLinkRese2 = "https://www.sobrealeitura.com/2021/01/a-paciente-silenciosa-alex-michaelides.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "4,5 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "No fim das contas, os traumas de ambos podem tê-los deixados somente malucos. Como diz o livro, um bebê é uma folha branca e o que determina o que ele será é como ele é criado, mas de qualquer forma, achei as motivações e soluções muito fracas e não funcionou tão bem pra mim. O autor é roteirista, esse foi o primeiro livro dele, eu poderia tentar aliviar um pouco pra ele por isso, mas roteirista também escreve e Ali Land escreveu somente Menina boa, menina má e foi um livro que achei ótimo, então é complicado.";
        break; // ´é switch case precisa ter no final

        case 'OHDG': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "O homem de giz"; // coloca o nome do livro

            var bookImg =  "images/Home/home-popullar-giz.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "15 março 2018";
            document.getElementById("book-genre").innerHTML = "Suspense";
            document.getElementById("book-author").innerHTML = "C. J. Tudor";

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

            document.getElementById("book-text").innerHTML = "Em 1986, Eddie e os amigos passam a maior parte dos dias andando de bicicleta pela pacata vizinhança em busca de aventuras. Os desenhos a giz são seu código secreto: homenzinhos rabiscados no asfalto; mensagens que só eles entendem. Mas um desenho misterioso leva o grupo de crianças até um corpo desmembrado e espalhado em um bosque. Depois disso, nada mais é como antes. Em 2016, Eddie se esforça para superar o passado, até que um dia ele e os amigos de infância recebem um mesmo aviso: o desenho de um homem de giz enforcado. Quando um dos amigos aparece morto, Eddie tem certeza de que precisa descobrir o que de fato aconteceu trinta anos atrás. Alternando habilidosamente entre presente e passado, O Homem de Giz traz o melhor do suspense: personagens maravilhosamente construídos, mistérios de prender o fôlego e reviravoltas que vão impressionar até os leitores mais escaldados.";

            var bookLinkAmazon = "https://www.amazon.com.br/Homem-Giz-C-J-Tudor/dp/8551002937";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/o-homem-giz";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/c-j-tudor/o-homem-de-giz/3965794517"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "272";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "15 março 2018";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Intrínseca";
            document.getElementById("book-height").innerHTML = "23.6 x 16 x 2 cm";
            document.getElementById("book-kid").innerHTML = "+14 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Minha vida literária";

            var bookLinkRese1 = "https://www.minhavidaliteraria.com.br/2019/04/16/resenha-o-homem-de-giz-c-j-tudor/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "4,5 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Quando digo que o suspense não é o objetivo da leitura me refiro ao fato de C.J. Tudor desenvolver, em um primeiro plano, os conflitos internos das personagens em vez do caso do assassinato. A autora narra em detalhes o dia-a-dia das crianças e imprime uma visão muito típica dessa fase da vida, agora repensada pela maturidade do Eddie adulto. Com habilidade, ela coloca temas próprios da infância, ligados ao crescer e à perda da inocência, sem deixar de fazer críticas — como ao fervor religioso carregado de hipocrisia. É a partir dessa construção das personagens e das reflexões que Eddie faz sobre erros, causas e consequências que o suspense é criado, formando uma teia de eventos  que só pode ser visualizada em sua totalidade em um panorama geral, proporcionado ao fim da leitura, permitindo-se assim a compreensão entre cada conexão.";
            

            document.getElementById("rese-2-name").innerHTML = "Skoob";

            var bookLinkRese2 = "https://www.skoob.com.br/livro/resenhas/741746/mais-gostaram"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "3,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "O Homem de Giz tem muitas falhas, uma delas é o desenvolvimento dos personagens. Todos são absolutamente irritantes, e com exceção do protagonista são rasos e não escapam de velhos padrões do gênero. E mesmo o protagonista beirando a um bom desenvolvimento não chega lá, é clara a tentativa da autora de humanizar o personagem colocando falhas de caráter (e explicando a origem de cada uma delas) , só que não acontece uma identificação com o leitor, pois o que era pra ser sensível e real acaba simplesmente se tornando maçante.";
        break; // ´é switch case precisa ter no final

        case 'TA': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Torto arado"; // coloca o nome do livro

            var bookImg =  "images/Home/home-popullar-tortoarado.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "7 agosto 2019";
            document.getElementById("book-genre").innerHTML = "Drama";
            document.getElementById("book-author").innerHTML = "Itamar Vieira Junior";

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

            document.getElementById("book-text").innerHTML = "Um texto épico e lírico, realista e mágico que revela, para além de sua trama, um poderoso elemento de insubordinação social. Um texto épico e lírico, realista e mágico que revela, para além de sua trama, um poderoso elemento de insubordinação social. Nas profundezas do sertão baiano, as irmãs Bibiana e Belonísia encontram uma velha e misteriosa faca na mala guardada sob a cama da avó. Ocorre então um acidente. E para sempre suas vidas estarão ligadas ― a ponto de uma precisar ser a voz da outra. Numa trama conduzida com maestria e com uma prosa melodiosa, o romance conta uma história de vida e morte, de combate e redenção.";

            var bookLinkAmazon = "https://www.amazon.com.br/Torto-arado-Itamar-Vieira-Junior/dp/6580309318";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/torto-arado/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/vieira-junior-itamar/torto-arado/1711078064"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "264";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "7 agosto 2019";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Todavia";
            document.getElementById("book-height").innerHTML = "14 x 1.7 x 21 cm";
            document.getElementById("book-kid").innerHTML = "+14 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Leitor cabuloso";

            var bookLinkRese1 = "https://leitorcabuloso.com.br/2022/03/resenha-torto-arado-itamar-vieira-junior/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Só existem elogios a narrativa do Itamar Vieira Junior. Obtive reflexões e compreensões devido às críticas sociais; construí apego aos personagens com uma voz literária marcante; o cenário longe do ideal, mas com uma evolução, deram-me certo otimismo e os detalhes capazes de transformar uma leitura em lembranças geraram encanto. Desejo que todos possam ser impactados como fui com este livro. Há aqui no Leitor Cabuloso o episódio 59 do podcast Boteco dos Versados sobre a obra. Leia e ouça o cast, você vai sentir e entender parte importante da nossa realidade.";
            

            document.getElementById("rese-2-name").innerHTML = "Os melhores livros";

            var bookLinkRese2 = "https://osmelhoreslivros.com.br/torto-arado-resenha/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Junte-se a isso a figura de seu pai, Zeca Chapéu Grande, uma espécie de líder místico entre os trabalhadores da fazenda, e da sua mãe, a parteira local. Assim, temos uma trama inesquecível, com protagonistas mulheres muito fortes. A mensagem por trás da história é um tapa na cara sobre problemas que ainda hoje persistem em nosso país. E mais, prepare-se para chorar, pois Torto Arado é um romance comovente que conta uma história de vida e morte, combate e redenção, de personagens que atravessaram o tempo sem nunca conseguirem sair do anonimato.";
        break; // ´é switch case precisa ter no final

        case 'TASI': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Todas as suas (im)perfeições"; // coloca o nome do livro

            var bookImg =  "images/Home/home-popullar-imperfeicoes.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "24 julho 2019";
            document.getElementById("book-genre").innerHTML = "Romance e Drama";
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

            document.getElementById("book-text").innerHTML = "Todas as suas imperfeições narra a história de Quinn e Graham. Eles se conhecem no pior dia de suas vidas; ela chega mais cedo de uma viagem para surpreender o noivo, ele testemunha a traição da namorada. E é assim que ambos acabam no corredor de um prédio, trocando confidências, biscoitos da sorte e palavras de conforto. Fim da dança... se o destino não tivesse outros planos para os dois. Meses mais tarde, os acordes tocam para o casal mais uma vez e eles se reencontram. Graham está convencido de que são almas gêmeas. Quinn jamais se sentiu dessa forma antes. A intensidade do sentimento os assusta, mas eles mergulham de cabeça mesmo assim. O casamento é tudo o que sonhavam, a parceria perfeita. Mesmo nos momentos difíceis, sabem que podem contar com o outro. Nenhum deles desiste do amor que sentem. Até que a primeira nota dissonante abala a sinfonia do casal. Até que Quinn parece estar disposta a trocar tudo o que é pela única coisa que não consegue ser: mãe.";

            var bookLinkAmazon = "https://www.amazon.com.br/Todas-as-suas-im-perfei%C3%A7%C3%B5es/dp/8501117684";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/todas-as-suas--im-perfeicoes/p#:~:text=Todas%20as%20suas%20imperfei%C3%A7%C3%B5es%20narra,testemunha%20a%20trai%C3%A7%C3%A3o%20da%20namorada.";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/colleen-hoover/todas-as-suas-imperfeicoes/410647740#:~:text=Todas%20as%20suas%20(im)perfei%C3%A7%C3%B5es,-Colleen%20Hoover%20%7C%200&text=de%20salv%C3%A1%2Dlo.-,Todas%20as%20suas%20imperfei%C3%A7%C3%B5es%20narra%20a%20hist%C3%B3ria%20de%20Quinn%20e,testemunha%20a%20trai%C3%A7%C3%A3o%20da%20namorada."; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "304";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "24 julho 2019";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Galera";
            document.getElementById("book-height").innerHTML = "20.57 x 13.46 x 2.03 cm";
            document.getElementById("book-kid").innerHTML = "+18 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Minha vida literária";

            var bookLinkRese1 = "https://www.minhavidaliteraria.com.br/2019/12/23/resenha-todas-as-suas-imperfeicoes-colleen-hoover/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Apesar de, aqui, encontrarmos personagens mais velhos do que normalmente são os protagonistas nas obras da autora, o estilo de Colleen Hoover é inconfundível: ela sabe despertar os mais diversos sentimentos no leitor, assim como sempre oferece diálogos cativantes e relações apaixonadas entre seus protagonistas, aspectos que se fazem presente com maestria em Todas As Suas (Im)Perfeições. Além disso, o romance transborda sensibilidade ao construir as nuances da personalidade de Quinn e Graham: suas dores — e imperfeições — tornam não apenas os protagonistas reais, mas especialmente o relacionamento que vivem. É impossível não se imaginar na pele dos dois, naquele instante em que se olha para trás e se pergunta “Mas como foi que chegamos aqui?”. De maneira alguma fica um buraco na trajetória que a autora constrói; ao contrário, cada passo é tão bem dado que o casamento, mesmo se desfazendo, parece sólido a quem lê.";
            

            document.getElementById("rese-2-name").innerHTML = "Resenhando sonhos";

            var bookLinkRese2 = "https://resenhandosonhos.com/todas-as-suas-imperfeicoes-colleen-hoover/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "QUE LIVRO! Não há outra maneira de começar a tecer minha opinião acerca desta obra. É claro que nossa percepção sobre uma história varia muito de acordo com o momento em que estamos, com a nossa subjetividade, com as expectativas que criamos para aquela leitura; e sei que este livro pode não se transformar no favorito dos fãs da CoHo, assim como pode não agradar a determinadas pessoas. Mas preciso dizer o que ele fez comigo. E porque ele se tornou um dos melhores livros que já li na vida. A narrativa não linear vai mostrando a história de Quinn e Graham no passado, quando se conheceram, quando ficaram juntos, quando se apaixonaram e transformaram a relação num casamento quase perfeito. Mostra também o presente, quando os dois vivem os piores momentos de suas vidas, vendo o declínio de uma relação que já não se mantém firme mesmo que os dois ainda se amem. E é claro que até estes dois momentos se cruzarem, o leitor vai vivendo a narrativa em dois tons totalmente opostos, e vai sentindo sentimentos que fazem doer e alegram em igual medida.";
        break; // ´é switch case precisa ter no final

        case 'MQCCOL': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Mulheres que correm com os lobos"; // coloca o nome do livro

            var bookImg =  "images/Home/home-popullar-lobos.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "17 setembro 2018";
            document.getElementById("book-genre").innerHTML = "Drama";
            document.getElementById("book-author").innerHTML = "Clarissa Pinkola Estés";

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

            document.getElementById("book-text").innerHTML = "Os lobos foram pintados com um pincel negro nos contos de fada e até hoje assustam meninas indefesas. Mas nem sempre eles foram vistos como criaturas terríveis e violentas. Na Grécia antiga e em Roma, o animal era o consorte de Artemis, a caçadora, e carinhosamente amamentava os heróis. A analista junguiana Clarissa Pinkola Estés acredita que na nossa sociedade as mulheres vêm sendo tratadas de uma forma semelhante. Ao investigar o esmagamento da natureza instintiva feminina, Clarissa descobriu a chave da sensação de impotência da mulher moderna. Seu livro, Mulheres que correm com os lobos, ficou durante um ano na lista de mais vendidos nos Estados Unidos. Abordando 19 mitos, lendas e contos de fada, como a história do patinho feio e do Barba-Azul, Estés mostra como a natureza instintiva da mulher foi sendo domesticada ao longo dos tempos, num processo que punia todas aquelas que se rebelavam. Segundo a analista, a exemplo das florestas virgens e dos animais silvestres, os instintos foram devastados e os ciclos naturais femininos transformados à força em ritmos artificiais para agradar aos outros.";

            var bookLinkAmazon = "https://www.amazon.com.br/Mulheres-que-Correm-com-Lobos/dp/853252978X";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/mulheres-que-correm-com-os-lobos-mitos-e-historias-do-arquetipo-da-mulher-selvagem/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/clarissa-pinkola-estes/mulheres-que-correm-com-os-lobos/844647078"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "304";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "17 setembro 2018";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Rocco";
            document.getElementById("book-height").innerHTML = "23.6 x 16 x 3.8 cm";
            document.getElementById("book-kid").innerHTML = "+16 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "The feminist patronum";

            var bookLinkRese1 = "https://www.thefeministpatronum.com/post/resenha-mulheres-que-correm-com-os-lobos"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Clarissa Pinkola é uma psicanalista com ascendência mexicana de Swanbian que conta que sempre foi fascinada por lobos. Guardiã dos velhos costumes, ela descreve como muito de suas  histórias foram baseadas em suas crenças familiares e que seu livro foi inspirado em seu estudo sobre animais selvagens –  em especial os lobos Canis Lupus e Canis Rufus. Ela conta que sempre teve um certo fascínio pelos animais e que eles sempre apareceram para ela de alguma forma, até em sonhos. (Uma vibe bem makube, né?) Como uma boa contadora de histórias, cada capítulo conta uma história ou mais história seguida de uma análise psíquica sobre o que ele tentou mostrar para a mulher selvagem, dentro daquele contexto.";
            

            document.getElementById("rese-2-name").innerHTML = "Skoob";

            var bookLinkRese2 = "https://www.skoob.com.br/livro/resenhas/5474/mais-gostaram"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Esse livro me trouxe uma das mais importantes revelações que já tive, que a mulher da minha vida é e sempre foi uma só: a mulher livre. E que foi essa mulher que, mesmo sem saber, eu sempre busquei em minhas relações, ainda que a temesse. E que foi por ela que abandonei muitas mulheres, ao intuir, sem saber explicar nem pra mim, que eu jamais poderia ser totalmente eu ao lado de uma mulher domesticada. Porém, como aceitar e amar essa mulher liberta sem, antes, eu mesmo me libertar do que também me limitava? Pra merecê-la, eu também precisava me libertar de vez de qualquer pretensão de controlá-la, esse resquício maldito de minha herança cultural-religiosa.";
        break; // ´é switch case precisa ter no final

        case 'TER': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Tudo é rio"; // coloca o nome do livro

            var bookImg =  "images/Home/home-popullar-rio.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "8 fevereiro 2021";
            document.getElementById("book-genre").innerHTML = "Drama e Ficção";
            document.getElementById("book-author").innerHTML = "Carla Madeira";

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

            document.getElementById("book-text").innerHTML = "Com uma narrativa madura, precisa e ao mesmo tempo delicada e poética, o romance narra a história do casal Dalva e Venâncio, que tem a vida transformada após uma perda trágica, resultado do ciúme doentio do marido, e de Lucy, a prostituta mais depravada e cobiçada da cidade, que entra no caminho deles, formando um triângulo amoroso. Na orelha do livro, Martha Medeiros escreve: “Tudo é rio é uma obra-prima, e não há exagero no que afirmo. É daqueles livros que, ao ser terminado, dá vontade de começar de novo, no mesmo instante, desta vez para se demorar em cada linha, saborear cada frase, deixar-se abraçar pela poesia da prosa. Na primeira leitura, essa entrega mais lenta é quase impossível, pois a correnteza dos acontecimentos nos leva até a última página sem nos dar chance para respirar. É preciso manter-se à tona ou a gente se afoga.”";

            var bookLinkAmazon = "https://www.amazon.com.br/Tudo-%C3%A9-rio-Carla-Madeira/dp/6555871784";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/tudo-e-rio/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/carla-madeira/tudo-e-rio/3790118973"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "210";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "8 fevereiro 2021";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Record";
            document.getElementById("book-height").innerHTML = "15.5 x 1.1 x 23 cm";
            document.getElementById("book-kid").innerHTML = "+16 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Escotilha";

            var bookLinkRese1 = "https://escotilha.com.br/literatura/ponto-virgula/livro-tudo-e-rio-carla-madeira-editora-record-resenha-critica/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Inventivo na forma, o romance organiza-se por capítulos que desobedecem a ordem cronológica e vão e voltam, tal como uma série televisiva em que a câmera muda a cada cena. O tema do amor e da tragédia não tem nada de original, mas o grande trunfo de Carla Madeira é a forma pela qual sua linguagem poética, suave, nos conta essa história. Tudo é rio é uma investigação sobre a água, ou seja, sobre tudo aquilo que é tão potente que não se pode controlar. O amor, o ódio, a raiva, são sentimentos que, quando represados, tensionam o sujeito que sente e o torna cada vez mais próximo da morte. Aqui temos uma obra que permanece ressonando no leitor, mas não em sua mente racional, mas nesse intangível lugar onde mora aquilo que não conseguimos traduzir em palavras.";
            

            document.getElementById("rese-2-name").innerHTML = "Estante do vini";

            var bookLinkRese2 = "https://www.estantedovini.com.br/post/tudo-%C3%A9-rio-resenha"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Para mim a maneira em que a autora quis tratar essa situação me frustrou um pouco, a violência doméstica foi um pouco romantizada aqui, eu me senti um pouco frustrado com a resolução desse caso. Carla Madeira não trás julgamentos morais sobre esta cena e sim busca trabalhar como o leitor vai olhar para essas relações. 'Tudo é Rio' é literalmente como um rio, ele flui, pode se modificar e ganhar outros contornos ao longo do tempo, assim como a água, a obra é sobre tudo aquilo que possivelmente não se pode controlar: o amor, o ódio e a raiva, os sentimentos que tencionam o sujeito.";
        break; // ´é switch case precisa ter no final

        case 'CAS': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Simon vs. A agenda homo sapiens"; // coloca o nome do livro

            var bookImg =  "images/Home/home-adptation-simon.jpg";
            var setImg = document.getElementById("book-cover");
            setImg.setAttribute("src", bookImg);

            document.getElementById("book-data").innerHTML = "16 fevereiro 2016";
            document.getElementById("book-genre").innerHTML = "Romance e LGBTQIA+";
            document.getElementById("book-author").innerHTML = "Becky Albertalli";

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

            document.getElementById("book-text").innerHTML = "Simon tem dezesseis anos e é gay, mas ninguém sabe. Sair ou não do armário é um drama que ele prefere deixar para depois. Tudo muda quando Martin, o bobão da escola, descobre uma troca de e-mails entre Simon e um garoto misterioso que se identifica como Blue e que a cada dia faz o coração de Simon bater mais forte. Martin começa a chantageá-lo, e, se Simon não ceder, seu segredo cairá na boca de todos. Pior: sua relação com Blue poderá chegar ao fim, antes mesmo de começar. Agora, o adolescente avesso a mudanças precisará encontrar uma forma de sair de sua zona de conforto e dar uma chance à felicidade ao lado do menino mais confuso e encantador que ele já conheceu. Uma história que trata com naturalidade e bom humor de questões delicadas, explorando a difícil tarefa que é amadurecer e as mudanças e os dilemas pelos quais todos nós, adolescentes ou não, precisamos enfrentar para nos encontramos.";

            var bookLinkAmazon = "https://www.amazon.com.br/Simon-vs-Agenda-Homo-Sapiens/dp/8580578922";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/simon-vs-agenda-homo-sapiens";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/becky-albertalli/simon-vs-a-agenda-homo-sapiens/16262060"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "272";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "16 fevereiro 2016";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Intrínseca";
            document.getElementById("book-height").innerHTML = "20.6 x 14 x 1.6 cm";
            document.getElementById("book-kid").innerHTML = "+16 anos"; // idade    

            document.getElementById("rese-1-name").innerHTML = "Livros e fuxicos";

            var bookLinkRese1 = "https://www.livrosefuxicos.com/2016/03/resenha-simon-vs-agenda-homo-sapiens.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "Simplesmente amei a escrita da autora Beck Albertalli. A forma como ela conduz a história torna muito fácil gostar do Simon e da sua maneira de ver o mundo. Além disso, o fato da narrativa intercalar a descrição do dia a dia do protagonista com as trocas de e-mail entre ele e o Blue nos aproxima ainda mais desses dois jovens e de seus dilemas. Também adorei que a trama não foca exclusivamente na homossexualidade. Claro que a orientação sexual dos protagonistas faz parte da essência da história, porém o que surpreende é que além disso a autora aborda assuntos como o preconceito racial, as expectativas sociais, e os dilemas que qualquer jovem adulto enfrenta. Então o ponto é que a trama não é sobre ser gay ou não, mas sim sobre ser jovem e precisar fazer inúmeras escolhas: sair do armário ou não, manter uma amizade ou não, ser sincero com os pais ou não, beber ou não, se apaixonar ou não, praticar bullying ou não… Uma coisa que não gosto é estereótipos, então talvez seja por isso que tenha gostado tanto dessa história, porque ela é leve, juvenil, repleta de clichês e pontos de reflexão e, principalmente, de zero extremismo quando o assunto é sexualidade e juventude. Amei a forma tão sutil e verdadeira que a autora usou para abordar temas reais e complexos.";
            

            document.getElementById("rese-2-name").innerHTML = "Queria estar lendo";

            var bookLinkRese2 = "http://www.queriaestarlendo.com.br/2018/03/resenha-simon-vs-agenda-homo-sapiens.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);


            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Simon é gay, mas por enquanto ninguém além de Blue sabe disso. Blue é seu amigo virtual e crush desconhecido que Simon encontrou sem querer em um Tumblr de fofocas da escola. Mesmo sem saber sua identidade, Simon se identifica com Blue e tem essas fantasias sobre o que o futuro pode reservar para os dois caso Blue aceite sair dos e-mails para a vida real. Em meio a essa comunicação misteriosa, Simon acaba sendo chantageado por um colega de turma - que viu seus e-mails - para aproximá-lo de sua melhor amiga. As confusões estão além da escola e até mesmo da família. Estão no coração e nas incertezas de decisões que podem mudar toda a realidade de Simon.";
        break; // ´é switch case precisa ter no final

        default:

        break;
    }
}
document.addEventListener("DOMContentLoaded", function() {
    inputBook();
});