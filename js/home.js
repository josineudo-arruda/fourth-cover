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

      document.getElementById(title[position - 1]).innerHTML = "O di??rio de Anne Frank";

      document.getElementById(author[position - 1]).innerHTML = "Anne Frank";

      document.getElementById(genre[position - 1]).innerHTML = "Guerra";

      document.getElementById(sino[position - 1]).innerHTML = "Descoberto no s??t??o em que ela passou os ??ltimos anos de sua vida, o not??vel di??rio de Anne Frank se tornou um cl??ssico mundial - um lembrete poderoso dos horrores da guerra e um testemunho eloquente do esp??rito humano. Em 1942, com os nazistas ocupando a Holanda, uma menina judia de treze anos e sua fam??lia fugiram de sua casa em Amsterd?? e se esconderam. Nos dois anos seguintes, at?? que seu paradeiro fosse revelado ?? Gestapo, eles e outra fam??lia viveram enclausurados no 'Anexo Secreto' de um antigo pr??dio de escrit??rios. Isolados do mundo exterior, eles enfrentaram fome, t??dio, as constantes crueldades de viver em quartos confinados e a sempre presente amea??a de descoberta e morte. Em seu di??rio, Anne Frank registrou impress??es v??vidas de suas experi??ncias durante esse per??odo. Por vezes pensativo, comovente e divertido, seu relato oferece um coment??rio fascinante sobre a coragem e a fragilidade humana e um autorretrato convincente de uma jovem sens??vel e espirituosa cuja promessa foi tragicamente interrompida.";

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

      document.getElementById(sino[position - 1]).innerHTML = "Brilhante em narrativas curtas, King j?? escreveu alguns contos que viraram sucesso em todo o mundo, como as hist??rias que inspiraram os filmes Conta comigo e Um sonho de liberdade. Neste livro, assim como em Quatro esta????es e Escurid??o total sem estrelas, ele cria uma cole????o ??nica e emocionante, demonstrando mais uma vez por que ?? considerado um dos maiores contadores de hist??rias de todos os tempos.Este ?? um livro sobre amor, amizade, talento e justi??a??? em suas formas mais deturpadas. Em Com sangue, Stephen King re??ne quatro contos com protagonistas inteligentes e complexos, que t??m sua vida comum transformada por algum elemento inexplic??vel.";

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

      document.getElementById(sino[position - 1]).innerHTML = "No dia 5 de setembro, pouco depois da meia-noite, Mateo Torrez e Rufus Emeterio recebem uma liga????o da Central da Morte. A not??cia ?? devastadora: eles v??o morrer naquele mesmo dia. Os dois n??o se conhecem, mas, por motivos diferentes, est??o ?? procura de um amigo com quem compartilhar os ??ltimos momentos, uma conex??o verdadeira que ajude a diminuir um pouco a ang??stia e a solid??o que sentem. Por sorte, existe um aplicativo para isso, e ?? gra??as a ele que Rufus e Mateo v??o se encontrar para uma ??ltima grande aventura: viver uma vida inteira em um ??nico dia.";

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

      document.getElementById(sino[position - 1]).innerHTML = "O COLECIONADOR ?? a hist??ria de Frederick Clegg, um homem solit??rio, de origem humilde, menosprezado por uma sociedade esnobe, que encontra o grande amor de sua vida. Tudo o que ele deseja ?? passar um tempo a s??s com ela, demonstrar seus nobres sentimentos e deixar claro que eles nasceram um para o outro.O COLECIONADOR tamb??m ?? a hist??ria de Miranda Gray, uma jovem estudante de artes sequestrada por um man??aco que acha que pode obrig??-la a se apaixonar por ele. Tudo o que ela deseja ?? escapar do cativeiro, e vai usar de toda sua intelig??ncia para sobreviver ao inferno em que sua vida se transformou. O romance ?? narrado por dois personagens antag??nicos: o sequestrador e sua v??tima. Frederick e Miranda.";

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

      document.getElementById(sino[position - 1]).innerHTML = "Verity Crawford ?? a autora best-seller por tr??s de uma s??rie de sucesso. Ela est?? no auge de sua carreira, aclamada pela cr??tica e pelo p??blico, no entanto, um s??bito e terr??vel acidente acaba interrompendo suas atividades, deixando-a sem condi????es de concluir a hist??ria... E ?? nessa complexa circunst??ncia que surge Lowen Ashleigh, uma escritora ?? beira da fal??ncia convidada a escrever, sob um pseud??nimo, os tr??s livros restantes da j?? consolidada s??rie. Para que consiga entender melhor o processo criativo de Verity com rela????o aos livros publicados e, ainda, tentar descobrir seus poss??veis planos para os pr??ximos, Lowen decide passar alguns dias na casa dos Crawford, imersa no ca??tico escrit??rio de Verity - e, l??, encontra uma esp??cie de autobiografia onde a escritora narra os fatos acontecidos desde o dia em que conhece Jeremy, seu marido, at?? os instantes imediatamente anteriores a seu acidente - incluindo sua perspectiva sobre as trag??dias ocorridas ??s filhas do casal.";

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

      document.getElementById(sino[position - 1]).innerHTML = "Lend??ria estrela de Hollywood, Evelyn Hugo sempre esteve sob os holofotes ??? seja estrelando uma produ????o vencedora do Oscar, protagonizando algum esc??ndalo ou aparecendo com um novo marido??? pela s??tima vez. Agora, prestes a completar oitenta anos e reclusa em seu apartamento no Upper East Side, a famigerada atriz decide contar a pr??pria hist??ria ??? ou sua ???verdadeira hist??ria??? ???, mas com uma condi????o: que Monique Grant, jornalista iniciante e at?? ent??o desconhecida, seja a entrevistadora. Ao embarcar nessa misteriosa empreitada, a jovem rep??rter come??a a se dar conta de que nada ?? por acaso ??? e que suas trajet??rias podem estar profunda e irreversivelmente conectadas.";

      var bookLink = "OSMDEH";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'looking':
      var bookPoster = "/images/Home/home-acclaimed-looking.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Quando ningu??m est?? olhando";

      document.getElementById(author[position - 1]).innerHTML = "Alyssa Cole";

      document.getElementById(genre[position - 1]).innerHTML = "Suspense";

      document.getElementById(sino[position - 1]).innerHTML = "Sydney Green nasceu e foi criada no Brooklyn, em Nova York, mas cada vez que ela pisca os olhos seu amado bairro parece mudar. Condom??nios se espalham como erva daninha, placas de ???vende-se??? surgem da noite para o dia e os vizinhos que ela conhece a vida toda est??o sumindo. Para manter de p?? tanto o passado quanto o presente da comunidade, Sydney decide canalizar sua frustra????o planejando um passeio guiado em que pretende contar a verdadeira hist??ria do local. S?? que, para tornar o projeto realidade, vai precisar aturar seu novo vizinho, Theo, como assistente. A pesquisa dos dois, entretanto, logo se transforma. O que era apenas uma distra????o vira uma hist??ria de paranoia e medo. No fim das contas, talvez os vizinhos n??o tenham se mudado para outros bairros e a revitaliza????o do lugar seja mais mortal do que eles imaginaram.";

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

      document.getElementById(genre[position - 1]).innerHTML = "Fic????o";

      document.getElementById(sino[position - 1]).innerHTML = "Evan Hansen sempre teve muita dificuldade de fazer amigos. Para mudar isso, decide seguir as recomenda????es de seu psic??logo e escrever cartas encorajadoras para si mesmo, com esperan??a de que seu ??ltimo ano na escola seja um pouco melhor. O que n??o esperava era que uma das cartas fosse parar nas m??os de Connor Murphy, o aluno mais encrenqueiro da turma. Quando Connor comete suic??dio e sua fam??lia encontra a carta de Evan, todos come??am a pensar que os dois eram melhores amigos. Sem conseguir explicar a situa????o, Evan acaba ref??m de uma grande mentira. Ao mesmo tempo, gra??as a essa (falsa) amizade, o garoto finalmente se aproxima de Zoe, a menina de seus sonhos, e passa a ser notado no col??gio. ";

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

      document.getElementById(sino[position - 1]).innerHTML = "O livro come??a no dia do quinto anivers??rio de casamento de Nick e Amy Dunne, quando a linda e inteligente esposa de Nick desaparece da casa deles ??s margens do rio Mississippi. Sinais indicam que se trata de um sequestro violento e Nick rapidamente se torna o principal suspeito. Sob press??o da pol??cia, da m??dia e dos ferozmente amorosos pais de Amy, Nick desfia uma s??rie intermin??vel de mentiras, meias verdades e comportamento inapropriado. Ele ?? evasivo e amargo ??? mas seria um assassino? Ao mesmo tempo, passagensdo di??rio de Amy revelam um casamento tumultuado ??? mas ela estaria contando toda a hist??ria?";

      var bookLink = "GE";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'lying':
      var bookPoster = "/images/Home/home-acclaimed-lying.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Um de n??s esta mentindo";

      document.getElementById(author[position - 1]).innerHTML = "Karen M. McManus";

      document.getElementById(genre[position - 1]).innerHTML = "Suspense";

      document.getElementById(sino[position - 1]).innerHTML = "Numa tarde de segunda-feira, cinco estudantes do col??gio Bayview entram na sala de deten????o: Bronwyn, a g??nia, comprometida a estudar em Yale, nunca quebra as regras. Addy, a bela, a perfeita defini????o da princesa do baile de primavera. Nate, o criminoso, j?? em liberdade condicional por tr??fico de drogas. Cooper, o atleta, astro do time de beisebol. E Simon, o p??ria, criador do mais famoso aplicativo de fofocas da escola. S?? que Simon n??o consegue ir embora. Antes do fim da deten????o, ele est?? morto. E, de acordo com os investigadores, a sua morte n??o foi acidental. Todos os alunos que estavam na deten????o s??o suspeitos e cada um tem algo a esconder...";

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

      document.getElementById(sino[position - 1]).innerHTML = "Summit Lake, uma pequena cidade entre montanhas, ?? esse tipo de lugar, buc??lico e com encantadoras casas dispostas ?? beira de um longo trecho de ??gua intocada.Duas semanas atr??s, a estudante de direito Becca Eckersley foi brutalmente assassinada em uma dessas casas. Filha de um poderoso advogado, Becca estava no auge de sua vida. Atra??da instintivamente pela not??cia, a rep??rter Kelsey Castle vai at?? a cidade para investigar o caso. ...E LOGO SE ESTABELECE UMA CONEX??O ??NTIMA QUANDO UM VIVO CAMINHA NAS MESMAS PEGADAS DOS MORTOS...E enquanto descobre sobre as amizades de Becca, sua vida amorosa e os segredos que ela guardava, a rep??rter fica cada vez mais convencida de que a verdade sobre o que aconteceu com Becca pode ser a chave para superar as marcas sombrias de seu pr??prio passado.";

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

      document.getElementById(sino[position - 1]).innerHTML = "'Um v??nculo que ?? definido num momento e se prolonga por uma d??cada. Um v??nculo que nem o tempo nem a dist??ncia podem romper. Um v??nculo que vai durar para sempre.' - Ao menos era o que eles imaginavam. Quando, aos dezessete anos, Rune Kristiansen retorna da Noruega para o lugar onde passou a inf??ncia, a cidade americana de Blossom Grove, na Ge??rgia , ele s?? tem uma coisa em mente: reencontrar Poppy Litchfield, a garota que era sua cara-metade e que tinha prometido esperar fielmente por seu retorno. E ele quer descobrir por que, nos dois anos em que esteve fora, ela o deletou de sua vida sem dar nenhuma explica????o.";

      var bookLink = "MBDG";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'memories':
      var bookPoster = "/images/Home/home-brazil-memories.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Mem??rias p??stumas de Br??s Cubas";

      document.getElementById(author[position - 1]).innerHTML = "Machado Assis";

      document.getElementById(genre[position - 1]).innerHTML = "Drama";

      document.getElementById(sino[position - 1]).innerHTML = "Escrito em 1880 em folhetins, este cl??ssico da literatura brasileira ?? considerado o precursor do Realismo. Se voc?? n??o cismar de sofrer com a l??ngua que ?? diferente do portugu??s que a gente usa hoje em dia, vai se divertir a valer com essa hist??ria narrada por um personagem morto que, de seu t??mulo, se dirige aos leitores para criticar a sociedade da ??poca. Nesta edi????o especial voc?? tem o texto integral acompanhado de explica????es e links bem espertos que o ajudar??o a compreender melhor a trama, diferentes estilos de ilustra????es e um encarte com o mapa dos personagens para voc?? lembrar quem ?? quem no romance de Machado de Assis.";

      var bookLink = "MPDBC";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'sertoes':
      var bookPoster = "/images/Home/home-brazil-sertoes.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Os sert??es";

      document.getElementById(author[position - 1]).innerHTML = "Euclides da Cunha";

      document.getElementById(genre[position - 1]).innerHTML = "Drama";

      document.getElementById(sino[position - 1]).innerHTML = "<strong>Os sert??es</strong> ??? marco fundamental nos estudos sobre a forma????o do imagin??rio nacional, ao lado de Casa-grande e senzala e Ra??zes do Brasil ??? foi escrito a partir de um trabalho jornal??stico sobre a rebeli??o de Canudos, liderada por Antonio Conselheiro e duramente reprimida pelo governo. Baseada em teorias deterministas em voga na ??poca, a obra aborda cientificamente a influ??ncia do meio sobre o homem, como mostra a pr??pria estrutura dos cap??tulos: ???A Terra???, ???O Homem???, ???A Luta???.Parte da riqueza do livro reside no fato de ele retratar a mudan??a de opini??o do escritor que, movido por um esp??rito patri??tico e republicano, via com maus olhos a revolta dos ???fan??ticos??? defensores da monarquia, alinhado ao restante da elite letrada, que n??o tolerava a insurg??ncia de um grupo, considerando-a uma amea??a ao projeto civilizat??rio do Brasil, do qual o ideal positivista de ???ordem e progresso??? era o lema.";

      var bookLink = "OS";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'folhas':
      var bookPoster = "/images/Home/home-brazil-folhas.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "De folhas que resistem";

      document.getElementById(author[position - 1]).innerHTML = "Ra??ssa Letti??re";

      document.getElementById(genre[position - 1]).innerHTML = "Drama e Suspense";

      document.getElementById(sino[position - 1]).innerHTML = "Um enigma na curva de uma estrada e os quatro bra??os de uma cruz. Um homem que v?? a m??e perder a sanidade aos poucos. Outro que confere o obitu??rio de jornais em busca de um nome conhecido. Uma refei????o que evoca todas as ??ltimas ceias. Uma amizade de inf??ncia, em meio a empurr??es e quedas, leva a uma decis??o irrevers??vel. <strong>Em De folhas que resistem</strong>, Ra??ssa Letti??re comp??e uma proposta liter??ria potente, em harmonia com o que h?? de melhor na produ????o liter??ria contempor??nea. A autora traz contos com aroma e cor, para que os leitores possam experiment??-los com todos os sentidos de que puderem lan??ar m??o e mistur??-los de forma sinest??sica no embate com o texto. Temas como mem??ria, desejo e conflito familiar se descortinam no embate entre a intimidade e a vida social de suas personagens.";

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

      document.getElementById(sino[position - 1]).innerHTML = "Cristina ?? a jovem rom??ntica que vem de Portugal para casar-se com Tiago. Decepciona-se logo ao desembarcar do navio: seu prometido n??o a aguarda. E, para chegar a Lagoa Serena, a propriedade da fam??lia do noivo, precisa enfrentar dificuldades a fim de transpor a muralha da Serra do Mar, que separa o litoral da vila de S??o Paulo de Piratininga. Mas Cristina ter?? de lidar com muito mais do que as vicissitudes de uma terra selvagem: a indiferen??a de Tiago, que parece s?? querer bem ??s estrelas, e os h??bitos t??o distintos daqueles do Reino.";

      var bookLink = "AM";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'salto':
      var bookPoster = "/images/Home/home-brazil-salto.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Um salto para o amor";

      document.getElementById(author[position - 1]).innerHTML = "Aione Sim??es";

      document.getElementById(genre[position - 1]).innerHTML = "Romance";

      document.getElementById(sino[position - 1]).innerHTML = "Quanto mais tentam coloc??-la para baixo, menos ela se deixa abater. Ao menos tem sido assim nos ??ltimos anos, desde que enfrentou a desestrutura????o de sua fam??lia e optou por mudar sua vida por completo. Lily pediu demiss??o de seu trabalho e decidiu abrir uma loja de roupa ??? a Frida ???, decidida a transform??-la num espa??o para todos os tipos de mulheres. Depois de um ano da abertura da loja, ela sente que realmente superou o passado. Ou, pelo menos, era o que achava. Ao receber a not??cia de que precisa aumentar o faturamento se n??o quiser declarar fal??ncia, Lily acredita que aguenta o tranco. Quando se v?? tendo que enfrentar as pr??prias inseguran??as ao se tornar a garota-propaganda da Frida, percebe que pode ser mais dif??cil do que imaginava, mas ela est?? determinada. O problema mesmo ?? quando seu cora????o come??a a bater mais r??pido, ao ritmo da m??sica de um certo cantor.";

      var bookLink = "USPOA";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'encontro':
      var bookPoster = "/images/Home/home-brazil-encontro.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Enquanto eu n??o te encontro";

      document.getElementById(author[position - 1]).innerHTML = "Pedro Rhuas";

      document.getElementById(genre[position - 1]).innerHTML = "Romance e LGBTQIA+";

      document.getElementById(sino[position - 1]).innerHTML = "A vida tem sido boa para Lucas. Ele passou no Enem para estudar publicidade; se mudou com Eric, seu melhor amigo, do interior do Rio Grande do Norte para a capital; e conseguiu sua t??o aguardada liberdade. Mas, no amor, Lucas ?? um desastre. O maior f?? de Katy Perry no Nordeste tem certeza de que nem toda a sorte do mundo poderia fazer com que ele finalmente se apaixonasse pela primeira vez. At?? que, em uma despretensiosa noite de s??bado em 2015, tudo muda. Quando Lucas e Eric v??o na inaugura????o do Titanic, a mais nova balada da cidade, Lucas esbarra (literalmente!) em Pierre, um lindo garoto franc??s que parece ter sa??do dos seus sonhos. Em meio a drinques, segredos e sonhos partilhados, Lucas e Pierre se conectam instantaneamente. Eles vivem o encontro mais especial de suas vidas, mas o Universo tem outros planos para o futuro??? At?? a noite acabar, o que ser?? que vai acontecer com eles?";

      var bookLink = "ENTE";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'obvio':
      var bookPoster = "/images/Home/home-brazil-obvio.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "O amor n??o ?? ??bvio";

      document.getElementById(author[position - 1]).innerHTML = "Elayne Baeta";

      document.getElementById(genre[position - 1]).innerHTML = "Romance";

      document.getElementById(sino[position - 1]).innerHTML = "??ris tem 17 anos e est?? viciada na novela Amor em atos. Ela e sua vizinha, Dona S??mia, de 68 anos, n??o perdem um epis??dio. Na escola, parece que todo mundo s?? pensa em duas coisas: na festa de formatura e em perder a virgindade. S?? que a vida de ??ris est?? prestes a mudar: Cadu Sena, sua paix??o plat??nica desde a oitava s??rie, est?? solteiro. Essa ?? a chance de ??ris. Mas antes ela precisa entender o que levou a namorada de Cadu a deix??-lo por uma garota, ??dra Norr. Montada em sua bicicleta, ??ris vai cruzar S??o Patrique para descobrir tudo sobre ??dra, e n??o vai demorar para se enredar tamb??m nos encantos da garota. A gente pode achar que sabe por quem vai se apaixonar, mas o amor n??o ?? ??bvio.";

      var bookLink = "OANEO";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'engolir':
      var bookPoster = "/images/Home/home-brazil-engolir.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Verdades dif??ceis de engolir: Um romance";

      document.getElementById(author[position - 1]).innerHTML = "Samantha Silvany";

      document.getElementById(genre[position - 1]).innerHTML = "Romance";

      document.getElementById(sino[position - 1]).innerHTML = "Amor ?? morar em um peito que nos cabe por inteiro. Se a gente precisa for??ar a entrada ou se espremer para servir, ?? hora de nos mudarmos.??? O escritor Dan pensava estar vivendo um verdadeiro romance clich?? com seu amor de inf??ncia, pelo menos at?? conhecer Sofia, uma mulher que o faz sentir coisas que nunca sentiu antes. Sofia, uma mulher empoderada e decidida, mas azarada no amor, achava ter encontrado seu par perfeito, at?? descobrir que seu pr??ncipe encantado era o mesmo de outra pessoa. J?? Alicia est?? convencida de que encontrou o grande amor e que nada e ningu??m ir??o impedi-la de seguir ao altar e ter seu t??o sonhado ???felizes para sempre???. Mesmo que precise passar por cima de si mesma para isso. Mesmo que tenha que esmagar seu amor-pr??prio para provar para si e para os outros que aquele homem ?? a metade que lhe falta.";

      var bookLink = "VDDE";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'contos':
      var bookPoster = "/images/Home/home-brazil-contos.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Os cem melhores contos brasileiros do s??culo";

      document.getElementById(author[position - 1]).innerHTML = "Italo Moriconi";

      document.getElementById(genre[position - 1]).innerHTML = "Drama e Fic????o";

      document.getElementById(sino[position - 1]).innerHTML = "Para J??lio Cortazar, conto ?? aquele texto que corre em poucas linhas e em alta velocidade narrativa, capaz de nocautear o leitor com seu impacto dram??tico concentrado. Coube ao professor Italo Moriconi o desafio lan??ado pela Objetiva de garimpar os cem melhores textos do g??nero produzidos no Brasil ao longo do s??culo XX. Um trabalho que deixasse de lado os r??gidos crit??rios acad??micos e fosse pautado somente pela qualidade e sabor dessas pequenas obras-primas. O resultado ?? a colet??nea Os Cem Melhores Contos Brasileiros do S??culo, um passeio pela mais deliciosa e contundente fic????o curta produzida no Brasil entre 1900 e o fim dos anos 90. Uma antologia capaz de traduzir as mudan??as do pa??s e as inquieta????es de v??rias gera????es de brasileiros, em cem anos de produ????o liter??ria. A prova de que a arte do g??nero n??o cessa de melhorar em nossa literatura.";

      var bookLink = "OCMCB";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'quero':
      var bookPoster = "/images/Home/home-brazil-quero.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "N??o quero ser como voc??";

      document.getElementById(author[position - 1]).innerHTML = "Vinicius Fernandes";

      document.getElementById(genre[position - 1]).innerHTML = "Romance e LGBTQIA+";

      document.getElementById(sino[position - 1]).innerHTML = "Lucas h?? tempos se fechou para o amor. Na rotina agitada do psic??logo gato e bem-sucedido, s?? h?? espa??o para encontros casuais, desde que n??o durem mais de uma noite. J?? Gabriel ?? o romantismo em pessoa. Mesmo j?? tendo quebrado a cara algumas vezes, ele sonha em encontrar um grande amor, daquele tipo que faz os olhos revirarem. ?? claro que as hist??rias dos dois v??o se encontrar... Mas at?? que ponto duas pessoas t??o diferentes podem ser felizes? Uma hora voc?? percebe que a vida n??o ?? um conto de fadas (nem perto disso!), e ?? preciso amadurecer. Mas, tamb??m, chega um momento em que voc?? tem que abrir a porta e deixar algu??m entrar. Ser?? que ambos est??o dispostos a isso?";

      var bookLink = "NQSCV";
      var setLink = document.getElementById(link[position - 1]);
      setLink.setAttribute("value", bookLink);
      break;
    case 'finais':
      var bookPoster = "/images/Home/home-brazil-finais.jpg";
      var setPoster = document.getElementById(poster[position - 1]);
      setPoster.setAttribute("src", bookPoster);

      document.getElementById(title[position - 1]).innerHTML = "Um milh??o de finais felizes";

      document.getElementById(author[position - 1]).innerHTML = "Vitor Martins";

      document.getElementById(genre[position - 1]).innerHTML = "Romance e LGBTQIA+";

      document.getElementById(sino[position - 1]).innerHTML = "Jonas n??o sabe muito bem o que fazer da vida. Entre suas leituras e ideias para livros anotadas em um caderninho de bolso, ele precisa dar conta de seus turnos no Rocket Caf?? e ainda lidar com o conservadorismo de seus pais. Sua m??e alimenta a esperan??a de que ele volte a frequentar a igreja, e seu pai n??o faz muito por ele al??m de trazer problemas. Mas ?? quando conhece Arthur, um belo garoto de barba ruiva, que Jonas passa a questionar por quanto tempo conseguir?? viver sob as expectativas de seus pais, fingindo ser uma pessoa diferente de quem ?? de verdade. Buscando conforto em seus amigos (e na sua hist??ria sobre dois piratas bonit??es que se parecem muito com ele e Arthur), Jonas entender?? o verdadeiro significado de fam??lia e amizade, e descobrir?? o poder de uma boa hist??ria.";

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

      document.getElementById(sino[position - 1]).innerHTML = "A ??nica coisa pior e mais desastrosa do que levar um p?? na bunda, ?? levar um p?? na bunda e ver seu ex se tornar a maior subcelebridade do Brasil. N??o s?? isso, mas assistir em tempo real enquanto ele se apaixona por outro cara em TV nacional. Poucas palavras conseguem expressar esse n??vel de decep????o amorosa. Nem mesmo <em>Taylor Swift</em> seria capaz de entender. Mas ?? justamente a tentativa de colocar a dor em palavras, reunidas em cartas para o maldito ex, que faz com que nosso protagonista repense algumas coisas. Entre crises de luto e saudades, existem festas anuais do dia dos ex-namorados com todas as suas amigas que o seu ex detestava. Existe a vida que voc?? deixou para tr??s enquanto amava algu??m que agora ?? somente um estranho com milh??es de seguidores. E talvez por tr??s daquele amor existisse tamb??m um tanto de controle, de gaslighting, de codepend??ncia.";

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
  
        document.getElementById(genre[position - 1]).innerHTML = "Fic????o";
  
        document.getElementById(sino[position - 1]).innerHTML = "Eles n??o s??o os her??is que gostar??amos.S??o apenas os que conseguimos encontrar. O ano ?? 2380, a humanidade deixou seu ninho para se espalhar pela gal??xia: n??o apenas a Via L??ctea, mas dezenas de outras e os rec??m-formados cadetes da Academia Aurora est??o sendo enviados em suas primeiras miss??es. Tyler Jones, o garoto prod??gio, est?? pronto para recrutar o esquadr??o dos sonhos, mas seu pr??prio hero??smo idiota faz com que ele fique com o que mais ningu??m da academia quis...";

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

      document.getElementById(title[position - 1]).innerHTML = "Admir??vel mundo novo";

      document.getElementById(author[position - 1]).innerHTML = "Aldous Leonard Huxley";

      document.getElementById(genre[position - 1]).innerHTML = "Fic????o e Romance";

      document.getElementById(sino[position - 1]).innerHTML = "Em uma sociedade organizada segundo princ??pios estritamente cient??ficos, Bernard Marx, um psic??logo, sente-se inadequado quando se compara aos outros seres de sua casta. Ao descobrir uma ???reserva hist??rica??? que preserva costumes de uma sociedade anterior ??? muito semelhante ?? do leitor ??? Bernard vai perceber as diferen??as entre esta civiliza????o e a sua ??? e a partir de um sentimento de inconformismo ele desafiar?? o mundo. A hist??ria de Bernard se passa em um ambiente em que a literatura, a m??sica e o cinema s?? t??m a fun????o de solidificar a aliena????o; um universo que louva o avan??o da t??cnica, a produ????o em s??rie, a uniformidade contra a diversidade.";

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

      document.getElementById(sino[position - 1]).innerHTML = "Quando sua m??e foi eleita presidenta dos Estados Unidos, Alex Claremont-Diaz se tornou o novo queridinho da m??dia norte-americana. Bonito, carism??tico e com personalidade forte, Alex tem tudo para seguir os passos de seus pais e conquistar uma carreira na pol??tica, como tanto deseja. Mas quando sua fam??lia ?? convidada para o casamento real do pr??ncipe brit??nico Philip, Alex tem que encarar o seu primeiro desafio diplom??tico: lidar com Henry, irm??o mais novo de Philip, o pr??ncipe mais adorado do mundo, com quem ele ?? constantemente comparado ??? e que ele n??o suporta.";

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

      document.getElementById(sino[position - 1]).innerHTML = "Depois da morte da m??e, Lina fica com a miss??o de realizar um ??ltimo pedido: ir at?? a It??lia para conhecer o pai. Do dia para a noite, ela se v?? na famosa paisagem da Toscana, morando em uma casa localizada no mesmo terreno de um cemit??rio memorial de soldados americanos da Segunda Guerra Mundial, com um homem que nunca tinha ouvido falar. Apesar das belezas arquitet??nicas, da hist??ria da cidade e das comidas maravilhosas, o que Lina mais quer ?? ir embora correndo dali. Mas as coisas come??am a mudar quando ela recebe um antigo di??rio da m??e. Nele, a menina embarca em uma misteriosa hist??ria de amor, que pode explicar suas pr??prias origens. No meio desse turbilh??o de emo????es, Lina ainda conhece Ren e Thomas, dois meninos lindos que v??o mexer ainda mais com seu cora????o.";

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

      document.getElementById(title[position - 1]).innerHTML = "?? assim que acaba";

      document.getElementById(author[position - 1]).innerHTML = "Colleen Hoover";

      document.getElementById(genre[position - 1]).innerHTML = "Romance";

      document.getElementById(sino[position - 1]).innerHTML = "Em <strong>?? assim que acaba</strong>, Colleen Hoover nos apresenta Lily, uma jovem que se mudou de uma cidadezinha do Maine para Boston, se formou em marketing e abriu a pr??pria floricultura. E ?? em um dos terra??os de Boston que ela conhece Ryle, um neurocirurgi??o confiante, teimoso e talvez at?? um pouco arrogante, com uma grande avers??o a relacionamentos, mas que se sente muito atra??do por ela. Quando os dois se apaixonam, Lily se v?? no meio de um relacionamento turbulento que n??o ?? o que ela esperava. Mas ser?? que ela conseguir?? enxergar isso, por mais doloroso que seja?";

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

      document.getElementById(sino[position - 1]).innerHTML = "Alicia Berenson tinha uma vida perfeita. Ela era uma pintora famosa casada com um fot??grafo bem-sucedido e morava numa ??rea nobre de Londres que d?? para o parque de Hampstead Heath. Certa noite, Gabriel, seu marido, voltou tarde para casa depois de um ensaio para a Vogue, e de repente a vida de Alicia mudou completamente... A recusa de Alicia a falar ou a dar qualquer explica????o sobre o assassinato do marido - um mist??rio que atrai a aten????o do p??blico e aumenta ainda mais a fama da pintora. Entretanto, enquanto seus quadros passam a ser mais valorizados que nunca, ela ?? levada para o Grove, um hospital psiqui??trico judici??rio na zona norte de Londres.";

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

      document.getElementById(sino[position - 1]).innerHTML = "Em 1986, Eddie e os amigos passam a maior parte dos dias andando de bicicleta pela pacata vizinhan??a em busca de aventuras. Os desenhos a giz s??o seu c??digo secreto: homenzinhos rabiscados no asfalto; mensagens que s?? eles entendem. Mas um desenho misterioso leva o grupo de crian??as at?? um corpo desmembrado e espalhado em um bosque. Depois disso, nada mais ?? como antes. Em 2016, Eddie se esfor??a para superar o passado, at?? que um dia ele e os amigos de inf??ncia recebem um mesmo aviso: o desenho de um homem de giz enforcado. Quando um dos amigos aparece morto, Eddie tem certeza de que precisa descobrir o que de fato aconteceu trinta anos atr??s.";

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

      document.getElementById(sino[position - 1]).innerHTML = "Nas profundezas do sert??o baiano, as irm??s Bibiana e Belon??sia encontram uma velha e misteriosa faca na mala guardada sob a cama da av??. Ocorre ent??o um acidente. E para sempre suas vidas estar??o ligadas ??? a ponto de uma precisar ser a voz da outra. Numa trama conduzida com maestria e com uma prosa melodiosa, o romance conta uma hist??ria de vida e morte, de combate e reden????o.";

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

      document.getElementById(title[position - 1]).innerHTML = "Todas as suas (im)perfei????es";

      document.getElementById(author[position - 1]).innerHTML = "Colleen Hoover ";

      document.getElementById(genre[position - 1]).innerHTML = "Romance e Drama";

      document.getElementById(sino[position - 1]).innerHTML = "Todas as suas imperfei????es narra a hist??ria de Quinn e Graham. Eles se conhecem no pior dia de suas vidas; ela chega mais cedo de uma viagem para surpreender o noivo, ele testemunha a trai????o da namorada. E ?? assim que ambos acabam no corredor de um pr??dio, trocando confid??ncias, biscoitos da sorte e palavras de conforto.Fim da dan??a... se o destino n??o tivesse outros planos para os dois. Meses mais tarde, os acordes tocam para o casal mais uma vez e eles se reencontram. Graham est?? convencido de que s??o almas g??meas. Quinn jamais se sentiu dessa forma antes. A intensidade do sentimento os assusta, mas eles mergulham de cabe??a mesmo assim. O casamento ?? tudo o que sonhavam, a parceria perfeita. Mesmo nos momentos dif??ceis, sabem que podem contar com o outro.  ";

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

      document.getElementById(title[position - 1]).innerHTML = "Mulheres que correm com os lobos: Mitos e hist??rias do arqu??tipo da Mulher Selvagem";

      document.getElementById(author[position - 1]).innerHTML = "Clarissa Pinkola Est??s";

      document.getElementById(genre[position - 1]).innerHTML = "Drama";

      document.getElementById(sino[position - 1]).innerHTML = "Os lobos foram pintados com um pincel negro nos contos de fada e at?? hoje assustam meninas indefesas. Mas nem sempre eles foram vistos como criaturas terr??veis e violentas. Na Gr??cia antiga e em Roma, o animal era o consorte de Artemis, a ca??adora, e carinhosamente amamentava os her??is. A analista junguiana Clarissa Pinkola Est??s acredita que na nossa sociedade as mulheres v??m sendo tratadas de uma forma semelhante. Abordando 19 mitos, lendas e contos de fada, como a hist??ria do patinho feio e do Barba-Azul, Est??s mostra como a natureza instintiva da mulher foi sendo domesticada ao longo dos tempos, num processo que punia todas aquelas que se rebelavam.";

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

      document.getElementById(title[position - 1]).innerHTML = "Tudo ?? rio";

      document.getElementById(author[position - 1]).innerHTML = "Carla Madeira";

      document.getElementById(genre[position - 1]).innerHTML = "Drama e Fic????o";

      document.getElementById(sino[position - 1]).innerHTML = "Tudo ?? rio ?? o livro de estreia de Carla Madeira. Com uma narrativa madura, precisa e ao mesmo tempo delicada e po??tica, o romance narra a hist??ria do casal Dalva e Ven??ncio, que tem a vida transformada ap??s uma perda tr??gica, resultado do ci??me doentio do marido, e de Lucy, a prostituta mais depravada e cobi??ada da cidade, que entra no caminho deles, formando um tri??ngulo amoroso. A met??fora do rio se revela por meio da narrativa que flui ??? ora intensa, ora mais branda ??? de forma ininterrupta, mas tamb??m por meio do suor, da saliva, do sangue, das l??grimas, do s??men, e Carla faz isso sem ser apelativa, sem sentimentalismo barato, com a habilidade que s?? os melhores escritores possuem.";

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

      document.getElementById(title[position - 1]).innerHTML = "A hip??tese do amor";

      document.getElementById(author[position - 1]).innerHTML = "Ali Hazelwood";

      document.getElementById(genre[position - 1]).innerHTML = "Romance";

      document.getElementById(sino[position - 1]).innerHTML = "Olive Smith, aluna do doutorado em Biologia da Universidade Stanford, acredita na ci??ncia ??? n??o em algo incontrol??vel como o amor. Depois de sair algumas vezes com Jeremy, ela percebe que sua melhor amiga gosta dele e decide junt??-los. Para mostrar que est?? feliz com essa escolha, Olive precisa ser convincente: afinal, cientistas exigem provas. Sem muitas op????es, ela resolve inventar um namoro de mentira e, num momento de p??nico, beija o primeiro homem que v?? pela frente. O problema ?? que esse homem ?? Adam Carlsen, um jovem professor de prest??gio ??? conhecido por levar os alunos ??s l??grimas. Por isso, Olive fica chocada quando o tirano dos laborat??rios concorda em levar adiante a farsa e fingir ser seu namorado.";

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

      document.getElementById(sino[position - 1]).innerHTML = "Encantadora hist??ria de amor que questiona os padr??es sociais chega aos cinemas em 22 de mar??o. Com nova capa e novo t??tulo, a apaixonante hist??ria de Simon conquistou milhares de leitores com uma trama que trata com naturalidade e bom humor a afirma????o e os dilemas de um adolescente gay. Agora, a adapta????o do romance chega ??s telas de cinema com Nick Robinson, de Jurassic World, nopapel de Simon, e Katherine Langford, protagonista de 13 Reasons Why. Simon Spier tem dezesseis anos e ?? gay, mas n??o conversa sobre isso com ningu??m.";

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

      document.getElementById(title[position - 1]).innerHTML = "A culpa ?? das estrelas";

      document.getElementById(author[position - 1]).innerHTML = "John Green";

      document.getElementById(genre[position - 1]).innerHTML = "Filme";

      document.getElementById(sino[position - 1]).innerHTML = "Hazel ?? uma paciente terminal. Ainda que, por um milagre da medicina, seu tumor tenha encolhido bastante ??? o que lhe d?? a promessa de viver mais alguns anos ???, o ??ltimo cap??tulo de sua hist??ria foi escrito no momento do diagn??stico. Mas em todo bom enredo h?? uma reviravolta, e a de Hazel se chama Augustus Waters, um garoto bonito que certo dia aparece no Grupo de Apoio a Crian??as com C??ncer. Juntos, os dois v??o preencher o pequeno infinito das p??ginas em branco de suas vidas.";

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

      document.getElementById(author[position - 1]).innerHTML = "Andr?? Aciman";

      document.getElementById(genre[position - 1]).innerHTML = "Filme";

      document.getElementById(sino[position - 1]).innerHTML = "A casa onde Elio passa os ver??es ?? um verdadeiro para??so na costa italiana, parada certa de amigos, vizinhos, artistas e intelectuais de todos os lugares. Filho de um importante professor universit??rio, o jovem est?? bastante acostumado ?? rotina de, a cada ver??o, hospedar por seis semanas na villa da fam??lia um novo escritor que, em troca da boa acolhida, ajuda seu pai com correspond??ncias e papeladas. Uma cobi??ada resid??ncia liter??ria que j?? atraiu muitos nomes, mas nenhum deles como Oliver.";

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

      document.getElementById(sino[position - 1]).innerHTML = "Orgulho e preconceito ?? o livro mais famoso de Jane Austen e possui uma s??rie de personagens inesquec??veis e um enredo memor??vel. Austen nos apresenta Elizabeth Bennet como hero??na irresist??vel e seu pretendente aristocr??tico, o sr. Darcy. Nesse livro, aspectos diferentes s??o abordados: orgulho encontra preconceito, ascend??ncia social confronta desprezo social, equ??vocos e julgamentos antecipados conduzem alguns personagens ao sofrimento e ao esc??ndalo. O livro pode ser considerado a obra-prima da escritora, que equilibra com??dia com seriedade, observa????o meticulosa das atitudes humanas e sua ironia refinada. A nova cole????o possui capa dura e estilo inspirado nos bullet journals.";

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

      document.getElementById(sino[position - 1]).innerHTML = "Uma estonteante mistura de aventura e misticismo, ecologia e pol??tica, este romance ganhador dos pr??mios Hugo e Nebula deu in??cio a uma das mais ??picas hist??rias de toda a fic????o cient??fica. Duna ?? um triunfo da imagina????o, que influenciar?? a literatura para sempre.Esta edi????o in??dita, com introdu????o de Neil Gaiman, apresenta ao leitor o universo fant??stico criado por Herbert e que ser?? adaptado ao cinema por Denis Villeneuve, diretor de A chegada e de Blade Runner 2049.";

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

      document.getElementById(title[position - 1]).innerHTML = "Caixa de p??ssaros: N??o abra os olhos";

      document.getElementById(author[position - 1]).innerHTML = "Josh Malerman";

      document.getElementById(genre[position - 1]).innerHTML = "Filme";

      document.getElementById(sino[position - 1]).innerHTML = "Romance de estreia de Josh Malerman, Caixa de p??ssaros ?? um thriller psicol??gico tenso e aterrorizante, que explora a ess??ncia do medo. Uma hist??ria que vai deixar o leitor completamente sem f??lego mesmo depois de terminar de ler.Basta uma olhadela para desencadear um impulso violento e incontrol??vel que acabar?? em suic??dio. Ningu??m ?? imune e ningu??m sabe o que provoca essa rea????o nas pessoas. Cinco anos depois do surto ter come??ado, restaram poucos sobreviventes, entre eles Malorie e dois filhos pequenos. Ela sonha em fugir para um local onde a fam??lia possa ficar em seguran??a, mas a viagem que tem pela frente ?? assustadora: uma decis??o errada e eles morrer??o.";

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

      document.getElementById(title[position - 1]).innerHTML = "A Cinco passos de voc??";

      document.getElementById(author[position - 1]).innerHTML = "Rachael Lippincott";

      document.getElementById(genre[position - 1]).innerHTML = "Filme";

      document.getElementById(sino[position - 1]).innerHTML = "Stella Grant gosta de estar no controle. Ela parece ser uma adolescente t??pica, mas em sua rotina h?? listas de tarefas e in??meros rem??dios que ela deve tomar para controlar a fibrose c??stica, uma doen??a cr??nica que impede que seus pulm??es funcionem como deveriam. Suas prioridades s??o manter seus pais felizes e conseguir um transplante ??? e uma coisa n??o existe sem a outra. Mas para ganhar pulm??es novos, Stella precisa seguir seu tratamento ?? risca e eliminar qualquer chance de infec????o, o que significa que ela n??o pode ficar a menos que dois metros de dist??ncia ??? ou seis passos ??? de outros pacientes com a doen??a. O primeiro item ?? f??cil para ela, mas o segundo pode se provar mais dif??cil do que ela esperava.";

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

      document.getElementById(sino[position - 1]).innerHTML = "Durante as f??rias de 1958, em uma pacata cidadezinha chamada Derry, um grupo de sete amigos come??a a ver coisas estranhas. Um conta que viu um palha??o, outro que viu uma m??mia. Finalmente, acabam descobrindo que estavam todos vendo a mesma coisa: um ser sobrenatural e maligno que pode assumir v??rias formas. ?? assim que Bill, Beverly, Eddie, Ben, Richie, Mike e Stan enfrentam a Coisa pela primeira vez.";

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

      document.getElementById(sino[position - 1]).innerHTML = "Ing??nua e inocente, Ana se surpreende ao perceber que, a despeito da enigm??tica reserva de Grey, est?? desesperadamente atra??da por ele. Incapaz de resistir ?? beleza discreta, ?? timidez e ao esp??rito independente de Ana, Grey admite que tamb??m a deseja ??? mas em seus pr??prios termos. Chocada e ao mesmo tempo seduzida pelas estranhas prefer??ncias de Grey, Ana hesita. Por tr??s da fachada de sucesso ??? os neg??cios multinacionais, a vasta fortuna, a amada fam??lia ???, Grey ?? um homem atormentado por dem??nios do passado e consumido pela necessidade de controle. Quando eles embarcam num apaixonado e sensual caso de amor, Ana n??o s?? descobre mais sobre seus pr??prios desejos, como tamb??m sobre os segredos obscuros que Grey tenta manter escondidos...";

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

      document.getElementById(title[position - 1]).innerHTML = "Jogador n??mero 1";

      document.getElementById(author[position - 1]).innerHTML = "Ernest Cline";

      document.getElementById(genre[position - 1]).innerHTML = "Filme";

      document.getElementById(sino[position - 1]).innerHTML = "Um mundo em jogo, a busca pelo grande pr??mio. Voc?? est?? preparado, Jogador n??mero 1? O ano ?? 2044 e a Terra n??o ?? mais a mesma. Fome, guerras e desemprego empurraram a humanidade para um estado de apatia nunca antes visto.Wade Watts ?? mais um dos que escapa da desanimadora realidade passando horas e horas conectado ao OASIS ? uma utopia virtual global que permite aos usu??rios ser o que quiserem, um lugar onde se pode viver e se apaixonar em qualquer um dos mundos inspirados nos filmes, videogames e cultura pop dos anos 1980.Mas a possibilidade de existir em outra realidade n??o ?? o ??nico atrativo do OASIS, o falecido James Halliday, bilion??rio e criador do jogo, escondeu em algum lugar desse imenso playground uma s??rie de easter-eggs que premiar?? com sua enorme fortuna ? e poder ? aquele que conseguir desvend??-los.";

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

      document.getElementById(sino[position - 1]).innerHTML = "Excitante, sombrio e rom??ntico Fallen ??, ao mesmo tempo, um thriller vigoroso e uma inesquec??vel hist??ria de amor. Lauren aposta no amor imposs??vel entre os protagonistas para tecer o in??cio de uma saga com todos os ingredientes de um cult do g??nero. Em Fallen, acompanhamos a adolescente Luce, mandada para um reformat??rio ??? apropriadamente batizado de Sword & Cross ??? ap??s a morte do namorado em um inc??ndio misterioso. Ela suspeita que estranhas sombras negras, que a atormentam desde a inf??ncia, s??o as verdadeiras respons??veis. Mas quem acreditaria nela?Na escola, ela encontra o etereamente belo Daniel Grigori, que desperta uma estranha sensa????o de reconhecimento: ??nico ponto luminoso num lugar onde celulares s??o proibidos e h?? c??meras de vigil??ncia por todos os cantos. ";

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

      document.getElementById(title[position - 1]).innerHTML = "O c??digo da vinci";

      document.getElementById(author[position - 1]).innerHTML = "Dan Brown";

      document.getElementById(genre[position - 1]).innerHTML = "Filme";

      document.getElementById(sino[position - 1]).innerHTML = "Um assassinato dentro do Museu do Louvre, em Paris, traz ?? tona uma sinistra conspira????o para revelar um segredo que foi protegido por uma sociedade secreta desde os tempos de Jesus Cristo. A v??tima ?? o respeitado curador do museu, Jacques Sauni??re, um dos l??deres dessa antiga fraternidade, o Priorado de Si??o, que j?? teve como membros Leonardo da Vinci, Victor Hugo e Isaac Newton.";

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
