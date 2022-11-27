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

            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota
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

            var bookImg =  "images/Home/home-adptation-50.jpg";
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

            case 'A': 
            document.getElementById("book-title").innerHTML = "Amor Gelato"; 

            var bookImg =  "images/Home/home-popullar-gelato.jpg";
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

    case 'MBDG':
        document.getElementById("book-title").innerHTML = "Mil beijos de garoto"; // coloca o nome do livro

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

        default:
            break;
    }
}
document.addEventListener("DOMContentLoaded", function() {
    inputBook();
});