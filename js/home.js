var lastCarousel = 0;
var cleanerBooks = ["carousel-first","carousel-second","carousel-third","carousel-fourth"];
var poster = ["carousel1-img","carousel2-img","carousel3-img","carousel4-img"];
var title = ["carousel1-title","carousel2-title","carousel3-title","carousel4-title"];
var author = ["carousel1-author","carousel2-author","carousel3-author","carousel4-author"];
var genre = ["carousel1-genre","carousel2-genre","carousel3-genre","carousel4-genre"];
var sino = ["carousel1-sino","carousel2-sino","carousel3-sino","carousel4-sino"];
var link = ["carousel1-link","carousel2-link","carousel3-link","carousel4-link"];


function showInfo(position, name) {
  if(lastCarousel == 0 || lastCarousel == position) {
    showBook(position, name);
  } else {
    for(var i = 0; i < 4; i++) {
      var bookSection =  "display: none";
      var setBook = document.getElementById(cleanerBooks[i]);
      setBook.setAttribute("style", bookSection);
    }
    lastCarousel = position;
    showBook(lastCarousel, name);
  }
}

function showBook(position, name) {
  var bookSection =  " ";
  var setBook = document.getElementById(cleanerBooks[position - 1]);
  setBook.setAttribute("style", bookSection);

  var showStar = "display: none;";
    var setShowS = document.getElementById("carousel4-star-show");
    setShowS.setAttribute("style", showStar);

    var showDisney = "display: none;";
    var setShowD = document.getElementById("carousel4-disney-show");
    setShowD.setAttribute("style", showDisney);

    var showPrime = "display: none;";
    var setShowP = document.getElementById("carousel4-prime-show");
    setShowP.setAttribute("style", showPrime);

    var showNetflix = "display: none;";
    var setShowN = document.getElementById("carousel4-netflix-show");
    setShowN.setAttribute("style", showNetflix);

    var showHbo = "display: none;";
    var setShowH = document.getElementById("carousel4-hbo-show");
    setShowH.setAttribute("style", showHbo);

    var showTele = "display: none;";
    var setShowT = document.getElementById("carousel4-tele-show");
    setShowT.setAttribute("style", showTele);

  switch (name) {
    case 'anne':
      var bookPoster = "/images/Home/home-acclaimed-anne.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "O diário de Anne Frank";

      document.getElementById(author[position - 1]).innerHTML = "Anne Frank";

      document.getElementById(genre[position - 1]).innerHTML = "Guerra";

      document.getElementById(sino[position - 1]).innerHTML = "Descoberto no sótão em que ela passou os últimos anos de sua vida, o notável diário de Anne Frank se tornou um clássico mundial - um lembrete poderoso dos horrores da guerra e um testemunho eloquente do espírito humano. Em 1942, com os nazistas ocupando a Holanda, uma menina judia de treze anos e sua família fugiram de sua casa em Amsterdã e se esconderam. Nos dois anos seguintes, até que seu paradeiro fosse revelado à Gestapo, eles e outra família viveram enclausurados no 'Anexo Secreto' de um antigo prédio de escritórios. Isolados do mundo exterior, eles enfrentaram fome, tédio, as constantes crueldades de viver em quartos confinados e a sempre presente ameaça de descoberta e morte. Em seu diário, Anne Frank registrou impressões vívidas de suas experiências durante esse período. Por vezes pensativo, comovente e divertido, seu relato oferece um comentário fascinante sobre a coragem e a fragilidade humana e um autorretrato convincente de uma jovem sensível e espirituosa cuja promessa foi tragicamente interrompida.";

      var bookLink = "ODDAF";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'blood':
      var bookPoster = "/images/Home/home-acclaimed-blood.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Com sangue";

      document.getElementById(author[position - 1]).innerHTML = "Stephen King";

      document.getElementById(genre[position - 1]).innerHTML = "Suspense";

      document.getElementById(sino[position - 1]).innerHTML = "Brilhante em narrativas curtas, King já escreveu alguns contos que viraram sucesso em todo o mundo, como as histórias que inspiraram os filmes Conta comigo e Um sonho de liberdade. Neste livro, assim como em Quatro estações e Escuridão total sem estrelas, ele cria uma coleção única e emocionante, demonstrando mais uma vez por que é considerado um dos maiores contadores de histórias de todos os tempos.Este é um livro sobre amor, amizade, talento e justiça… em suas formas mais deturpadas. Em Com sangue, Stephen King reúne quatro contos com protagonistas inteligentes e complexos, que têm sua vida comum transformada por algum elemento inexplicável.";

      var bookLink = "CS";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'two':
      var bookPoster = "/images/Home/home-acclaimed-two.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Os dois morrem no final";

      document.getElementById(author[position - 1]).innerHTML = "Adam Silveira";

      document.getElementById(genre[position - 1]).innerHTML = "Romance e LGBTQIA+";

      document.getElementById(sino[position - 1]).innerHTML = "No dia 5 de setembro, pouco depois da meia-noite, Mateo Torrez e Rufus Emeterio recebem uma ligação da Central da Morte. A notícia é devastadora: eles vão morrer naquele mesmo dia. Os dois não se conhecem, mas, por motivos diferentes, estão à procura de um amigo com quem compartilhar os últimos momentos, uma conexão verdadeira que ajude a diminuir um pouco a angústia e a solidão que sentem. Por sorte, existe um aplicativo para isso, e é graças a ele que Rufus e Mateo vão se encontrar para uma última grande aventura: viver uma vida inteira em um único dia.";

      var bookLink = "ODMNF";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'collector':
      var bookPoster = "/images/Home/home-acclaimed-collector.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "O colecionador";

      document.getElementById(author[position - 1]).innerHTML = "John Fowles";

      document.getElementById(genre[position - 1]).innerHTML = "Romance e Suspense";

      document.getElementById(sino[position - 1]).innerHTML = "O COLECIONADOR é a história de Frederick Clegg, um homem solitário, de origem humilde, menosprezado por uma sociedade esnobe, que encontra o grande amor de sua vida. Tudo o que ele deseja é passar um tempo a sós com ela, demonstrar seus nobres sentimentos e deixar claro que eles nasceram um para o outro.O COLECIONADOR também é a história de Miranda Gray, uma jovem estudante de artes sequestrada por um maníaco que acha que pode obrigá-la a se apaixonar por ele. Tudo o que ela deseja é escapar do cativeiro, e vai usar de toda sua inteligência para sobreviver ao inferno em que sua vida se transformou. O romance é narrado por dois personagens antagônicos: o sequestrador e sua vítima. Frederick e Miranda.";

      var bookLink = "OC";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'verity':
      var bookPoster = "/images/Home/home-acclaimed-verity.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Verity";

      document.getElementById(author[position - 1]).innerHTML = "Colleen Hoover";

      document.getElementById(genre[position - 1]).innerHTML = "Romance e Suspense";

      document.getElementById(sino[position - 1]).innerHTML = "Verity Crawford é a autora best-seller por trás de uma série de sucesso. Ela está no auge de sua carreira, aclamada pela crítica e pelo público, no entanto, um súbito e terrível acidente acaba interrompendo suas atividades, deixando-a sem condições de concluir a história... E é nessa complexa circunstância que surge Lowen Ashleigh, uma escritora à beira da falência convidada a escrever, sob um pseudônimo, os três livros restantes da já consolidada série. Para que consiga entender melhor o processo criativo de Verity com relação aos livros publicados e, ainda, tentar descobrir seus possíveis planos para os próximos, Lowen decide passar alguns dias na casa dos Crawford, imersa no caótico escritório de Verity - e, lá, encontra uma espécie de autobiografia onde a escritora narra os fatos acontecidos desde o dia em que conhece Jeremy, seu marido, até os instantes imediatamente anteriores a seu acidente - incluindo sua perspectiva sobre as tragédias ocorridas às filhas do casal.";

      var bookLink = "V";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'evelyn':
      var bookPoster = "/images/Home/home-acclaimed-evelyn.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Os sete maridos de Evelyn Hugo";

      document.getElementById(author[position - 1]).innerHTML = "Taylor Jenkins Reid";

      document.getElementById(genre[position - 1]).innerHTML = "Romance e LGBTQIA+";

      document.getElementById(sino[position - 1]).innerHTML = "Lendária estrela de Hollywood, Evelyn Hugo sempre esteve sob os holofotes ― seja estrelando uma produção vencedora do Oscar, protagonizando algum escândalo ou aparecendo com um novo marido… pela sétima vez. Agora, prestes a completar oitenta anos e reclusa em seu apartamento no Upper East Side, a famigerada atriz decide contar a própria história ― ou sua “verdadeira história” ―, mas com uma condição: que Monique Grant, jornalista iniciante e até então desconhecida, seja a entrevistadora. Ao embarcar nessa misteriosa empreitada, a jovem repórter começa a se dar conta de que nada é por acaso ― e que suas trajetórias podem estar profunda e irreversivelmente conectadas.";

      var bookLink = "OSMDEH";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'looking':
      var bookPoster = "/images/Home/home-acclaimed-looking.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Quando ninguém está olhando";

      document.getElementById(author[position - 1]).innerHTML = "Alyssa Cole";

      document.getElementById(genre[position - 1]).innerHTML = "Suspense";

      document.getElementById(sino[position - 1]).innerHTML = "Sydney Green nasceu e foi criada no Brooklyn, em Nova York, mas cada vez que ela pisca os olhos seu amado bairro parece mudar. Condomínios se espalham como erva daninha, placas de “vende-se” surgem da noite para o dia e os vizinhos que ela conhece a vida toda estão sumindo. Para manter de pé tanto o passado quanto o presente da comunidade, Sydney decide canalizar sua frustração planejando um passeio guiado em que pretende contar a verdadeira história do local. Só que, para tornar o projeto realidade, vai precisar aturar seu novo vizinho, Theo, como assistente. A pesquisa dos dois, entretanto, logo se transforma. O que era apenas uma distração vira uma história de paranoia e medo. No fim das contas, talvez os vizinhos não tenham se mudado para outros bairros e a revitalização do lugar seja mais mortal do que eles imaginaram.";

      var bookLink = "QNEO";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'hansen':
      var bookPoster = "/images/Home/home-acclaimed-hansen.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Querido Evan Hansen";

      document.getElementById(author[position - 1]).innerHTML = " Val Emmich, Steven Levenson, Benj Pasek e Justin Paul ";

      document.getElementById(genre[position - 1]).innerHTML = "Ficção";

      document.getElementById(sino[position - 1]).innerHTML = "Evan Hansen sempre teve muita dificuldade de fazer amigos. Para mudar isso, decide seguir as recomendações de seu psicólogo e escrever cartas encorajadoras para si mesmo, com esperança de que seu último ano na escola seja um pouco melhor. O que não esperava era que uma das cartas fosse parar nas mãos de Connor Murphy, o aluno mais encrenqueiro da turma. Quando Connor comete suicídio e sua família encontra a carta de Evan, todos começam a pensar que os dois eram melhores amigos. Sem conseguir explicar a situação, Evan acaba refém de uma grande mentira. Ao mesmo tempo, graças a essa (falsa) amizade, o garoto finalmente se aproxima de Zoe, a menina de seus sonhos, e passa a ser notado no colégio. ";

      var bookLink = "QEH";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'girl':
      var bookPoster = "/images/Home/home-acclaimed-girl.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Garota exemplar";

      document.getElementById(author[position - 1]).innerHTML = "Gillian Flynn";

      document.getElementById(genre[position - 1]).innerHTML = "Suspense";

      document.getElementById(sino[position - 1]).innerHTML = "O livro começa no dia do quinto aniversário de casamento de Nick e Amy Dunne, quando a linda e inteligente esposa de Nick desaparece da casa deles às margens do rio Mississippi. Sinais indicam que se trata de um sequestro violento e Nick rapidamente se torna o principal suspeito. Sob pressão da polícia, da mídia e dos ferozmente amorosos pais de Amy, Nick desfia uma série interminável de mentiras, meias verdades e comportamento inapropriado. Ele é evasivo e amargo ― mas seria um assassino? Ao mesmo tempo, passagensdo diário de Amy revelam um casamento tumultuado ― mas ela estaria contando toda a história?";

      var bookLink = "GE";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'lying':
      var bookPoster = "/images/Home/home-acclaimed-lying.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Um de nós esta mentindo";

      document.getElementById(author[position - 1]).innerHTML = "Karen M. McManus";

      document.getElementById(genre[position - 1]).innerHTML = "Suspense";

      document.getElementById(sino[position - 1]).innerHTML = "Numa tarde de segunda-feira, cinco estudantes do colégio Bayview entram na sala de detenção: Bronwyn, a gênia, comprometida a estudar em Yale, nunca quebra as regras. Addy, a bela, a perfeita definição da princesa do baile de primavera. Nate, o criminoso, já em liberdade condicional por tráfico de drogas. Cooper, o atleta, astro do time de beisebol. E Simon, o pária, criador do mais famoso aplicativo de fofocas da escola. Só que Simon não consegue ir embora. Antes do fim da detenção, ele está morto. E, de acordo com os investigadores, a sua morte não foi acidental. Todos os alunos que estavam na detenção são suspeitos e cada um tem algo a esconder...";

      var bookLink = "UDNEM";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'lake':
      var bookPoster = "/images/Home/home-acclaimed-lake.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "A garota do lago";

      document.getElementById(author[position - 1]).innerHTML = "Charlie Donlea";

      document.getElementById(genre[position - 1]).innerHTML = "Suspense";

      document.getElementById(sino[position - 1]).innerHTML = "Summit Lake, uma pequena cidade entre montanhas, é esse tipo de lugar, bucólico e com encantadoras casas dispostas à beira de um longo trecho de água intocada.Duas semanas atrás, a estudante de direito Becca Eckersley foi brutalmente assassinada em uma dessas casas. Filha de um poderoso advogado, Becca estava no auge de sua vida. Atraída instintivamente pela notícia, a repórter Kelsey Castle vai até a cidade para investigar o caso. ...E LOGO SE ESTABELECE UMA CONEXÃO ÍNTIMA QUANDO UM VIVO CAMINHA NAS MESMAS PEGADAS DOS MORTOS...E enquanto descobre sobre as amizades de Becca, sua vida amorosa e os segredos que ela guardava, a repórter fica cada vez mais convencida de que a verdade sobre o que aconteceu com Becca pode ser a chave para superar as marcas sombrias de seu próprio passado.";

      var bookLink = "AGDL";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'boys':
      var bookPoster = "/images/Home/home-acclaimed-boys.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Mil beijos de garotos";

      document.getElementById(author[position - 1]).innerHTML = "Tillie Cole";

      document.getElementById(genre[position - 1]).innerHTML = "Romance";

      document.getElementById(sino[position - 1]).innerHTML = "'Um vínculo que é definido num momento e se prolonga por uma década. Um vínculo que nem o tempo nem a distância podem romper. Um vínculo que vai durar para sempre.' - Ao menos era o que eles imaginavam. Quando, aos dezessete anos, Rune Kristiansen retorna da Noruega para o lugar onde passou a infância, a cidade americana de Blossom Grove, na Geórgia , ele só tem uma coisa em mente: reencontrar Poppy Litchfield, a garota que era sua cara-metade e que tinha prometido esperar fielmente por seu retorno. E ele quer descobrir por que, nos dois anos em que esteve fora, ela o deletou de sua vida sem dar nenhuma explicação.";

      var bookLink = "MBDG";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'memories':
      var bookPoster = "/images/Home/home-brazil-memories.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Memórias póstumas de Brás Cubas";

      document.getElementById(author[position - 1]).innerHTML = "Machado Assis";

      document.getElementById(genre[position - 1]).innerHTML = "Drama";

      document.getElementById(sino[position - 1]).innerHTML = "Escrito em 1880 em folhetins, este clássico da literatura brasileira é considerado o precursor do Realismo. Se você não cismar de sofrer com a língua que é diferente do português que a gente usa hoje em dia, vai se divertir a valer com essa história narrada por um personagem morto que, de seu túmulo, se dirige aos leitores para criticar a sociedade da época. Nesta edição especial você tem o texto integral acompanhado de explicações e links bem espertos que o ajudarão a compreender melhor a trama, diferentes estilos de ilustrações e um encarte com o mapa dos personagens para você lembrar quem é quem no romance de Machado de Assis.";

      var bookLink = "MPDBC";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'sertoes':
      var bookPoster = "/images/Home/home-brazil-sertoes.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Os sertões";

      document.getElementById(author[position - 1]).innerHTML = "Euclides da Cunha";

      document.getElementById(genre[position - 1]).innerHTML = "Drama";

      document.getElementById(sino[position - 1]).innerHTML = "<strong>Os sertões</strong> – marco fundamental nos estudos sobre a formação do imaginário nacional, ao lado de Casa-grande e senzala e Raízes do Brasil – foi escrito a partir de um trabalho jornalístico sobre a rebelião de Canudos, liderada por Antonio Conselheiro e duramente reprimida pelo governo. Baseada em teorias deterministas em voga na época, a obra aborda cientificamente a influência do meio sobre o homem, como mostra a própria estrutura dos capítulos: “A Terra”, “O Homem”, “A Luta”.Parte da riqueza do livro reside no fato de ele retratar a mudança de opinião do escritor que, movido por um espírito patriótico e republicano, via com maus olhos a revolta dos “fanáticos” defensores da monarquia, alinhado ao restante da elite letrada, que não tolerava a insurgência de um grupo, considerando-a uma ameaça ao projeto civilizatório do Brasil, do qual o ideal positivista de “ordem e progresso” era o lema.";

      var bookLink = "OS";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'folhas':
      var bookPoster = "/images/Home/home-brazil-folhas.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "De folhas que resistem";

      document.getElementById(author[position - 1]).innerHTML = "Raïssa Lettiére";

      document.getElementById(genre[position - 1]).innerHTML = "Drama e Suspense";

      document.getElementById(sino[position - 1]).innerHTML = "Um enigma na curva de uma estrada e os quatro braços de uma cruz. Um homem que vê a mãe perder a sanidade aos poucos. Outro que confere o obituário de jornais em busca de um nome conhecido. Uma refeição que evoca todas as últimas ceias. Uma amizade de infância, em meio a empurrões e quedas, leva a uma decisão irreversível. <strong>Em De folhas que resistem</strong>, Raïssa Lettiére compõe uma proposta literária potente, em harmonia com o que há de melhor na produção literária contemporânea. A autora traz contos com aroma e cor, para que os leitores possam experimentá-los com todos os sentidos de que puderem lançar mão e misturá-los de forma sinestésica no embate com o texto. Temas como memória, desejo e conflito familiar se descortinam no embate entre a intimidade e a vida social de suas personagens.";

      var bookLink = "DFQR";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'muralha':
      var bookPoster = "/images/Home/home-brazil-muralha.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "A muralha";

      document.getElementById(author[position - 1]).innerHTML = "Dinah Silveira de Queiroz";

      document.getElementById(genre[position - 1]).innerHTML = "Drama e Romance";

      document.getElementById(sino[position - 1]).innerHTML = "Cristina é a jovem romântica que vem de Portugal para casar-se com Tiago. Decepciona-se logo ao desembarcar do navio: seu prometido não a aguarda. E, para chegar a Lagoa Serena, a propriedade da família do noivo, precisa enfrentar dificuldades a fim de transpor a muralha da Serra do Mar, que separa o litoral da vila de São Paulo de Piratininga. Mas Cristina terá de lidar com muito mais do que as vicissitudes de uma terra selvagem: a indiferença de Tiago, que parece só querer bem às estrelas, e os hábitos tão distintos daqueles do Reino.";

      var bookLink = "AM";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'salto':
      var bookPoster = "/images/Home/home-brazil-salto.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Um salto para o amor";

      document.getElementById(author[position - 1]).innerHTML = "Aione Simões";

      document.getElementById(genre[position - 1]).innerHTML = "Romance";

      document.getElementById(sino[position - 1]).innerHTML = "Quanto mais tentam colocá-la para baixo, menos ela se deixa abater. Ao menos tem sido assim nos últimos anos, desde que enfrentou a desestruturação de sua família e optou por mudar sua vida por completo. Lily pediu demissão de seu trabalho e decidiu abrir uma loja de roupa ― a Frida ―, decidida a transformá-la num espaço para todos os tipos de mulheres. Depois de um ano da abertura da loja, ela sente que realmente superou o passado. Ou, pelo menos, era o que achava. Ao receber a notícia de que precisa aumentar o faturamento se não quiser declarar falência, Lily acredita que aguenta o tranco. Quando se vê tendo que enfrentar as próprias inseguranças ao se tornar a garota-propaganda da Frida, percebe que pode ser mais difícil do que imaginava, mas ela está determinada. O problema mesmo é quando seu coração começa a bater mais rápido, ao ritmo da música de um certo cantor.";

      var bookLink = "USPOA";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'encontro':
      var bookPoster = "/images/Home/home-brazil-encontro.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Enquanto eu não te encontro";

      document.getElementById(author[position - 1]).innerHTML = "Pedro Rhuas";

      document.getElementById(genre[position - 1]).innerHTML = "Romance e LGBTQIA+";

      document.getElementById(sino[position - 1]).innerHTML = "A vida tem sido boa para Lucas. Ele passou no Enem para estudar publicidade; se mudou com Eric, seu melhor amigo, do interior do Rio Grande do Norte para a capital; e conseguiu sua tão aguardada liberdade. Mas, no amor, Lucas é um desastre. O maior fã de Katy Perry no Nordeste tem certeza de que nem toda a sorte do mundo poderia fazer com que ele finalmente se apaixonasse pela primeira vez. Até que, em uma despretensiosa noite de sábado em 2015, tudo muda. Quando Lucas e Eric vão na inauguração do Titanic, a mais nova balada da cidade, Lucas esbarra (literalmente!) em Pierre, um lindo garoto francês que parece ter saído dos seus sonhos. Em meio a drinques, segredos e sonhos partilhados, Lucas e Pierre se conectam instantaneamente. Eles vivem o encontro mais especial de suas vidas, mas o Universo tem outros planos para o futuro… Até a noite acabar, o que será que vai acontecer com eles?";

      var bookLink = "ENTE";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'obvio':
      var bookPoster = "/images/Home/home-brazil-obvio.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "O amor não é óbvio";

      document.getElementById(author[position - 1]).innerHTML = "Elayne Baeta";

      document.getElementById(genre[position - 1]).innerHTML = "Romance";

      document.getElementById(sino[position - 1]).innerHTML = "Íris tem 17 anos e está viciada na novela Amor em atos. Ela e sua vizinha, Dona Símia, de 68 anos, não perdem um episódio. Na escola, parece que todo mundo só pensa em duas coisas: na festa de formatura e em perder a virgindade. Só que a vida de Íris está prestes a mudar: Cadu Sena, sua paixão platônica desde a oitava série, está solteiro. Essa é a chance de Íris. Mas antes ela precisa entender o que levou a namorada de Cadu a deixá-lo por uma garota, Édra Norr. Montada em sua bicicleta, Íris vai cruzar São Patrique para descobrir tudo sobre Édra, e não vai demorar para se enredar também nos encantos da garota. A gente pode achar que sabe por quem vai se apaixonar, mas o amor não é óbvio.";

      var bookLink = "OANEO";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'engolir':
      var bookPoster = "/images/Home/home-brazil-engolir.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Verdades difíceis de engolir: Um romance";

      document.getElementById(author[position - 1]).innerHTML = "Samantha Silvany";

      document.getElementById(genre[position - 1]).innerHTML = "Romance";

      document.getElementById(sino[position - 1]).innerHTML = "Amor é morar em um peito que nos cabe por inteiro. Se a gente precisa forçar a entrada ou se espremer para servir, é hora de nos mudarmos.” O escritor Dan pensava estar vivendo um verdadeiro romance clichê com seu amor de infância, pelo menos até conhecer Sofia, uma mulher que o faz sentir coisas que nunca sentiu antes. Sofia, uma mulher empoderada e decidida, mas azarada no amor, achava ter encontrado seu par perfeito, até descobrir que seu príncipe encantado era o mesmo de outra pessoa. Já Alicia está convencida de que encontrou o grande amor e que nada e ninguém irão impedi-la de seguir ao altar e ter seu tão sonhado “felizes para sempre”. Mesmo que precise passar por cima de si mesma para isso. Mesmo que tenha que esmagar seu amor-próprio para provar para si e para os outros que aquele homem é a metade que lhe falta.";

      var bookLink = "VDDE";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'contos':
      var bookPoster = "/images/Home/home-brazil-contos.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Os cem melhores contos brasileiros do século";

      document.getElementById(author[position - 1]).innerHTML = "Italo Moriconi";

      document.getElementById(genre[position - 1]).innerHTML = "Drama e Ficção";

      document.getElementById(sino[position - 1]).innerHTML = "Para Júlio Cortazar, conto é aquele texto que corre em poucas linhas e em alta velocidade narrativa, capaz de nocautear o leitor com seu impacto dramático concentrado. Coube ao professor Italo Moriconi o desafio lançado pela Objetiva de garimpar os cem melhores textos do gênero produzidos no Brasil ao longo do século XX. Um trabalho que deixasse de lado os rígidos critérios acadêmicos e fosse pautado somente pela qualidade e sabor dessas pequenas obras-primas. O resultado é a coletânea Os Cem Melhores Contos Brasileiros do Século, um passeio pela mais deliciosa e contundente ficção curta produzida no Brasil entre 1900 e o fim dos anos 90. Uma antologia capaz de traduzir as mudanças do país e as inquietações de várias gerações de brasileiros, em cem anos de produção literária. A prova de que a arte do gênero não cessa de melhorar em nossa literatura.";

      var bookLink = "OCMCB";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'quero':
      var bookPoster = "/images/Home/home-brazil-quero.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Não quero ser como você";

      document.getElementById(author[position - 1]).innerHTML = "Vinicius Fernandes";

      document.getElementById(genre[position - 1]).innerHTML = "Romance e LGBTQIA+";

      document.getElementById(sino[position - 1]).innerHTML = "Lucas há tempos se fechou para o amor. Na rotina agitada do psicólogo gato e bem-sucedido, só há espaço para encontros casuais, desde que não durem mais de uma noite. Já Gabriel é o romantismo em pessoa. Mesmo já tendo quebrado a cara algumas vezes, ele sonha em encontrar um grande amor, daquele tipo que faz os olhos revirarem. É claro que as histórias dos dois vão se encontrar... Mas até que ponto duas pessoas tão diferentes podem ser felizes? Uma hora você percebe que a vida não é um conto de fadas (nem perto disso!), e é preciso amadurecer. Mas, também, chega um momento em que você tem que abrir a porta e deixar alguém entrar. Será que ambos estão dispostos a isso?";

      var bookLink = "NQSCV";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'finais':
      var bookPoster = "/images/Home/home-brazil-finais.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Um milhão de finais felizes";

      document.getElementById(author[position - 1]).innerHTML = "Vitor Martins";

      document.getElementById(genre[position - 1]).innerHTML = "Romance e LGBTQIA+";

      document.getElementById(sino[position - 1]).innerHTML = "Jonas não sabe muito bem o que fazer da vida. Entre suas leituras e ideias para livros anotadas em um caderninho de bolso, ele precisa dar conta de seus turnos no Rocket Café e ainda lidar com o conservadorismo de seus pais. Sua mãe alimenta a esperança de que ele volte a frequentar a igreja, e seu pai não faz muito por ele além de trazer problemas. Mas é quando conhece Arthur, um belo garoto de barba ruiva, que Jonas passa a questionar por quanto tempo conseguirá viver sob as expectativas de seus pais, fingindo ser uma pessoa diferente de quem é de verdade. Buscando conforto em seus amigos (e na sua história sobre dois piratas bonitões que se parecem muito com ele e Arthur), Jonas entenderá o verdadeiro significado de família e amizade, e descobrirá o poder de uma boa história.";

      var bookLink = "UMDFF";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'querido':
      var bookPoster = "/images/Home/home-brazil-ex.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Querido ex";

      document.getElementById(author[position - 1]).innerHTML = "Juan Jullian";

      document.getElementById(genre[position - 1]).innerHTML = "Romance e LGBTQIA+";

      document.getElementById(sino[position - 1]).innerHTML = "A única coisa pior e mais desastrosa do que levar um pé na bunda, é levar um pé na bunda e ver seu ex se tornar a maior subcelebridade do Brasil. Não só isso, mas assistir em tempo real enquanto ele se apaixona por outro cara em TV nacional. Poucas palavras conseguem expressar esse nível de decepção amorosa. Nem mesmo <em>Taylor Swift</em> seria capaz de entender. Mas é justamente a tentativa de colocar a dor em palavras, reunidas em cartas para o maldito ex, que faz com que nosso protagonista repense algumas coisas. Entre crises de luto e saudades, existem festas anuais do dia dos ex-namorados com todas as suas amigas que o seu ex detestava. Existe a vida que você deixou para trás enquanto amava alguém que agora é somente um estranho com milhões de seguidores. E talvez por trás daquele amor existisse também um tanto de controle, de gaslighting, de codependência.";

      var bookLink = "QE";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'aurora':
        var bookPoster = "/images/Home/home-popullar-aurora.jpg";
        var setPoster = document.getElementById(poster[position - 1]);
        setPoster.setAttribute("src", bookPoster);
  
        document.getElementById(title[position - 1]).innerHTML = "Aurora ascende";
  
        document.getElementById(author[position - 1]).innerHTML = "Amie Kaufman e Jay Kristoff ";
  
        document.getElementById(genre[position - 1]).innerHTML = "Ficção";
  
        document.getElementById(sino[position - 1]).innerHTML = "Eles não são os heróis que gostaríamos.São apenas os que conseguimos encontrar. O ano é 2380, a humanidade deixou seu ninho para se espalhar pela galáxia: não apenas a Via Láctea, mas dezenas de outras e os recém-formados cadetes da Academia Aurora estão sendo enviados em suas primeiras missões. Tyler Jones, o garoto prodígio, está pronto para recrutar o esquadrão dos sonhos, mas seu próprio heroísmo idiota faz com que ele fique com o que mais ninguém da academia quis...";

        var bookTiktok = "https://www.tiktok.com/tag/auroraascende";
        var setLinkTKT = document.getElementById("carousel3-tiktok");
        setLinkTKT.setAttribute("href", bookTiktok);

        var bookInsta = "https://www.instagram.com/explore/tags/auroraascende/";
        var setLinkIG = document.getElementById("carousel3-instagram");
        setLinkIG.setAttribute("href", bookInsta);

        var bookTwitter = "https://twitter.com/hashtag/auroraascende?src=hashtag_click";
        var setLinkTT = document.getElementById("carousel3-twitter");
        setLinkTT.setAttribute("href", bookTwitter);
  
        var bookLink = "AA";
        var setLink = document.getElementById(link[position - 1]);
        setLink.setAttribute("href", bookLink);
      break;
    case 'mundo':
      var bookPoster = "/images/Home/home-popullar-mundo.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Admirável mundo novo";

      document.getElementById(author[position - 1]).innerHTML = "Aldous Leonard Huxley";

      document.getElementById(genre[position - 1]).innerHTML = "Ficção e Romance";

      document.getElementById(sino[position - 1]).innerHTML = "Em uma sociedade organizada segundo princípios estritamente científicos, Bernard Marx, um psicólogo, sente-se inadequado quando se compara aos outros seres de sua casta. Ao descobrir uma “reserva histórica” que preserva costumes de uma sociedade anterior – muito semelhante à do leitor – Bernard vai perceber as diferenças entre esta civilização e a sua – e a partir de um sentimento de inconformismo ele desafiará o mundo. A história de Bernard se passa em um ambiente em que a literatura, a música e o cinema só têm a função de solidificar a alienação; um universo que louva o avanço da técnica, a produção em série, a uniformidade contra a diversidade.";

      var bookTiktok = "https://www.tiktok.com/search?q=Admir%C3%A1vel%20mundo%20novo&t=1666038751566";
      var setLinkTKT = document.getElementById("carousel3-tiktok");
      setLinkTKT.setAttribute("href", bookTiktok);

      var bookInsta = "https://www.instagram.com/explore/tags/admiravelnovomundo/";
      var setLinkIG = document.getElementById("carousel3-instagram");
      setLinkIG.setAttribute("href", bookInsta);

      var bookTwitter = "https://mobile.twitter.com/search?q=%23admiravelnovomundo&src=typed_query&f=top";
      var setLinkTT = document.getElementById("carousel3-twitter");
      setLinkTT.setAttribute("href", bookTwitter);

      var bookLink = "ANM";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'royal':
      var bookPoster = "/images/Home/home-popullar-royal.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Vermelho, branco e sangue azul";

      document.getElementById(author[position - 1]).innerHTML = "Casey McQuiston";

      document.getElementById(genre[position - 1]).innerHTML = "Romance e LGBTQIA+";

      document.getElementById(sino[position - 1]).innerHTML = "Quando sua mãe foi eleita presidenta dos Estados Unidos, Alex Claremont-Diaz se tornou o novo queridinho da mídia norte-americana. Bonito, carismático e com personalidade forte, Alex tem tudo para seguir os passos de seus pais e conquistar uma carreira na política, como tanto deseja. Mas quando sua família é convidada para o casamento real do príncipe britânico Philip, Alex tem que encarar o seu primeiro desafio diplomático: lidar com Henry, irmão mais novo de Philip, o príncipe mais adorado do mundo, com quem ele é constantemente comparado ― e que ele não suporta.";

      var bookTiktok = "https://www.tiktok.com/tag/vermelhobrancoesangueazul";
      var setLinkTKT = document.getElementById("carousel3-tiktok");
      setLinkTKT.setAttribute("href", bookTiktok);

      var bookInsta = "https://www.instagram.com/explore/tags/vermelhobrancoesangueazul/";
      var setLinkIG = document.getElementById("carousel3-instagram");
      setLinkIG.setAttribute("href", bookInsta);

      var bookTwitter = "https://mobile.twitter.com/search?q=%23vermelhobrancosangueazul&src=typed_query&f=top";
      var setLinkTT = document.getElementById("carousel3-twitter");
      setLinkTT.setAttribute("href", bookTwitter);

      var bookLink = "VBSA";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'gelato':
      var bookPoster = "/images/Home/home-popullar-gelato.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Amor & gelato";

      document.getElementById(author[position - 1]).innerHTML = "Jenna Evans Welch";

      document.getElementById(genre[position - 1]).innerHTML = "Romance";

      document.getElementById(sino[position - 1]).innerHTML = "Depois da morte da mãe, Lina fica com a missão de realizar um último pedido: ir até a Itália para conhecer o pai. Do dia para a noite, ela se vê na famosa paisagem da Toscana, morando em uma casa localizada no mesmo terreno de um cemitério memorial de soldados americanos da Segunda Guerra Mundial, com um homem que nunca tinha ouvido falar. Apesar das belezas arquitetônicas, da história da cidade e das comidas maravilhosas, o que Lina mais quer é ir embora correndo dali. Mas as coisas começam a mudar quando ela recebe um antigo diário da mãe. Nele, a menina embarca em uma misteriosa história de amor, que pode explicar suas próprias origens. No meio desse turbilhão de emoções, Lina ainda conhece Ren e Thomas, dois meninos lindos que vão mexer ainda mais com seu coração.";

      var bookTiktok = "https://www.tiktok.com/tag/amoregelato";
      var setLinkTKT = document.getElementById("carousel3-tiktok");
      setLinkTKT.setAttribute("href", bookTiktok);

      var bookInsta = "https://www.instagram.com/explore/tags/amoregelato/";
      var setLinkIG = document.getElementById("carousel3-instagram");
      setLinkIG.setAttribute("href", bookInsta);

      var bookTwitter = "https://mobile.twitter.com/hashtag/Amoregelato?src=hashtag_click";
      var setLinkTT = document.getElementById("carousel3-twitter");
      setLinkTT.setAttribute("href", bookTwitter);

      var bookLink = "AEG";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'acaba':
      var bookPoster = "/images/Home/home-popullar-acaba.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "É assim que acaba";

      document.getElementById(author[position - 1]).innerHTML = "Colleen Hoover";

      document.getElementById(genre[position - 1]).innerHTML = "Romance";

      document.getElementById(sino[position - 1]).innerHTML = "Em <strong>É assim que acaba</strong>, Colleen Hoover nos apresenta Lily, uma jovem que se mudou de uma cidadezinha do Maine para Boston, se formou em marketing e abriu a própria floricultura. E é em um dos terraços de Boston que ela conhece Ryle, um neurocirurgião confiante, teimoso e talvez até um pouco arrogante, com uma grande aversão a relacionamentos, mas que se sente muito atraído por ela. Quando os dois se apaixonam, Lily se vê no meio de um relacionamento turbulento que não é o que ela esperava. Mas será que ela conseguirá enxergar isso, por mais doloroso que seja?";

      var bookTiktok = "https://www.tiktok.com/tag/%C3%A9assimqueacaba";
      var setLinkTKT = document.getElementById("carousel3-tiktok");
      setLinkTKT.setAttribute("href", bookTiktok);

      var bookInsta = "https://www.instagram.com/explore/tags/%C3%A9assimqueacaba/";
      var setLinkIG = document.getElementById("carousel3-instagram");
      setLinkIG.setAttribute("href", bookInsta);

      var bookTwitter = "https://mobile.twitter.com/search?q=%23%C3%A9assimqueacaba&src=typed_query&f=top";
      var setLinkTT = document.getElementById("carousel3-twitter");
      setLinkTT.setAttribute("href", bookTwitter);

      var bookLink = "EAQA";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'silenciosa':
      var bookPoster = "/images/Home/home-popullar-silenciosa.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "A paciente silenciosa";

      document.getElementById(author[position - 1]).innerHTML = "Alex Michaelides";

      document.getElementById(genre[position - 1]).innerHTML = "Suspense";

      document.getElementById(sino[position - 1]).innerHTML = "Alicia Berenson tinha uma vida perfeita. Ela era uma pintora famosa casada com um fotógrafo bem-sucedido e morava numa área nobre de Londres que dá para o parque de Hampstead Heath. Certa noite, Gabriel, seu marido, voltou tarde para casa depois de um ensaio para a Vogue, e de repente a vida de Alicia mudou completamente... A recusa de Alicia a falar ou a dar qualquer explicação sobre o assassinato do marido - um mistério que atrai a atenção do público e aumenta ainda mais a fama da pintora. Entretanto, enquanto seus quadros passam a ser mais valorizados que nunca, ela é levada para o Grove, um hospital psiquiátrico judiciário na zona norte de Londres.";

      var bookTiktok = "https://www.tiktok.com/tag/apacientesilenciosa";
      var setLinkTKT = document.getElementById("carousel3-tiktok");
      setLinkTKT.setAttribute("href", bookTiktok);

      var bookInsta = "https://www.instagram.com/explore/tags/apacientesilenciosa/";
      var setLinkIG = document.getElementById("carousel3-instagram");
      setLinkIG.setAttribute("href", bookInsta);

      var bookTwitter = "https://mobile.twitter.com/search?q=%23apacientesilenciosa&src=typed_query&f=top";
      var setLinkTT = document.getElementById("carousel3-twitter");
      setLinkTT.setAttribute("href", bookTwitter);

      var bookLink = "APS";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'giz':
      var bookPoster = "/images/Home/home-popullar-giz.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "O homem de giz";

      document.getElementById(author[position - 1]).innerHTML = "C. J. Tudor";

      document.getElementById(genre[position - 1]).innerHTML = "Suspense";

      document.getElementById(sino[position - 1]).innerHTML = "Em 1986, Eddie e os amigos passam a maior parte dos dias andando de bicicleta pela pacata vizinhança em busca de aventuras. Os desenhos a giz são seu código secreto: homenzinhos rabiscados no asfalto; mensagens que só eles entendem. Mas um desenho misterioso leva o grupo de crianças até um corpo desmembrado e espalhado em um bosque. Depois disso, nada mais é como antes. Em 2016, Eddie se esforça para superar o passado, até que um dia ele e os amigos de infância recebem um mesmo aviso: o desenho de um homem de giz enforcado. Quando um dos amigos aparece morto, Eddie tem certeza de que precisa descobrir o que de fato aconteceu trinta anos atrás.";

      var bookTiktok = "https://www.tiktok.com/tag/ohomemdegiz";
      var setLinkTKT = document.getElementById("carousel3-tiktok");
      setLinkTKT.setAttribute("href", bookTiktok);

      var bookInsta = "https://www.instagram.com/explore/tags/ohomemdegiz/";
      var setLinkIG = document.getElementById("carousel3-instagram");
      setLinkIG.setAttribute("href", bookInsta);

      var bookTwitter = "https://mobile.twitter.com/search?q=%23ohomemdegiz&src=typed_query&f=top";
      var setLinkTT = document.getElementById("carousel3-twitter");
      setLinkTT.setAttribute("href", bookTwitter);

      var bookLink = "OHDG";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'tortoarado':
      var bookPoster = "/images/Home/home-popullar-tortoarado.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Torto arado";

      document.getElementById(author[position - 1]).innerHTML = "Itamar Vieira Junior";

      document.getElementById(genre[position - 1]).innerHTML = "Drama";

      document.getElementById(sino[position - 1]).innerHTML = "Nas profundezas do sertão baiano, as irmãs Bibiana e Belonísia encontram uma velha e misteriosa faca na mala guardada sob a cama da avó. Ocorre então um acidente. E para sempre suas vidas estarão ligadas ― a ponto de uma precisar ser a voz da outra. Numa trama conduzida com maestria e com uma prosa melodiosa, o romance conta uma história de vida e morte, de combate e redenção.";

      var bookTiktok = "https://www.tiktok.com/tag/tortoarado";
      var setLinkTKT = document.getElementById("carousel3-tiktok");
      setLinkTKT.setAttribute("href", bookTiktok);

      var bookInsta = "https://www.instagram.com/explore/tags/tortoarado/";
      var setLinkIG = document.getElementById("carousel3-instagram");
      setLinkIG.setAttribute("href", bookInsta);

      var bookTwitter = "https://mobile.twitter.com/search?q=%23tortoarado&src=typed_query&f=top";
      var setLinkTT = document.getElementById("carousel3-twitter");
      setLinkTT.setAttribute("href", bookTwitter);

      var bookLink = "TA";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'imperfeicoes':
      var bookPoster = "/images/Home/home-popullar-imperfeicoes.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Todas as suas (im)perfeições";

      document.getElementById(author[position - 1]).innerHTML = "Colleen Hoover ";

      document.getElementById(genre[position - 1]).innerHTML = "Romance e Drama";

      document.getElementById(sino[position - 1]).innerHTML = "Todas as suas imperfeições narra a história de Quinn e Graham. Eles se conhecem no pior dia de suas vidas; ela chega mais cedo de uma viagem para surpreender o noivo, ele testemunha a traição da namorada. E é assim que ambos acabam no corredor de um prédio, trocando confidências, biscoitos da sorte e palavras de conforto.Fim da dança... se o destino não tivesse outros planos para os dois. Meses mais tarde, os acordes tocam para o casal mais uma vez e eles se reencontram. Graham está convencido de que são almas gêmeas. Quinn jamais se sentiu dessa forma antes. A intensidade do sentimento os assusta, mas eles mergulham de cabeça mesmo assim. O casamento é tudo o que sonhavam, a parceria perfeita. Mesmo nos momentos difíceis, sabem que podem contar com o outro.  ";

      var bookTiktok = "https://www.tiktok.com/tag/todasassuasimperfeicoes";
      var setLinkTKT = document.getElementById("carousel3-tiktok");
      setLinkTKT.setAttribute("href", bookTiktok);

      var bookInsta = "https://www.instagram.com/explore/tags/todassuasimperfei%C3%A7%C3%B5es/";
      var setLinkIG = document.getElementById("carousel3-instagram");
      setLinkIG.setAttribute("href", bookInsta);

      var bookTwitter = "https://mobile.twitter.com/search?q=todas%20suas%20imperfeicoes&src=typed_query&f=top";
      var setLinkTT = document.getElementById("carousel3-twitter");
      setLinkTT.setAttribute("href", bookTwitter);

      var bookLink = "TASI";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'lobos':
      var bookPoster = "/images/Home/home-popullar-lobos.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Mulheres que correm com os lobos: Mitos e histórias do arquétipo da Mulher Selvagem";

      document.getElementById(author[position - 1]).innerHTML = "Clarissa Pinkola Estés";

      document.getElementById(genre[position - 1]).innerHTML = "Drama";

      document.getElementById(sino[position - 1]).innerHTML = "Os lobos foram pintados com um pincel negro nos contos de fada e até hoje assustam meninas indefesas. Mas nem sempre eles foram vistos como criaturas terríveis e violentas. Na Grécia antiga e em Roma, o animal era o consorte de Artemis, a caçadora, e carinhosamente amamentava os heróis. A analista junguiana Clarissa Pinkola Estés acredita que na nossa sociedade as mulheres vêm sendo tratadas de uma forma semelhante. Abordando 19 mitos, lendas e contos de fada, como a história do patinho feio e do Barba-Azul, Estés mostra como a natureza instintiva da mulher foi sendo domesticada ao longo dos tempos, num processo que punia todas aquelas que se rebelavam.";

      var bookTiktok = "https://www.tiktok.com/tag/mulheresquecorremcomoslobos";
      var setLinkTKT = document.getElementById("carousel3-tiktok");
      setLinkTKT.setAttribute("href", bookTiktok);

      var bookInsta = "https://www.instagram.com/explore/tags/mulheresquecorremcomoslobos/";
      var setLinkIG = document.getElementById("carousel3-instagram");
      setLinkIG.setAttribute("href", bookInsta);

      var bookTwitter = "https://mobile.twitter.com/search?q=%23mulheresquecorremcomoslobos&src=typed_query&f=top";
      var setLinkTT = document.getElementById("carousel3-twitter");
      setLinkTT.setAttribute("href", bookTwitter);

      var bookLink = "MQCCOL";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'rio':
      var bookPoster = "/images/Home/home-popullar-rio.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Tudo é rio";

      document.getElementById(author[position - 1]).innerHTML = "Carla Madeira";

      document.getElementById(genre[position - 1]).innerHTML = "Drama e Ficção";

      document.getElementById(sino[position - 1]).innerHTML = "Tudo é rio é o livro de estreia de Carla Madeira. Com uma narrativa madura, precisa e ao mesmo tempo delicada e poética, o romance narra a história do casal Dalva e Venâncio, que tem a vida transformada após uma perda trágica, resultado do ciúme doentio do marido, e de Lucy, a prostituta mais depravada e cobiçada da cidade, que entra no caminho deles, formando um triângulo amoroso. A metáfora do rio se revela por meio da narrativa que flui – ora intensa, ora mais branda – de forma ininterrupta, mas também por meio do suor, da saliva, do sangue, das lágrimas, do sêmen, e Carla faz isso sem ser apelativa, sem sentimentalismo barato, com a habilidade que só os melhores escritores possuem.";

      var bookTiktok = "https://www.tiktok.com/search?q=%23tudo%C3%A9rio&t=1666042096573";
      var setLinkTKT = document.getElementById("carousel3-tiktok");
      setLinkTKT.setAttribute("href", bookTiktok);

      var bookInsta = "https://www.instagram.com/explore/tags/tudo%C3%A9rio/";
      var setLinkIG = document.getElementById("carousel3-instagram");
      setLinkIG.setAttribute("href", bookInsta);

      var bookTwitter = "https://mobile.twitter.com/search?q=%23tudo%C3%A9rio&src=typed_query&f=top";
      var setLinkTT = document.getElementById("carousel3-twitter");
      setLinkTT.setAttribute("href", bookTwitter);

      var bookLink = "TER";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'hipotese':
      var bookPoster = "/images/Home/home-popullar-hipotese.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "A hipótese do amor";

      document.getElementById(author[position - 1]).innerHTML = "Ali Hazelwood";

      document.getElementById(genre[position - 1]).innerHTML = "Romance";

      document.getElementById(sino[position - 1]).innerHTML = "Olive Smith, aluna do doutorado em Biologia da Universidade Stanford, acredita na ciência – não em algo incontrolável como o amor. Depois de sair algumas vezes com Jeremy, ela percebe que sua melhor amiga gosta dele e decide juntá-los. Para mostrar que está feliz com essa escolha, Olive precisa ser convincente: afinal, cientistas exigem provas. Sem muitas opções, ela resolve inventar um namoro de mentira e, num momento de pânico, beija o primeiro homem que vê pela frente. O problema é que esse homem é Adam Carlsen, um jovem professor de prestígio – conhecido por levar os alunos às lágrimas. Por isso, Olive fica chocada quando o tirano dos laboratórios concorda em levar adiante a farsa e fingir ser seu namorado.";

      var bookTiktok = "https://www.tiktok.com/tag/ahipotesedoamor";
      var setLinkTKT = document.getElementById("carousel3-tiktok");
      setLinkTKT.setAttribute("href", bookTiktok);

      var bookInsta = "https://www.instagram.com/explore/tags/ahipotesedoamor/";
      var setLinkIG = document.getElementById("carousel3-instagram");
      setLinkIG.setAttribute("href", bookInsta);

      var bookTwitter = "https://mobile.twitter.com/search?q=%23ahipotesedoamor&src=typed_query&f=top";
      var setLinkTT = document.getElementById("carousel3-twitter");
      setLinkTT.setAttribute("href", bookTwitter);

      var bookLink = "AHDA";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'simon':
      var bookPoster = "/images/Home/home-adptation-simon.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Simon vs. A agenda homo sapiens";

      document.getElementById(author[position - 1]).innerHTML = "Becky Albertalli";

      document.getElementById(genre[position - 1]).innerHTML = "Filme";

      document.getElementById(sino[position - 1]).innerHTML = "Encantadora história de amor que questiona os padrões sociais chega aos cinemas em 22 de março. Com nova capa e novo título, a apaixonante história de Simon conquistou milhares de leitores com uma trama que trata com naturalidade e bom humor a afirmação e os dilemas de um adolescente gay. Agora, a adaptação do romance chega às telas de cinema com Nick Robinson, de Jurassic World, nopapel de Simon, e Katherine Langford, protagonista de 13 Reasons Why. Simon Spier tem dezesseis anos e é gay, mas não conversa sobre isso com ninguém.";

      var bookStar = "https://www.starplus.com/pt-br/movies/com-amor-simon/iOs6PVflB9Ng";
      var setLinkS = document.getElementById("carousel4-star");
      setLinkS.setAttribute("href", bookStar);

      var showStar = " ";
      var setShowS = document.getElementById("carousel4-star-show");
      setShowS.setAttribute("style", showStar);

      var bookLink = "CAS";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);

      var trailerLink = "https://www.youtube.com/embed/MMLnRsfySBw";
      var setLink = document.getElementById("carousel-iframe");
      setLink.setAttribute("src", trailerLink);
      break;
    case 'stars':

      var bookPoster = "/images/Home/home-adptation-stars.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "A culpa é das estrelas";

      document.getElementById(author[position - 1]).innerHTML = "John Green";

      document.getElementById(genre[position - 1]).innerHTML = "Filme";

      document.getElementById(sino[position - 1]).innerHTML = "Hazel é uma paciente terminal. Ainda que, por um milagre da medicina, seu tumor tenha encolhido bastante ― o que lhe dá a promessa de viver mais alguns anos ―, o último capítulo de sua história foi escrito no momento do diagnóstico. Mas em todo bom enredo há uma reviravolta, e a de Hazel se chama Augustus Waters, um garoto bonito que certo dia aparece no Grupo de Apoio a Crianças com Câncer. Juntos, os dois vão preencher o pequeno infinito das páginas em branco de suas vidas.";

      var bookDisney = "https://www.disneyplus.com/video/d105c412-6259-4ec8-b365-4185d07733f9?distributionPartner=google";
      var setLinkD = document.getElementById("carousel4-disney");
      setLinkD.setAttribute("href", bookDisney);

      var showDisney = " ";
      var setShowD = document.getElementById("carousel4-disney-show");
      setShowD.setAttribute("style", showDisney);

      var bookLink = "ACEDE";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);

      var trailerLink = "https://www.youtube.com/embed/lFOOZJ1UChg";
      var setLink = document.getElementById("carousel-iframe");
      setLink.setAttribute("src", trailerLink);
      break;
    case 'callme':
      var bookPoster = "/images/Home/home-adptation-callme.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Me chame pelo seu nome";

      document.getElementById(author[position - 1]).innerHTML = "André Aciman";

      document.getElementById(genre[position - 1]).innerHTML = "Filme";

      document.getElementById(sino[position - 1]).innerHTML = "A casa onde Elio passa os verões é um verdadeiro paraíso na costa italiana, parada certa de amigos, vizinhos, artistas e intelectuais de todos os lugares. Filho de um importante professor universitário, o jovem está bastante acostumado à rotina de, a cada verão, hospedar por seis semanas na villa da família um novo escritor que, em troca da boa acolhida, ajuda seu pai com correspondências e papeladas. Uma cobiçada residência literária que já atraiu muitos nomes, mas nenhum deles como Oliver.";

      var bookPrime = "https://www.primevideo.com/dp/amzn1.dv.gti.d6b76742-60ad-5ce5-1a8d-0b7dcceb0141?autoplay=0&ref_=atv_cf_strg_wb";
      var setLinkP = document.getElementById("carousel4-prime");
      setLinkP.setAttribute("href", bookPrime);

      var showPrime = " ";
      var setShowP = document.getElementById("carousel4-prime-show");
      setShowP.setAttribute("style", showPrime);

      var bookLink = "MCPSN";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);

      var trailerLink = "https://www.youtube.com/embed/Z9AYPxH5NTM";
      var setLink = document.getElementById("carousel-iframe");
      setLink.setAttribute("src", trailerLink);
      break;
    case 'orgulho':
      var bookPoster = "/images/Home/home-adptation-orgulho.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Orgulho e preconceito";

      document.getElementById(author[position - 1]).innerHTML = "Jane Austen";

      document.getElementById(genre[position - 1]).innerHTML = "Filme";

      document.getElementById(sino[position - 1]).innerHTML = "Orgulho e preconceito é o livro mais famoso de Jane Austen e possui uma série de personagens inesquecíveis e um enredo memorável. Austen nos apresenta Elizabeth Bennet como heroína irresistível e seu pretendente aristocrático, o sr. Darcy. Nesse livro, aspectos diferentes são abordados: orgulho encontra preconceito, ascendência social confronta desprezo social, equívocos e julgamentos antecipados conduzem alguns personagens ao sofrimento e ao escândalo. O livro pode ser considerado a obra-prima da escritora, que equilibra comédia com seriedade, observação meticulosa das atitudes humanas e sua ironia refinada. A nova coleção possui capa dura e estilo inspirado nos bullet journals.";

      var bookNetflix = "https://www.netflix.com/br/title/70032594?source=35";
      var setLinkN = document.getElementById("carousel4-netflix");
      setLinkN.setAttribute("href", bookNetflix);

      var showNetflix = " ";
      var setShowN = document.getElementById("carousel4-netflix-show");
      setShowN.setAttribute("style", showNetflix);

      var bookLink = "OEP";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);

      var trailerLink = "https://www.youtube.com/embed/f4upyq5QztM";
      var setLink = document.getElementById("carousel-iframe");
      setLink.setAttribute("src", trailerLink);
      break;
    case 'duna':
      var bookPoster = "/images/Home/home-adptation-duna.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Duna";

      document.getElementById(author[position - 1]).innerHTML = "Frank Herbert";

      document.getElementById(genre[position - 1]).innerHTML = "Filme";

      document.getElementById(sino[position - 1]).innerHTML = "Uma estonteante mistura de aventura e misticismo, ecologia e política, este romance ganhador dos prêmios Hugo e Nebula deu início a uma das mais épicas histórias de toda a ficção científica. Duna é um triunfo da imaginação, que influenciará a literatura para sempre.Esta edição inédita, com introdução de Neil Gaiman, apresenta ao leitor o universo fantástico criado por Herbert e que será adaptado ao cinema por Denis Villeneuve, diretor de A chegada e de Blade Runner 2049.";

      var bookH = "https://play.hbomax.com/page/urn:hbo:page:GYUjdLgBiJp5otAEAAAAJ:type:feature?source=googleHBOMAX&action=play";
      var setLinkH = document.getElementById("carousel4-hbo");
      setLinkH.setAttribute("href", bookH);

      var showHbo = " ";
      var setShowH = document.getElementById("carousel4-hbo-show");
      setShowH.setAttribute("style", showHbo);

      var bookLink = "D";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);

      var trailerLink = "https://www.youtube.com/embed/dnBpZuSUISQ";
      var setLink = document.getElementById("carousel-iframe");
      setLink.setAttribute("src", trailerLink);
      break;
    case 'bird':
      var bookPoster = "/images/Home/home-adptation-bird.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Caixa de pássaros: Não abra os olhos";

      document.getElementById(author[position - 1]).innerHTML = "Josh Malerman";

      document.getElementById(genre[position - 1]).innerHTML = "Filme";

      document.getElementById(sino[position - 1]).innerHTML = "Romance de estreia de Josh Malerman, Caixa de pássaros é um thriller psicológico tenso e aterrorizante, que explora a essência do medo. Uma história que vai deixar o leitor completamente sem fôlego mesmo depois de terminar de ler.Basta uma olhadela para desencadear um impulso violento e incontrolável que acabará em suicídio. Ninguém é imune e ninguém sabe o que provoca essa reação nas pessoas. Cinco anos depois do surto ter começado, restaram poucos sobreviventes, entre eles Malorie e dois filhos pequenos. Ela sonha em fugir para um local onde a família possa ficar em segurança, mas a viagem que tem pela frente é assustadora: uma decisão errada e eles morrerão.";

      var bookNetflix = "https://www.netflix.com/br/title/80196789?source=35";
      var setLinkN = document.getElementById("carousel4-netflix");
      setLinkN.setAttribute("href", bookNetflix);

      var showNetflix = " ";
      var setShowN = document.getElementById("carousel4-netflix-show");
      setShowN.setAttribute("style", showNetflix);

      var bookLink = "CDP";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);

      var trailerLink = "https://www.youtube.com/embed/JeGdtrLQoiY";
      var setLink = document.getElementById("carousel-iframe");
      setLink.setAttribute("src", trailerLink);
      break;
    case 'cinco':
      var bookPoster = "/images/Home/home-adptation-cinco.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "A Cinco passos de você";

      document.getElementById(author[position - 1]).innerHTML = "Rachael Lippincott";

      document.getElementById(genre[position - 1]).innerHTML = "Filme";

      document.getElementById(sino[position - 1]).innerHTML = "Stella Grant gosta de estar no controle. Ela parece ser uma adolescente típica, mas em sua rotina há listas de tarefas e inúmeros remédios que ela deve tomar para controlar a fibrose cística, uma doença crônica que impede que seus pulmões funcionem como deveriam. Suas prioridades são manter seus pais felizes e conseguir um transplante – e uma coisa não existe sem a outra. Mas para ganhar pulmões novos, Stella precisa seguir seu tratamento à risca e eliminar qualquer chance de infecção, o que significa que ela não pode ficar a menos que dois metros de distância – ou seis passos – de outros pacientes com a doença. O primeiro item é fácil para ela, mas o segundo pode se provar mais difícil do que ela esperava.";

      var bookTele = "https://globoplay.globo.com/a-cinco-passos-de-voce/t/tTyzLWcJx6/";
      var setLinkT = document.getElementById("carousel4-tele");
      setLinkT.setAttribute("href", bookTele);

      var showTele = " ";
      var setShowT = document.getElementById("carousel4-tele-show");
      setShowT.setAttribute("style", showTele);

      var bookLink = "ACPDV";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);

      var trailerLink = "https://www.youtube.com/embed/OL-Xy-LzP_4";
      var setLink = document.getElementById("carousel-iframe");
      setLink.setAttribute("src", trailerLink);
      break;
    case 'it':
      var bookPoster = "/images/Home/home-adptation-it.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "It: a coisa";

      document.getElementById(author[position - 1]).innerHTML = "Stephen King";

      document.getElementById(genre[position - 1]).innerHTML = "Filme";

      document.getElementById(sino[position - 1]).innerHTML = "Durante as férias de 1958, em uma pacata cidadezinha chamada Derry, um grupo de sete amigos começa a ver coisas estranhas. Um conta que viu um palhaço, outro que viu uma múmia. Finalmente, acabam descobrindo que estavam todos vendo a mesma coisa: um ser sobrenatural e maligno que pode assumir várias formas. É assim que Bill, Beverly, Eddie, Ben, Richie, Mike e Stan enfrentam a Coisa pela primeira vez.";

      var bookH = "https://play.hbomax.com/page/urn:hbo:page:GWt7vKAJzFri8vQEAAAKm:type:feature?source=googleHBOMAX&action=play";
      var setLinkH = document.getElementById("carousel4-hbo");
      setLinkH.setAttribute("href", bookH);

      var showHbo = " ";
      var setShowH = document.getElementById("carousel4-hbo-show");
      setShowH.setAttribute("style", showHbo);

      var bookPrime = "https://www.primevideo.com/dp/amzn1.dv.gti.e8b1e32a-4410-59e9-5e09-39c060a1d7bb?autoplay=0&ref_=atv_cf_strg_wb";
      var setLinkP = document.getElementById("carousel4-prime");
      setLinkP.setAttribute("href", bookPrime);

      var showPrime = " ";
      var setShowP = document.getElementById("carousel4-prime-show");
      setShowP.setAttribute("style", showPrime);

      var bookLink = "IAC";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);

      var trailerLink = "https://www.youtube.com/embed/dD264ZjfKlk";
      var setLink = document.getElementById("carousel-iframe");
      setLink.setAttribute("src", trailerLink);
      break;

    case '50':
      var bookPoster = "/images/Home/home-adptation-50.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Cinquenta tons de cinza";

      document.getElementById(author[position - 1]).innerHTML = "E.L James";

      document.getElementById(genre[position - 1]).innerHTML = "Filme";

      document.getElementById(sino[position - 1]).innerHTML = "Ingênua e inocente, Ana se surpreende ao perceber que, a despeito da enigmática reserva de Grey, está desesperadamente atraída por ele. Incapaz de resistir à beleza discreta, à timidez e ao espírito independente de Ana, Grey admite que também a deseja ― mas em seus próprios termos. Chocada e ao mesmo tempo seduzida pelas estranhas preferências de Grey, Ana hesita. Por trás da fachada de sucesso ― os negócios multinacionais, a vasta fortuna, a amada família ―, Grey é um homem atormentado por demônios do passado e consumido pela necessidade de controle. Quando eles embarcam num apaixonado e sensual caso de amor, Ana não só descobre mais sobre seus próprios desejos, como também sobre os segredos obscuros que Grey tenta manter escondidos...";

      var bookNetflix = "https://www.netflix.com/br/title/80013872?source=35";
      var setLinkN = document.getElementById("carousel4-netflix");
      setLinkN.setAttribute("href", bookNetflix);

      var showNetflix = " ";
      var setShowN = document.getElementById("carousel4-netflix-show");
      setShowN.setAttribute("style", showNetflix);

      var bookPrime = "https://www.primevideo.com/dp/amzn1.dv.gti.74b3665a-c56d-75f2-0c60-b9e0d1f1cff7?autoplay=0&ref_=atv_cf_strg_wb";
      var setLinkP = document.getElementById("carousel4-prime");
      setLinkP.setAttribute("href", bookPrime);

      var showPrime = " ";
      var setShowP = document.getElementById("carousel4-prime-show");
      setShowP.setAttribute("style", showPrime);

      var bookStar = "https://www.starplus.com/pt-br/movies/cinquenta-tons-de-cinza/tcnq80PZqTup";
      var setLinkS = document.getElementById("carousel4-star");
      setLinkS.setAttribute("href", bookStar);

      var showStar = " ";
      var setShowS = document.getElementById("carousel4-star-show");
      setShowS.setAttribute("style", showStar);

      var bookLink = "CTDC";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);

      var trailerLink = "https://www.youtube.com/embed/DEwIt4amgq4";
      var setLink = document.getElementById("carousel-iframe");
      setLink.setAttribute("src", trailerLink);
      break;
    case '1':
      var bookPoster = "/images/Home/home-adptation-1.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Jogador número 1";

      document.getElementById(author[position - 1]).innerHTML = "Ernest Cline";

      document.getElementById(genre[position - 1]).innerHTML = "Filme";

      document.getElementById(sino[position - 1]).innerHTML = "Um mundo em jogo, a busca pelo grande prêmio. Você está preparado, Jogador número 1? O ano é 2044 e a Terra não é mais a mesma. Fome, guerras e desemprego empurraram a humanidade para um estado de apatia nunca antes visto.Wade Watts é mais um dos que escapa da desanimadora realidade passando horas e horas conectado ao OASIS ? uma utopia virtual global que permite aos usuários ser o que quiserem, um lugar onde se pode viver e se apaixonar em qualquer um dos mundos inspirados nos filmes, videogames e cultura pop dos anos 1980.Mas a possibilidade de existir em outra realidade não é o único atrativo do OASIS, o falecido James Halliday, bilionário e criador do jogo, escondeu em algum lugar desse imenso playground uma série de easter-eggs que premiará com sua enorme fortuna ? e poder ? aquele que conseguir desvendá-los.";

      var bookH = "https://play.hbomax.com/page/urn:hbo:page:GX9q5dgf0LMILwgEAAAF0:type:feature?source=googleHBOMAX&action=open";
      var setLinkH = document.getElementById("carousel4-hbo");
      setLinkH.setAttribute("href", bookH);

      var showHbo = " ";
      var setShowH = document.getElementById("carousel4-hbo-show");
      setShowH.setAttribute("style", showHbo);

      var bookPrime = "https://www.primevideo.com/dp/amzn1.dv.gti.78b680ff-76d5-f11d-300c-65263d116eaa?autoplay=0&ref_=atv_cf_strg_wb";
      var setLinkP = document.getElementById("carousel4-prime");
      setLinkP.setAttribute("href", bookPrime);

      var showPrime = " ";
      var setShowP = document.getElementById("carousel4-prime-show");
      setShowP.setAttribute("style", showPrime);

      var bookLink = "JN1";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);

      var trailerLink = "https://www.youtube.com/embed/q_1OJNcTld0";
      var setLink = document.getElementById("carousel-iframe");
      setLink.setAttribute("src", trailerLink);
      break;
    case 'fallen':
      var bookPoster = "/images/Home/home-adptation-fallen.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Fallen";

      document.getElementById(author[position - 1]).innerHTML = "Lauren Kate";

      document.getElementById(genre[position - 1]).innerHTML = "Filme";

      document.getElementById(sino[position - 1]).innerHTML = "Excitante, sombrio e romântico Fallen é, ao mesmo tempo, um thriller vigoroso e uma inesquecível história de amor. Lauren aposta no amor impossível entre os protagonistas para tecer o início de uma saga com todos os ingredientes de um cult do gênero. Em Fallen, acompanhamos a adolescente Luce, mandada para um reformatório ― apropriadamente batizado de Sword & Cross ― após a morte do namorado em um incêndio misterioso. Ela suspeita que estranhas sombras negras, que a atormentam desde a infância, são as verdadeiras responsáveis. Mas quem acreditaria nela?Na escola, ela encontra o etereamente belo Daniel Grigori, que desperta uma estranha sensação de reconhecimento: único ponto luminoso num lugar onde celulares são proibidos e há câmeras de vigilância por todos os cantos. ";

      var bookTele = "https://globoplay.globo.com/fallen/t/Wc1BHq26hR/";
      var setLinkT = document.getElementById("carousel4-tele");
      setLinkT.setAttribute("href", bookTele);

      var showTele = " ";
      var setShowT = document.getElementById("carousel4-tele-show");
      setShowT.setAttribute("style", showTele);

      var bookLink = "F";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);

      var trailerLink = "https://www.youtube.com/embed/fc13V14Bs0c";
      var setLink = document.getElementById("carousel-iframe");
      setLink.setAttribute("src", trailerLink);
      break;
    case 'vinci':
      var bookPoster = "/images/Home/home-adptation-vinci.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "O código da vinci";

      document.getElementById(author[position - 1]).innerHTML = "Dan Brown";

      document.getElementById(genre[position - 1]).innerHTML = "Filme";

      document.getElementById(sino[position - 1]).innerHTML = "Um assassinato dentro do Museu do Louvre, em Paris, traz à tona uma sinistra conspiração para revelar um segredo que foi protegido por uma sociedade secreta desde os tempos de Jesus Cristo. A vítima é o respeitado curador do museu, Jacques Saunière, um dos líderes dessa antiga fraternidade, o Priorado de Sião, que já teve como membros Leonardo da Vinci, Victor Hugo e Isaac Newton.";

      var bookH = "https://play.hbomax.com/page/urn:hbo:page:GYQFw9wxoGa60hQEAAAF0:type:feature?source=googleHBOMAX&action=play";
      var setLinkH = document.getElementById("carousel4-hbo");
      setLinkH.setAttribute("href", bookH);

      var showHbo = " ";
      var setShowH = document.getElementById("carousel4-hbo-show");
      setShowH.setAttribute("style", showHbo);

      var bookStar = "https://www.starplus.com/pt-br/movies/o-codigo-da-vinci/2abnYKoPSyVv";
      var setLinkS = document.getElementById("carousel4-star");
      setLinkS.setAttribute("href", bookStar);

      var showStar = " ";
      var setShowS = document.getElementById("carousel4-star-show");
      setShowS.setAttribute("style", showStar);

      var bookLink = "OCDV";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);

      var trailerLink = "https://www.youtube.com/embed/nNVoP3nESOw";
      var setLink = document.getElementById("carousel-iframe");
      setLink.setAttribute("src", trailerLink);
      break;
    default:
      break;
  }
  lastCarousel = position;
}
