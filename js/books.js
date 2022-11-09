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

            case 'MCPSN': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Me Chame Pelo Seu Nome"; // coloca o nome do livro

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

            // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
            // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
            // por exemplo: 3 (set,set,set,unset,unset)
            // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

            document.getElementById("book-text").innerHTML = "A casa onde Elio passa os verões é um verdadeiro paraíso na costa italiana, parada certa de amigos, vizinhos, artistas e intelectuais de todos os lugares. Filho de um importante professor universitário, o jovem está bastante acostumado à rotina de, a cada verão, hospedar por seis semanas na villa da família um novo escritor que, em troca da boa acolhida, ajuda seu pai com correspondências e papeladas. Uma cobiçada residência literária que já atraiu muitos nomes, mas nenhum deles como Oliver. Elio imediatamente, e sem perceber, se encanta pelo americano de vinte e quatro anos, espontâneo e atraente, que aproveita a temporada para trabalhar em seu manuscrito sobre Heráclito e, sobretudo, desfrutar do verão mediterrâneo. Da antipatia impaciente que parece atravessar o convívio inicial dos dois surge uma paixão que só aumenta à medida que o instável e desconhecido terreno que os separa vai sendo vencido. Uma experiência inesquecível, que os marcará para o resto da vida. Com rara sensibilidade, André Aciman constrói uma viva e sincera elegia à paixão, em um romance no qual se reconhecem as mais delicadas e brutais emoções da juventude. Uma narrativa magnética, inquieta e profundamente tocante.";

            var bookLinkAmazon = "https://www.amazon.com.br/Me-Chame-Pelo-Seu-Nome/dp/8551002732";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/me-chame-pelo-seu-nome";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://busca.saraiva.com.br/q/me-chame-pelo-seu-nome"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "288";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "5 de janeiro de 2018";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Intrínseca";
            document.getElementById("book-height").innerHTML = "21 x 14 x 2 cm";
            document.getElementById("book-kid").innerHTML = "+14 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "Resenha dos Sonhos";

            var bookLinkRese1 = "https://resenhandosonhos.com/me-chame-pelo-seu-nome-andre-aciman/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "3,5 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-1-text").innerHTML = "Me Chame Pelo Seu Nome não foi um livro excepcional pra mim, mas certamente suscitou uma série de debates internos que eu me confrontei e aceitei durante a leitura. E, com relação ao formato do livro, pode até soar um sacrilégio para alguns, mas dadas as devidas proporções e contexto, a forma como a narrativa é apresentada me lembrou bastante O Apanhador no Campo de Centeio, livro que também marcou a sua época por apresentar um jovem com atitudes e pensamentos pouco controlados pelas normas sociais, gerando uma expressão mais fiel dessa idade. Eu ainda não assisti ao filme, mas pretendo fazer isso em breve para ter o total contato com a obra e descobrir se vou repetir algumas reações com a adaptação. Acho que é uma leitura que, por despertar tantas questões e gerar identificação com uns e a indignação de outros, vale a tentativa pela experiência e pra descobrir como ela vai funcionar pra você. Só tenha em mente todos os aspectos e vá para aproveitar a jonada.";
            
            document.getElementById("rese-2-name").innerHTML = "Janela Literária";

            var bookLinkRese2 = "https://www.janelaliteraria.com.br/2020/06/me-chame-pelo-seu-nome.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-2-text").innerHTML = "O livro trata do descobrimento da homossexualidade em uma época em que o mundo ainda andava em passos curtos em direcao a aceitação. No romance o autor trata esse assunto de maneira bem leve, e discreta, e de certa maneira, fácil para o protagonista. Pois ele não tem grandes barreiras na família para enfrentar. Contudo, o tema é tratado com Oliver, que abidica de seus desejos para seguir um padrão mais seguro. A grande sacada do romance são as dúvidas e angústias da descoberta da sexualidade, das angústias de um amor diferente ao imposto pela sociedade. Quem já passou por algo parecido fica surpreso como o autor consegue nos remeter a nossas vidas, dúvidas e medos. O livro é um marco para a luta GLBT por simplesmente levar milhões de pessoas a encarar o tema! Queria no cinema ou através do livro.";
            break; // ´é switch case precisa ter no final

            case 'OEP': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Orgulho e Preconceito"; // coloca o nome do livro

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

            // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
            // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
            // por exemplo: 3 (set,set,set,unset,unset)
            // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

            document.getElementById("book-text").innerHTML = "Orgulho e preconceito é o livro mais famoso de Jane Austen e possui uma série de personagens inesquecíveis e um enredo memorável. Austen nos apresenta Elizabeth Bennet como heroína irresistível e seu pretendente aristocrático, o sr. Darcy. Nesse livro, aspectos diferentes são abordados: orgulho encontra preconceito, ascendência social confronta desprezo social, equívocos e julgamentos antecipados conduzem alguns personagens ao sofrimento e ao escândalo. O livro pode ser considerado a obra-prima da escritora, que equilibra comédia com seriedade, observação meticulosa das atitudes humanas e sua ironia refinada. A nova coleção possui capa dura e estilo inspirado nos bullet journals.";

            var bookLinkAmazon = "https://www.amazon.com.br/Orgulho-Preconceito-Jane-Austen/dp/8544001823";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/orgulho-e-preconceito-9038925/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/jane-austen/orgulho-e-preconceito/3125909548"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "424";  //as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "12 abril de 2018";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Martin Claret";
            document.getElementById("book-height").innerHTML = "21.4 x 13.6 x 2.8 cm";
            document.getElementById("book-kid").innerHTML = "+13 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "Livros e Fuxicos";

            var bookLinkRese1 = "https://www.livrosefuxicos.com/2012/02/resenha-orgulho-e-preconceito-jane.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-1-text").innerHTML = "O amadurecimento dos personagens, os encontros e desencontros, os diálogos engraçados e as leves críticas sociais feitas a época dão a narrativa de Jane Austen um caráter único, envolvente, delicioso. O Sr. Darcy nos mostra a força do amor, tudo isso de uma forma viva e real. Por ele continuamos a ter esperança no amor, nas mudanças que esse sentimento é capaz de fazer. Mesmo sendo um clássico a trama é atual, abordando o preconceito de uma forma que perdura até hoje. Com boas doses de emoção, divertimento e inteligência, “Orgulho e Preconceito” é uma obra completa e envolvente, que além de descrever a grandiosidade do amor, demonstra com destreza as surpresas que a vida tende a nos reservar.";
            
            document.getElementById("rese-2-name").innerHTML = "Literatura";

            var bookLinkRese2 = "https://www.literaturablog.com/resenha-orgulho-e-preconceito-de-jane-austen/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-2-text").innerHTML = "Orgulho e Preconceito é aquele livro que me faz sorrir logo nas primeiras páginas. Eu sempre releio um trecho ou outro, mas só recentemente, com a publicação da edição (incrivelmente maravilhosa) da Antofágica, decidi relê-lo inteiramente, sem pular nenhuma partezinha. Fiquei surpresa com trechos que havia esquecido ou que guardava apenas o diálogo conforme o filme de 2005, que altera algumas coisas em comparação ao livro. Vieram até algumas memórias da série da BBC (1995), que eu não revejo faz algum tempo. E vontade de assistir versões de outros anos, versões recontadas (minha favorita é Bride and Prejudice, que resenhei aqui) e até alguns filmes que fazem referência ao clássico de Austen. Vocês já entenderam que eu não queria deixar Longbourn por nada nessa vida, certo? A menos que fosse para um baile em Netherfield ou uma visitinha a Pemberley.";
            break; // ´é switch case precisa ter no final

            case 'D': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Duna"; // coloca o nome do livro

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

            // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
            // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
            // por exemplo: 3 (set,set,set,unset,unset)
            // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

            document.getElementById("book-text").innerHTML = "Uma estonteante mistura de aventura e misticismo, ecologia e política, este romance ganhador dos prêmios Hugo e Nebula deu início a uma das mais épicas histórias de toda a ficção científica. Duna é um triunfo da imaginação, que influenciará a literatura para sempre.Esta edição inédita, com introdução de Neil Gaiman, apresenta ao leitor o universo fantástico criado por Herbert e que será adaptado ao cinema por Denis Villeneuve, diretor de A chegada e de Blade Runner 2049.";

            var bookLinkAmazon = "https://www.amazon.com.br/Duna-Frank-Herbert/dp/857657313X";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/livro-duna-frank-herbert";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://busca.saraiva.com.br/q/livro-duna-frank-herbert"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "680"; //as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "28 abril de 2017";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Editora Aleph";
            document.getElementById("book-height").innerHTML = "23.4 x 16.4 x 4.2 cm";
            document.getElementById("book-kid").innerHTML = "+15 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "Poltrona Nerd";

            var bookLinkRese1 = "https://poltronanerd.com.br/livros/resenha-duna-de-frank-herbert-72635"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "4,5 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-1-text").innerHTML = "Pode parecer muita informação, e é mesmo. Herbert segue a escola de Tolkien (autor de O Senhor dos Anéis), explicando muito pouco e deixando a ambientação e a imaginação do leitor tomar conta. No final existem apêndices e um glosário, mas não são tão necessários para uma compreensão da história. O importante é deixar a ambientação e a história levar você. São grandes personagens e um cenário muito rico e criativo, com elementos de fantasia medieval e ficção científica. Pensem numa mistura de O Senhor dos Anéis, com Game of Thrones, Star Wars e As Mil e Uma Noites. Se existe algum problema nesse livro é que parece que a história demora para engrenar. O Herbert não tem medo de primeiro apresentar seu cenários e personagens, antes de começar com os conflitos. Isso torna o início do livro um pouco arrastado. Mas quando engrena.";
            
            document.getElementById("rese-2-name").innerHTML = "Queria Estar Lendo";

            var bookLinkRese2 = "https://www.queriaestarlendo.com.br/2021/10/resenha-duna-frank-herbert.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-2-text").innerHTML = "Tem tanta coisa em Duna que é difícil resenhar sem falar demais sobre a história; uma coisa que achei interessante é que o autor não faz segredo do que vai acontecer. Se tem uma traição para rolar, ele fala para que a gente esteja ciente dela vários capítulos antes do acontecimento. Se tem uma morte, ela acontece e pronto. Se tem uma reviravolta, você sabe que ela está vindo pelo tom da narrativa. Gostei porque, apesar de não ter o elemento da surpresa, tem a tensão. E ela é muito bem trabalhada. O que não ajudou esse livro a se tornar um dos meus favoritos foi o quanto ele era truncado em algumas partes. Vários capítulos passavam sem que eu visse as páginas andando, outros demoravam horas para acabar e eu não aguentava mais lê-los. Esse vai e volta de ritmo narrativo acabou enroscando demais, principalmente no final da leitura - que deveria ter sido a mais descarga de adrenalina, com tudo que estava acontecendo.";
            break; // ´é switch case precisa ter no final

            case 'CDP': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Caixa de Pássaros"; // coloca o nome do livro

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

            // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
            // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
            // por exemplo: 3 (set,set,set,unset,unset)
            // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

            document.getElementById("book-text").innerHTML = "Romance de estreia de Josh Malerman, Caixa de pássaros é um thriller psicológico tenso e aterrorizante, que explora a essência do medo. Uma história que vai deixar o leitor completamente sem fôlego mesmo depois de terminar de ler.Basta uma olhadela para desencadear um impulso violento e incontrolável que acabará em suicídio. Ninguém é imune e ninguém sabe o que provoca essa reação nas pessoas. Cinco anos depois do surto ter começado, restaram poucos sobreviventes, entre eles Malorie e dois filhos pequenos. Ela sonha em fugir para um local onde a família possa ficar em segurança, mas a viagem que tem pela frente é assustadora: uma decisão errada e eles morrerão.“Malerman usa a narrativa alusiva para criar um thriller fascinante que os fãs de Stephen King vão adorar.”Publishers Weekly“Deve ser lido de uma só vez. Ninguém ainda havia escrito uma história de terror como essa.";

            var bookLinkAmazon = "https://www.amazon.com.br/Caixa-Pássaros-Josh-Malerman/dp/8580576520";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/livro-caixa-passaros";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://busca.saraiva.com.br/q/livro-caixa-passaros"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "272"; //as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "26 janeiro de 2015 ";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Intrínseca";
            document.getElementById("book-height").innerHTML = "23.4 x 16.4 x 4.2 cm";
            document.getElementById("book-kid").innerHTML = "+15 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "Sobre Livros";

            var bookLinkRese1 = "https://www.sobrelivros.com.br/resenha-caixa-de-passaros-josh-malerman/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-1-text").innerHTML = "Duvido que exista alguma pessoa que leu a sinopse desse livro e que não ficou tremendamente curioso. Quando peguei o livro para ler pensei que das duas, uma: Ou o livro seria incrível ou o autor se atrapalharia ao revelar o grande mistério. A saída que Malerman escolheu para finalizar o livro foi brilhante – não vou comentar mais para não soltar spoiler, mas quem quiser conversar comigo sobre esses pontos, vamos conversar aqui nos comentários (mas coloque um aviso de spoiler, ok?). A edição da Intrínseca está arrepiante! A capa incorpora a atmosfera do livro, todo início de capítulo tem a página decorada. As páginas são amareladas e a fonte confortável. São 268 páginas de muita adrenalina.";
            
            document.getElementById("rese-2-name").innerHTML = "Ficções Humanas";

            var bookLinkRese2 = "https://www.ficcoeshumanas.com.br/post/resenha-caixa-de-pássaros-de-josh-malerman"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-2-text").innerHTML = "Caixa de Pássaros é uma excelente estréia e mostra um autor preocupado em estabelecer a sua identidade diante dos leitores. Uma narrativa marcada por uma claustrofobia extrema (em vários momentos nos sentimos amarrados e presos) em um mundo onde as pessoas não podem ver, caso contrário podem acabar sendo mortas. Temos uma mãe lutando por sua sobrevivência e a de seus filhos e tenta encontrar algum lugar que possa servir de abrigo e quem sabe fornecer alguma lembrança de uma vida melhor. ";
            break; // ´é switch case precisa ter no final

            case 'ACPDV': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "A Cinco Passos de Você"; // coloca o nome do livro

            var bookImg =  "images/Home/home-adptation-cinco.jpg";
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

            // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
            // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
            // por exemplo: 3 (set,set,set,unset,unset)
            // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

            document.getElementById("book-text").innerHTML = "Stella Grant gosta de estar no controle. Ela parece ser uma adolescente típica, mas em sua rotina há listas de tarefas e inúmeros remédios que ela deve tomar para controlar a fibrose cística, uma doença crônica que impede que seus pulmões funcionem como deveriam. Suas prioridades são manter seus pais felizes e conseguir um transplante – e uma coisa não existe sem a outra. Mas para ganhar pulmões novos, Stella precisa seguir seu tratamento à risca e eliminar qualquer chance de infecção, o que significa que ela não pode ficar a menos que dois metros de distância – ou seis passos – de outros pacientes com a doença. O primeiro item é fácil para ela, mas o segundo pode se provar mais difícil do que ela esperava. O único controle que Will Newman deseja é o de sua própria vida. Ele não dá a mínima para o novo tratamento experimental para o qual foi selecionado e não aguenta mais a pressão de sua mãe para que melhore. Prestes a completar dezoito anos, ele mal pode esperar para finalmente se livrar das máquinas e hospitais, usando o pouco de vida que ainda lhe resta para conhecer o mundo. Stella e Will são muito diferentes. Ao mesmo tempo, a doença que os une não é a única coisa que têm em comum. Eles têm que ficar a cinco passos um do outro, mas, conforme a conexão entre os dois aumenta, a vontade de burlar a distância física parece insuportável. Um grande amor vale um passo roubado?";

            var bookLinkAmazon = "https://www.amazon.com.br/cinco-passos-você-Rachael-Lippincott/dp/8525067423";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/5-passos-voce";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/rachael-lippincott/a-cinco-passos-de-voce/1348609223"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "288"; //as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "25 fevereiro de 2019";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "ALT";
            document.getElementById("book-height").innerHTML = "23.4 x 16.4 x 4.2 cm";
            document.getElementById("book-kid").innerHTML = "+10 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "Voando com Livros";

            var bookLinkRese1 = "https://www.voandocomlivros.com/post/a-cinco-passos-de-voce-resenha"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-1-text").innerHTML = "Os personagens são super fofinhos, a leitura é bem fácil. Além de aumentar a conscientização da FC, a história também aborda problemas familiares, homossexualidade, valoriza a amizade e a importância do amor. A cinco passos de você não carrega uma bela narrativa e também peca no desfecho, mesmo assim é emocionante. Algumas partes mexeram bastante comigo e as lágrimas rolaram sim, haha... quem nunca neh?";
            
            document.getElementById("rese-2-name").innerHTML = "Berço Literário";

            var bookLinkRese2 = "https://bercoliterario.wordpress.com/2021/01/20/resenha-a-cinco-passos-de-voce-rachael-lippincott-mikki-daughtry-e-tobias-iaconis/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-2-text").innerHTML = "Por mais que seja um sick-lit, confesso que esse foi mas levinho. Foi uma leitura que me trouxe mais reflexões, que aqueceu o meu coração. É uma história que fala sobre a importância da família, amigos, da esperança e de acreditar que mesmo estando em uma situação muito difícil, tudo pode melhorar. Adorei fazer essa leitura e sem dúvidas recomendo muito o livro, agora não vejo a hora de assistir ao filme e também de ler o novo livro dos autores.";
            break; // ´é switch case precisa ter no final

            case 'IAC': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "It: A Coisa"; // coloca o nome do livro

            var bookImg =  "images/Home/home-adptation-it.jpg";
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

            // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
            // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
            // por exemplo: 3 (set,set,set,unset,unset)
            // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

            document.getElementById("book-text").innerHTML = "Durante as férias de 1958, em uma pacata cidadezinha chamada Derry, um grupo de sete amigos começa a ver coisas estranhas. Um conta que viu um palhaço, outro que viu uma múmia. Finalmente, acabam descobrindo que estavam todos vendo a mesma coisa: um ser sobrenatural e maligno que pode assumir várias formas. É assim que Bill, Beverly, Eddie, Ben, Richie, Mike e Stan enfrentam a Coisa pela primeira vez. Quase trinta anos depois, o grupo volta a se encontrar. Mike, o único que permaneceu em Derry, dá o sinal ― uma nova onda de terror tomou a pequena cidade. É preciso unir forças novamente. Só eles têm a chave do enigma. Só eles sabem o que se esconde nas entranhas de Derry. Só eles podem vencer a Coisa. Mesmo depois de tantos anos, o público continua obcecado por IT. Ficamos obcecados porque todos temos medos. Todos temos algo que nos assusta, sejam palhaços e aranhas ou coisas que se escondem em um lugar muito mais profundo de nossa mente. Este livro fala com todo mundo. É o romance mais assustador de King, e duvido que isso vá mudar” ― The Guardian";

            var bookLinkAmazon = "https://www.amazon.com.br/coisa-Stephen-King/dp/8560280944";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/livro-it-stephen-king";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/stephen-king/it-a-coisa/3213447477"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "1104"; //as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "24 julho 2014";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Suma";
            document.getElementById("book-height").innerHTML = "23.4 x 16.4 x 4.2 cm";
            document.getElementById("book-kid").innerHTML = "+16 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "Idris";

            var bookLinkRese1 = "https://idris.com.br/blog/2019/09/15/resenha-it-a-coisa-stephen-king/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "4,5 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-1-text").innerHTML = "Em tempo: Já vi todas as adaptações, tanto o seriado antigo (que foi meu primeiro contato com a história) quanto as duas partes da versão cinematográfica atual. A 2º parte do filme atual divergiu bastante do livro, principalmente na parte final – mas a parte 1 foi bastante fiel aos personagens, apesar de obviamente haver sim, mudanças em comparação ao livro. Indico a todos irem no cinema conferir “It: parte 2” também, foi um filme que valeu a pena ir conferir no conferir – mas ah: leiam o livro, sempre!";
            
            document.getElementById("rese-2-name").innerHTML = "Estação Nerd";

            var bookLinkRese2 = "https://estacaonerd.com/resenha-it-a-coisa-de-stephen-king/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-2-text").innerHTML = "Se o autor focasse só na história da coisa, teria sido bem fraco, mas ao mostrar o impacto disso na vida das pessoas, cria um universo repulsivo e nos deixa muito curiosos pra saber o que vai acontecer. Gostei de ter lido, mas é cansativo, devo admitir. E essa história foi retomada recentemente nos cinemas, a história foi dividida em duas partes, e a segunda já está para sair. Quem aí já leu/assistiu It – A Coisa? Contem as suas impressões aí nos comentários!";
            break; // ´é switch case precisa ter no final

            case 'CTDC': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Cinquenta Tons de Cinza"; // coloca o nome do livro

            var bookImg =  "images/Home/home-adptation-50.jpg";
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

            // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
            // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
            // por exemplo: 3 (set,set,set,unset,unset)
            // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

            document.getElementById("book-text").innerHTML = "Ingênua e inocente, Ana se surpreende ao perceber que, a despeito da enigmática reserva de Grey, está desesperadamente atraída por ele. Incapaz de resistir à beleza discreta, à timidez e ao espírito independente de Ana, Grey admite que também a deseja ― mas em seus próprios termos. Chocada e ao mesmo tempo seduzida pelas estranhas preferências de Grey, Ana hesita. Por trás da fachada de sucesso ― os negócios multinacionais, a vasta fortuna, a amada família ―, Grey é um homem atormentado por demônios do passado e consumido pela necessidade de controle. Quando eles embarcam num apaixonado e sensual caso de amor, Ana não só descobre mais sobre seus próprios desejos, como também sobre os segredos obscuros que Grey tenta manter escondidos.";

            var bookLinkAmazon = "https://www.amazon.com.br/Cinquenta-Tons-Cinza-L-James/dp/8580572185";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/cinquenta-tons-de-cinza--serie-cinquenta-tons-de-cinza-vol--1-/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjIo5-s4J37AhVanpUCHdhoD74QFnoECAsQAQ&url=https%3A%2F%2Fwww.estantevirtual.com.br%2Flivros%2Fe-l-james%2Fcinquenta-tons-de-cinza%2F2951338698&usg=AOvVaw26A6-PMmkI84YpUIzy_rLv"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "480"; //as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "18 julho 2012";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Intrínseca";
            document.getElementById("book-height").innerHTML = "23.4 x 16.4 x 4.2 cm";
            document.getElementById("book-kid").innerHTML = "+18 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "Minha Contra Capa";

            var bookLinkRese1 = "http://minhacontracapa.com.br/2014/04/resenha-50-tons-de-cinza-de-e-l-james/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "3,5 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-1-text").innerHTML = "O assunto polêmico que faz com quem muitas pessoas odeiem, ou simplesmente tenham preconceito literário, está no quesito “cenas de sexo explícito”. Sim, o livro está repleto delas e a editora não suavizou em nada essas cenas. A edição está impecável. Sinceramente, acho que estou procurando pelo em ovo porque não vi nada de outro mundo descrito no livro. Pelo contrário, achei até que as cenas eram muito superficiais. Tem todo um erotismo envolvendo o casal e Christina,- ah o Christian… – é um sonho de consumo e sabe muito bem o que faz. Tirando os pontos negativos apontados, eu recomendo sim o livro para quem gosta desse estilo literário. Apesar do livro estar classificado para o público adulto, ele é bem juvenil no quesito romance. Acredito que seja por isso que o público adulto critique tanto a narrativa de E L James.";
            
            document.getElementById("rese-2-name").innerHTML = "Interrupted Dreamer";

            var bookLinkRese2 = "https://www.interruptedreamer.com/2016/09/resenha-cinquenta-tons-de-cinza.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "3,0 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-2-text").innerHTML = "A ideia dela ser “acordada” para ideias como beijar, por exemplo, ok, eu até entendo – sempre tem alguém que vai fazer nosso mundo virar de cabeça pra baixo, quase que literalmente – mas é algo que seja a ser muito superficial, entende?  Essa parte de ser acordada me lembra Amante Sombrio, que tem toda uma história por trás, mas ainda assim, não chega a ser essa superficialidade que eu senti ao ler. Na leitura, o início nem tanto, mas depois do primeiro encontro até sessenta por cento do livro foi muito difícil pra ler - eu não queria que Ana gostasse do Christian, ela revirar os olhos me enchia a paciência assim como morder o lábio (que saco!). Eu não gostava do Christian (e ainda não gosto, ponto). Mas devo dizer que em certo ponto da narrativa as coisas até que melhoraram, apesar dele ser do tipo controlador, ciumento e muito possessivo (meu Deus, sai daqui Grey! rs) e ter seus (TODOS) demônios pessoais, que pra variar, só começaram a ser mostrados no final da leitura (um dos motivos de ter ficado mais interessante e que vai ser desenvolvido nos volumes posteriores, provavelmente). Ana: eu gostei só em alguns momentos, na maior parte, por mim, ela podia trocar de alma e parar de revirar os olhos e morder os lábios para o Grey ficar repetindo isso - ela tem um gosto por literatura bem inusitado, não ? Mas acho que possa ter sido coisa de primeiro livro e também, sabe, uma jogada da autora.";
            break; // ´é switch case precisa ter no final

            case 'JN1': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Jogador Número 1"; // coloca o nome do livro

            var bookImg =  "images/Home/home-adptation-50.jpg";
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

            // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
            // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
            // por exemplo: 3 (set,set,set,unset,unset)
            // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

            document.getElementById("book-text").innerHTML = "Um mundo em jogo, a busca pelo grande prêmio. Você está preparado, Jogador número 1? O ano é 2044 e a Terra não é mais a mesma. Fome, guerras e desemprego empurraram a humanidade para um estado de apatia nunca antes visto.Wade Watts é mais um dos que escapa da desanimadora realidade passando horas e horas conectado ao OASIS ? uma utopia virtual global que permite aos usuários ser o que quiserem, um lugar onde se pode viver e se apaixonar em qualquer um dos mundos inspirados nos filmes, videogames e cultura pop dos anos 1980.Mas a possibilidade de existir em outra realidade não é o único atrativo do OASIS, o falecido James Halliday, bilionário e criador do jogo, escondeu em algum lugar desse imenso playground uma série de easter-eggs que premiará com sua enorme fortuna ? e poder ? aquele que conseguir desvendá-los. E Wade acabou de encontrar o primeiro deles.Um novo Matrix.? USA Today ?O fenômeno do ano.? New York Times ?Cline é capaz de incorporar seus brinquedos e jogos favoritos em uma narrativa perfeita.? The New York Times ?Jogador número 1 é um bilhete sorteado da loteria.? New York Daily News ?Um desafio cibernético completo, emocionante e simpático... A saga criativa e inovadoramente nerd de Cline tem toda a cara de um grande sucesso.? Booklist ?Fascinante... Willy Wonka se encontra com Matrix. Seus personagens nerds são nerdmente demais. A ação do livro é imaginativa, sempre cinematográfica. E Cline ainda consegue tecer um romance neste conto de herói e vilão.? USA Today ?Para os Harry Potters crescidos... Mistério e fantasia neste romance se complementam da maneira mais prazerosa, e os detalhes que transformam o mundo do sr. Cline são simplesmente incríveis. Jogador número 1 tem tudo.? Huffington Post ?Um thriller inteligente, divertido que celebra e critica a cultura on-line... Feito com brincadeiras do meio e referências ardilosas.? San Francisco Chronicle ?";

            var bookLinkAmazon = "https://www.amazon.com.br/Jogador-Número-1-Ernest-Cline/dp/8544103162";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/jogador%20n1?_q=jogador%20n1&map=ft&page=2";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.saraiva.com.br/jogador%20n1?_q=jogador%20n1&map=ft&page=2"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "464"; //as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "10 outubro 2019";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Leya";
            document.getElementById("book-height").innerHTML = "23.4 x 16.4 x 4.2 cm";
            document.getElementById("book-kid").innerHTML = "+13 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "O Capacitor";

            var bookLinkRese1 = "https://ocapacitor.com/resenha-jogador-no-1/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "4,5 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-1-text").innerHTML = "Com uma mistura de referências e sentimentos, Jogador Nº 1 transporta o leitor para um universo novo e ao mesmo tempo familiar. É bem interessante a forma como revisitamos coisas que amamos dentro de um novo contexto enquanto tentamos desvendar enigmas. Apesar de um vilão esquecível e um desenvolvimento de personagens pouco competente, o livro consegue ser uma aventura marcante e com todo sabor da nostalgia. Vale ressaltar que apesar de carecer de profundidade, Jogador Nº 1 é um livro extremamente divertido e absolutamente viciante. A busca pelo tesouro prende o leitor enquanto as referências arrancam risos. A experiência é extremamente gratificante. Se você é fã de cultura pop, especialmente a dos anos 80, e de histórias de caça ao tesouro, Jogador Nº 1 é uma escolhe extremamente acertada. Aquele livro com cara de “Sessão da Tarde”.";
            
            document.getElementById("rese-2-name").innerHTML = "Imersão Literária";

            var bookLinkRese2 = "https://www.imersaoliteraria.com.br/2021/09/resenha-jogador-numero-um-livro-1.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "3,0 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-2-text").innerHTML = "O livro tem uma história boa, e mesmo tendo muitas descrições e diálogos esparsos, tem uma boa dinâmica e consequentemente uma linguagem fluida. Assim, a leitura se torna interessante, podendo ser lida rapidamente. Minhas ressalvas com o livro me impediram de gostar dele totalmente e os únicos pontos que realmente gostei foram a história e referências citadas. Essa era uma leitura que tentei ler sem expectativas, e me cativou até certo ponto, porém eu não estava preparada para o que iria encontrar. Pode ser um livro que agrade também fãs da cultura dos anos 1980, principalmente jogos em geral. A adaptação do livro é bem comentada e pode ser uma opção para ler depois de concluir a leitura, ou como um complemento a mais para quem gostou da história.";
            break; // ´é switch case precisa ter no final

            case 'F': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Fallen"; // coloca o nome do livro

            var bookImg =  "images/Home/home-adptation-fallen.jpg";
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

            // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
            // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
            // por exemplo: 3 (set,set,set,unset,unset)
            // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

            document.getElementById("book-text").innerHTML = "Excitante, sombrio e romântico Fallen é, ao mesmo tempo, um thriller vigoroso e uma inesquecível história de amor. Lauren aposta no amor impossível entre os protagonistas para tecer o início de uma saga com todos os ingredientes de um cult do gênero. Em Fallen, acompanhamos a adolescente Luce, mandada para um reformatório ― apropriadamente batizado de Sword & Cross ― após a morte do namorado em um incêndio misterioso. Ela suspeita que estranhas sombras negras, que a atormentam desde a infância, são as verdadeiras responsáveis. Mas quem acreditaria nela?Na escola, ela encontra o etereamente belo Daniel Grigori, que desperta uma estranha sensação de reconhecimento: único ponto luminoso num lugar onde celulares são proibidos e há câmeras de vigilância por todos os cantos. Mas tanta luz hipnotiza a menina, atraída pelo rapaz como uma mariposa pela chama. Ele tenta se manter afastado de Luce, mas também não consegue. E a verdade promete separá-los como tantas outras vezes ― com a morte de Luce. Amantes destinados a se encontrar e se perder vida após vida, século após século.";

            var bookLinkAmazon = "https://www.amazon.com.br/Fallen-Vol-1-Lauren-Kate/dp/8501089621";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/livro-fallen";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/lauren-kate/fallen/3840128096"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "406"; //as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "30 julho 2010";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Galera";
            document.getElementById("book-height").innerHTML = "23.4 x 16.4 x 4.2 cm";
            document.getElementById("book-kid").innerHTML = "+15 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "Resenha dos Sonhos";

            var bookLinkRese1 = "https://resenhandosonhos.com/fallen-lauren-kate/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-1-text").innerHTML = "Talvez o timing dos romances sobrenaturais possa ter passado e o filme tenha chegado no momento errado. Adaptação esta que trabalhou duro na descaracterização do enredo, somado a interpretações estereotipadas demais. Toda esta tentativa de fazer com que Fallen se assemelhasse a Crepúsculo, contribui que o mesmo venha sofrendo as consequências de uma abordagem equivocada daquilo que realmente é. Uma pena para os fãs da série, mas também nada inesperado entre as adaptações literárias. Porém, esta é apenas a minha opinião, entretanto, é verdade que entre erros e acertos, Fallen carrega um enredo único e original na literatura jovem e marcou parte de uma geração que ganha novamente a oportunidade de ver Fallen em destaque nas prateleiras. Se você deseja ter a experiência completa com Fallen, vou dar duas dicas de fã. Se possível não vejam o trailer do filme, infelizmente ele entrega demais sobre a trama. Também deixem para ler o prólogo apenas no final da leitura, iniciem o livro pelo capítulo um. ";
            
            document.getElementById("rese-2-name").innerHTML = "ThunderWave";

            var bookLinkRese2 = "https://www.thunderwave.com.br/resenha-fallen-lauren-kate/?amp"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "4,0 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-2-text").innerHTML = "A premissa de Fallen é muito boa, a autora abrange uma temática interessante, porém, demoramos quase o livro todo para chegar na parte empolgante. Enquanto tentamos desvendar o mistério acerca de Luce e Daniel, ficamos presos em um triangulo amoroso adolescente um tanto desinteressante. O grande problema da obra é demorar quase toda a leitura para apresentar uma questão que provavelmente todos já sabiam: a questão dos caídos. Lauren escreve sobre amor, sobre como esse sentimento pode superar tudo e isso torna a saga Fallen boa – do segundo volume em diante. Não é raro a leitura desse primeiro volume desempolgar com seu ritmo adolescente sobrenatural e o interesse voltar apenas nas continuações, já que quando chega na parte boa, o livro acaba para começar exatamente de onde parou no volume dois. Fallen é uma leitura indicada para quem gosta de sobrenatural com bastante romance, quer se aventurar por uma série razoavelmente grande e tem paciência para ignorar o começo lento.";
            break; // ´é switch case precisa ter no final

            case 'OCDV': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "O Código da Vinci"; // coloca o nome do livro

            var bookImg =  "images/Home/home-adptation-vinci.jpg";
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

            // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
            // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
            // por exemplo: 3 (set,set,set,unset,unset)
            // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

            document.getElementById("book-text").innerHTML = "Um assassinato dentro do Museu do Louvre, em Paris, traz à tona uma sinistra conspiração para revelar um segredo que foi protegido por uma sociedade secreta desde os tempos de Jesus Cristo. A vítima é o respeitado curador do museu, Jacques Saunière, um dos líderes dessa antiga fraternidade, o Priorado de Sião, que já teve como membros Leonardo da Vinci, Victor Hugo e Isaac Newton. Momentos antes de morrer, Saunière deixa uma mensagem cifrada que apenas a criptógrafa Sophie Neveu e Robert Langdon, um simbologista, podem desvendar. Eles viram suspeitos e detetives enquanto tentam decifrar um intricado quebra-cabeças que pode lhes revelar um segredo milenar que envolve a Igreja Católica. Apenas alguns passos à frente das autoridades e do perigoso assassino, Sophie e Robert vão à procura de pistas ocultas nas obras de Da Vinci e se debruçam sobre alguns dos maiores mistérios da cultura ocidental - da natureza do sorriso da Mona Lisa ao significado do Santo Graal. Mesclando os ingredientes de um envolvente suspense com informações sobre obras de arte, documentos e rituais secretos, Dan Brown consagrou-se como um dos autores mais brilhantes da atualidade.";

            var bookLinkAmazon = "https://www.amazon.com.br/Código-Vinci-Dan-Brown/dp/8575421131";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://busca.saraiva.com.br/q/livro-o-codigo-vinci";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/dan-brown/o-codigo-da-vinci/3976013343"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "432"; //as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "1 janeiro 2004";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Editora Arqueiro";
            document.getElementById("book-height").innerHTML = "23.4 x 16.4 x 4.2 cm";
            document.getElementById("book-kid").innerHTML = "+13 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "Meu Ctáloggo de Livros";

            var bookLinkRese1 = "https://www.meucatalogodelivros.com.br/o-codigo-da-vinci-resenha/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);

            document.getElementById("rese-1-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-1-text").innerHTML = "Toda a trama é baseada na simbologia religiosa e fala respeito do mistério da maior conspiração dos últimos dois mil anos, sobre a lenda do Santo Graal. Porém, o que o autor Dan Brown faz é indagar o leitor e fazer com que pense sobre o que realmente pode ter acontecido na época de Cristo, sem fazer nenhuma satirização com a Igreja. O livro mistura a vida real com ficção, o que faz com que o leitor realmente se pergunte se esses fatos realmente aconteceram decorrente à existência dessas organizações secretas. A leitura é imensamente válida, visto que aborda importantes assuntos na sociais e da história da arte. ";
            
            document.getElementById("rese-2-name").innerHTML = "O Clube da Meia Noite";

            var bookLinkRese2 = "http://www.oclubedameianoite.com/2017/07/resenha-o-codigo-da-vinci-dan-brown.html"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "5,0 / 5,0"; // se n tiver inventa com base na nota
            document.getElementById("resen-2-text").innerHTML = "A história consegue criar uma “nova interpretação” dos fatos reais que conhecemos e devido a isso, muitos leitores admiram de tal forma o escritor e suas obras, que acabam confundindo sua história fictícia com a realidade. Já outros acabam definindo como “literatura comercial barata” e acham horrível as ideias apresentadas pelo autor, como se ele “moldasse” ou influenciasse leitores desprevenidos. De fato, para pessoas que acreditam nas mais diversas teorias de conspiração, o livro pode ser facilmente tragado e interpretado como uma verdade absoluta. Não observa-se no entanto, que livros de ficção científica muitas vezes utilizam-se de fatos científicos para criar uma mitologia em torno daquilo que é apresentado. Nesse gênero literário, é facilmente observável pelo leitor o que é ou não real. Assim como a ficção científica, Dan Brown utiliza elementos verídicos e os misturam com sua fantasia, tornando-se uma história atraente que nas entrelinhas pode parecer ter a intenção de afirmar alguma 'verdade'";
            break; // ´é switch case precisa ter no final

            case 'OSMDEH': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Os Sete Maridos de Evelyn Hugo"; // coloca o nome do livro

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

            case 'QNEO': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "Quando Ninguém Está Olhando"; // coloca o nome do livro

            var bookImg =  "images/Home/home-acclaimed-looking.jpg";
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
        
            case 'ACEDE': // esta no doc home.js, encontra o nome de cada  no final do case
            document.getElementById("book-title").innerHTML = "A Culpa é Das Estrelas"; // coloca o nome do livro

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

            // vai mudar as estelas com o rate online, unset-star é vazia e set-star é cheia 
            // por exemplo: 4,5 (set,set,set,set,unset) - arredonda pra baixa no 0,5
            // por exemplo: 3 (set,set,set,unset,unset)
            // muda o set e unt na ("/images/Book/rating-(unset)-star.png")

            document.getElementById("book-text").innerHTML = "Hazel é uma paciente terminal. Ainda que, por um milagre da medicina, seu tumor tenha encolhido bastante ― o que lhe dá a promessa de viver mais alguns anos ―, o último capítulo de sua história foi escrito no momento do diagnóstico. Mas em todo bom enredo há uma reviravolta, e a de Hazel se chama Augustus Waters, um garoto bonito que certo dia aparece no Grupo de Apoio a Crianças com Câncer. Juntos, os dois vão preencher o pequeno infinito das páginas em branco de suas vidas. Inspirador, corajoso, irreverente e brutal, A culpa é das estrelas é a obra mais ambiciosa e emocionante de John Green, sobre a alegria e a tragédia que é viver e amar.";

            var bookLinkAmazon = "https://www.amazon.com.br/Culpa-É-das-Estrelas/dp/8580572266";
            var setLinkAmazon = document.getElementById("amazon-btn");
            setLinkAmazon.setAttribute("href", bookLinkAmazon);

            var bookLinkSaraiva = "https://www.saraiva.com.br/culpa-e-das-estrelas-a-10519/p";
            var setLinkSaraiva = document.getElementById("saraiva-btn");
            setLinkSaraiva.setAttribute("href", bookLinkSaraiva);

            var bookLinkEstante = "https://www.estantevirtual.com.br/livros/john-green/a-culpa-e-das-estrelas/1542645645"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkEstante = document.getElementById("estante-btn");
            setLinkEstante.setAttribute("href", bookLinkEstante);

            document.getElementById("book-page").innerHTML = "288";  ///as caracteristicas estao todas na amazon
            document.getElementById("book-date").innerHTML = "27 outubro 2014";
            document.getElementById("book-lang").innerHTML = "Português";
            document.getElementById("book-edit").innerHTML = "Intrínseca";
            document.getElementById("book-height").innerHTML = "21 x 13.8 x 1.6 cm";
            document.getElementById("book-kid").innerHTML = "+13 anos"; // idade

            document.getElementById("rese-1-name").innerHTML = "Valeu, Gutenberg!";

            var bookLinkRese1 = "https://valeugutenberg.com/2017/11/24/resenha-a-culpa-e-das-estrelas/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese1 = document.getElementById("rese-1-a");
            setLinkRese1.setAttribute("href", bookLinkRese1);


            document.getElementById("rese-1-rate").innerHTML = "5,5 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-1-text").innerHTML = "É preciso dizer o quanto o desfecho é inesperado. Durante a leitura, você imagina que já sabe qual será o final, mas o autor consegue surpreender. Então, se você ainda não leu A culpa é das estrelas por má vontade, preconceito ou qualquer outro motivo, confie em mim e leia (inclusive se você já viu o filme, que é bem fiel ao texto original). Ele não foi um best-seller por acaso. Aliás, seria ótimo se todos os best-sellers tivessem a mesma qualidade dele.";
        
            document.getElementById("rese-2-name").innerHTML = "Resenhas à la Carte";

            var bookLinkRese2 = "https://resenhasalacarte.com.br/resenhas/a-culpa-e-das-estrelas-john-green/"; // coloca o link da pesquisa, pq é site de livro usado
            var setLinkRese2 = document.getElementById("rese-2-a");
            setLinkRese2.setAttribute("href", bookLinkRese2);

            document.getElementById("rese-2-rate").innerHTML = "3,0 / 5,0"; // se n tiver inventa com base na nota

            document.getElementById("resen-2-text").innerHTML = "Dá muita vontade de fazer parte da turma de amigos deles. O Gus é um personagem pra lá de inspirador e a força que ele carrega é indescritível. O mesmo para Hazel: uma jovem solitária que aprende cada vez mais a lidar com sua doença e a conhecer um pouco mais do mundo. A jornada para conhecer seu autor favorito é uma das cenas mais legais do livro – o jantar romântico em Amsterdam  – mesmo que o resultado desse encontro não seja aquilo que ela estava esperando. Claro que com uma temática dessas seria impossível não ter um grande drama na história, né? Prepare os lencinhos, porque o choro é fortíssimo! Depois, quando fui assistir ao filme de A Culpa é das Estrelas (muito bem adaptado, por sinal), chorei e solucei tudo de novo. Se você procura um romance com bastante humor e drama, A Culpa é das Estrelas é uma boa opção. Eu que não sou fã de livros românticos ou Young Adult achei uma leitura bem prazerosa.Claro que com uma temática dessas seria impossível não ter um grande drama na história, né? Prepare os lencinhos, porque o choro é fortíssimo! Depois, quando fui assistir ao filme de A Culpa é das Estrelas (muito bem adaptado, por sinal), chorei e solucei tudo de novo. Se você procura um romance com bastante humor e drama, A Culpa é das Estrelas é uma boa opção. Eu que não sou fã de livros românticos ou Young Adult achei uma leitura bem prazerosa.";
            break; // é switch case precisa ter no final
    }
}
document.addEventListener("DOMContentLoaded", function() {
    inputBook();
});