var lastSearch = 0;

function searchMovie() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookName = urlParams.get('search');
    var lowCaseBook = bookName.toLowerCase();
    var newName = lowCaseBook.replace(/ /g, ",");
    var searchValue = newName.split(",");

    var display = [
        "display-movie01","display-movie02","display-movie03","display-movie04","display-movie05","display-movie06","display-movie07","display-movie08","display-movie09","display-movie10","display-movie11","display-movie12","display-movie13","display-movie14","display-movie15","display-movie16","display-movie17","display-movie18","display-movie19","display-movie20","display-movie21","display-movie22","display-movie23","display-movie24","display-movie25","display-movie26","display-movie27","display-movie28","display-movie29","display-movie30","display-movie31","display-movie32","display-movie33","display-movie34","display-movie35","display-movie36"
    ];

    for(let i = 0; i < lastSearch; i++) {
        var displayDiv =  "display: none";
        var setDisplay = document.getElementById(display[i]);
        setDisplay.setAttribute("style", displayDiv);
    }

    var bookBDDS = []
    //primeira linha
    bookBDDS.push(["o","diário","de","anne","frank","guerra"]);
    bookBDDS.push(["com","sangue","stephen","king","suspense"]);
    bookBDDS.push(["os","dois","morrem","no","final","adam","silvera","romance","lgbt","lgbtqia+","lgbtq"]);
    bookBDDS.push(["o","colecionador","john","fowles","suspense"]);
    bookBDDS.push(["verity","colleen","hoover","suspense","drama"]);
    bookBDDS.push(["os","maridos","de","evelyn","hugo","lgbt","lgbtqia+","lgbtq","romance","taylor","jenkins","reid"]);
    bookBDDS.push(["mil","beijos","de","garoto","romance","tillie","cole"]);

    //segunda linha
    bookBDDS.push(["memorias","postumas","de","bras","cubas","machado","de","assis","drama","ficção"]);
    bookBDDS.push(["os","sertões","euclides","da","cunha","drama"]);
    bookBDDS.push(["de","folhas","que","resistem","raissa","lettiere","drama"]);
    bookBDDS.push(["a","muralha","dinah","queiroz","drama"]);
    bookBDDS.push(["um","salto","para","o","amor","romance","aione","simões"]);
    bookBDDS.push(["enquanto","não","te", "encontro", "lgbt","lgbtqia+","lgbtq","romance"]);

    //terceira linha
    bookBDDS.push(["aurora","ascende","ficção","amie","kaufman","jay","kristoff"]);
    bookBDDS.push(["admirável","mundo","novo","aldous","leonard","huxley","drama"]);
    bookBDDS.push(["vermelho","branco","e","sangue","azul","casey","mcquiston","lgbt","lgbtqia+","lgbtq","romance"]);
    bookBDDS.push(["amor","e","gelato","jenna","evans","welch","romance"]);
    bookBDDS.push(["a","paciente","silenciosa","alex","michaelides","suspense"]);

    //quarta linha
    bookBDDS.push(["chame","pelo","seu","nome","andre","aciman","lgbt","lgbtqia+","lgbtq","romance"]);
    bookBDDS.push(["a","culpa","é","das","estrelas","john","green","romance"]);
    bookBDDS.push(["love","simon","homo","sapiens","amor","agenda","romance","lgbt","lgbtqia+","lgbtq"]);
    bookBDDS.push(["orgulho","e","preconceito","jane", "austen","drama"]);
    bookBDDS.push(["duna","frank","herbert", "ficção"]);
    bookBDDS.push(["bird","box","caixa","passáros","suspense","josh", "malerman"]);
    
    //autores
    bookBDDS.push(["carry","on","sempre","em","frente","romance","lgbt","lgbtqia+","lgbtq","rainbow","rowell"]);
    bookBDDS.push(["carry","on","any","way","the","winds","blows","venha","o","que","vier","romance","lgbt","lgbtqia+","lgbtq","rainbow","rowell"]);
    bookBDDS.push(["carry","on","wayward","son","o","filho","rebelde","romance","lgbt","lgbtqia+","lgbtq","rainbow","rowell"]);
    
    bookBDDS.push(["é","assim","que","acaba","colleen","hoover","romance"]);
    bookBDDS.push(["todas","suas","imperfeições","imperfeicoes","colleen","hoover","romance"]);
    bookBDDS.push(["de","lukov","com","amor","romance"]);

    bookBDDS.push(["elanor","e","&","park","romance","rainbow","rowell"]);
    bookBDDS.push(["fan","girl","romance","rainbow","rowell"]);
    bookBDDS.push(["anexos","romance","rainbow","rowell"]);

    bookBDDS.push(["nove","9","novembro","colleen","hoover","romance"]);
    bookBDDS.push(["até","o","verão","terminar","colleen","hoover","romance"]);
    bookBDDS.push(["as","mil","partes","do","meu","coração","colleen","hoover","romance"]);

    //sagas
    bookBDDS.push(["heartstopper","dois","garotos","um","encontro","volume","1","romance","lgbt","lgbtqia+","lgbtq","alice","oseman"]);
    bookBDDS.push(["heartstopper","volume","2","romance","lgbt","lgbtqia+","lgbtq","alice","oseman"]);
    bookBDDS.push(["heartstopper","volume","3","romance","lgbt","lgbtqia+","lgbtq","alice","oseman"]);
    bookBDDS.push(["heartstopper","volume","4","romance","lgbt","lgbtqia+","lgbtq","alice","oseman"]);

    bookBDDS.push(["harry","potter","j","k","rowling","a","pedra","filosofal","ficção"]);
    bookBDDS.push(["harry","potter","j","k","rowling","a","câmara","secreta","ficção"]);
    bookBDDS.push(["harry","potter","j","k","rowling","o","prisoneiro","de","azkaban","ficção"]);
    bookBDDS.push(["harry","potter","j","k","rowling","a","cálice","de","fogo","ficção"]);

    bookBDDS.push(["harry","potter","j","k","rowling","a","ordem","da","fênix","ficção"]);
    bookBDDS.push(["harry","potter","j","k","rowling","o","enigma","de","príncipe","ficção"]);
    bookBDDS.push(["harry","potter","j","k","rowling","as","relíquias","da","morte","ficção"]);
    bookBDDS.push(["harry","potter","j","k","rowling","a","criança","almadiçoada","ficção"]);

    //segunda parte dos carrosséis
    bookBDDS.push(["quando","ninguém","está","olhando","suspense","alyssa","cole"]);
    bookBDDS.push(["querido","evan","hansen","ficção","suspense","drama","val", "emmich", "steven", "levenson", "benj","pasek","justin" ,"paul"]);
    bookBDDS.push(["garota","exemplar","suspense","gillian", "flynn"]);
    bookBDDS.push(["um","de","nós","está","mentindo","suspense","karen", "m", "mcmanus"]);
    bookBDDS.push(["garota","a","do","lago","suspense","charlie","donlea"]);

    bookBDDS.push(["o","amor","não","é","óbvio","romance","elayne", "baeta"]);
    bookBDDS.push(["verdades","difíceis","de","engolir","romance","samantha", "silvany"]);
    bookBDDS.push(["os", "cem", "melhores", "contos", "brasileiros", "do", "século","ficção","drama","italo" ,"moriconi"]);
    bookBDDS.push(["não", "quero", "ser", "como", "você","romance","lgbt","lgbtqia+","lgbtq","vinicius", "fernandes"]);
    bookBDDS.push(["querido", "ex","romance","lgbt","lgbtqia+","lgbtq","juan", "jullian"]);
    bookBDDS.push(["um", "milhão","de","finais","felizes","lgbtqia+","lgbtq","lgbt","vitor","martins"]);

    bookBDDS.push(["o","homem","de","giz","suspense","c","j","tudor"]);
    bookBDDS.push(["torto","arado","drama","itamar", "vieira", "junior"]);
    bookBDDS.push(["mulheres", "que", "correm", "com", "os", "lobos", "mitos", "e", "histórias", "do", "arquétipo", "da", "mulher", "selvagem","drama","itamar", "clarissa", "pinkola", "estés"]);
    bookBDDS.push(["tudo","é","rio","drama", "ficção", "carla", "madeira"]);
    bookBDDS.push(["a","hipótese","do","amor", "romance", "ali", "hazelwood"]);

    bookBDDS.push(["a","cinco","passos","de", "você","romance", "rachael", "lippincott"]);
    bookBDDS.push(["a","it","coisa","suspense", "stephen", "king"]);
    bookBDDS.push(["cinquenta", "tons", "de", "cinza","romance", "e", "james","l"]);
    bookBDDS.push(["jogador","número","um","1","ernest","cline","ficção"]);
    bookBDDS.push(["fallen","romance", "lauren", "kate"]);
    bookBDDS.push(["o", "código", "da", "vinci", "ficção", "suspense", "dan","brown"]);


    function tryMovie(input, movie) {
        for(var i = 0; i < input.length; i++) {
            for(var j = 0; j < movie.length; j++) {
                if((JSON.stringify(input[i])==JSON.stringify(movie[j]))== true)
                    return true;
            }
        }
    return false;
    }


    var bookSituation = [
        "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""
    ]

    for(let i = 0; i < 70; i++) {
        bookSituation[i] = tryMovie(searchValue, bookBDDS[i]);
    }
    
    
    var contt = 0;
    for(let i = 0; i < 70; i++) {
        if(bookSituation[i] == true) {
            contt++;
            lastSearch++;
        }
    }

    var poster = [
        "poster01","poster02","poster03","poster04","poster05","poster06","poster07","poster08","poster09","poster10","poster11","poster12","poster13","poster14","poster15","poster16","poster17","poster18","poster19","poster20","poster21","poster22","poster23","poster24","poster25","poster26","poster27","poster28","poster29","poster30","poster31","poster32","poster33","poster34","poster35","poster36"
    ];
    var button = [
        "button-link01","button-link02","button-link03","button-link04","button-link05","button-link06","button-link07","button-link08","button-link09","button-link10","button-link11","button-link12","button-link13","button-link14","button-link15","button-link16","button-link17","button-link18","button-link19","button-link20","button-link21","button-link22","button-link23","button-link24","button-link25","button-link26","button-link27","button-link28","button-link29","button-link30","button-link31","button-link32","button-link33","button-link34","button-link35","button-link36"
    ];
    var title = [
        "title-01","title-02","title-03","title-04","title-05","title-06","title-07","title-08","title-09","title-10","title-11","title-12","title-13","title-14","title-15","title-16","title-17","title-18","title-19","title-20","title-21","title-22","title-23","title-24","title-25","title-26","title-27","title-28","title-29","title-30","title-31","title-32","title-33","title-34","title-35","title-36"
    ];


    for(let i = 0; i < contt; i++) {
        var displayDiv =  " ";
        var setDisplay = document.getElementById(display[i]);
        setDisplay.setAttribute("style", displayDiv);
    }


    for(let i = 0; i < contt; i++) {
        if(bookSituation[0] == true) {
            var bookImg =  "images/Home/home-acclaimed-anne.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "O diário de Anne Frank"

            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[0] = false;
        } else if(bookSituation[1] == true) {
            var bookImg =  "images/Home/home-acclaimed-blood.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Com Sangue"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[1] = false;
        } else if(bookSituation[2] == true) {
            var bookImg =  "images/Home/home-acclaimed-two.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Os dois morrem no final"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[2] = false;
        }   else if(bookSituation[3] == true) {
            var bookImg =  "images/Home/home-acclaimed-collector.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "O Colecionador"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[3] = false;
        }   else if(bookSituation[4] == true) {
            var bookImg =  "images/Home/home-acclaimed-verity.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Verity"

            var bookClass = "line  line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[4] = false;
        }   else if(bookSituation[5] == true) {
            var bookImg =  "images/Home/home-acclaimed-evelyn.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Os sete maridos de Evelyn Hugo"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[5] = false;
        }   else if(bookSituation[6] == true) {
            var bookImg =  "images/Home/home-acclaimed-boys.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Mil beijos de garoto";

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[6] = false;
        }else if(bookSituation[7] == true) {
            var bookImg =  "images/Home/home-brazil-memories.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Memórias póstumas de Brás Cubas"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[7] = false;
        }   else if(bookSituation[8] == true) {
            var bookImg =  "images/Home/home-brazil-sertoes.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Os sertões"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[8] = false;
        }   else if(bookSituation[9] == true) {

            var bookImg =  "images/Home/home-brazil-folhas.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);
            
            document.getElementById(title[i]).innerHTML = "De folhas que resistem"

            var bookClass = "line line-md  line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[9] = false;
        }   else if(bookSituation[10] == true) {
            var bookImg =  "images/Home/home-brazil-muralha.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "A muralha"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[10] = false;
        }   else if(bookSituation[11] == true) {
            var bookImg =  "images/Home/home-brazil-salto.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Um salto para o amor"

            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[11] = false;
        }   else if(bookSituation[12] == true) {
            var bookImg =  "images/Home/home-brazil-encontro.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Enquanto não te encontro"

            var bookClass = "line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[12] = false;
        }   else if(bookSituation[13] == true) {
            var bookImg =  "images/Home/home-popullar-aurora.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Aurora ascende"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[13] = false;
        }   else if(bookSituation[14] == true) {
            var bookImg =  "images/Home/home-popullar-mundo.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Admirável mundo novo"

            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[14] = false;
        }   else if(bookSituation[15] == true) {
            var bookImg =  "images/Home/home-popullar-royal.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Vermelho, branco e sangue azul"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[15] = false;
        }   else if(bookSituation[16] == true) {
            var bookImg =  "images/Home/home-popullar-gelato.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Amor e gelato"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[16] = false;
        }   else if(bookSituation[17] == true) {
            var bookImg =  "images/Home/home-popullar-silenciosa.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "A paciente silenciosa"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[17] = false;
        }   else if(bookSituation[18] == true) {
            var bookImg =  "images/Home/home-adptation-callme.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Me chame pelo seu nome"

            var bookClass = " line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);
            
            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[18] = false;
        } else if(bookSituation[19] == true) {
            var bookImg =  "images/Home/home-adptation-stars.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "A culpa é das estrelas"

            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);
            
            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[19] = false;
        } else if(bookSituation[20] == true) {
            var bookImg =  "images/Home/home-adptation-simon.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Simon vs. A Agenda Homo Sapiens"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[20] = false;
        }   else if(bookSituation[21] == true) {
            var bookImg =  "images/Home/home-adptation-orgulho.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Orgulho e Preconceito"

            var bookClass = "line line-md line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[21] = false;
        }   else if(bookSituation[22] == true) {
            var bookImg =  "images/Home/home-adptation-duna.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Duna"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[22] = false;
        }   else if(bookSituation[23] == true) {
            var bookImg =  "images/Home/home-adptation-bird.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Caixa de Pássaros: Não abra os olhos"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[23] = false;
        }   else if(bookSituation[24] == true) {
            var bookImg =  "images/Home/home-autor-CO1.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Carry on: Sempre em frente"

            var bookClass = "line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[24] = false;
        }   else if(bookSituation[25] == true) {
            var bookImg =  "images/Home/home-autor-CO2.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Carry on: O filho rebelde"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[25] = false;
        }   else if(bookSituation[26] == true) {
            var bookImg =  "images/Home/home-autor-CO3.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Carry on: Venha o que vier"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            var bookClass = "line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            bookSituation[26] = false;
        }   else if(bookSituation[27] == true) {
            var bookImg =  "images/Home/home-popullar-acaba.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "É Assim que Acaba"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[27] = false;
        }   else if(bookSituation[28] == true) {
            var bookImg =  "images/Home/home-popullar-imperfeicoes.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Todas as suas (im)perfeições"

            var bookClass = "line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[28] = false;
        }   else if(bookSituation[29] == true) {
            var bookImg =  "images/Home/home-luvov.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "De Lukov, com amor"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[29] = false;
        }   else if(bookSituation[30] == true) {
            var bookImg =  "images/Home/home-autor-EP.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Eleanor & Park"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[30] = false;
        }   else if(bookSituation[31] == true) {
            var bookImg =  "images/Home/home-autor-FG.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Fan girl"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[31] = false;
        }   else if(bookSituation[32] == true) {
            var bookImg =  "images/Home/home-autor-A.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Anexos"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[32] = false;
        }   else if(bookSituation[33] == true) {
            var bookImg =  "images/Home/home-autor-9.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Novembro, 9"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[33] = false;
        }   else if(bookSituation[34] == true) {
            var bookImg =  "images/Home/home-autor-verao.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Até o verão terminar"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[34] = false;
        }   else if(bookSituation[35] == true) {
            var bookImg =  "images/Home/home-autor-mil.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "As mil partes do meu coração"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[35] = false;
        }   else if(bookSituation[36] == true) {
            var bookImg =  "images/Home/home-saga-H1.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Heartstopper (vol 1)"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[36] = false;
        }   else if(bookSituation[37] == true) {
            var bookImg =  "images/Home/home-saga-H2.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Heartstopper (vol 2)"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[37] = false;
        }   else if(bookSituation[38] == true) {
            var bookImg =  "images/Home/home-saga-H3.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Heartstopper (vol 3)"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[38] = false;
        }   else if(bookSituation[39] == true) {
            var bookImg =  "images/Home/home-saga-H4.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Heartstopper (vol 4)"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[39] = false;
        }   else if(bookSituation[40] == true) {
            var bookImg =  "images/Home/home-saga-HP1.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Harry Potter: A pedra filosofal"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[40] = false;
        }   else if(bookSituation[41] == true) {
            var bookImg =  "images/Home/home-saga-HP2.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Harry Potter: A câmara secreta"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[41] = false;
        }   else if(bookSituation[42] == true) {
            var bookImg =  "images/Home/home-saga-HP3.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Harry Potter: O prisoneiro Azkban"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[42] = false;
        }   else if(bookSituation[43] == true) {
            var bookImg =  "images/Home/home-saga-HP4.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Harry Potter: A cálice de fogo"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[43] = false;
        }   else if(bookSituation[44] == true) {
            var bookImg =  "images/Home/home-saga-HP5.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Harry Potter: A ordem da fênix"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[44] = false;
        }   else if(bookSituation[45] == true) {
            var bookImg =  "images/Home/home-saga-HP6.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Harry Potter: O enigma do príncipe"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[45] = false;
        }   else if(bookSituation[46] == true) {
            var bookImg =  "images/Home/home-saga-HP7.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Harry Potter: As relíquias da morte"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[46] = false;
        }   else if(bookSituation[47] == true) {
            var bookImg =  "images/Home/home-saga-HP8.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Harry Potter: A criança amaldiçoada"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[47] = false;
        }   else if(bookSituation[48] == true) {
            var bookImg =  "images/Home/home-acclaimed-looking.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Quando ninguém está olhando"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[48] = false;
        }   else if(bookSituation[49] == true) {
            var bookImg =  "images/Home/home-acclaimed-hansen.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Querido Evan Hansen"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[49] = false;
        }   else if(bookSituation[50] == true) {
            var bookImg =  "images/Home/home-acclaimed-girl.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Garota exemplar"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[50] = false;
        }   else if(bookSituation[51] == true) {
            var bookImg =  "images/Home/home-acclaimed-lying.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Um de nós está mentindo"
            var bookClass = "line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[51] = false;
        }   else if(bookSituation[52] == true) {
            var bookImg =  "images/Home/home-acclaimed-lake.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "A garota do lago"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[52] = false;
        }   else if(bookSituation[53] == true) {
            var bookImg =  "images/Home/home-brazil-obvio.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "O amor não é óbvio"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[53] = false;
        }   else if(bookSituation[54] == true) {
            var bookImg =  "images/Home/home-brazil-engolir.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Verdades difíceis de engolir"

            var bookClass = " line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[54] = false;
        }   else if(bookSituation[55] == true) {
            var bookImg =  "images/Home/home-brazil-contos.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Os cem melhores contos brasileiros"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[55] = false;
        }   else if(bookSituation[56] == true) {
            var bookImg =  "images/Home/home-brazil-quero.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Não quero ser como você"

            var bookClass = " line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);


            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[56] = false;
        }   else if(bookSituation[57] == true) {
            var bookImg =  "images/Home/home-brazil-ex.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Querido ex"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[57] = false;
        }   else if(bookSituation[58] == true) {
            var bookImg =  "images/Home/home-brazil-finais.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Um milhão de finais felizes"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[58] = false;
        }   else if(bookSituation[59] == true) {
            var bookImg =  "images/Home/home-popullar-giz.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "O homem de giz"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[59] = false;
        }   else if(bookSituation[60] == true) {
            var bookImg =  "images/Home/home-popullar-tortoarado.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Torto arado"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[60] = false;
        }   else if(bookSituation[61] == true) {
            var bookImg =  "images/Home/home-popullar-lobos.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Mulheres que correm com lobos"

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[61] = false;
        }   else if(bookSituation[62] == true) {
            var bookImg =  "images/Home/home-popullar-rio.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Tudo é rio"

            var bookClass = "line  line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[62] = false;
        }   else if(bookSituation[63] == true) {
            var bookImg =  "images/Home/home-popullar-hipotese.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "A hipótese do amor"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[63] = false;
        }   else if(bookSituation[64] == true) {
            var bookImg =  "images/Home/home-adptation-cinco.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "A Cinco passos de você"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[64] = false;
        }   else if(bookSituation[65] == true) {
            var bookImg =  "images/Home/home-adptation-it.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "IT: A coisa"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[65] = false;
        }   else if(bookSituation[66] == true) {
            var bookImg =  "images/Home/home-adptation-50.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Cinquenta tons de cinza"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[66] = false;
        }   else if(bookSituation[67] == true) {
            var bookImg =  "images/Home/home-adptation-1.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Jogador número 1"

            var bookClass = "line  line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[67] = false;
        }   else if(bookSituation[68] == true) {
            var bookImg =  "images/Home/home-adptation-fallen.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "Fallen"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[68] = false;
        }   else if(bookSituation[69] == true) {
            var bookImg =  "images/Home/home-adptation-vinci.jpg";
            var setImg = document.getElementById(poster[i]);
            setImg.setAttribute("src", bookImg);

            document.getElementById(title[i]).innerHTML = "O código da Vinci"

            var bookClass = "line line-sm";
            var setClass = document.getElementById(title[i]);
            setClass.setAttribute("class", bookClass);

            var bookLink = "#";
            var setLink = document.getElementById(button[i]);
            setLink.setAttribute("href", bookLink);

            bookSituation[69] = false;
        }

    }
    
    if(contt == 0) {
        const nextURL = 'erro-page.html';
        window.location.href = nextURL;
        window.location.assign(nextURL);
        window.location.replace(nextURL);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    searchMovie();
  });

